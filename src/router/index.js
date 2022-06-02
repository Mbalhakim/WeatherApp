import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SportsView from "@/views/SportsView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },





    {
        path: '/sports',
        name: 'sports',
        component: SportsView
    },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
