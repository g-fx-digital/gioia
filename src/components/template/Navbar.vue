<template>
    <header>
        <v-navigation-drawer
            v-model="drawer"
            color="#FFFFFF"
            right
            src="/wp-content/themes/gioia/assets/hearts.jpg"
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
            src="/wp-content/themes/gioia/assets/hearts.jpg"
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

            <a href="/">
                <v-img 
                    max-height="120"
                    max-width="120"
                    v-bind:src="logo"
                    transition=false
                ></v-img>
            </a>
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
                    v-for="edge in menuItems.edges" :key="edge.node.id"
                    :to="edge.node.url">
                        {{ edge.node.label }}

                        <v-icon>{{ edge.node.title }}</v-icon>
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
import gql from 'graphql-tag'

export default {
    data() {
        return {
            logo: '/wp-content/themes/gioia/assets/loading.gif',
            menuItems: '<p>...</p>',
            drawer: null,
            items: []
        }
    },
    apollo: {
        menuItems: {
            query: gql`query navbar ($where: RootQueryToMenuItemConnectionWhereArgs) {
                menuItems(where: $where) {
                    edges {
                        node {
                            id
                            label
                            title
                            url
                        }
                    }
                }
            }`,
            variables () {
                return {
                    where: {
                        location: "MAIN_MENU"
                    }
                }
            },
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
    },
    props: {
        source: String,
    }
}
</script>

<style scoped>
   
</style>
