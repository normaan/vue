<template>
    <div>
        <h2> 新闻详情页 </h2>
    </div>
</template>
<script>
    export default {
        created(){
            console.log( this.$route.params.id )
        }
    }
</script>

<style>

</style>
