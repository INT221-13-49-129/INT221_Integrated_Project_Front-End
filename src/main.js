import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseProduct from './components/BaseProduct'
import BasePageNumber from './components/BasePageNumber'

const app = createApp(App)
app.component('base-product', BaseProduct)
app.component('base-page-number', BasePageNumber)
app.use(router).mount('#app')
