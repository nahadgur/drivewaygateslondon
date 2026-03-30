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
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Driveway Gate Blog London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Blog | London Homeowner Guides & Advice', description: 'Straight-talking driveway gate advice for London homeowners.' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
