import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Add from '../views/Add.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  }
  ,
  {
    path: '/add/:productid',
    name: 'Add',
    component: Add,
    props: true,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  }
]
//:catchAll(.*) 404
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
