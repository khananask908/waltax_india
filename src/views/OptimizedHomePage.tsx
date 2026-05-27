'use client';

import React, { useEffect, Suspense, lazy } from 'react';
import { usePreloadResources, criticalResources } from '../hooks/usePreloadResources';

// Lazy load non-critical components
const OptimizedHeroSection = lazy(() => import('../components/home/OptimizedHeroSection'));
const OptimizedImageCarousel = lazy(() => import('../components/home/OptimizedImageCarousel'));
const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const ProcessSection = lazy(() => import('../components/home/ProcessSection'));
const OptimizedTestimonialsSection = lazy(() => import('../components/home/OptimizedTestimonialsSection'));
const CtaSection = lazy(() => import('../components/home/CtaSection'));

// Loading fallback component
const SectionSkeleton = ({ height = 'h-96' }: { height?: string }) => (
  <div className={`${height} bg-gray-100 animate-pulse rounded-lg mb-8`}>
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

const OptimizedHomePage = () => {
  // Preload critical resources
  usePreloadResources(criticalResources);

  useEffect(() => {
    document.title = 'WalTax India - Business & Legal Filing Services';
    
    // Preload critical images
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
      {/* Hero section loads immediately */}
      <Suspense fallback={<SectionSkeleton height="h-screen" />}>
        <OptimizedHeroSection />
      </Suspense>
      
      {/* Other sections load progressively */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <OptimizedImageCarousel />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <OptimizedTestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CtaSection />
      </Suspense>
    </>
  );
};

export default OptimizedHomePage;