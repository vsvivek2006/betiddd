import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Star, Check, X, Award, MapPin, Calendar, Headphones } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, reviewSchema, ratingSchema, faqSchema, combineSchemas } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import FaqAccordion from '@/components/seo/faq-accordion';
import CtaSection from '@/components/seo/cta-section';
import { providers } from '@/lib/data/providers';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const provider = providers.find((p) => p.slug === params.slug);
  if (!provider) return {};
  return buildMetadata({
    title: `${provider.name} Review — Features, Pros, Cons & Rating`,
    description: `An in-depth review of ${provider.name}: ${provider.tagline}. Features, pros, cons, pricing, coverage, and our expert rating.`,
    path: `/providers/${provider.slug}`,
    keywords: [provider.name, 'cricket platform review', 'cricket scores', 'cricket streaming'],
  });
}

export default function ProviderDetailPage({ params }: Params) {
  const provider = providers.find((p) => p.slug === params.slug);
  if (!provider) notFound();

  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd
        data={combineSchemas(
          breadcrumbSchema([
            { name: 'Platform Reviews', path: '/providers' },
            { name: provider.name, path: `/providers/${provider.slug}` },
          ]),
          reviewSchema(provider),
          ratingSchema(provider),
          faqSchema(provider.faqs),
        )}
      />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Platform Reviews', path: '/providers' }, { name: provider.name }]} />
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center text-4xl font-bold text-primary">
              {provider.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-2">{provider.name}</h1>
              <p className="text-lg text-muted-foreground">{provider.tagline}</p>
            </div>
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="text-2xl font-bold">{provider.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">{provider.reviewCount.toLocaleString()} reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Established</span>
              </div>
              <p className="text-sm text-muted-foreground">{provider.established}</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Headquarters</span>
              </div>
              <p className="text-sm text-muted-foreground">{provider.headquarters}</p>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Coverage</span>
              </div>
              <p className="text-sm text-muted-foreground">{provider.coverage}</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-semibold font-heading mb-3">Key Facts</h2>
              <table className="w-full text-sm">
                <tbody>
                  {provider.tableData.map((row, i) => (
                    <tr key={i} className="border-b border-border/30 last:border-0">
                      <td className="py-2 text-muted-foreground">{row.label}</td>
                      <td className="py-2 text-right font-medium">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">About {provider.name}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {provider.longForm.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {provider.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 glass-card rounded-xl p-4">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold font-heading mb-4 text-emerald-400">Pros</h2>
              <ul className="space-y-3">
                {provider.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold font-heading mb-4 text-destructive">Cons</h2>
              <ul className="space-y-3">
                {provider.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">Payment & Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Payment Methods</h3>
                <ul className="space-y-2">
                  {provider.paymentMethods.map((method, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{method}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Headphones className="h-4 w-4 text-primary" /> Customer Support</h3>
                <ul className="space-y-2">
                  {provider.customerSupport.map((support, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{support}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">{provider.name} FAQ</h2>
            <FaqAccordion faqs={provider.faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title={`Explore More Platforms`}
        description="Compare all the cricket scoring, streaming, and information platforms we have reviewed."
        primaryLabel="Compare All Platforms"
        primaryHref="/providers"
        secondaryLabel="Read Our Blog"
        secondaryHref="/blog"
      />
    </main>
  );
}
