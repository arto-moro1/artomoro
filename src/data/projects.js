// 15 foto: public/img/001.webp sampai 015.webp.
// Setelah melihat isinya, ubah title, alt, caption, dan category ('fabrikasi' | 'maintenance' | 'plant').
// Filter kategori otomatis muncul begitu ada foto yang diberi category.
export const categories = [
  { key: 'all', label: 'Semua' },
  { key: 'fabrikasi', label: 'Fabrikasi' },
  { key: 'maintenance', label: 'Maintenance dan rekondisi' },
  { key: 'plant', label: 'Plant' },
]
export const projects = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: 'p' + n,
    title: `Dokumentasi pekerjaan ${n}`,
    alt: `Dokumentasi pekerjaan Arto Moro ${n}`,
    category: null,
    image: `/img/${n}.webp`,
    caption: '',
  }
})
