import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
// import BreadCrumb from './common/bread-crumb'
import BreadCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 全局注册
    Vue.component('layout-header', layoutHeader)// 全局注册
    Vue.component('bread-crumb', BreadCrumb)// 全局注册
  }
}
