import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    esModule: false,
    mode: 'hash',
    history: createWebHashHistory(),
    routes: [
        {path:'/button',component:()=>import('./button.vue')}
    ]
})

export default router