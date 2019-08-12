<template>
    <v-container fluid>
        <article v-bind:key="page.mainTitle">
            <h1>{{ page != undefined ? page.title.rendered : error }}</h1>
            <p v-html="page != undefined ? page.content.rendered : error"></p>
        </article>
    </v-container>
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
            }
        }
    },
    created() {
        this.$http.get(this.$API() + 'wp/v2' + '/pages' + '?slug=' + this.$route.params.pageSlug)
        .then(res => {
            this.page = res.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>
