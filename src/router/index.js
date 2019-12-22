import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/camera',
    name: 'camera',
    component: () => import(/* webpackChunkName: "camera" */ '../views/Camera.vue')
  },
  {
    path: '/geolocation',
    name: 'geolocation',
    component: () => import(/* webpackChunkName: "camera" */ '../views/Geolocation.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "camera" */ '../views/Form.vue')
  },
]

const router = new VueRouter({
  // Commented. Fallback to hashes for Cordova to compile
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
