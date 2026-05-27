'use client';

import { useEffect } from 'react';
import Container from '../components/ui/Container';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Our Services - India Filings';
  }, []);

  return (
    <div className="pt-32 pb-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          This is the Services page. Content for this page will be implemented in future iterations.
        </p>
      </Container>
    </div>
  );
};

export default ServicesPage;