<script setup>
import { ref, onMounted } from 'vue'
defineProps({ src: String, title: String })
const el = ref(null)
const loaded = ref(false)
// Muat video hanya saat sudah terlihat di layar
onMounted(() => {
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { loaded.value = true; io.disconnect() } }, { rootMargin: '200px' })
  io.observe(el.value)
})
</script>

<template>
  <video ref="el" class="vid" controls playsinline preload="metadata" :aria-label="title" :src="loaded ? src + '#t=0.5' : undefined" />
</template>
