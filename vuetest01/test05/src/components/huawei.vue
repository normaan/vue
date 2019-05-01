<template>
    <div>
        <h2>华为手机分类</h2>
        <router-link :to="{name: 'honor'}">华为手机分类</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "huawei"
    }
</script>

<style scoped>

</style>