// Import components
// WordPress
import MainPage from '@/components/wp/MainPage'
import Page from '@/components/wp/Page'
import Post from '@/components/wp/Post'

export default [
    // WordPress
    // Main
    {
        path: "/",
        name: "MainPage",
        component: MainPage
    },
    {
        path: "/:year/:month/:day/:postSlug",
        component: Post,
        props: true
    },
    {
        path: "/:pageSlug",
        name: "Page",
        component: Page
    }, /* */
]   