<script setup>
import { services } from '../data/services'
import Photo from '../components/Photo.vue'
import PageHero from '../components/PageHero.vue'
import WaButton from '../components/WaButton.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useSeo } from '../composables/useSeo'

useSeo({
  title: 'Layanan | Arto Moro Engineering',
  description: 'Fabrikasi dan erection, maintenance dan rekondisi, serta bongkar pasang plant second untuk mesin industri dan pertambangan.',
  path: '/layanan',
  jsonLd: services.map((s) => ({
    '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.summary,
    provider: { '@type': 'LocalBusiness', name: 'Bengkel Las Bubut Arto Moro' }, areaServed: 'Indonesia',
  })),
})
</script>

<template>
  <PageHero title="Layanan" lead="Tiga lini pekerjaan untuk mesin industri dan pertambangan." />
  <section style="padding-top:24px"><div class="w">
    <article v-for="s in services" :id="s.id" :key="s.id" class="svc">
      <div><h2>{{ s.title }}</h2><p>{{ s.summary }}</p><WaButton :message="s.waMessage">{{ s.cta }}</WaButton></div>
      <div>
        <h3>Lingkup pekerjaan</h3>
        <ul class="sc"><li v-for="i in s.scope" :key="i">{{ i }}</li></ul>
        <Photo :src="s.image" :alt="s.title" />
      </div>
    </article>
  </div></section>
  <section class="sf"><div class="w"><h2>Alur kerja</h2><ProcessTimeline /></div></section>
  <CtaBanner />
</template>
