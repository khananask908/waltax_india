import crypto from 'crypto';
import { currentUser } from '@clerk/nextjs/server';
import { getMongoDb } from './mongodb';
import type { AuthUser, StoredUser } from './auth-types';

const JWT_SECRET = process.env.JWT_SECRET || 'waltax-jwt-secret';
const USERS_COLLECTION = 'users';
const DEFAULT_ADMIN_EMAIL = 'anash123@gmail.com';
const DEFAULT_ADMIN_PASSWORD = '12345678';
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL).trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

const base64UrlEncode = (input: string | Buffer) =>
  Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const createJwtToken = (payload: Record<string, unknown>) => {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${body}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return `${header}.${body}.${signature}`;
};

export const getUsersCollection = async () => {
  const db = await getMongoDb();
  const collection = db.collection<StoredUser>(USERS_COLLECTION);

  await collection.createIndex({ email: 1 }, { unique: true });

  return collection;
};

const normalizeEmail = (email: string) => email.trim().toLowerCase();

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const collection = await getUsersCollection();
  return collection.findOne({ email: normalizeEmail(email) });
}

export function getAuthUserFromStored(user: StoredUser): AuthUser {
  const { passwordHash, salt, ...authUser } = user;
  const normalizedEmail = normalizeEmail(authUser.email);

  return {
    ...authUser,
    role: normalizedEmail === ADMIN_EMAIL ? 'admin' : 'user',
  };
}

export function verifyPassword(password: string, salt: string, passwordHash: string) {
  const hashed = crypto.createHmac('sha256', salt).update(password).digest('hex');
  return hashed === passwordHash;
}

export function decodeJwtToken(token: string) {
  const parts = token.split('.');
  if (parts.length !== 3) {
    return null;
  }

  const [header, payload, signature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(payload, 'base64').toString('utf-8')) as {
      sub?: string;
      email?: string;
      iat?: number;
    };
  } catch {
    return null;
  }
}

export async function getUserFromToken(token: string): Promise<AuthUser | null> {
  const payload = decodeJwtToken(token);
  if (!payload?.email) {
    return null;
  }

  const normalizedEmail = normalizeEmail(payload.email);

  if (normalizedEmail === ADMIN_EMAIL) {
    return {
      id: 'admin-user',
      name: 'Admin',
      email: ADMIN_EMAIL,
      company: 'WalTax Admin',
      phone: '0000000000',
      createdAt: new Date().toISOString(),
      role: 'admin',
    };
  }

  const user = await findUserByEmail(payload.email);
  return user ? getAuthUserFromStored(user) : null;
}

export async function getCurrentUserFromRequest(request: Request): Promise<AuthUser | null> {
  const authorization = request.headers.get('authorization');

  if (authorization?.startsWith('Bearer ')) {
    const token = authorization.slice('Bearer '.length).trim();
    if (token) {
      return getUserFromToken(token);
    }
  }

  const clerkUser = await currentUser();
  const email = clerkUser?.primaryEmailAddress?.emailAddress;
  if (!clerkUser || !email) {
    return null;
  }

  return {
    id: clerkUser.id,
    name: [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || email.split('@')[0],
    email,
    company: '',
    phone: '',
    createdAt: new Date(clerkUser.createdAt).toISOString(),
    role: 'user',
  };
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
  company: string;
  phone: string;
}): Promise<{ user: AuthUser; token: string }> {
  const collection = await getUsersCollection();
  const email = normalizeEmail(input.email);
  const existing = await collection.findOne({ email });

  if (existing) {
    throw new Error('An account already exists with this email address.');
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = crypto.createHmac('sha256', salt).update(input.password).digest('hex');
  const normalizedEmail = email;
  const isAdminEmail = normalizedEmail === ADMIN_EMAIL;

  if (isAdminEmail && input.password !== ADMIN_PASSWORD) {
    throw new Error('Admin signup requires the correct admin password.');
  }

  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email,
    company: input.company.trim(),
    phone: input.phone.trim(),
    createdAt: new Date().toISOString(),
    salt,
    passwordHash,
    role: isAdminEmail ? 'admin' : 'user',
  };

  await collection.insertOne(newUser);

  const user = getAuthUserFromStored(newUser);
  const token = createJwtToken({ sub: user.id, email: user.email, iat: Math.floor(Date.now() / 1000) });

  return { user, token };
}

export async function authenticateUser(
  email: string,
  password: string,
  isAdminAttempt = false
): Promise<{ user: AuthUser; token: string } | null> {
  const normalizedEmail = normalizeEmail(email);
  const isAdminCredentials = normalizedEmail === ADMIN_EMAIL && password === ADMIN_PASSWORD;

  if (isAdminCredentials && !isAdminAttempt) {
    throw new Error('Admin credentials can only be used on the admin login page.');
  }

  if (isAdminCredentials) {
    const adminUser: AuthUser = {
      id: 'admin-user',
      name: 'Admin',
      email: ADMIN_EMAIL,
      company: 'WalTax Admin',
      phone: '0000000000',
      createdAt: new Date().toISOString(),
      role: 'admin',
    };
    const token = createJwtToken({ sub: adminUser.id, email: adminUser.email, iat: Math.floor(Date.now() / 1000) });

    return { user: adminUser, token };
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return null;
  }

  if (!verifyPassword(password, user.salt, user.passwordHash)) {
    return null;
  }

  const authUser = getAuthUserFromStored(user);
  const token = createJwtToken({ sub: authUser.id, email: authUser.email, iat: Math.floor(Date.now() / 1000) });

  return { user: authUser, token };
}
