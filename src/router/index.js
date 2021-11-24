import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Item from '../views/Item.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:item',
    name: 'Item',
    // component: Item
    component: () => import(/* webpackChunkName: "Item" */ '../views/Item.vue'),
    beforeEnter (to, from, next) {
      const exists = ['rash_null'].find(item => item === to.params.item)
      if (exists) {
        next()
      } else {
        next({ name: '404' })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    // alias: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
