import Vue from 'vue'
import App from './app.vue'
import VueChromeWindow from '..'

Vue.use(VueChromeWindow)

window.onload = function () {new Vue({
  data: { a: 'hello' },
  render: h => h(App)
}).$mount('#app')
}
