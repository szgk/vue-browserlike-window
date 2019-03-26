import Vue from 'vue'
import App from './app.vue'
import VuebrowserlikeWindow from '..'

Vue.use(VuebrowserlikeWindow)

window.onload = function () {new Vue({
  data: { a: 'hello' },
  render: h => h(App)
}).$mount('#app')
}
