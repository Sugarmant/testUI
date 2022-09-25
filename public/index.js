import { createApp,h } from 'vue'
import App from './App.vue'
import TUI from '../src/index'
import router from './routers'


const app = createApp({
    render:()=>h(App)
})

app.use(TUI)
app.use(router)
app.mount('#app')
