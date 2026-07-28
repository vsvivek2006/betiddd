import Link from 'next/link';
import { Mail, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { blogCategories } from '@/lib/data/blog-categories';
import { series } from '@/lib/data/series';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50 mt-20">
      <div className="absolute inset-0 pitch-pattern opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="CricketScoreHQ home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-amber-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-slate-950" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z" fill="currentColor" />
                  <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg font-bold font-heading">
                Cricket<span className="text-gradient">Score</span> HQ
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Coverage</h2>
            <ul className="space-y-2.5">
              {siteConfig.nav.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Categories</h2>
            <ul className="space-y-2.5">
              {blogCategories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/blog/category/${c.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Legal</h2>
            <ul className="space-y-2.5">
              {siteConfig.legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved. CricketScoreHQ is an independent cricket information website and is not affiliated with the ICC, BCCI, or any cricket board.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
