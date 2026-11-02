import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './assets/main.css'

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/layanan', component: () => import('./pages/Layanan.vue') },
  { path: '/proyek', component: () => import('./pages/Proyek.vue') },
  { path: '/tentang', component: () => import('./pages/Tentang.vue') },
  { path: '/kontak', component: () => import('./pages/Kontak.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFound.vue') },
]

export const createApp = ViteSSG(App, {
  routes,
  base: import.meta.env.BASE_URL,
  scrollBehavior: (to, from, saved) =>
    saved || (to.hash ? { el: to.hash, top: 80, behavior: 'smooth' } : { top: 0 }),
})
