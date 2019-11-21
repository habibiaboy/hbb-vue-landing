import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles-1.css'
import './assets/css/styles-2.css'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
