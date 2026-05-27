'use client';

import { useEffect } from 'react';
import Container from '../components/ui/Container';

const MCAPage = () => {
  useEffect(() => {
    document.title = 'MCA Services - India Filings';
  }, []);

  return (
    <div className="pt-32 pb-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
          MCA Services
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Complete MCA compliance and filing services for your company.
        </p>
      </Container>
    </div>
  );
};

export default MCAPage;