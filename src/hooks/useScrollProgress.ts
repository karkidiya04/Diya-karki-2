import { useState, useEffect, useRef } from 'react';

export function useScrollProgress() {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    direction: 'down' as 'down' | 'up',
    progress: 0,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          );
          const progress = Math.min(Math.max(currentY / maxScroll, 0), 1);
          const direction = currentY >= lastScrollY.current ? 'down' : 'up';

          setScrollData({
            scrollY: currentY,
            direction,
            progress,
          });

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollData;
}
