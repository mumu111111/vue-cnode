// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Cheader from './components/header'
Vue.component('c-header', Cheader)

import Cmain from './components/main'
Vue.component('c-main', Cmain)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
