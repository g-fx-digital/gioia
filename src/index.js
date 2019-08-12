// IMPORTS
// Required
import 'babel-polyfill'
// Importing Vue, axios and Vuetify
import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
// WooCommerce
//import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
//import api_wc from "@/credentials/woocommerce"
// Apollo GraphQL
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
// Import router
import router from './routes'

// Prototypes
// Axios
Vue.prototype.$http = axios.create({
    baseURL: 'http://192.168.1.8/'
})
// WordPress API
Vue.prototype.$API = function() {
    return '/wp-json/'
}
// WooCommerce API
//Vue.prototype.$WCAPI = new WooCommerceRestApi(api_wc)

//Usages
Vue.use(require('vue-resource'))
Vue.use(VueRouter)
Vue.use(VueApollo)

// Components and CSS
import App from "@/App.vue"
import '@/assets/css/styles.css'
/*
 * Edit the import below with another 
 * name if you want to change it!
 * Or just remove it...
 */
// import '@/assets/css/signal.min.css'

// Use the Apollo Client
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://192.168.1.8/graphql'
})
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// App
new Vue({
    el: "#app",
    router,
    vuetify,
    apolloProvider,
    render: h => h(App),
})