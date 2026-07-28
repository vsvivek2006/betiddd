'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';
import { blogCategories } from '@/lib/data/blog-categories';
import { series } from '@/lib/data/series';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const liveSeries = series.filter((s) => s.status === 'live');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-background/60 backdrop-blur-md',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="CricketScoreHQ home">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 flex items-center justify-center shadow-brand transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-950" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" fill="currentColor" />
                <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hidden sm:block leading-none">
              <span className="text-lg font-bold font-heading text-foreground tracking-tight">
                Cricket<span className="text-gradient">Score</span> HQ
              </span>
              <span className="block text-[10px] text-muted-foreground mt-0.5 tracking-wider uppercase">
                Scores · Stats · News
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) =>
              item.name === 'Series' ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/80 hover:text-primary hover:bg-muted/50',
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {series.slice(0, 6).map((s) => (
                      <DropdownMenuItem key={s.slug} asChild>
                        <Link href={`/series/${s.slug}`} className="cursor-pointer flex items-center justify-between">
                          <span className="truncate">{s.shortName}</span>
                          {s.status === 'live' && (
                            <span className="flex items-center gap-1 text-xs text-red-400">
                              <Radio className="h-3 w-3 animate-pulse" /> LIVE
                            </span>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.name === 'Blog' ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/80 hover:text-primary hover:bg-muted/50',
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/blog" className="cursor-pointer font-medium">All Articles</Link>
                    </DropdownMenuItem>
                    {blogCategories.slice(0, 6).map((c) => (
                      <DropdownMenuItem key={c.slug} asChild>
                        <Link href={`/blog/category/${c.slug}`} className="cursor-pointer">{c.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:text-primary hover:bg-muted/50',
                  )}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/live-scores"
              className={cn(
                'hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors',
                isActive('/live-scores')
                  ? 'border-red-500/50 text-red-400 bg-red-500/10'
                  : 'border-red-500/30 text-red-400 hover:bg-red-500/10',
              )}
              aria-label="Live scores"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              LIVE
            </Link>

            <Button size="sm" className="btn-gradient rounded-full hidden md:flex" asChild>
              <Link href="/contact">Contact</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Live ticker */}
      {liveSeries.length > 0 && (
        <div className="border-t border-border/40 bg-red-950/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-red-400 font-semibold whitespace-nowrap">
              <Radio className="h-3 w-3 animate-pulse" /> LIVE NOW
            </span>
            <span className="text-muted-foreground truncate">
              {liveSeries.map((s) => s.shortName).join(' · ')}
            </span>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-muted/50',
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              <p className="px-4 text-xs text-muted-foreground uppercase tracking-wider mb-2">Categories</p>
              {blogCategories.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
