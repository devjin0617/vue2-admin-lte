// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'

import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'

import 'jquery-slimscroll'
import 'jquery-ui/ui/widgets/sortable.js'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/themes/base/datepicker.css'

import 'admin-lte'
import 'chart.js'

// import 'bootstrap3-wysihtml5-bower/dist/amd/bootstrap3-wysihtml5.all.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
