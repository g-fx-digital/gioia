// Required
import 'babel-polyfill'
// Importing Vue, axios and Vuetify
import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// WooCommerce
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import api_wc from "@/credentials/woocommerce"

// Import router
import router from './routes'

// Usage
Vue.prototype.$http = axios.create({
    // baseURL: document.domain
})
Vue.prototype.$API = function(api) {
    return '/wp-json/' // + this[api]
}
Vue.prototype.$WCAPI = new WooCommerceRestApi(api_wc)
Vue.use(require('vue-resource'))
Vue.use(VueRouter)

library.add([
    faUser, faGem
])

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Components and CSS
import App from "@/App.vue"
import '@/assets/css/styles.css'
/*
 * Edit the import below with another 
 * name if you want to change it!
 * Or just remove it...
 */
// import '@/assets/css/signal.min.css'

// App
new Vue({
    el: "#app",
    router,
    vuetify,
    render: h => h(App),
})