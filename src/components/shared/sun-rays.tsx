'use client';

import { useState, useEffect } from 'react';

export function SunRays() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rays = [
    { left: '5%', rotation: 15, parallax: -0.1 },
    { left: '15%', rotation: 18, parallax: -0.12 },
    { left: '25%', rotation: 20, parallax: -0.15 },
    { left: '35%', rotation: 22, parallax: -0.18 },
    { left: '45%', rotation: 24, parallax: -0.19 },
    { left: '55%', rotation: 26, parallax: -0.21 },
    { left: '65%', rotation: 28, parallax: -0.23 },
    { left: '75%', rotation: 30, parallax: -0.25 },
    { left: '85%', rotation: 32, parallax: -0.28 },
    { left: '95%', rotation: 35, parallax: -0.3 },
    { left: '10%', rotation: 16, parallax: -0.11 },
    { left: '20%', rotation: 19, parallax: -0.14 },
    { left: '30%', rotation: 21, parallax: -0.16 },
    { left: '40%', rotation: 23, parallax: -0.185 },
    { left: '50%', rotation: 25, parallax: -0.2 },
    { left: '60%', rotation: 27, parallax: -0.22 },
    { left: '70%', rotation: 29, parallax: -0.24 },
    { left: '80%', rotation: 31, parallax: -0.26 },
    { left: '90%', rotation: 33, parallax: -0.29 },
    { left: '100%', rotation: 36, parallax: -0.31 },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 overflow-hidden">
      {rays.map((ray, i) => (
        <div
          key={i}
          className="absolute h-[150vh] w-0.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-50"
          style={{
            top: '-50vh',
            left: ray.left,
            transform: `
              rotate(${ray.rotation}deg) 
              translateX(${scrollPosition * ray.parallax}px)
            `,
            opacity: Math.max(0, 1 - scrollPosition / 1200),
            filter: 'blur(2px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          }}
        />
      ))}
    </div>
  );
}
