import './assets/styles/main.sass'
import Bootstrap from 'bootstrap/dist/js/bootstrap';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Bootstrap)

app.mount('#app')