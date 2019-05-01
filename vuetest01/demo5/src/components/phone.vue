<template>
    <div>
        <h1> 【手机】批发市场 </h1>
        <router-link :to="{name:'phone.huawei'}"> 华为 </router-link>
        <router-link :to="{name:'phone.vivo'}"> vivo </router-link>
        <router-link :to="{name:'phone.oppo'}"> oppo </router-link>
        <router-link :to="{name:'phone.mi'}"> 小米 </router-link>
        <router-view class="huawei"></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>

</style>
