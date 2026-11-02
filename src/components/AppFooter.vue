<script setup>
import { company } from '../data/company'
import { waLink, messages } from '../utils/whatsapp'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="dk">
    <div class="w">
      <div class="g3">
        <div><h3>{{ company.brand }}</h3><p>{{ company.name }}. Fabrikasi, maintenance, dan rekondisi mesin industri dan pertambangan sejak {{ company.founded }}.</p></div>
        <div><h3>Kontak</h3><p>WhatsApp <a :href="waLink(messages.umum)" target="_blank" rel="noopener">{{ company.phoneDisplay }}</a><br>{{ company.address }}<br><a :href="company.mapsUrl" target="_blank" rel="noopener">Buka di Google Maps</a></p></div>
        <div><h3>Halaman</h3><p><RouterLink to="/layanan">Layanan</RouterLink><br><RouterLink to="/proyek">Proyek</RouterLink><br><RouterLink to="/tentang">Tentang</RouterLink><br><RouterLink to="/kontak">Kontak</RouterLink></p></div>
      </div>
      <small>© {{ year }} {{ company.name }}</small>
    </div>
  </footer>
</template>
