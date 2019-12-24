import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import Home2 from '../views/home/home'
// import Comment from '../views/comment'

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
    component: Home,
    children: [{
      path: '', // 二级路由什么都不写  作为显示组件
      component: Home2
    }, {
      // 二级路由表
      path: 'comment',
      component: () => import('../views/comment')// 按需加载
    }, {
      path: 'material', // 素材列表
      component: () => import('../views/material') // 按需加载
    }]

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
