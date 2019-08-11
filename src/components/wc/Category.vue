<template>
    <article>
        {{ getShop }}
        {{ shop }}
    </article>
</template>

<script>
export default {
    props: ['categorySlug'],
    data() {
        return {
            shop: {
                
            }
        }
    },
    computed: {
        getCategory: function(slug) {
            this.$WCAPI.get('products/categories')
                .then(res => {
                    for (category in res.data) 
                        if (category.name === slug) return category.id
                })
        },
        getShop: function() {
            this.$WCAPI.get('products/categories/18', {
                per_page: 20,
                //category: getCategory(categorySlug)
            })
            .then(res => {
                this.shop = res.data
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
    /*created() {
        this.$WCAPI.get('products/categories/18', {
            per_page: 20,
            //category: getCategory(categorySlug)
        })
        .then(res => {
            this.shop = res.data
            console.log(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, /* */
}
</script>