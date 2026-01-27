import React from 'react';

/**
 * Converts pixel values from design to rem based on 1920px width for desktop
 * The actual scaling is handled by index.html script.
 */
export const toRem = (px: number): string => {
  return `${px / 16}rem`;
};

// Fix: Import React to resolve UMD global reference errors in the usePlatform hook
export const usePlatform = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? 'mobile' : 'desktop';
};