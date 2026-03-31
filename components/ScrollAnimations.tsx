'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for .animate elements
    const animItems = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animItems.forEach((el) => observer.observe(el));

    // Trigger hero animations immediately
    const heroTimer = setTimeout(() => {
      document.querySelectorAll('.hero .animate').forEach((el) => el.classList.add('visible'));
    }, 100);

    // Nav scroll shadow
    const handleScroll = () => {
      const nav = document.querySelector('.nav') as HTMLElement | null;
      if (nav) {
        if (window.scrollY > 20) {
          nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
          nav.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(heroTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
