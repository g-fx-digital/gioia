// Import Vue
import Vue from 'vue'
import Router from 'vue-router'

// Usage
Vue.use(Router)

// Import routes:
import wc from './wc'
import wp from './wp'

const routes = [].concat(wp, wc)

const router = new Router({
    routes,
    base: "",
    mode: 'history'
})

export default router
