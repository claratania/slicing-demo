import Vue from 'vue'
import App from './App.vue'
import Blue from '@blibli/dls'
import '@blibli/dls/dist/blue.min.css'

Vue.config.productionTip = false
Vue.use(Blue)
new Vue({
  render: h => h(App),
}).$mount('#app')
