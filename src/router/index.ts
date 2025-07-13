import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatsView from '@/views/StatsView.vue'
import LoginView from '@/views/LoginView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/stats', name: 'stats', component: StatsView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
