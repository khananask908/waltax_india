import { ClerkProvider } from '@clerk/nextjs';
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
        <ClerkProvider
          signInUrl="/login"
          signUpUrl="/signup"
          afterSignInUrl="/dashboard"
          afterSignUpUrl="/dashboard"
        >
          <AppShell>{children}</AppShell>
        </ClerkProvider>
      </body>
    </html>
  );
}