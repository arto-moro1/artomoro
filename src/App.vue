<script setup>
import { useRouter } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WaButton from './components/WaButton.vue'
import { messages } from './utils/whatsapp'
import { useReveal } from './composables/useReveal'

useReveal()
const router = useRouter()
// Pindahkan fokus ke konten saat halaman berganti (pembaca layar)
router.afterEach((to, from) => {
  if (typeof document !== 'undefined' && to.path !== from.path) {
    document.getElementById('main')?.focus({ preventScroll: true })
  }
})
</script>

<template>
  <a class="skip" href="#main">Lewati ke konten</a>
  <AppHeader />
  <main id="main" tabindex="-1"><RouterView /></main>
  <AppFooter />
  <WaButton class="fab" :message="messages.umum">WhatsApp</WaButton>
</template>
