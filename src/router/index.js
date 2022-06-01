import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from "@/views/News";
import SportsView from "@/views/SportsView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },




    {
        path: '/news',
        name: 'news',
        component: News
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
