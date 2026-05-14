import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://falloutshelterecovillage.org'
  const now = new Date()
  const routes = [
    '/',
    '/about-us',
    '/join-us',
    '/visit-us',
    '/events-and-workshops',
    '/media-policy',
    '/contact-us',
    '/donate',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.6,
  }))
}
