// 权限拦截 导航守卫
import router from '../router'
// 全局守卫
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    // 经行权限判断 判断有无token 有的话 放过 没有回到登录页面
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()// 直接放过
    } else {
      next('/login')// 强制跳转到登陆页面
    }
  } else {
    next()// 直接放行
  }
  // next() 直接放行
})
