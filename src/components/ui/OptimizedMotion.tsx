'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ComponentProps, ReactNode } from 'react';

interface OptimizedMotionProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

// Optimized motion component that only animates when in view
const OptimizedMotion = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  ...motionProps
}: OptimizedMotionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div ref={elementRef}>
      {isIntersecting ? (
        <motion.div {...motionProps}>
          {children}
        </motion.div>
      ) : (
        fallback || <div style={{ minHeight: '100px' }}>{children}</div>
      )}
    </div>
  );
};

export default OptimizedMotion;