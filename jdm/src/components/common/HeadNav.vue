<template>
    <div>
        <header>
            <div @click="goBack">
                <router-link :to="{name: ''}" class="iconfont icon-p-zuo">返回</router-link>
            </div>
            <span>{{ title }}</span>
            <div @click="more">
                <router-link :to="{name: ''}" class="iconfont icon-diandan"></router-link>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "HeadNav",

        props: ['title'],
        methods: {
            // 编程式导航
            goBack() {
                // 返回上一步
                this.$router.push({
                    path: '/index'
                })
            },
            // 更多
            more() {

            }
        }
    }
</script>

<style scoped lang="less">
    @rem: 64rem;

    header {
        height: 80/@rem;
        background: #F55652;
        color: white !important;
        font-size: 30/@rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 2/@rem;
        text-align: center;
        line-height: 80/@rem;

        div a {
            display: block;
            width: 2rem;
            height: 100%;
            color: white !important;
        }
    }
</style>