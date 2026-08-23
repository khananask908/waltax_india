'use client';

import Link from 'next/link';
import { SignIn } from '@clerk/nextjs';
import Container from '../components/ui/Container';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Container>
        <div className="flex flex-col items-center justify-center pt-24 pb-16 gap-4">
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="/signup"
            fallbackRedirectUrl="/dashboard"
            forceRedirectUrl="/dashboard"
          />

          <Link
            href="/admin-login"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Admin Login
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
