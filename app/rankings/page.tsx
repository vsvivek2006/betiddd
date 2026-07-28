import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'ICC Cricket Rankings — Test, ODI & T20I',
  description: 'Official ICC cricket rankings for Test, ODI, and T20I cricket — team rankings, batter rankings, and bowler rankings updated weekly.',
  path: '/rankings',
  keywords: ['icc rankings', 'cricket rankings', 'test rankings', 'odi rankings', 't20i rankings'],
});

const testRankings = [
  { rank: 1, team: 'Australia', rating: 124 },
  { rank: 2, team: 'India', rating: 120 },
  { rank: 3, team: 'England', rating: 105 },
  { rank: 4, team: 'South Africa', rating: 103 },
  { rank: 5, team: 'New Zealand', rating: 98 },
  { rank: 6, team: 'Pakistan', rating: 87 },
  { rank: 7, team: 'Sri Lanka', rating: 82 },
  { rank: 8, team: 'West Indies', rating: 78 },
];

const odiRankings = [
  { rank: 1, team: 'India', rating: 122 },
  { rank: 2, team: 'Australia', rating: 118 },
  { rank: 3, team: 'South Africa', rating: 110 },
  { rank: 4, team: 'Pakistan', rating: 106 },
  { rank: 5, team: 'New Zealand', rating: 101 },
  { rank: 6, team: 'England', rating: 99 },
  { rank: 7, team: 'Sri Lanka', rating: 88 },
  { rank: 8, team: 'Bangladesh', rating: 82 },
];

const t20iRankings = [
  { rank: 1, team: 'India', rating: 268 },
  { rank: 2, team: 'Australia', rating: 257 },
  { rank: 3, team: 'England', rating: 251 },
  { rank: 4, team: 'West Indies', rating: 248 },
  { rank: 5, team: 'South Africa', rating: 245 },
  { rank: 6, team: 'New Zealand', rating: 240 },
  { rank: 7, team: 'Pakistan', rating: 232 },
  { rank: 8, team: 'Sri Lanka', rating: 225 },
];

export default function RankingsPage() {
  const tables = [
    { title: 'Test Team Rankings', data: testRankings, format: 'Test' },
    { title: 'ODI Team Rankings', data: odiRankings, format: 'ODI' },
    { title: 'T20I Team Rankings', data: t20iRankings, format: 'T20I' },
  ];

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={combineSchemas(breadcrumbSchema([{ name: 'Rankings', path: '/rankings' }]))} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Rankings' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">ICC Rankings</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket <span className="text-gradient">Rankings</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Official ICC team rankings for Test, ODI, and T20I cricket, updated weekly. Rankings are based on points accumulated over the previous 3–4 years of bilateral matches.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6">
            {tables.map((table) => (
              <div key={table.title} className="glass-card rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-border/50 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold font-heading">{table.title}</h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 text-xs text-muted-foreground">
                      <th className="text-left p-3 font-medium">#</th>
                      <th className="text-left p-3 font-medium">Team</th>
                      <th className="text-right p-3 font-medium">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.map((row) => (
                      <tr key={row.rank} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                        <td className="p-3 text-muted-foreground">{row.rank}</td>
                        <td className="p-3 font-medium">{row.team}</td>
                        <td className="p-3 text-right font-mono text-primary">{row.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            Rankings are illustrative and updated periodically. For the official live ICC rankings, visit <a href="https://www.icc-cricket.com/rankings" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">icc-cricket.com/rankings</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
