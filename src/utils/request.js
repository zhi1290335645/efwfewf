// 对axios 进行封装
import axios from 'axios'
// 引用路由实例对象  ——————为了下面的403错误 跳转回登陆页面
import router from '../router'
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值头条的默认地址

axios.interceptors.request.use(function (config) {
  // 执行请求OK
  // config是axios的所有配置
  let token = window.localStorage.getItem('user-token')// 获取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config// 返回的config 就会用为新的请求选项进行请求
}, function () {
  // 执行请求失败
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决当data不存在时  then中读取数据报错问题
}, function (error) {
  // 所有的失败都会进入到第二个回调函数
  // 失败时执行 状态码 不是200 或者201/204
  let status = error.response.status// 获取状态码根据状态码惊醒提示
  // let configurl = error.comfig.url // 请求地址
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '登陆用户名或验证码错误'
      break
    case 403:
      // 如果同样的状态码 但是不同意思 =》需要通过请求地址判断是那个响应 请求地址+状态码 一起来判断怎么处理
      router.push('/login')
      //  'refreshtoken未携带或已过期' refreshtoken=>是用来换取token
      // thsi.$router=>路由实例对象
      break
    case 507:
      message = '服务器数据异常'
      break

    case 404:
      message = '手机号不正确'
      break
    case 401:// token过期
      router.push('/login')
      break
  }
  message({ type: 'warning', message: message })// 提示消息
})
export default axios
