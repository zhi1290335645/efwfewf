import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less' // 引入初始化
import axios from 'axios'
import Component from './components/index'
import ElementUI from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值黑马头条的默认地址

Vue.config.productionTip = false
Vue.prototype.$axios = axios // 赋值给全局对象
Vue.use(ElementUI)
Vue.use(Component)// 组测全局组件对象
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
