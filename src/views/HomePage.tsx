'use client';

import { useEffect } from 'react';
import OptimizedHeroSection from '../components/home/OptimizedHeroSection';
import OptimizedImageCarousel from '../components/home/OptimizedImageCarousel';
import InteractiveServicesSection from '../components/home/InteractiveServicesSection';
import AnimatedProcessSection from '../components/home/AnimatedProcessSection';
import OptimizedTestimonialsSection from '../components/home/OptimizedTestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'WalTax India - Business & Legal Filing Services';
    
    // Preload critical images for faster loading
    const criticalImages = [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
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

export default HomePage;