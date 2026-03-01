import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: 'Mary Motors – Drive Your Dream',
  description: 'Your trusted partner for premium new, pre-order, and certified used vehicles in Nakuru, Kenya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
