import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = window.jQuery = require('jquery')

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
