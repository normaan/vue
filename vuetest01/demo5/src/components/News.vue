<template>
    <div>
        <h2> 新闻页面 </h2>
        <button @click="prev"> 返回上一级 </button>
    </div>
</template>
<script>
    export default {
        methods:{
            prev(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style>

</style>
