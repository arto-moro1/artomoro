<script setup>
import WaButton from '../components/WaButton.vue'
import { messages } from '../utils/whatsapp'
import { useSeo } from '../composables/useSeo'
useSeo({ title: 'Halaman tidak ditemukan | Arto Moro Engineering', description: 'Alamat yang Anda buka tidak ada.', path: '/404' })
</script>

<template>
  <section class="dk cta"><div class="w">
    <h1>Halaman tidak ditemukan</h1>
    <p>Alamat yang Anda buka tidak ada. Kembali ke beranda atau lihat layanan kami.</p>
    <div class="row"><RouterLink class="btn o" to="/">Beranda</RouterLink><RouterLink class="btn o" to="/layanan">Layanan</RouterLink><WaButton :message="messages.umum">WhatsApp</WaButton></div>
  </div></section>
</template>
