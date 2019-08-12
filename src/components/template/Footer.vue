<template>
    <v-footer
        color="red lighten-1"
        padless
    >
        <v-layout
            justify-center
            wrap
        >
            <v-btn
                color="white"
                text
                class="ma-2"
                href="/contacto"
            >
                <v-icon left>mdi-contact-mail</v-icon> Contacto
            </v-btn>
            <v-flex
                red
                lighten-2
                color="white"
                py-4
                text-center
                white--text
                xs12
            >
            {{ new Date().getFullYear() }} — <strong>Finee</strong>
            </v-flex>
        </v-layout>     
    </v-footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
