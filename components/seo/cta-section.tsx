import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CtaSection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 p-8 md:p-16 text-center">
          <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-slate-950">
              {title}
            </h2>
            <p className="text-lg text-slate-900/80 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-800 rounded-full px-8" asChild>
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button size="lg" variant="outline" className="border-slate-900/30 text-slate-900 hover:bg-slate-900/10 rounded-full px-8" asChild>
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
