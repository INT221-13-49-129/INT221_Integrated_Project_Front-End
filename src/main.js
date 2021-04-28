import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseProduct from './components/BaseProduct'

const app = createApp(App)
app.component('base-product', BaseProduct)
app.use(router).mount('#app')
