import { createRouter, createWebHashHistory } from 'vue-router'

import IndexView from '@/views/IndexView.vue'
import ClassificationView from '@/views/ClassificationView.vue'
import MakeMoneyView from '@/views/MakeMoneyView.vue'
import MyView from '@/views/MyView.vue'
// import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', redirect: '/index', component: IndexView },
  { path: '/index', component: IndexView },
  { path: '/class', component: ClassificationView },
  { path: '/money', component: MakeMoneyView },
  { path: '/my', component: MyView }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
