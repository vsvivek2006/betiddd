import { siteConfig } from '@/lib/site-config';
import { blogPosts } from '@/lib/data/blog-posts';
import { providers } from '@/lib/data/providers';
import { teams } from '@/lib/data/teams';
import { series } from '@/lib/data/series';
import { blogCategories } from '@/lib/data/blog-categories';

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const staticPages = [
    { url: '', priority: 1.0, changeFreq: 'always' as const, lastmod: now },
    { url: '/live-scores', priority: 0.9, changeFreq: 'always' as const, lastmod: now },
    { url: '/fixtures', priority: 0.9, changeFreq: 'hourly' as const, lastmod: now },
    { url: '/series', priority: 0.9, changeFreq: 'hourly' as const, lastmod: now },
    { url: '/teams', priority: 0.8, changeFreq: 'daily' as const, lastmod: now },
    { url: '/players', priority: 0.8, changeFreq: 'daily' as const, lastmod: now },
    { url: '/rankings', priority: 0.8, changeFreq: 'daily' as const, lastmod: now },
    { url: '/news', priority: 0.9, changeFreq: 'hourly' as const, lastmod: now },
    { url: '/blog', priority: 0.9, changeFreq: 'hourly' as const, lastmod: now },
    { url: '/about', priority: 0.5, changeFreq: 'monthly' as const, lastmod: now },
    { url: '/contact', priority: 0.5, changeFreq: 'monthly' as const, lastmod: now },
    { url: '/editorial-policy', priority: 0.3, changeFreq: 'yearly' as const, lastmod: now },
    { url: '/fact-checking-policy', priority: 0.3, changeFreq: 'yearly' as const, lastmod: now },
    { url: '/disclaimer', priority: 0.3, changeFreq: 'yearly' as const, lastmod: now },
    { url: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' as const, lastmod: now },
    { url: '/terms', priority: 0.3, changeFreq: 'yearly' as const, lastmod: now },
  ];

  const blogPages = blogPosts.map((p) => ({
    url: `/blog/${p.slug}`,
    priority: 0.7,
    changeFreq: 'weekly' as const,
    lastmod: (p.updatedAt || p.publishedAt) + 'T00:00:00.000Z',
  }));

  const categoryPages = blogCategories.map((c) => ({
    url: `/blog/category/${c.slug}`,
    priority: 0.6,
    changeFreq: 'weekly' as const,
    lastmod: now,
  }));

  const providerPages = providers.map((p) => ({
    url: `/providers/${p.slug}`,
    priority: 0.7,
    changeFreq: 'weekly' as const,
    lastmod: now,
  }));

  const teamPages = teams.map((t) => ({
    url: `/teams/${t.slug}`,
    priority: 0.6,
    changeFreq: 'daily' as const,
    lastmod: now,
  }));

  const seriesPages = series.map((s) => ({
    url: `/series/${s.slug}`,
    priority: 0.7,
    changeFreq: 'hourly' as const,
    lastmod: now,
  }));

  const all = [...staticPages, ...blogPages, ...categoryPages, ...providerPages, ...teamPages, ...seriesPages];

  return all.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: p.lastmod,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}
