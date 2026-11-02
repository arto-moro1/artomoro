<script setup>
import { ref, onMounted } from 'vue'
defineProps({ src: String, alt: { type: String, default: '' }, ratio: { type: String, default: '4/3' }, eager: Boolean })
const failed = ref(false)
const img = ref(null)
// Tangkap kegagalan muat yang terjadi sebelum hidrasi (mis. berkas belum dipindahkan)
onMounted(() => { if (img.value && img.value.complete && img.value.naturalWidth === 0) failed.value = true })
</script>

<template>
  <div class="photo" :style="{ aspectRatio: ratio }">
    <img v-if="!failed" ref="img" :src="src" :alt="alt" :loading="eager ? 'eager' : 'lazy'" decoding="async" @error="failed = true">
    <span v-else class="ph" role="img" :aria-label="alt">Foto menyusul</span>
  </div>
</template>
