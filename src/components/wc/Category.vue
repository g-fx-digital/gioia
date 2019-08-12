<template>
    <v-container
      grid-list-md
      pa-4
    >
        <v-layout
            wrap
        >
            <v-flex
                v-for="edge in products.edges" 
                :key="edge.node.id"
                xs12 md4 lg3
            >
                <v-card>
                    <v-img
                        height="200px"
                        :src="edge.node.image.sourceUrl"
                    >
                        <v-card-title>{{ edge.node.name }}</v-card-title>
                    </v-img>
                    <v-card-text>
                        {{ edge.node.price }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-share</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data () {
        return {
            products: [],
            slug: this.$route.params.categorySlug
        }
    },
    apollo: {
        products: {
            query: gql`query products ($where: RootQueryToProductConnectionWhereArgs) {
                products(where: $where) {
                    edges {
                        node {
                            id
                            name
                            price
                            image {
                                sourceUrl
                            }
                        }
                    }
                }
            }`,
            variables () {
                return {
                    where: {
                        categoryName: this.$route.params.categorySlug
                    }
                }
            },
        }
    },
    
}
</script>