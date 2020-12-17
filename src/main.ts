import Vue from 'vue'
import { registerFaIcons } from './icons'
import App from './App.vue'

// Register only the selected icons
registerFaIcons()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
