import { createApp } from 'vue'
import { setupStore } from './store'
import router, { setupRouter } from './router' // 路由

import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus)

setupRouter(app) // 引入路由

setupStore(app) // 引入状态管理

app.mount('#app')
