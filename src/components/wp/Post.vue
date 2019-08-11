<template>
    <b-container>
        <article v-bind:key="post.mainTitle">
            <b-img-lazy v-bind:src="post.source_url" fluid-grow></b-img-lazy>
            <h1>{{ post.title["rendered"] }}</h1>
            <p v-html="post.content['rendered']"></p>
        </article>
    </b-container>
</template>

<script>
export default {
    props: ['postSlug'],
    data() {
        return {
            post: {
                title: {
                    rendered: "..."
                },
                content: {
                    rendered: "..."
                },
                source_url: "..."
            }
        }
    },
    created() {
        this.$http.get(this.$API() + 'wp/v2' + '/posts' + '?slug=' + this.$route.params.postSlug + '&_embed')
        .then(res => {
            this.post = res.data[0]
            this.post.source_url = res.data[0]._embedded["wp:featuredmedia"][0].source_url
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>
