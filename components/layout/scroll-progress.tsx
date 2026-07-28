'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('scroll-progress-bar');
      if (!el) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none" aria-hidden="true">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 transition-[width] duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}
