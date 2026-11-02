import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

// Animasi muncul halus saat scroll. Elemen yang sudah terlihat saat halaman dibuka tidak disembunyikan.
const LEAF = 'main .w > :not(.g3):not(.why):not(.stats):not(.partners):not(.mas):not(.steps):not(.vids), main .g3 > *, main .why > *, main .stats > *, main .partners > *, main .mas > *, main .steps > *, main .vids > *'

export function useReveal() {
  if (typeof window === 'undefined') return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let io
  const run = () => {
    if (reduce || !('IntersectionObserver' in window)) return
    io && io.disconnect()
    io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll(LEAF).forEach((el) => {
      if (el.closest('.hero, .page-hero') || el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      const i = Array.prototype.indexOf.call(el.parentElement.children, el)
      el.style.setProperty('--d', (i % 6) * 90 + 'ms')
      el.classList.add('rv')
      io.observe(el)
    })
  }
  const router = useRouter()
  onMounted(() => nextTick(run))
  router.afterEach(() => setTimeout(run, 80))
}
