'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
      <Link
        href="/contact"
        aria-label="Contact us"
        className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center shadow-brand-lg hover:scale-105 transition-transform"
      >
        <Mail className="h-5 w-5" />
      </Link>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="w-12 h-12 rounded-full bg-muted/80 backdrop-blur border border-border flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
