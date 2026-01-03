import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/data/portfolio';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: portfolioData.personal.valueProposition,
  keywords: [
    'software engineer',
    'product builder',
    'full-stack developer',
    'system architecture',
    'web development',
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.valueProposition,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description: portfolioData.personal.valueProposition,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}

