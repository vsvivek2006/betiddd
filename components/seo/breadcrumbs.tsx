import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Crumb = { name: string; path?: string };

export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('py-3', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            {item.path ? (
              <Link href={item.path} className="hover:text-primary transition-colors">{item.name}</Link>
            ) : (
              <span className="text-foreground font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
