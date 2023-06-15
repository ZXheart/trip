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
    {
      path: '/Search',
      name: 'search',
      component: () => import('../views/search/Search.vue'),
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path: '/ProductDetails/:houseID',
      name: 'productDetails',
      component: () => import('../views/productDetails/ProductDetails.vue'),
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('../components/not-found/NotFound.vue'),
      meta: {
        hiddenTabBar: true
      }
    },
  ],
  scrollBehavior(to, from, savedPos) {
    if (to.path === '/') return savedPos
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router