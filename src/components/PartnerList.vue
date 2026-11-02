<script setup>
import { partners } from '../data/partners'
</script>

<template>
  <div class="partners"><div v-for="p in partners" :key="p.name">{{ p.name }}<small>{{ p.location }}</small></div></div>
</template>
