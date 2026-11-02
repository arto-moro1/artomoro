<script setup>
import { waLink } from '../utils/whatsapp'
defineProps({ message: { type: String, default: '' }, outline: Boolean })
</script>

<template>
  <a class="btn wa" :class="{ o: outline }" :href="waLink(message)" target="_blank" rel="noopener"><slot /></a>
</template>
