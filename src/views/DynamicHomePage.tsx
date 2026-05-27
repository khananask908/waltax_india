'use client';

import { useEffect } from 'react';
import OptimizedHeroSection from '../components/home/OptimizedHeroSection';
import OptimizedImageCarousel from '../components/home/OptimizedImageCarousel';
import InteractiveServicesSection from '../components/home/InteractiveServicesSection';
import AnimatedProcessSection from '../components/home/AnimatedProcessSection';
import OptimizedTestimonialsSection from '../components/home/OptimizedTestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const DynamicHomePage = () => {
  useEffect(() => {
    document.title = 'WalTax India - Business & Legal Filing Services';
  }, []);

  return (
    <>
      <OptimizedHeroSection />
      <OptimizedImageCarousel />
      <InteractiveServicesSection />
      <AnimatedProcessSection />
      <OptimizedTestimonialsSection />
      <CtaSection />
    </>
  );
};

export default DynamicHomePage;