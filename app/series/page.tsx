import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, Radio, CheckCircle2 } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { series } from '@/lib/data/series';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket Series — International & Franchise Tournaments',
  description: 'Browse all cricket series and tournaments — international bilateral series, ICC events, IPL, BBL, PSL, The Ashes, and more.',
  path: '/series',
  keywords: ['cricket series', 'cricket tournaments', 'ipl', 'bbl', 'psl', 'the ashes', 'icc events'],
});

export default function SeriesPage() {
  const live = series.filter((s) => s.status === 'live');
  const upcoming = series.filter((s) => s.status === 'upcoming');
  const completed = series.filter((s) => s.status === 'completed');

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Series', path: '/series' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Series' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">All Series</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Series & Tournaments</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse every cricket series and tournament we cover — international bilateral series, ICC events, and franchise leagues.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-12">
          {live.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Radio className="h-5 w-5 text-red-400 animate-pulse" />
                <h2 className="text-2xl font-bold font-heading">Live Now</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {live.map((s) => <SeriesCard key={s.slug} series={s} />)}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">Upcoming</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((s) => <SeriesCard key={s.slug} series={s} />)}
            </div>
          </div>

          {completed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <h2 className="text-2xl font-bold font-heading">Completed</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completed.map((s) => <SeriesCard key={s.slug} series={s} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function SeriesCard({ series }: { series: typeof import('@/lib/data/series').series[number] }) {
  return (
    <Link href={`/series/${series.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 group">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline">{series.format}</Badge>
        {series.status === 'live' && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            LIVE
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold font-heading mb-2 group-hover:text-primary transition-colors">{series.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{series.description}</p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        {new Date(series.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} — {new Date(series.endDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>
      <div className="text-xs text-muted-foreground mt-1">Host: {series.host}</div>
    </Link>
  );
}
