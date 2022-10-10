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
        {path:'/progress',component:()=>import('./progress.vue')},
        {path:'/select',component:()=>import('./select.vue')},
        {path:'/icon',component:()=>import('./icon.vue')},
        {path:'/row',component:()=>import('./row.vue')},
        {path:'/col',component:()=>import('./row.vue')},
        {path:'/radio',component:()=>import('./radio.vue')}

    ]
})

export default router