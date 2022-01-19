// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.scss'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// vue3-carousel
import 'vue3-carousel/dist/carousel.css'

import router from '~/router'
const app = createApp(App)
app.use(router)
app.mount('#app')
