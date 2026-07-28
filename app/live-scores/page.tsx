import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Radio, Clock, MapPin } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import CtaSection from '@/components/seo/cta-section';
import { liveMatches } from '@/lib/data/news';

export const metadata: Metadata = buildMetadata({
  title: 'Live Cricket Scores — Ball-by-Ball Updates',
  description: 'Live cricket scores with ball-by-ball commentary for all international and franchise matches currently in progress. Updated in real time.',
  path: '/live-scores',
  keywords: ['live cricket scores', 'live cricket', 'ball by ball cricket', 'cricket live update'],
});

export default function LiveScoresPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Live Scores', path: '/live-scores' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Live Scores' }]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <Badge variant="outline" className="border-red-500/30 text-red-400">LIVE NOW</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Live Cricket <span className="text-gradient">Scores</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ball-by-ball live scores for every international and franchise match currently in progress. Updated in real time.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {liveMatches.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <Radio className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold font-heading mb-2">No Live Matches Right Now</h2>
              <p className="text-muted-foreground">Check our fixtures page for upcoming matches.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {liveMatches.map((match) => (
                <div key={match.id} id={match.id} className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{match.format}</Badge>
                      <span className="text-sm text-muted-foreground">{match.series}</span>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-red-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                      LIVE
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <div className="font-semibold text-lg">{match.teamA}</div>
                          <div className="text-xs text-muted-foreground mt-1">{match.matchNumber}</div>
                        </div>
                        <div className="font-mono text-emerald-400 font-semibold">{match.teamAScore}</div>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div className="font-semibold text-lg">{match.teamB}</div>
                        <div className="font-mono text-muted-foreground">{match.teamBScore}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{match.status}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{match.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        title="Never Miss a Match"
        description="Browse upcoming fixtures across all formats and series so you know exactly when to tune in."
        primaryLabel="View Fixtures"
        primaryHref="/fixtures"
        secondaryLabel="Browse Series"
        secondaryHref="/series"
      />
    </main>
  );
}
