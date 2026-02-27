import { Nunito_Sans } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata } from 'next';

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';

const displayFont = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display',
});

const baseFont = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
});

const globalColors = colors;
const style: string[] = [];

Object.keys(globalColors).map((variant) => {
  return Object.keys(globalColors[variant]).map((color) => {
    const value = globalColors[variant][color];
    style.push(`--${variant}-${color}: ${value}`);
  });
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: './',
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${baseFont.variable} ${displayFont.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <style>
          {`
          :root, :before, :after {
            ${style.join(';')}
          }
        `}
        </style>

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/logos/nedalabs.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          href="/assets/logos/nedalabs.jpg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="/assets/logos/nedalabs.jpg"
        />
        <meta name="generator" content="Shipixen" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f1f5f9"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0f172a"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body className="flex flex-col bg-canvas-light text-primary-800 antialiased dark:bg-canvas-dark dark:text-white/[0.92] min-h-screen">
        <ThemeProviders>
          <AnalyticsWrapper />

          <div className="w-full flex flex-col justify-between items-center font-sans">
            <SearchProvider>
              <main className="w-full flex flex-col items-center mb-auto">
                {children}
              </main>
            </SearchProvider>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
