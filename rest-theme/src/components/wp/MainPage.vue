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
            page: [],
            posts: []
        }
    },
    created() {
        this.$http.get(this.$API() + 'gioia/v1' + '/front/')
        .then(res => {
            this.page = res.data
        })
    }
}
</script>
