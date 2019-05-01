<template>
    <div id="app">
        <router-link :to="{name:'goods'}">商品</router-link>
        <router-link :to="{name:'news'}">新闻</router-link>
        <hr>
        <router-view class="abc" name="h"></router-view>
        <router-view class="abc"></router-view>
        <router-view class="abc" name="f"></router-view>
        <hr>
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

    .abc {
        border: 1px dashed purple;
    }
</style>
