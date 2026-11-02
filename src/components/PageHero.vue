<script setup>
defineProps({ title: String, lead: String })
</script>

<template>
  <section class="dk page-hero"><div class="w"><h1>{{ title }}</h1><p>{{ lead }}</p></div></section>
</template>
