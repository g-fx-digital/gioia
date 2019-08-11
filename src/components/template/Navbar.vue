<template>
    <header>
        <v-navigation-drawer
            v-model="drawer"
            color="#FFFFFF"
            right
            src="https://picsum.photos/1920/1080?random"
            absolute
            light
            temporary
        >
            <v-list
            dense
            nav
            class="py-0"
            >
                <v-list-item two-line>
                    <v-list-item-avatar>
                    <v-icon>mdi-cart</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>Mi carrito</v-list-item-title>
                    <v-list-item-subtitle>0 items</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                >
                    <v-list-item-icon>
                    <v-icon>mdi-{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
      </v-navigation-drawer>

        <v-app-bar
            
            color="#FFFFFF"
            light
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(255,255,255,.7), rgba(255,255,255,1)"
                ></v-img>
            </template>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-img 
                max-height="120"
                max-width="120"
                v-bind:src="logo"
            ></v-img>
            <v-spacer></v-spacer>
            

            <template v-slot:extension>
                <v-tabs
                    background-color="red"
                    centered
                    grow
                    dark
                    icons-and-text
                    show-arrows
                >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab 
                    v-for="item in main_menu" :key="item.id"
                    :to="item.url">
                        {{ item.title }}

                        <v-icon>{{ item.attr_title }}</v-icon>
                    </v-tab>
                </v-tabs>
            </template>
            <v-btn 
                icon 
                @click.stop="drawer = !drawer"
            >
                <v-icon>mdi-cart</v-icon>
            </v-btn>

        </v-app-bar>

    </header>
</template>

<script>
export default {
    data() {
        return {
            logo: '/wp-content/themes/gioia/assets/loading.gif',
            main_menu: '<p>...</p>',
            drawer: null,
            items: []
        }
    },
    created() {
        this.$http.get(this.$API() + 'gioia/v1' + '/logo/')
        .then(res => {
            this.logo = res.data
        })
        .catch(e => {
            console.log(e)
        })
        this.$http.get(this.$API() + 'gioia/v1' + '/mainMenu/')
        .then(res => {
            this.main_menu = res.data
        })
        .catch(e => {
            console.log(e)
        })
    },
    computed: {
        is_desktop() {
            const isDesktop = window.matchMedia("screen and (min-width: 1200px)")
            return isDesktop.matches
        }
    },
    props: {
        source: String,
    }
}
</script>

<style scoped>
   
</style>
