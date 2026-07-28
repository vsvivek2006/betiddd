import type { ReactNode } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/seo/breadcrumbs';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/json-ld';

export default function LegalPageLayout({
  title,
  description,
  breadcrumbName,
  lastUpdated,
  children,
}: {
  title: string;
  description: string;
  breadcrumbName: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen pt-16 lg:pt-20">
      <JsonLd data={breadcrumbSchema([{ name: breadcrumbName, path: `/${breadcrumbName.toLowerCase().replace(/ /g, '-')}` }])} />

      <section className="relative overflow-hidden py-16 md:py-24 pitch-pattern">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: breadcrumbName }]} />
          <Badge variant="secondary" className="mb-4 px-4 py-1">Legal</Badge>
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="prose-cricket max-w-none">{children}</div>
        </div>
      </section>
    </main>
  );
}
