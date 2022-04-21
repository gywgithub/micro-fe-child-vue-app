import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('./components/HelloWorld.vue')
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('./components/HelloWorld.vue')
  },
  {
    path: '/child-vue',
    name: 'HomePage',
    component: () => import('./components/HelloWorld.vue')
  },
  {
    path: '/table1',
    name: 'TableOne',
    component: () => import('./components/Table1.vue')
  }
]

export default routes
