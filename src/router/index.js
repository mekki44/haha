import Vue from 'vue'
import VueRouter from 'vue-router'
import topStreamers from '../views/topStreamers.vue'
import StreamView from '../views/StreamView.vue'
import Tubs from '../views/Tubs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'topStreamers',
    component: topStreamers
  },
  {
    path: '/streamview/:user_name',
    name: 'StreamView',
    component: StreamView
  },
  {
    path: '/tubs',
    name: 'Tubs',
    component: Tubs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
