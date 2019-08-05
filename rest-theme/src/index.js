// Importing Vue, axios and Bootstrap
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

// Import router
import router from './routes'

// Usage
Vue.prototype.$http = axios.create({
    // baseURL: document.domain
})
Vue.prototype.$API = function(api) {
    return '/wp-json/' // + this[api]
}
Vue.use(require('vue-resource'))
Vue.use(VueRouter)
Vue.use(BootstrapVue)

// Components and CSS
import App from "@/App.vue"
import '@/assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// App
new Vue({
    el: "#app",
    router,
    render: h => h(App),
})