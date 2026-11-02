<script setup>
import { ref, onMounted } from 'vue'
import { media } from '../data/media'

const play = ref(false)
// Video hanya dimuat bila pengguna tidak meminta hemat data atau gerak minimal
onMounted(() => {
  const saveData = navigator.connection && navigator.connection.saveData
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  play.value = !saveData && !reduce
})
</script>

<template>
  <img class="hero-media" :src="media.heroPoster" alt="" fetchpriority="high" @error="$event.target.remove()">
  <video v-if="play" class="hero-media" :src="media.heroVideo" :poster="media.heroPoster" autoplay muted loop playsinline aria-hidden="true" @error="$event.target.remove()" />
</template>
