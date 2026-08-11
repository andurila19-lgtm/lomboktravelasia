import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/structured-data';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serifFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lomboktravelasia.com'),
  title: {
    default: 'Lombok Travel Asia | Curated Lombok Adventures & Tours',
    template: '%s | Lombok Travel Asia',
  },
  description:
    'Discover authentic Lombok and Gili Islands travel experiences. Guided Mount Rinjani treks, snorkeling, cultural journeys, and luxury island escapes.',
  keywords: [
    'Lombok Travel Asia',
    'Mount Rinjani Trekking',
    'Gili Islands Tour',
    'Lombok Tour Agency',
    'Senggigi Travel Guide',
    'South Lombok Beaches',
    'Lombok Private Tour',
  ],
  authors: [{ name: 'Lombok Travel Asia' }],
  creator: 'Lombok Travel Asia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lomboktravelasia.com',
    title: 'Lombok Travel Asia | Curated Lombok Adventures & Tours',
    description:
      'Authentic travel experiences, guided Mount Rinjani expeditions, and pristine island escapes in Lombok, Indonesia.',
    siteName: 'Lombok Travel Asia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lombok Travel Asia | Curated Lombok Adventures & Tours',
    description:
      'Authentic travel experiences, guided Mount Rinjani expeditions, and pristine island escapes in Lombok, Indonesia.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema('en');
  const businessSchema = generateLocalBusinessSchema('en');

  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={`${sansFont.className} min-h-full flex flex-col bg-[#fcf9f8] text-[#1b1c1c] selection:bg-[#012d1d] selection:text-white`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
