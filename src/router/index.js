import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

Vue.use(VueRouter)
Vue.use(ElementUI)
const routes = [
  {

    path: '/',
    redirect: '/home'
  },
  {
    // 主页
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    // 登录页
    path: '/login',
    // name: 'login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about'
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
