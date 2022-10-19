import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';

const router = createRouter({
    esModule: false,
    mode: 'hash',
    history: createWebHistory(),
    routes: [
        {path:'/',component:()=>import('./index.vue')},
        {path:'/button',component:()=>import('./button.vue')},
        {path:'/tabs',component:()=>import('./tabs.vue')},
        {path:'/tree',component:()=>import('./tree.vue')},
        {path:'/steps',component:()=>import('./steps.vue')},
        {path:'/progress',component:()=>import('./progress.vue')},
        {path:'/select',component:()=>import('./select.vue')},
        {path:'/icon',component:()=>import('./icon.vue')},
        {path:'/row',component:()=>import('./row.vue')},
        {path:'/col',component:()=>import('./row.vue')},
        {path:'/radio',component:()=>import('./radio.vue')},
        {path:'/typo',component:()=>import('./typography.vue')},
        {path:'/typography',component:()=>import('./typography.vue')},
        {path:'/card',component:()=>import('./card.vue')}
    ]
})

export default router