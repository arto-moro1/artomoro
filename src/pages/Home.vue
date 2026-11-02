<script setup>
import { company } from '../data/company'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { media } from '../data/media'
import Photo from '../components/Photo.vue'
import CountUp from '../components/CountUp.vue'
import WaButton from '../components/WaButton.vue'
import PartnerList from '../components/PartnerList.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { messages } from '../utils/whatsapp'
import { useSeo } from '../composables/useSeo'

const years = new Date().getFullYear() - company.founded
const gallery = projects.slice(4, 11)
const ratios = ['4/3', '3/4', '1/1', '3/4', '4/3', '1/1', '3/4']
const why = [
  ['Layanan terpadu', 'Fabrikasi, perawatan, dan bongkar pasang ditangani satu tim.'],
  ['Pengerjaan custom', 'Dibuat sesuai gambar kerja dan spesifikasi Anda.'],
  ['Pengalaman lintas wilayah', 'Pernah bekerja di Jawa, Kalimantan, dan Sulawesi.'],
  ['Fokus mesin tambang dan plant industri', 'Stone crusher, batching plant, asphalt mixing plant, dan sejenisnya.'],
  ['Komunikasi langsung', 'Kebutuhan Anda dibahas langsung dengan penanggung jawab, tanpa perantara.'],
]
useSeo({
  title: 'Arto Moro Engineering | Bengkel Las Bubut, Fabrikasi dan Rekondisi Mesin Industri, Jombang',
  description: 'Bengkel las dan bubut di Mojoagung, Jombang. Fabrikasi stone crusher, batching plant, rekondisi jaw crusher, dan bongkar pasang plant sejak 2017.',
  path: '/',
  jsonLd: [{
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: company.name, alternateName: company.brand, foundingDate: String(company.founded),
    telephone: company.phoneIntl, areaServed: company.regions, hasMap: company.mapsUrl,
    geo: { '@type': 'GeoCoordinates', ...company.geo },
    address: { '@type': 'PostalAddress', streetAddress: 'Dsn. Pandean, Ds. Miagan, RT 08 / RW 02', addressLocality: 'Mojoagung, Jombang', addressRegion: 'Jawa Timur', addressCountry: 'ID' },
  }],
})
</script>

<template>
  <section class="hero dk">
    <img class="hero-media" :src="media.heroPhoto" alt="" fetchpriority="high" @error="$event.target.remove()">
    <div class="w">
      <h1>Fabrikasi, maintenance, dan rekondisi mesin industri dan pertambangan</h1>
      <p>Mitra bengkel las dan bubut yang andal sejak {{ company.founded }}, melayani Jawa, Kalimantan, dan Sulawesi.</p>
      <div class="row">
        <WaButton :message="messages.umum">Minta penawaran via WhatsApp</WaButton>
        <RouterLink class="btn" to="/layanan">Lihat layanan</RouterLink>
      </div>
    </div>
  </section>

  <section><div class="w two">
    <div>
      <span class="lbl">Tentang kami</span>
      <h2>Mitra bengkel las dan bubut sejak {{ company.founded }}</h2>
      <p>Kami mengerjakan fabrikasi, perawatan, rekondisi, dan bongkar pasang plant untuk mesin industri dan pertambangan, langsung dengan penanggung jawab.</p>
      <RouterLink class="btn" to="/tentang">Selengkapnya</RouterLink>
    </div>
    <div class="stats">
      <div><CountUp :to="years" /><span>tahun pengalaman</span></div>
      <div><CountUp :to="company.regions.length" /><span>provinsi wilayah kerja</span></div>
      <div><CountUp :to="services.length" /><span>lini layanan terpadu</span></div>
      <div><b>Custom</b><span>sesuai spesifikasi Anda</span></div>
    </div>
  </div></section>

  <section class="dk why-s">
    <img class="bgimg" :src="projects[2].image" alt="" @error="$event.target.remove()">
    <div class="w">
      <h2>Mengapa Arto Moro</h2>
      <div class="why"><div v-for="w in why" :key="w[0]"><h3>{{ w[0] }}</h3><p>{{ w[1] }}</p></div></div>
    </div>
  </section>

  <section><div class="w">
    <div class="two" style="margin-bottom:56px">
      <div><span class="lbl">Layanan</span><h2>Tiga layanan terpadu untuk mesin Anda</h2></div>
      <div><p>Dari pembuatan unit baru, perawatan, hingga pemindahan plant, semuanya dikerjakan sesuai kebutuhan di lapangan.</p><RouterLink class="btn" to="/layanan">Semua layanan</RouterLink></div>
    </div>
    <div class="g3">
      <RouterLink v-for="s in services" :key="s.id" class="card" :to="{ path: '/layanan', hash: '#' + s.id }">
        <Photo :src="s.image" :alt="s.title" ratio="3/4" />
        <span class="lb">{{ s.title }}</span>
        <div class="tx"><p>{{ s.short }}</p></div>
      </RouterLink>
    </div>
  </div></section>

  <section class="sf"><div class="w two">
    <div><span class="lbl">Mitra</span><h2>Dipercaya oleh</h2><p>Perusahaan tambang, batching plant, dan kontraktor di tiga pulau.</p></div>
    <PartnerList />
  </div></section>

  <section class="proj">
    <Photo :src="projects[3].image" :alt="projects[3].alt" ratio="16/11" />
    <div class="pj-box">
      <span class="lbl">Proyek kami</span>
      <h2>Hasil pekerjaan di lapangan</h2>
      <p>Lihat dokumentasi fabrikasi, rekondisi, dan pemasangan plant yang pernah kami kerjakan.</p>
      <div><RouterLink class="btn" to="/proyek">Lihat proyek</RouterLink></div>
    </div>
  </section>

  <section><div class="w">
    <h2>Galeri pekerjaan</h2>
    <div class="mas"><Photo v-for="(p, i) in gallery" :key="p.id" :src="p.image" :alt="p.alt" :ratio="ratios[i]" /></div>
    <p style="margin:24px 0 0"><RouterLink class="btn" to="/proyek">Lihat semua</RouterLink></p>
  </div></section>

  <section class="sf"><div class="w"><h2>Alur kerja</h2><ProcessTimeline /></div></section>
  <CtaBanner />
</template>
