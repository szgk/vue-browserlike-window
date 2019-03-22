import chromeWindow from '@/components/vue-chrome-window.vue'
import chromeWindowItem from '@/components/vue-chrome-window-item.vue'

export default {
  install (Vue, options) {
    Vue.component('v-chrome-window', chromeWindow),
    Vue.component('v-chrome-window-item', chromeWindowItem)
  }
}
