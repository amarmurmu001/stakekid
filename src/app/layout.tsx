import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'StakeKid - Premium Betting Tips & Tools',
  description: 'Get expert betting tips, strategies, and tools for Stake Originals and Casino games. Join thousands of players increasing their profits daily.',
  keywords: 'stake, betting, casino, gambling, tips, strategies, tools, crypto',
  authors: [{ name: 'StakeKid Team' }],
  openGraph: {
    title: 'StakeKid - Premium Betting Tips & Tools',
    description: 'Get expert betting tips, strategies, and tools for Stake Originals and Casino games. Join thousands of players increasing their profits daily.',
    url: 'https://stakekid.com',
    siteName: 'StakeKid',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StakeKid Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StakeKid - Premium Betting Tips & Tools',
    description: 'Get expert betting tips, strategies, and tools for Stake Originals and Casino games. Join thousands of players increasing their profits daily.',
    images: ['/images/og-image.jpg'],
    creator: '@stakekid',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-slate-900 text-slate-100 selection:bg-yellow-500 selection:text-slate-900">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
