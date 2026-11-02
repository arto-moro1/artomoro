// Nama berkas mengikuti penomoran asli: public/img/001.webp ... 015.webp dan public/video/001.mp4 ... 023.mp4
const pad = (n) => String(n).padStart(3, '0')

// Hero memakai foto (semua video berformat portrait). Ganti nomornya bila ada foto yang lebih cocok.
export const media = { heroPhoto: '/img/001.webp' }

// Video portrait di halaman Proyek (maks. 3 sampai 5 video; sisanya cukup diarsipkan)
export const galleryVideos = [2, 3, 4, 5].map((n) => ({ src: `/video/${pad(n)}.mp4`, title: `Video pekerjaan ${pad(n)}` }))
