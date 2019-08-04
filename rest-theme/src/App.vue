<template>
    <div id="wp">
        <navbar></navbar>
        <main>
            <router-view></router-view>
        </main>
        <footer></footer>
    </div>
</template>

<script>
// Components
import Navbar from './components/template/Navbar'
import Footer from './components/template/Footer'
export default {
    components: {
        navbar: Navbar,
        footer: Footer
    }
}
</script>
