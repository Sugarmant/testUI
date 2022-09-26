import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    esModule: false,
    mode: 'hash',
    history: createWebHashHistory(),
    routes: [
        {path:'/button',component:()=>import('./button.vue')},
        {path:'/tabs',component:()=>import('./tabs.vue')},
        {path:'/tree',component:()=>import('./tree.vue')},
        {path:'/steps',component:()=>import('./steps.vue')},

    ]
})

export default router