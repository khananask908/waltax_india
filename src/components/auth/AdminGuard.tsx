'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();

    if (!user || user.role !== 'admin') {
      router.replace('/admin-login');
    }
  }, [router]);

  return <>{children}</>;
};

export default AdminGuard;
