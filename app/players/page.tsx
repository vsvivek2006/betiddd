import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { teams } from '@/lib/data/teams';

export const metadata: Metadata = buildMetadata({
  title: 'Cricketers — Player Profiles & Statistics',
  description: 'Browse player profiles and career statistics for cricketers from every Test-playing nation and major franchise league.',
  path: '/players',
  keywords: ['cricket players', 'cricketer profiles', 'cricket stats', 'player statistics'],
});

export default function PlayersPage() {
  const allPlayers = teams
    .flatMap((t) => t.squad.map((p) => ({ ...p, team: t.name, teamSlug: t.slug })))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Players', path: '/players' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Players' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Player Profiles</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Players</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse player profiles and career statistics for cricketers from every Test-playing nation and major franchise league.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allPlayers.map((player, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-lg font-bold text-primary shrink-0">
                    {player.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm truncate">{player.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{player.role}</p>
                    <p className="text-xs text-primary truncate">{player.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
