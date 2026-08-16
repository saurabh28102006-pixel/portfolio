import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Saurabh.dev • Portfolio',
  description: 'Portfolio of Saurabh Kumar — Full-Stack Developer, AI Applications Engineer & Creative Web Builder.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  keywords: ['Saurabh Kumar', 'Full-Stack Developer', 'AI Engineer', 'Next.js', 'React', 'Portfolio', '3D Portfolio', 'TypeScript'],
  authors: [{ name: 'Saurabh Kumar' }],
  openGraph: {
    title: 'Saurabh.dev • Portfolio',
    description: 'Portfolio of Saurabh Kumar — Full-Stack Developer, AI Applications Engineer & Creative Web Builder.',
    type: 'website',
    locale: 'en_US'
  }
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
