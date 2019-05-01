<template>
    <div>
        <h2>手机分类</h2>
        <router-link :to="{name: 'huawei'}">华为手机分类</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "phones"
    }
</script>

<style scoped>

</style>