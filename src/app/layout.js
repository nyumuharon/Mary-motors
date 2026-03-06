import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  metadataBase: new URL('https://mary-motors.vercel.app'),
  title: {
    default: 'Mary Motors – Buy Cars in Kenya | New & Used Cars in Nairobi',
    template: '%s | Mary Motors Kenya',
  },
  description: 'Mary Motors is a trusted car dealership in Kenya offering new cars, used cars, and imported vehicles from Japan and the UK. Browse SUVs, sedans, and trucks at competitive prices.',
  keywords: [
    'buy cars in Kenya', 'used cars Nairobi', 'car dealership Kenya',
    'imported cars Kenya', 'cars for sale Nairobi', 'new cars Kenya',
    'Toyota Kenya', 'Nissan Kenya', 'Mazda Kenya', 'Mary Motors',
    'car financing Kenya', 'certified pre-owned cars Kenya'
  ],
  authors: [{ name: 'Mary Motors' }],
  creator: 'Mary Motors',
  publisher: 'Mary Motors',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://mary-motors.vercel.app',
    siteName: 'Mary Motors Kenya',
    title: 'Mary Motors – Buy Cars in Kenya | New & Used Cars in Nairobi',
    description: 'Browse new cars, used cars, and Japanese imports at Mary Motors Kenya. Trusted dealership with certified inspections and flexible car financing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mary Motors Kenya – Cars for Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mary Motors – Buy Cars in Kenya',
    description: 'Browse new and used cars for sale in Kenya. Toyota, Nissan, Mazda, BMW and more.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mary-motors.vercel.app',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Mary Motors',
  description: 'Trusted car dealership in Kenya offering new and used vehicles, certified inspections, and car financing.',
  url: 'https://mary-motors.vercel.app',
  telephone: '+254702864025',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: 'Kenya',
  priceRange: 'KES 500,000 – KES 10,000,000',
  openingHours: 'Mo-Sa 08:00-18:00',
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
