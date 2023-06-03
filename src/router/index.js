import { createRouter, createWebHistory } from "vue-router"

import HomeComponent from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/Favor',
      name: 'favor',
      component: () => import('../views/favor/Favor.vue')
    },
    {
      path: '/Order',
      name: 'order',
      component: () => import('../views/order/Order.vue')
    },
    {
      path: '/Message',
      name: 'message',
      component: () => import('../views/message/Message.vue')
    },
    {
      path: '/City',
      name: 'city',
      component: () => import('../views/city/City.vue'),
      meta: {
        hiddenTabBar: true
      }
    },
  ]
})

export default router