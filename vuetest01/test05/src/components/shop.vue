<template>
    <div>
        <h2>商品页面</h2>
        <button @click="prev">返回上一级</button>
        <button @click="ProgrammaticNavigation">编程式导航</button>
    </div>
</template>

<script>
    export default {
        name: "shop",
        methods: {
            prev(){
                this.$router.go(-1)
            },
            ProgrammaticNavigation(){
                // 编程式导航
                this.$router.push({
                    name: 'HelloWorld'
                })
            }
        }
    }
</script>

<style scoped>

</style>