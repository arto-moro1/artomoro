# Arto Moro Engineering (Vue 3 + Vite + vite-ssg)

    npm install
    npm run dev        # pengembangan
    npm run build      # prerender ke dist/
    npm run preview

Sebelum rilis:
1. Alamat situs sementara: `https://artomoro.vercel.app` (sudah terpasang). Pastikan nama proyek di Vercel adalah `artomoro` supaya alamatnya sama. Bila Vercel memberi alamat lain, ikuti langkah "Mengganti domain".
2. Foto: taruh di `public/img/`, isi `src/data/projects.js`, ganti kotak `.ph` dengan `<img>`.
3. Deploy: hubungkan repo ke Vercel (build `npm run build`, output `dist`).
Konten ada di `src/data/`. Nomor WhatsApp di `src/utils/whatsapp.js`.

## Foto dan video

Pindahkan berkas asli dengan nama bernomor apa adanya:

    public/img/001.webp ... 015.webp
    public/video/001.mp4 ... 023.mp4

- Hero: slideshow foto, diatur di `heroPhotos` di `src/data/media.js` (default 001, 005, 009; ganti dengan foto landscape terbaik). Semua video portrait, jadi hanya dipakai di halaman Proyek.
- Kartu layanan: kolom `image` di `src/data/services.js`.
- Galeri: `src/data/projects.js` (ubah title, alt, caption, category). Filter kategori muncul setelah ada `category`.
- Video di halaman Proyek: `galleryVideos` di `src/data/media.js` (default 002 sampai 005).

Kompres video sebelum dipindahkan (hero maks. 10 detik dan sekitar 3 MB, tanpa suara):

    ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 28 -an -movflags +faststart out.mp4

GitHub menolak berkas di atas 100 MB, jadi jangan commit video asli.

## Mengganti domain

Alamat situs tertulis di empat tempat. Ganti `https://artomoro.vercel.app` dengan alamat baru di:

1. `.env` (salin dari `.env.example`) dan Environment Variables di Vercel: `VITE_SITE_URL`.
2. `src/composables/useSeo.js`: nilai bawaan setelah `||` (cadangan bila variabel kosong).
3. `public/sitemap.xml`: semua `<loc>`.
4. `public/robots.txt`: baris `Sitemap:`.

Setelah itu build ulang dan deploy, lalu kirim ulang sitemap ke Google Search Console.
