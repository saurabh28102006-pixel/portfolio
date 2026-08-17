import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://saurabh-kumar.dev'),
  title: {
    default: 'Saurabh Kumar • Full-Stack Developer & AI Engineer',
    template: '%s • Saurabh Kumar'
  },
  description: 'Portfolio of Saurabh Kumar — Full-Stack Developer, AI Applications Engineer & Creative Web Builder crafting high-performance, secure digital experiences.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  keywords: [
    'Saurabh Kumar',
    'Full-Stack Developer',
    'AI Engineer',
    'Next.js 16',
    'React',
    'TypeScript',
    'Cybersecurity',
    'Web Audio',
    '3D Portfolio',
    'Interactive Web Developer'
  ],
  authors: [{ name: 'Saurabh Kumar', url: 'https://github.com/saurabh28102006-pixel' }],
  creator: 'Saurabh Kumar',
  openGraph: {
    title: 'Saurabh Kumar • Full-Stack Developer & AI Engineer',
    description: 'Explore production projects in AI, cloud storage, fin-tech analytics, real-time Web Audio, and 3D web graphics by Saurabh Kumar.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Saurabh Kumar Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurabh Kumar • Full-Stack Developer & AI Engineer',
    description: 'Portfolio of Saurabh Kumar — Full-Stack Developer, AI Applications Engineer & Creative Web Builder.',
    creator: '@saurabhkumar'
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className="bg-[#020617] text-slate-100 min-h-screen overflow-x-hidden antialiased font-sans selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
