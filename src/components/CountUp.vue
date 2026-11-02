<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ to: Number })
const n = ref(props.to)
const el = ref(null)
// Angka menghitung naik saat terlihat di layar
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  n.value = 0
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / 1200, 1)
      n.value = Math.round(props.to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  io.observe(el.value)
})
</script>

<template><b ref="el">{{ n }}</b></template>
