<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ photos: Array, interval: { type: Number, default: 6000 } })
const idx = ref(0)
const bad = reactive(new Set()) // foto yang gagal dimuat dilewati
let timer

const ok = () => props.photos.map((_, i) => i).filter((i) => !bad.has(i))
function next() {
  const l = ok()
  if (l.length < 2) return
  idx.value = l[(l.indexOf(idx.value) + 1) % l.length]
}
function restart() { clearInterval(timer); timer = setInterval(next, props.interval) }
function go(i) { idx.value = i; restart() }
function fail(i) { bad.add(i); if (idx.value === i) next() }

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) restart()
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="hs" aria-hidden="true">
    <img v-for="(p, i) in photos" :key="p" :src="p" alt="" :class="{ on: i === idx }" :fetchpriority="i === 0 ? 'high' : undefined" @error="fail(i)">
  </div>
  <div v-if="ok().length > 1" class="hs-dots">
    <button v-for="i in ok()" :key="i" :class="{ on: i === idx }" :aria-label="'Foto ' + (i + 1)" @click="go(i)" />
  </div>
</template>
