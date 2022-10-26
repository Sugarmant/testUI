import { createApp,h } from 'vue'
import App from './App.vue'
import TUI from '../src/index'
import router from './routers'
import '../src/style/index.less'
import 'highlight.js/styles/github.css';


const app = createApp({
    render:()=>h(App)
})

app.use(TUI)
app.use(router)
app.mount('#app')
