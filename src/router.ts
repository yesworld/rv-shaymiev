import { createRouter, createWebHistory } from 'vue-router'

import LongreadPage from '~/pages/longread.vue'

const routes = [
  { path: '/', component: LongreadPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
