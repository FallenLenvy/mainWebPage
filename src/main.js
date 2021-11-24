import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/vendors/normalize.min.css'
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/css/base.css'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
