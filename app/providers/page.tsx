import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, combineSchemas, collectionPageSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { providers } from '@/lib/data/providers';

export const metadata: Metadata = buildMetadata({
  title: 'Cricket Platform Reviews — Compare Scoring, Streaming & Stats Platforms',
  description: 'Independent reviews and comparisons of the leading cricket scoring, streaming, and information platforms, with ratings, pros, cons, and recommendations.',
  path: '/providers',
  keywords: ['cricket platform reviews', 'cricket scoring apps', 'cricket streaming', 'espncricinfo', 'cricbuzz'],
});

export default function ProvidersPage() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([{ name: 'Platform Reviews', path: '/providers' }]),
          collectionPageSchema(
            'Cricket Platform Reviews',
            '/providers',
            'Independent reviews and comparisons of the leading cricket scoring, streaming, and information platforms.',
            providers.map((p) => ({ title: `${p.name} Review`, url: `/providers/${p.slug}` })),
          ),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Platform Reviews' }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Platform Reviews</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Cricket Platforms <span className="text-gradient">Compared & Reviewed</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Independent reviews of the leading cricket scoring, streaming, and information platforms, with ratings, pros, cons, and recommendations to help you choose the right one.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <Link key={provider.slug} href={`/providers/${provider.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-2xl font-bold text-primary">
                    {provider.name.charAt(0)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{provider.rating}</span>
                    <span className="text-xs text-muted-foreground">({provider.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
                <h2 className="text-lg font-semibold font-heading mb-1 group-hover:text-primary transition-colors">{provider.name}</h2>
                <p className="text-xs text-muted-foreground mb-3">{provider.tagline}</p>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{provider.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Read Review <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-center">Platform Comparison</h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-semibold">Platform</th>
                    <th className="text-left p-4 font-semibold">Rating</th>
                    <th className="text-left p-4 font-semibold hidden md:table-cell">Established</th>
                    <th className="text-left p-4 font-semibold hidden lg:table-cell">Coverage</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p) => (
                    <tr key={p.slug} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <Link href={`/providers/${p.slug}`} className="font-semibold hover:text-primary transition-colors">{p.name}</Link>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          {p.rating}
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell text-muted-foreground">{p.established}</td>
                      <td className="p-4 hidden lg:table-cell text-muted-foreground">{p.coverage}</td>
                      <td className="p-4 text-muted-foreground text-xs">{p.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
