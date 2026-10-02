import { notFound } from 'next/navigation';
import { getBoroughBySlug } from '@/data/regulations';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';

// Keep the legacy entry point tied to the reviewed server-rendered content.
export function BoroughPageClient({ params }: { params: { borough: string } }) {
  if (!getBoroughBySlug(params.borough)) notFound();
  return <ShowcasePage route={`/local-regulations/${params.borough}/`} />;
}
