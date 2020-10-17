import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Horses from '../views/Horses.vue'
import Services from '../views/Services.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/nos-chevaux',
    name: 'Horses',
    component: Horses
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
