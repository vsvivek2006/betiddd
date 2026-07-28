import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold font-heading text-gradient mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold font-heading mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for may have been moved, deleted, or never existed. Let&apos;s get you back to the action.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="btn-gradient rounded-full" asChild>
            <Link href="/"><Home className="mr-2 h-4 w-4" /> Go Home</Link>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Browse Articles</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
