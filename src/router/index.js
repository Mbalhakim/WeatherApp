import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testapi from "@/views/Testapi";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
    path: '/test',
    name: 'test-api',
    component: Testapi
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
