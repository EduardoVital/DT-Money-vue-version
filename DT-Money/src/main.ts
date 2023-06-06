import { createApp } from 'vue'
import router from '@/router';
import '@/styles/main.scss'
import App from '@/App.vue'

const app = createApp(App)
app.use(router).mount('#app');
