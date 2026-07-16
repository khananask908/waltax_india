'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getCurrentUser, loginUser } from '@/lib/auth';

const AdminLoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('anash123@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Admin Login - WalTax India';

    if (getCurrentUser()) {
      router.replace('/admin');
    }
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    const adminEmail = 'anash123@gmail.com';
    const adminPassword = '12345678';
    if (email.toLowerCase() !== adminEmail) {
      setError(`Admin login is only allowed for ${adminEmail}.`);
      return;
    }
    if (password !== adminPassword) {
      setError('Incorrect admin password.');
      return;
    }

    setIsLoading(true);
    const result = await loginUser(email, password, true);
    setIsLoading(false);

    if (result.success !== true || !('user' in result)) {
      setError(result.error ?? 'Unable to sign in. Please try again.');
      return;
    }

    if (result.user.role !== 'admin') {
      setError('This account is not authorized for admin access.');
      return;
    }

    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <Container>
        <div className="pt-24 max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h1 className="text-3xl font-bold mb-2 text-center text-slate-900">Admin Login</h1>
            <p className="text-center text-sm text-slate-600 mb-6">Secure access for administrators only</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="admin-email">
                  Admin Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="admin-password">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter admin password"
                />
              </div>

              <Button type="submit" className="w-full py-3" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Login to Admin Panel'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Return to{' '}
              <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
                user login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminLoginPage;
