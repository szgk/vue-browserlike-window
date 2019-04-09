import browserlikeWindow from './components/vue-browserlike-window.vue'
import browserlikeWindowItem from './components/vue-browserlike-window-item.vue'

export default {
  install (Vue) {
    Vue.component('vb-window', browserlikeWindow)
    Vue.component('vb-window-item', browserlikeWindowItem)
  }
}
