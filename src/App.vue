<template>
    <v-app id="inspire">
        <navbar></navbar>
        <v-content>
            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-content>
        <foot></foot>
    </v-app>
</template>

<script>
// Components
import Navbar from '@/components/template/Navbar'
import Footer from '@/components/template/Footer'
export default {
    data () {
        return {
            tab: []
        }
    },
    components: {
        navbar: Navbar,
        foot: Footer
    }
}
</script>
