<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import WaButton from './WaButton.vue'
import { messages } from '../utils/whatsapp'

const nav = [['/', 'Beranda'], ['/layanan', 'Layanan'], ['/proyek', 'Proyek'], ['/tentang', 'Tentang'], ['/kontak', 'Kontak']]
const open = ref(false)
const scrolled = ref(false)
onMounted(() => {
  const f = () => (scrolled.value = window.scrollY > 40)
  f(); window.addEventListener('scroll', f, { passive: true })
})
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header :class="{ s: scrolled }">
    <div class="w">
      <RouterLink class="brand" to="/">
        <img src="/logo.png" alt="Logo Arto Moro Engineering" width="44" height="44">
        <span>Arto Moro<br>Engineering</span>
      </RouterLink>
      <button class="menu" :aria-expanded="open" aria-controls="nv" aria-label="Menu" @click="open = !open">☰</button>
      <nav id="nv" :class="{ open }" aria-label="Navigasi utama">
        <RouterLink v-for="n in nav" :key="n[0]" class="l" :to="n[0]">{{ n[1] }}</RouterLink>
        <WaButton :message="messages.umum">Hubungi via WhatsApp</WaButton>
      </nav>
    </div>
  </header>
</template>
