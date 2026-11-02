// Nama berkas mengikuti penomoran asli: public/img/001.webp ... 015.webp dan public/video/001.mp4 ... 023.mp4
const pad = (n) => String(n).padStart(3, '0')

// Hero memakai foto (semua video berformat portrait).
// Beberapa foto berganti pelan di hero. Pilih foto landscape yang tidak terlalu ramai; urutan pertama tampil lebih dulu.
export const media = { heroPhotos: ['/img/001.webp', '/img/005.webp', '/img/009.webp'] }

// Video portrait di halaman Proyek (maks. 3 sampai 5 video; sisanya cukup diarsipkan)
export const galleryVideos = [2, 3, 4, 5].map((n) => ({ src: `/video/${pad(n)}.mp4`, title: `Video pekerjaan ${pad(n)}` }))
