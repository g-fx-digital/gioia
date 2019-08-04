// Import Vue
import Vue from 'vue'
import Router from 'vue-router'

// Import components
// WordPress
import MainPage from './components/wp/MainPage'
import Page from './components/wp/Page'
import Post from './components/wp/Post'
// WooCommerce
import Shop from './components/wc/Shop'
import Product from './components/wc/Product'
import Chechout from './components/wc/Chechout'

// Usage
Vue.use(Router)

const router = new Router({
    routes: [
        // WordPress
        {
            path: "/",
            name: "MainPage",
            component: MainPage
        },
        {
            path: "/:year/:month/:day/:postSlug",
            name: "Post",
            component: Post
        },
        {
            path: "/:pageSlug",
            name: "Page",
            component: Page
        },
        // WooCommerce
        {
            path: "/shop",
            name: "Shop",
            component: Shop
        },
        {
            path: "/product/:productSlug",
            name: "Product",
            component: Product
        },
        {
            path: "/checkout",
            name: "Checkout",
            component: Chechout
        }
    ],
    mode: history,
    base: "",
})

export default router
