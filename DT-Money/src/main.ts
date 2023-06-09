import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router';
import '@/styles/main.scss'
import App from '@/App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router).mount('#app');
