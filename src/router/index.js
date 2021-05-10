import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datos',
    name: 'Datos',
    /* component: Datos */
    component: () => import('../views/Datos.vue')
  },
  {
    path: '/graficos',
    name: 'Graficos',
    /* component: Graficos, */
    component: () => import('../views/Graficos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
