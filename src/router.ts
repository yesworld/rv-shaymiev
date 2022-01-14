import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '~/pages/index.vue'

const routes = [
  { path: '/', component: IndexPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
