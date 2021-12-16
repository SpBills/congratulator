import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard.vue";
import Main from "../views/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Oops!',
    component: Main
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/:pageName',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/:pageName',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
