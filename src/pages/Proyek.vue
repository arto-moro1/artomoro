<script setup>
import { ref, computed } from 'vue'
import { company } from '../data/company'
import { categories, projects } from '../data/projects'
import { galleryVideos } from '../data/media'
import Photo from '../components/Photo.vue'
import LazyVideo from '../components/LazyVideo.vue'
import PageHero from '../components/PageHero.vue'
import PartnerList from '../components/PartnerList.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useSeo } from '../composables/useSeo'

const ratios = ['4/3', '3/4', '1/1', '3/4', '4/3']
const hasCategories = projects.some((p) => p.category)
const active = ref('all')
const shown = computed(() => projects.filter((p) => active.value === 'all' || p.category === active.value))
const dlg = ref(null)
const cur = ref(0)
const open = (i) => { cur.value = i; dlg.value.showModal() }
const step = (d) => { cur.value = (cur.value + d + shown.value.length) % shown.value.length }

useSeo({
  title: 'Proyek dan Mitra | Arto Moro Engineering',
  description: 'Galeri pekerjaan fabrikasi, rekondisi, dan plant, serta daftar mitra dan wilayah kerja di Jawa, Kalimantan, Sulawesi, Sumatera, dan Nusa Tenggara.',
  path: '/proyek',
})
</script>

<template>
  <PageHero title="Proyek dan mitra" lead="Selain proyek di bawah ini, kami juga mengerjakan berbagai proyek lain berupa pesanan custom." />
  <section><div class="w">
    <h2>Galeri</h2>
    <div v-if="hasCategories" class="chips" role="group" aria-label="Filter kategori">
      <button v-for="c in categories" :key="c.key" class="chip" :aria-pressed="active === c.key" @click="active = c.key">{{ c.label }}</button>
    </div>
    <div class="mas">
      <button v-for="(p, i) in shown" :key="p.id" class="photo-btn" :aria-label="'Perbesar foto: ' + p.title" @click="open(i)">
        <Photo :src="p.image" :alt="p.alt" :ratio="ratios[i % ratios.length]" />
      </button>
    </div>
  </div></section>

  <section class="sf"><div class="w">
    <h2>Video pekerjaan</h2>
    <div class="vids"><LazyVideo v-for="v in galleryVideos" :key="v.src" :src="v.src" :title="v.title" /></div>
  </div></section>

  <section><div class="w">
    <h2>Mitra</h2><PartnerList />
    <h3 style="margin-top:40px">Wilayah kerja</h3>
    <div class="chips"><span v-for="r in company.regions" :key="r" class="chip" style="cursor:default">{{ r }}</span><span class="chip" style="cursor:default">Dan wilayah lainnya</span></div>
  </div></section>
  <CtaBanner />

  <dialog ref="dlg" class="lbx" aria-label="Galeri foto" @keydown.left="step(-1)" @keydown.right="step(1)" @click.self="dlg.close()">
    <img v-if="shown[cur]" :src="shown[cur].image" :alt="shown[cur].alt">
    <p v-if="shown[cur]">{{ shown[cur].caption || shown[cur].title }}</p>
    <div class="row">
      <button class="btn o" @click="step(-1)">Sebelumnya</button>
      <button class="btn o" @click="step(1)">Berikutnya</button>
      <button class="btn" @click="dlg.close()">Tutup</button>
    </div>
  </dialog>
</template>
