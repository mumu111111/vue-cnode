// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import formatDate from './helpers/formatDate'
Vue.use(formatDate)

Vue.config.productionTip = false
//全局组件
import Cheader from './components/header'
Vue.component('c-header', Cheader)

import Cmain from './components/main'
Vue.component('c-main', Cmain)

import CFooter from './components/footer'
Vue.component('c-footer', CFooter)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
