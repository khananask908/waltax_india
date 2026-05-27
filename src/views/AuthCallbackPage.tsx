'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Authentication has been removed. Redirecting...</p>
      </div>
    </div>
  );
};

export default AuthCallbackPage;