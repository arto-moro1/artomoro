<script setup>
import WaButton from './WaButton.vue'
import { messages } from '../utils/whatsapp'
</script>

<template>
  <section class="dk cta">
    <div class="w">
      <h2>Punya mesin yang perlu diperbaiki atau plant yang akan dibangun?</h2>
      <p>Sampaikan kebutuhan Anda, kami bantu susun penawarannya.</p>
      <div class="row"><WaButton :message="messages.umum">Minta penawaran via WhatsApp</WaButton></div>
    </div>
  </section>
</template>
