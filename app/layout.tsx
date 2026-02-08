import type { Metadata } from 'next';
import './globals.css';
import { Manrope, Inter } from 'next/font/google';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' ? 'https://rentalcar.app' : 'http://localhost:3000'
  ),
  title: 'Rental Car',
  description: 'Rent your dream car in seconds. Best prices, top models, and instant booking.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Rental Car - Luxury | Premium | Adventure Car Rental',
    description: 'Rent your dream car in seconds. Best prices, top models, and instant booking.',
    url: 'https://rentalcar.app',
    siteName: 'Rental Car',
    images: [
      {
        url: '/meta-image.png',
        width: 1200,
        height: 630,
        alt: 'Rental Car Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Car - Luxury | Premium | Adventure Car Rental',
    description: 'Rent your dream car in seconds. Best prices, top models, and instant booking.',
    images: ['/meta-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'var(--second-family)',
              color: 'var(--main)',
              backgroundColor: 'var(--white)',
              borderRadius: '12px',
              border: '2px solid var(--gray)',
              padding: '12px',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#1c9f62',
                secondary: 'var(--white)',
              },
              style: {
                border: '2px solid #1c9f62',
              },
            },
            error: {
              duration: 3000,
              iconTheme: {
                primary: '#cf3224',
                secondary: 'var(--white)',
              },
              style: {
                border: '2px solid #cf3224',
              },
            },
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
