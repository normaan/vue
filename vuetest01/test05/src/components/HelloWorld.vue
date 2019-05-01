<template>
    <div class="hello">
        <button @click="next">前进</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {

            }
        },
        methods: {
            next() {
                this.$router.go(1)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    ul {
        list-style-type: none;
    }

    li {
        display: inline-block;
    }

</style>
