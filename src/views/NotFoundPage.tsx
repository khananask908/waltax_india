'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found - India Filings';
  }, []);

  return (
    <div className="py-32 md:py-40">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-display font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;