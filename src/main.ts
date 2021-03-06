import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { store, key } from './store'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
