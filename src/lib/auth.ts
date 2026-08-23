import type { AuthUser } from './auth-types';

interface JwtSession {
  token: string;
  user: AuthUser;
}

export type AuthResponse =
  | { success: true; user: AuthUser }
  | { success: false; error: string };

export const isAuthSuccess = (response: AuthResponse): response is { success: true; user: AuthUser } => {
  return response.success === true;
};

const SESSION_KEY = 'waltax-auth-session';
const AUTH_STATE_CHANGED_EVENT = 'waltax-auth-state-changed';

const isBrowser = () => typeof window !== 'undefined';

const notifyAuthStateChange = () => {
  if (!isBrowser()) {
    return;
  }

  window.dispatchEvent(new Event(AUTH_STATE_CHANGED_EVENT));
};

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

export const getCurrentUser = (): AuthUser | null => {
  const session = readStorage<JwtSession>(SESSION_KEY);
  return session?.user ?? null;
};

export const getAuthToken = (): string | null => {
  const session = readStorage<JwtSession>(SESSION_KEY);
  return session?.token ?? null;
};

export const setCurrentUser = (user: AuthUser, token: string) => {
  writeStorage(SESSION_KEY, { token, user });
  notifyAuthStateChange();
};

export const logoutUser = () => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
  notifyAuthStateChange();
};

export const isAuthenticated = () => !!getCurrentUser();

export const isAdmin = () => getCurrentUser()?.role === 'admin';

const sendAuthRequest = async (endpoint: string, body: Record<string, unknown>): Promise<AuthResponse> => {
  const response = await fetch(`/api/auth/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.error ?? 'Unable to authenticate.' };
  }

  if (!data.user || !data.token) {
    return { success: false, error: 'Invalid authentication response.' };
  }

  setCurrentUser(data.user, data.token);
  return { success: true, user: data.user as AuthUser };
};

export const loginUser = async (email: string, password: string, isAdminAttempt = false): Promise<AuthResponse> => {
  return sendAuthRequest('login', { email, password, isAdminAttempt });
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
  company: string,
  phone: string
) => {
  return sendAuthRequest('signup', { name, email, password, company, phone });
};

