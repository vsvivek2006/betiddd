import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { teams } from '@/lib/data/teams';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket Teams — International & Franchise Team Guides',
  description: 'Complete guides to every major international and franchise cricket team, with squads, records, home grounds, and titles.',
  path: '/teams',
  keywords: ['cricket teams', 'india cricket team', 'australia cricket', 'ipl teams', 'franchise cricket'],
});

export default function TeamsPage() {
  const international = teams.filter((t) => t.format === 'Test');
  const franchise = teams.filter((t) => t.format === 'Franchise');

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Teams', path: '/teams' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Teams' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">All Teams</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Teams</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete guides to every major international and franchise cricket team, with squads, records, home grounds, and titles.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-12">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">International Teams</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {international.map((team) => (
                <Link key={team.slug} href={`/teams/${team.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-3">
                    {team.shortName}
                  </div>
                  <h3 className="font-semibold font-heading group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{team.country}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">Franchise Teams</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {franchise.map((team) => (
                <Link key={team.slug} href={`/teams/${team.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-3">
                    {team.shortName}
                  </div>
                  <h3 className="font-semibold font-heading group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{team.league}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
