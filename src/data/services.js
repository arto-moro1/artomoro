import { messages } from '../utils/whatsapp'

export const services = [
  {
    id: 'fabrikasi', image: '/img/002.webp', title: 'Fabrikasi dan Erection',
    short: 'Pembuatan peralatan dan konstruksi industri sesuai gambar kerja Anda.',
    summary: 'Pembuatan peralatan dan konstruksi industri sesuai gambar kerja atau spesifikasi pelanggan, dilanjutkan pemasangan hingga unit siap dioperasikan.',
    scope: ['Plant stone crusher baru, semua kapasitas 10 TPH sampai 300 TPH', 'As sentrik (vibro) dan rumah bearing', 'Perlengkapan penunjang stone crusher dan mesin industri lainnya', 'Batching plant', 'Asphalt mixing plant', 'Konveyor', 'Vibrating screen', 'Konstruksi baja dan pekerjaan lainnya'],
    cta: 'Tanya layanan fabrikasi', waMessage: messages.fabrikasi,
  },
  {
    id: 'maintenance', image: '/img/006.webp', title: 'Maintenance, Rekondisi, dan Repairing',
    short: 'Perawatan berkala dan rekondisi komponen mesin tambang yang aus atau rusak.',
    summary: 'Perawatan berkala, rekondisi komponen yang aus atau rusak, dan perbaikan mesin pertambangan termasuk jaw crusher. Memperpanjang umur pakai mesin dan menekan biaya penggantian unit baru.',
    scope: ['Perawatan berkala', 'Rekondisi komponen aus atau rusak', 'Perbaikan mesin pertambangan', 'Jaw crusher'],
    cta: 'Tanya layanan rekondisi', waMessage: messages.maintenance,
  },
  {
    id: 'bongkar-pasang', image: '/img/010.webp', title: 'Bongkar Pasang Plant Second',
    short: 'Pembongkaran, pemindahan, dan pemasangan kembali plant bekas.',
    summary: 'Pembongkaran, pemindahan, dan pemasangan kembali plant bekas, saat Anda memindahkan lokasi operasi atau membeli plant bekas yang perlu dipasang di lokasi baru.',
    scope: ['Plant stone crusher second', 'Pembongkaran', 'Pemindahan', 'Pemasangan kembali'],
    cta: 'Tanya bongkar pasang', waMessage: messages['bongkar-pasang'],
  },
]
