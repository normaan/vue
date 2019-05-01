<template>
    <div id="app">
        <img src="./assets/logo.png" alt="">
        <div>
            <!--编程导航-->
            <router-link :to="{name: 'shop'}">商品页面</router-link>
        </div>

        <!--多视图-->
        <router-view name="one"></router-view>
        <router-view></router-view>
        <router-view name="two"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
