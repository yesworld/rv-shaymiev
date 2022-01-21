// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'

// WindiCss
import '~/plugins/windicss'
// vue3-carousel
import 'vue3-carousel/dist/carousel.css'
import router from '~/plugins/router'
import i18n from '~/plugins/i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
