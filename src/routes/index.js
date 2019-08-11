// Import Vue
import Vue from 'vue'
import Router from 'vue-router'

// Import routes:
import wc from './wc'
import wp from './wp'

// Usage
Vue.use(Router)

const routes = [].concat(wp, wc)

const router = new Router({
    routes,
    base: "",
    mode: 'history'
})

export default router
