import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@assets/styles/globals.scss'
import App from './App.vue'
import router from './router.ts'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
