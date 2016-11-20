// https://milligram.github.io/
require('milligram/dist/milligram.min.css');

require('./directives/placeholders');

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
