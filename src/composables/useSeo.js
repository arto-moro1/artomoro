import { useHead } from '@unhead/vue'

// Alamat situs untuk canonical dan Open Graph. Diambil dari VITE_SITE_URL (lihat .env.example).
// Pratinjau tautan di WhatsApp butuh URL lengkap, jadi nilai bawaan memakai subdomain Vercel.
// Saat memakai domain sendiri, cukup ubah VITE_SITE_URL di .env dan di pengaturan Environment Variables Vercel.
const SITE = (import.meta.env.VITE_SITE_URL || 'https://artomoro.vercel.app').replace(/\/$/, '')

export function useSeo({ title, description, path = '/', jsonLd = [] }) {
  const url = SITE + path
  const image = SITE + '/og-image.jpg'
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'id_ID' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: url }],
    script: jsonLd.map((d) => ({ type: 'application/ld+json', innerHTML: JSON.stringify(d) })),
  })
}
