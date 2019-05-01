<template>
    <div id="app" ref="abc">
        <hd-nav title="主页头部导航"></hd-nav>
        <hr>
        <button @click="callB"> A先打电话 - 父组件 </button>
        <hr>
        <a href="#/newsDetail">新闻详情页</a>
        <a href="#/goodsList">商品列表页</a>
        <hr>
        <router-link to="/newsDetail">新闻详情页</router-link>
        <hr>
        <!--项目都用此方式 -->
        <!--通过查询字符串-->
        <router-link :to="{name:'goods',query:{id:1}}">商品列表页</router-link>
        <!--通过路由传递路由参数-->
        <router-link :to="{name:'news',params:{id:2}}">新闻列表页</router-link>
        <hr>
        <router-view></router-view>
        <hr>
        <ft-nav ref="ft" tip="主页底部导航"></ft-nav>
    </div>
</template>

<script>
    import connect from './components/call/connector'
    export default {
        name: 'App',
        data(){
            return {

            }
        },
        methods:{
            callB(){
                connect.$on('phone',function (msg) {
                    console.log( msg )
                })
            }
        },
        created(){ // 组件创建后，数据已经完成 初始化，但DOM还未生成

        },
        mounted(){ // 各种数据渲染到dom上，浏览器全部加载完DOM window.onload
            //console.log( this.$refs.abc )
            //console.log(this)
            //console.log( this.$refs.ft.$el )
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
    }
</style>
