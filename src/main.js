// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'jquery-slimscroll'
import 'jquery-ui/ui/widgets/sortable.js'

import 'admin-lte'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'chart.js'
import 'font-awesome/css/font-awesome.min.css'
// import 'bootstrap3-wysihtml5-bower/dist/amd/bootstrap3-wysihtml5.all.js'

import Vue from 'vue'
import store from './lib/sotre'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'

Vue.prototype.$bus = EventBus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
