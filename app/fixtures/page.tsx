import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { series } from '@/lib/data/series';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket Fixtures — Upcoming Match Schedule',
  description: 'Complete cricket fixtures and match schedule for all upcoming international and franchise cricket series, with dates, venues, and match details.',
  path: '/fixtures',
  keywords: ['cricket fixtures', 'cricket schedule', 'upcoming cricket matches', 'cricket match dates'],
});

export default function FixturesPage() {
  const allMatches = series
    .flatMap((s) =>
      s.matches.map((m) => ({
        ...m,
        seriesName: s.shortName,
        seriesSlug: s.slug,
        format: s.format,
      })),
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Fixtures', path: '/fixtures' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Fixtures' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Match Schedule</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Fixtures</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete match schedule for all upcoming international and franchise cricket series, with dates, venues, and match details.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-4">
            {allMatches.map((match, i) => (
              <Link
                key={i}
                href={`/series/${match.seriesSlug}`}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-wrap items-center gap-4 group"
              >
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/10 to-amber-500/10 shrink-0">
                  <span className="text-xs text-muted-foreground">{new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  <span className="text-xl font-bold text-primary">{new Date(match.date).getDate()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">{match.format}</Badge>
                    <span className="text-xs text-muted-foreground">{match.seriesName}</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{match.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{match.teams.join(' vs ')}</p>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {match.venue}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {match.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
