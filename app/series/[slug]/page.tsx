import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Radio, Trophy, Users } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webpageSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { series } from '@/lib/data/series';
import { blogPosts } from '@/lib/data/blog-posts';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = series.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.name} — Fixtures, Live Scores & Match Details`,
    description: s.description,
    path: `/series/${s.slug}`,
    keywords: [s.shortName, s.format, 'cricket series', 'fixtures', 'live scores'],
  });
}

export default function SeriesDetailPage({ params }: Params) {
  const s = series.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const relatedPosts = blogPosts.filter((p) =>
    p.tags.some((t) => s.teams.some((team) => t.toLowerCase().includes(team.toLowerCase().split(' ')[0]))) ||
    p.tags.includes(s.format.toLowerCase()) ||
    p.tags.includes('cricket'),
  ).slice(0, 3);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'Series', path: '/series' },
            { name: s.shortName, path: `/series/${s.slug}` },
          ]),
          webpageSchema(`/series/${s.slug}`, s.name, s.description),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Series', path: '/series' }, { name: s.shortName }]} />
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{s.format}</Badge>
            {s.status === 'live' && (
              <Badge variant="outline" className="border-red-500/30 text-red-400">
                <Radio className="h-3 w-3 mr-1 animate-pulse" /> LIVE
              </Badge>
            )}
            {s.status === 'completed' && <Badge variant="outline" className="text-emerald-400">Completed</Badge>}
            {s.status === 'upcoming' && <Badge variant="outline" className="text-amber-400">Upcoming</Badge>}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">{s.name}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">{s.description}</p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {new Date(s.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} — {new Date(s.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {s.host}</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {s.teams.length} teams</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl font-bold font-heading mb-6">Matches</h2>
          <div className="space-y-4">
            {s.matches.map((match, i) => (
              <div key={i} className="glass-card rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{match.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{match.teams.join(' vs ')}</p>
                    <p className="text-xs text-muted-foreground mt-1">{match.venue} · {new Date(match.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  </div>
                  <Badge variant={match.status.includes('won') || match.status === 'Draw' ? 'secondary' : match.status === 'Upcoming' ? 'outline' : 'default'}>
                    {match.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-6">Participating Teams</h2>
          <div className="flex flex-wrap gap-3">
            {s.teams.map((team) => (
              <Badge key={team} variant="outline" className="text-sm py-2 px-4">{team}</Badge>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <>
              <h2 className="text-2xl font-bold font-heading mt-12 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card glass-card-hover rounded-2xl p-5 group">
                    <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
                    <h3 className="font-semibold font-heading group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
