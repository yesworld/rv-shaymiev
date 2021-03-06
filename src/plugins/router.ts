import { createRouter, createWebHistory } from 'vue-router'

import LongreadPage from '~/pages/longread.vue'

const routes = [
  { path: '/', component: LongreadPage },
]
const base = process.env.NODE_ENV === 'development' ? '/' : '/longreads/shaimiev'
export default createRouter({
  history: createWebHistory(base),
  routes,
})
