// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vuex
import vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
