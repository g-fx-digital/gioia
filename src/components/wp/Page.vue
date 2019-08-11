<template>
    <b-container fluid>
        <article v-bind:key="page.mainTitle">
            <h1>{{ page.title.rendered }}</h1>
            <p v-html="page.content.rendered"></p>
        </article>
    </b-container>
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
