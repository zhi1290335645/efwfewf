import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less' // 引入初始化
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值黑马头条的默认地址
Vue.prototype.$axios = axios // 赋值给全局对象
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
