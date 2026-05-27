'use client';

import { useEffect } from 'react';
import Container from '../components/ui/Container';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - India Filings';
  }, []);

  return (
    <div className="pt-32 pb-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          This is the About page. Content for this page will be implemented in future iterations.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;