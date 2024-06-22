import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/creators/:dataRef',
            name: 'creator',
            component: () => import('../views/Creators.vue')
        },
        {
            path: '/facebook',
            name: 'facebook',
            component: () => import('../views/Facebook.vue')
        },
        {
            path: '/instagram',
            name: 'instagram',
            component: () => import('/Users/matoyeng/Documents/GitHub/campaign-report-manager/templates/Instagram.vue')
        },
        {
            path: '/tiktok',
            name: 'tiktok',
            component: () => import('../views/Tiktok.vue')
        }
    ]
});

export default router;
