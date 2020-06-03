// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
import './myTheme/index.less'
import 'babel-polyfill'
import './lib/index'
import HttpRequest from '@/lib/axios'
import api from '@/api'
import 'ie-placeholder'
import ElementDataset from 'element-dataset'
ElementDataset()
/* eslint-disable no-new */
Vue.prototype.api = api
Vue.prototype.axios = new HttpRequest()
Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
