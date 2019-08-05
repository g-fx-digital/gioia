<template>
    <b-container fluid>
        <article v-bind:key="post.mainTitle">
            <h1>{{ post.title.rendered }}</h1>
            <p v-html="post.content.rendered"></p>
        </article>
    </b-container>
</template>

<script>
export default {
    props: ['postSlug'],
    data() {
        return {
            post: '<p>Loading...</p>'
        }
    },
    created() {
        this.$http.get(this.$API() + 'wp/v2' + '/posts' + '?slug=' + this.$route.params.postSlug)
        .then(res => {
            this.post = res.data[0]
        })
    }
}
</script>
