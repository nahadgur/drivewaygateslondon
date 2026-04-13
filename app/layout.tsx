// Static metadata for the root layout segment
// app/layout.tsx is already server-side - update it with better OG image + SearchAction

import type { Metadata } from 'next';
import Script from 'next/script';
import { DM_Sans, Syne, Fraunces } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
    template: `%s | Driveway Gates London`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  verification: {
    google: "Npu9VEHzEp4NKjeI4dQGotVjnC1BW1iLXUEXN2c8pls",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
    description: siteConfig.description,
    locale: "en_GB",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/services/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    areaServed: { "@type": "City", name: "London", addressCountry: "GB" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "GB",
    },
    knowsAbout: [
      "Driveway gate installation",
      "Electric sliding gates",
      "Electric swing gates",
      "Gate automation",
      "Gate repair and maintenance",
      "Access control systems",
    ],
  };

  return (
    <html lang="en-GB" className={`${dmSans.variable} ${syne.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F4ZHZBYKEL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4ZHZBYKEL');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
