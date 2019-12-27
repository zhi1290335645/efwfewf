import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
// import BreadCrumb from './common/bread-crumb'
import BreadCrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor' // 引入了quill组件
import CoverImage from './publish/cover-image'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 全局注册
    Vue.component('layout-header', layoutHeader)// 全局注册
    Vue.component('bread-crumb', BreadCrumb)// 全局注册
    Vue.component('quill-editor', quillEditor) // 全局注册富文本编辑器
    Vue.component('cover-image', CoverImage) // 注册一个封面组件
  }
}
