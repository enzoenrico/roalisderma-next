'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  className?: string;
}

export function ScrollAnimateWrapper({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
}: ScrollAnimateWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, margin: '0px 0px -100px 0px' });

  const animationMap: Record<string, string> = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={`${isInView ? animationMap[animation] : 'opacity-0'} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
}
