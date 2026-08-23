import { Suspense } from 'react';
import LoginPageView from '@/views/LoginPage';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginPageView />
    </Suspense>
  );
}