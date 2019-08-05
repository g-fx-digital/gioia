<template>
    <b-container>
        <navbar></navbar>
        <main>
            <router-view></router-view>
        </main>
        <foot></foot>
    </b-container>
</template>

<script>
// Components
import Navbar from '@/components/template/Navbar'
import Footer from '@/components/template/Footer'
export default {
    components: {
        navbar: Navbar,
        foot: Footer
    }
}
</script>
