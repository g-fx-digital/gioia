// Import components
// WooCommerce 
// import Product from '@/components/wc/Product'
// import Checkout from '@/components/wc/Checkout'
import Category from '@/components/wc/Category'

export default [
    // WooCommerce
    {
        path: "/categoria/:categorySlug",
        name: "Category",
        component: Category
    }, /*
    {
        path: "/product/:productSlug",
        name: "Product",
        component: Product
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Chechout
    } /* */
]
