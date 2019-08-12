<template>
    <main>
        <v-carousel>
            <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
            >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                    <v-layout
                    align-center
                    fill-height
                    justify-center
                    >
                        <div class="display-3">Slide {{ i + 1 }}</div>
                    </v-layout>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    <v-container>
        <div v-bind:key="page.mainTitle">
            <h1>{{ page.title.rendered }}</h1>
            <p v-html="page.content.rendered"></p>
        </div>
    </v-container>
    </main>
</template>

<script>
export default {
    data: function() {
        return {
            page: {
                title: {
                    rendered: "..."
                },
                content: {
                    rendered: "..."
                }
            },
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red darken-1',
                'orange',
            ],
        }
    },
    created() {
        this.$http.get(this.$API() + 'gioia/v1' + '/front/')
        .then(res => {
            this.page = res.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>
