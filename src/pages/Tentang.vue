<script setup>
import { company } from '../data/company'
import PageHero from '../components/PageHero.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Tentang Kami | Arto Moro Engineering',
  description: 'Profil Bengkel Las Bubut Arto Moro: berdiri sejak 2017 di Mojoagung, Jombang.',
  path: '/tentang',
})
</script>

<template>
  <PageHero title="Tentang kami" lead="Usaha fabrikasi, erection, maintenance, rekondisi, dan bongkar pasang plant untuk mesin industri dan pertambangan." />
  <section><div class="w">
    <h2>Data perusahaan</h2>
    <dl class="dt">
      <dt>Nama usaha</dt><dd>{{ company.name }}</dd>
      <dt>Bidang usaha</dt><dd>Fabrikasi, maintenance, rekondisi, dan bongkar pasang plant</dd>
      <dt>Berdiri</dt><dd>{{ company.founded }}</dd>
      <dt>Penanggung jawab</dt><dd>{{ company.owner }}</dd>
      <dt>Alamat</dt><dd>{{ company.address }}</dd>
      <dt>Wilayah kerja</dt><dd>{{ company.regions.join(', ') }}, dan wilayah lainnya</dd>
    </dl>
  </div></section>
  <section class="sf"><div class="w"><h2>Alur kerja</h2><ProcessTimeline /></div></section>
  <CtaBanner />
</template>
