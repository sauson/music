import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueRouter from "vue-router"
Vue.use(VueRouter)

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import './assets/index.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
