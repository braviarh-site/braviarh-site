'use client';

import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
}: AnimateOnScrollProps) {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && entry?.target) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
    }
  }, [inView, entry, delay]);

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  );
}