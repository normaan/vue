<template>
    <div>
        <h2> 商品页面 </h2>
        <button @click="prev"> 返回上一级 </button>
        <button @click="nav"> 编程导航 </button>
    </div>
</template>
<script>
    export default {
        methods:{
            prev(){
                this.$router.go(-1)
            },
            nav(){
                this.$router.push({name:'HelloWorld'})
            }
        }
    }
</script>

<style>

</style>
