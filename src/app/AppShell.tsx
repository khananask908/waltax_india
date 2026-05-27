'use client';

import { ReactNode } from 'react';
import Layout from '@/components/layout/Layout';

export default function AppShell({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}