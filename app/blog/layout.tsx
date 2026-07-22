import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Driveway Gate Blog | London Homeowner Guides & Advice',
  description: 'Straight-talking driveway gate advice for London homeowners. Gate types, materials, automation, planning rules, and getting the best value in London.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    title: 'Driveway Gate Blog | London Homeowner Guides & Advice',
    description: 'Straight-talking driveway gate advice for London homeowners — types, materials, automation, and planning rules.',
    url: `${siteConfig.url}/blog/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/images/blog/bi-fold-vs-sliding-gates-london.webp`, width: 1536, height: 1024, alt: 'Installer checking a compact bi-fold driveway gate at a London home' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Blog | London Homeowner Guides & Advice', description: 'Straight-talking driveway gate advice for London homeowners.', images: [`${siteConfig.url}/images/blog/bi-fold-vs-sliding-gates-london.webp`] },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
