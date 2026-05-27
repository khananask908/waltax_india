'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getCurrentUser, signupUser } from '@/lib/auth';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Signup - WalTax India';

    if (getCurrentUser()) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!name.trim() || !company.trim() || !phone.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    const result = await signupUser(name, email, password, company, phone);

    setIsLoading(false);

    if (!result.success) {
      setError(result.error ?? 'Unable to create an account. Please try again.');
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        <div className="pt-16 pb-24 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Create your WalTax account</h1>
            <form onSubmit={handleSubmit} className="grid gap-5">
              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Company or organization"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Mobile or WhatsApp number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Repeat your password"
                />
              </div>

              <Button type="submit" className="w-full py-3" disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Sign up'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
