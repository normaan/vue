<template>
    <!--DOM元素获取-->
    <div id="app" ref="abc">
        <img src="./assets/logo.png" alt="">
        <!--组件使用-->
        <hd-nav title="主页头部导航"></hd-nav>

        <!--子组件通信-->
        <button @click="callB">A先打电话-父组件</button>
        <hr>
        <router-view></router-view>
        <!--vue-router路由-->
        <router-link to="/newsDetail">新闻详情页1</router-link>

        <!--router-link路由参数-->
        <router-link :to="{name: 'news2', query: {id: 2}}">新闻详情页2</router-link>
        <router-link :to="{name: 'news3', params: {id: 2}}">新闻详情页3</router-link>
        <hr>

        <!--组件使用-->
        <!--DOM元素获取-->
        <ft-nav tip="主页底部导航" ref="ft"></ft-nav>
    </div>
</template>

<script>
    // 引入连接
    import connect from './components/call/connector'
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        methods: {
            callB() {
                connect.$on('phone', function (msg) {
                    alert(msg)
                })
            }
        },
        created() {
            // 钩子函数, 组件创建后，数据已经完成 初始化，但DOM还未生成
        },
        mounted() {
            // 钩子函数, 各种数据渲染到dom上，浏览器全部加载完DOM window.onload
            // 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。
            this.$refs.abc.style.background = 'hotpink';
            this.$refs.ft.$el.style.background = 'skyblue';
        }
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
