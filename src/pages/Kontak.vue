<script setup>
import { company } from '../data/company'
import { services } from '../data/services'
import PageHero from '../components/PageHero.vue'
import WaButton from '../components/WaButton.vue'
import { messages } from '../utils/whatsapp'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Kontak | Arto Moro Engineering',
  description: 'Hubungi Arto Moro Engineering via WhatsApp 0856-0452-2588. Alamat: Mojoagung, Jombang, Jawa Timur.',
  path: '/kontak',
})
</script>

<template>
  <PageHero title="Kontak" lead="Sampaikan kebutuhan fabrikasi, perawatan, atau bongkar pasang plant Anda. Pilih layanan, lalu lanjutkan percakapan lewat WhatsApp." />
  <section><div class="w">
    <div class="row" style="margin-bottom:48px"><WaButton :message="messages.umum">WhatsApp {{ company.phoneDisplay }}</WaButton></div>
    <h2>Pilih layanan</h2>
    <div class="row" style="margin-bottom:72px"><WaButton v-for="s in services" :key="s.id" outline :message="s.waMessage">{{ s.title }}</WaButton></div>
    <div class="two">
      <div>
        <h2>Lokasi</h2>
        <p>{{ company.address }}</p>
        <a class="btn" :href="company.mapsUrl" target="_blank" rel="noopener">Buka di Google Maps</a>
      </div>
      <div class="map">
        <iframe :src="company.mapsEmbed" title="Lokasi Arto Moro Engineering di Google Maps" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
      </div>
    </div>
  </div></section>
</template>
