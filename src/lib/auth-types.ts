export interface AuthUser {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  createdAt: string;
  role: 'user' | 'admin';
}

export interface StoredUser extends AuthUser {
  passwordHash: string;
  salt: string;
}
