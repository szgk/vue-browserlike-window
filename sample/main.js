import Vue from 'vue'
import App from './app.vue'
import VBWindow from '../dist'

Vue.use(VBWindow)

window.onload = function () {
  new Vue({
    data: { a: 'hello' },
    render: h => h(App)
  }).$mount('#app')
}
