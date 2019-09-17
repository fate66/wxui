/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './router'
import * as wxui from '../src/index.js'
import '../src/assets/reset.css'
import App from './components/app'

Vue.use(wxui)
Vue.use(VueRouter)

const router = new VueRouter(configRouter)
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
