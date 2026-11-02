const NUMBER = '6285604522588'

export function waLink(message = '') {
  const text = encodeURIComponent(message)
  return `https://wa.me/${NUMBER}${text ? `?text=${text}` : ''}`
}

export const messages = {
  umum: 'Halo Arto Moro Engineering, saya ingin konsultasi kebutuhan fabrikasi/perawatan mesin.',
  fabrikasi: 'Halo Arto Moro Engineering, saya ingin menanyakan pekerjaan fabrikasi dan erection (jenis unit: ...).',
  maintenance: 'Halo Arto Moro Engineering, saya ingin menanyakan perbaikan/rekondisi mesin (jenis mesin: ...).',
  'bongkar-pasang': 'Halo Arto Moro Engineering, saya ingin menanyakan bongkar pasang plant second (lokasi: ...).',
}
