import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://falloutshelterecovillage.org'),
  title: {
    default: 'Fallout Shelter Ecovillage | Sustainable Desert Living in Slab City, CA',
    template: '%s | Fallout Shelter Ecovillage',
  },
  description:
    'The Fallout Shelter Ecovillage (FoSE) is an intentional community in Slab City, California building a model for sustainable, cooperative desert life. Visitors, learners, and new members welcome by arrangement.',
  keywords: [
    'ecovillage',
    'intentional community',
    'sustainable living',
    'Slab City',
    'cooperative living',
    'desert',
    'permaculture',
    'Fallout Shelter Ecovillage',
    'FoSE',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://falloutshelterecovillage.org/',
    siteName: 'Fallout Shelter Ecovillage',
    title: 'Fallout Shelter Ecovillage | Sustainable Desert Living in Slab City, CA',
    description:
      'An intentional community modeling sustainable, cooperative desert life. Plan a visit or support our work.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fallout Shelter Ecovillage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallout Shelter Ecovillage | Sustainable Desert Living',
    description:
      'An intentional community in Slab City, CA modeling sustainable, cooperative desert life.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to GTM for faster script loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
