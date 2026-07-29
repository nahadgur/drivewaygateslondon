import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="container-width py-24 text-center scroll-mt-24 outline-none">
      <h1 className="text-6xl font-display font-bold text-brand-900 mb-4">404</h1>
      <p className="text-xl text-brand-700 mb-8">Sorry, that page doesn&apos;t exist.</p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/services/" className="btn-secondary">Browse Gate Types</Link>
      </div>
    </main>
  );
}
