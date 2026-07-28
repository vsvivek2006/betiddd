import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Trophy, Calendar, Users } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, webpageSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { teams } from '@/lib/data/teams';
import { series } from '@/lib/data/series';
import { blogPosts } from '@/lib/data/blog-posts';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const team = teams.find((t) => t.slug === params.slug);
  if (!team) return {};
  return buildMetadata({
    title: `${team.name} — Complete Team Guide, Squad & Records`,
    description: team.description,
    path: `/teams/${team.slug}`,
    keywords: [team.name, team.shortName, 'cricket team', 'squad', 'records'],
  });
}

export default function TeamDetailPage({ params }: Params) {
  const team = teams.find((t) => t.slug === params.slug);
  if (!team) notFound();

  const teamSeries = series.filter((s) => s.teams.some((t) => t.toLowerCase().includes(team.name.toLowerCase())));
  const relatedPosts = blogPosts.filter((p) =>
    p.tags.some((t) => t.toLowerCase().includes(team.name.toLowerCase().split(' ')[0])) ||
    p.slug.includes(team.slug),
  ).slice(0, 3);

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'Teams', path: '/teams' },
            { name: team.name, path: `/teams/${team.slug}` },
          ]),
          webpageSchema(`/teams/${team.slug}`, team.name, team.description),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Teams', path: '/teams' }, { name: team.name }]} />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-3xl font-bold text-primary">
              {team.shortName}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline">{team.format}</Badge>
                {team.league && <Badge variant="outline">{team.league}</Badge>}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-heading">{team.name}</h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">{team.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6">
              <Calendar className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-sm font-semibold mb-1">Founded</h3>
              <p className="text-sm text-muted-foreground">{team.founded}</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <MapPin className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-sm font-semibold mb-1">Home Ground</h3>
              <p className="text-sm text-muted-foreground">{team.homeGround}</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Users className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-sm font-semibold mb-1">Squad Size</h3>
              <p className="text-sm text-muted-foreground">{team.squad.length} players</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-heading mb-6">Major Titles</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {team.titles.map((title, i) => (
              <Badge key={i} variant="secondary" className="text-sm py-2 px-4">
                <Trophy className="h-3.5 w-3.5 mr-1.5 text-amber-400" />
                {title}
              </Badge>
            ))}
          </div>

          <h2 className="text-2xl font-bold font-heading mb-6">Current Squad</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {team.squad.map((player, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {player.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{player.name}</h3>
                  <p className="text-xs text-muted-foreground">{player.role}</p>
                </div>
              </div>
            ))}
          </div>

          {teamSeries.length > 0 && (
            <>
              <h2 className="text-2xl font-bold font-heading mb-6">Upcoming & Recent Series</h2>
              <div className="space-y-3 mb-12">
                {teamSeries.map((s) => (
                  <Link key={s.slug} href={`/series/${s.slug}`} className="glass-card glass-card-hover rounded-xl p-4 flex items-center justify-between group">
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{s.name}</h3>
                      <p className="text-xs text-muted-foreground">{new Date(s.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} · {s.host}</p>
                    </div>
                    <Badge variant="outline">{s.format}</Badge>
                  </Link>
                ))}
              </div>
            </>
          )}

          {relatedPosts.length > 0 && (
            <>
              <h2 className="text-2xl font-bold font-heading mb-6">Related Articles</h2>
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
