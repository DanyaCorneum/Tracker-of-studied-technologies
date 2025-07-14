import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserStatsView from '@/views/UserStatsView.vue'
import ContactView from '@/views/ContactView.vue'
import UserView from '@/views/UserView.vue'
import StatsView from '@/views/StatsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/stats',
      component: UserStatsView,
      children: [
        { path: '/users', component: UserView },
        { path: '/stats', component: StatsView },
      ],
    },
    { path: '/contact', component: ContactView },
  ],
})

export default router
