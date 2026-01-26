
import React, { useEffect, useRef, useState } from 'react';

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealItem: React.FC<RevealItemProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-item ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
