<script setup>
import { process } from '../data/process'
</script>

<template>
  <ol class="steps"><li v-for="s in process" :key="s">{{ s }}</li></ol>
</template>
