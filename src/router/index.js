import { createRouter, createWebHistory } from 'vue-router'

import CatalogPage from '../../src/pages/CatalogPage.vue'
import FruitDetail from '../../src/pages/FruitDetail.vue'
import CartPage from '../../src/pages/CartPage.vue'
import LoginPage from '../../src/pages/LoginPage.vue'
import RegisterPage from '../../src/pages/RegisterPage.vue'
import HistoryPage from '../../src/pages/HistoryPage.vue'
import LandingPage from '../../src/pages/LandingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/fruit/:id', component: FruitDetail },
  { path: '/cart', component: CartPage },
  { path: '/history', component: HistoryPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
