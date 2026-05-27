export interface AuthUser {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  createdAt: string;
}

interface StoredUser extends AuthUser {
  passwordHash: string;
  salt: string;
}

interface JwtSession {
  token: string;
  user: AuthUser;
}

const SESSION_KEY = 'waltax-auth-session';
const USERS_KEY = 'waltax-users';
const JWT_SECRET = 'waltax-jwt-demo-secret';
const TOKEN_TTL_SECONDS = 60 * 60 * 24;

const isBrowser = () => typeof window !== 'undefined';

const readStorage = <T,>(key: string): T | null => {
  if (!isBrowser()) {
    return null;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as T;
  } catch {
    return null;
  }
};

const writeStorage = (key: string, value: unknown) => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
};

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const createSalt = () => crypto.randomUUID();

const hashPassword = async (password: string, salt: string) => {
  const encodedPassword = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', encodedPassword);
  return base64UrlEncode(digest);
};

const base64UrlEncode = (buffer: ArrayBuffer | string) => {
  const raw = typeof buffer === 'string' ? buffer : String.fromCharCode(...new Uint8Array(buffer));
  return btoa(raw).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const encodeUtf8 = (value: string) => new TextEncoder().encode(value);

const createHmac = async (message: string, secret: string) => {
  const key = await crypto.subtle.importKey(
    'raw',
    encodeUtf8(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encodeUtf8(message));
  return base64UrlEncode(signature);
};

const createJwtToken = async (payload: Record<string, unknown>) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await createHmac(`${encodedHeader}.${encodedPayload}`, JWT_SECRET);
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

export const getCurrentUser = (): AuthUser | null => {
  const session = readStorage<JwtSession>(SESSION_KEY);
  return session?.user ?? null;
};

export const getAuthToken = (): string | null => {
  const session = readStorage<JwtSession>(SESSION_KEY);
  return session?.token ?? null;
};

export const setCurrentUser = async (user: AuthUser) => {
  const payload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    company: user.company,
    phone: user.phone,
    createdAt: user.createdAt,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
  };

  const token = await createJwtToken(payload);
  writeStorage(SESSION_KEY, { token, user });
};

export const logoutUser = () => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
};

export const isAuthenticated = () => !!getCurrentUser();

export const getRegisteredUsers = (): StoredUser[] => {
  const users = readStorage<StoredUser[]>(USERS_KEY);
  return users ?? [];
};

export const saveRegisteredUsers = (users: StoredUser[]) => {
  writeStorage(USERS_KEY, users);
};

export const loginUser = async (email: string, password: string) => {
  const normalizedEmail = normalizeEmail(email);
  const users = getRegisteredUsers();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (!existingUser) {
    return { success: false, error: 'No account found for this email address.' };
  }

  const expectedHash = await hashPassword(password, existingUser.salt);

  if (expectedHash !== existingUser.passwordHash) {
    return { success: false, error: 'Incorrect email or password.' };
  }

  const { passwordHash: _passwordHash, salt: _salt, ...safeUser } = existingUser;

  await setCurrentUser(safeUser);

  return { success: true, user: safeUser };
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
  company: string,
  phone: string
) => {
  const normalizedEmail = normalizeEmail(email);
  const users = getRegisteredUsers();

  if (users.some((user) => user.email === normalizedEmail)) {
    return { success: false, error: 'An account with this email already exists.' };
  }

  const salt = createSalt();
  const passwordHash = await hashPassword(password, salt);

  const newUser: StoredUser = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    company: company.trim(),
    phone: phone.trim(),
    createdAt: new Date().toISOString(),
    passwordHash,
    salt,
  };

  saveRegisteredUsers([...users, newUser]);

  const { passwordHash: _passwordHash, salt: _salt, ...safeUser } = newUser;

  await setCurrentUser(safeUser);

  return { success: true, user: safeUser };
};
