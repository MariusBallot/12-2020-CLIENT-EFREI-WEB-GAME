import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store/store"
import browser from 'browser-detect'

window.browser = browser()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')
