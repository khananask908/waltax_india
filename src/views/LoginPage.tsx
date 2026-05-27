'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getCurrentUser, loginUser } from '@/lib/auth';

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const redirectTo = searchParams?.get('redirect') || '/dashboard';

  useEffect(() => {
    document.title = 'Login - WalTax India';

    if (getCurrentUser()) {
      router.replace(redirectTo);
    }
  }, [router, redirectTo]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);

    const result = await loginUser(email, password);

    setIsLoading(false);

    if (!result.success) {
      setError(result.error ?? 'Unable to sign in. Please try again.');
      return;
    }

    router.push(redirectTo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Container>
        <div className="pt-24 max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Login to WalTax</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" className="w-full py-3" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              New to WalTax?{' '}
              <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-700">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
