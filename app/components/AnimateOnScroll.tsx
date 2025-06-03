// proativerh-site/app/components/AnimateOnScroll.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';

type Animation = 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(entry.target); // Opcional: para animar apenas uma vez
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    let baseClasses = `transition-all duration-700 ease-out transform`;
    let animationClasses = '';

    if (isVisible) {
      animationClasses += ' opacity-100 translate-y-0 translate-x-0';
    } else {
      animationClasses += ' opacity-0';
      if (animation === 'fade-in-up') {
        animationClasses += ' translate-y-8';
      } else if (animation === 'fade-in-left') {
        animationClasses += ' -translate-x-8';
      } else if (animation === 'fade-in-right') {
        animationClasses += ' translate-x-8';
      }
    }

    return `${baseClasses} ${animationClasses}`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;