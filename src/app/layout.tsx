import type { Metadata } from 'next';
import './globals.css';
import AppShell from './AppShell';

export const metadata: Metadata = {
  title: 'WalTax India',
  description: 'Business and legal filing services in India'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}