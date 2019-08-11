<template>
    <v-layout>
        <div v-bind:key="page.mainTitle">
            <h1>{{ page.title.rendered }}</h1>
            <p v-html="page.content.rendered"></p>
        </div>
    </v-layout>
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
            posts: [
                // todo
            ],
            slide: 0
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
