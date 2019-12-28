// 权限拦截 导航守卫
import router from '../router'
import progress from 'nprogress'
import 'nprogress/nprogress.css'
// 全局守卫
router.beforeEach(function (to, from, next) {
  progress.start() // 开启进度条
  // 拦截谁判断地址就写谁
  // 经行权限判断 判断有无token 有的话 放过 没有回到登录页面
  if (to.path.startsWith('/home')) {
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
// afterEach 关闭

router.afterEach(function () {
  progress.done()
  // setTimeout(() => progress.done(), 500) // 关闭进度条
})
