'use client';

import { SignUp } from '@clerk/nextjs';
import Container from '../components/ui/Container';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Container>
        <div className="flex justify-center pt-16 pb-24">
          <SignUp
            routing="path"
            path="/signup"
            signInUrl="/login"
            fallbackRedirectUrl="/dashboard"
            forceRedirectUrl="/dashboard"
          />
        </div>
      </Container>
    </div>
  );
}
