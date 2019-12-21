// 对axios 进行封装
import axios from 'axios'
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
}, function () {
  // 失败时执行 状态码 不是200 或者201/204
})
export default axios
