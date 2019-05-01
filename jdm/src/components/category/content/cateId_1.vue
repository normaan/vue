<template>
    <div>
        <!--标题广告-->
        <div>
            <img src="../../../../static/images/4.png" alt="" width="" height="">
        </div>

        <!--标题内容-->
        <header>{{ title.cateName }}</header>

        <!--分类详情内容-->
        <div>
            <ul>
                <!--<li v-for="(item, index) in content" :key="index">-->
                <!--<router-link :to="{name: '', query:{title: item}}">-->
                <!--<img v-lazy="item.picture" alt="" width="" height="">-->
                <!--<p>{{ item.cateName }}</p>-->
                <!--</router-link>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="#">-->
                        <!--<img src="../../../../static/images/1.png" alt="" width="" height="">-->
                        <!--<p>iPhone</p>-->
                    <!--</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="#">-->
                        <!--<img src="../../../../static/images/1.png" alt="" width="" height="">-->
                        <!--<p>iPhone</p>-->
                    <!--</a>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="#">-->
                        <!--<img src="../../../../static/images/1.png" alt="" width="" height="">-->
                        <!--<p>iPhone</p>-->
                    <!--</a>-->
                <!--</li>-->
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "cateId_1",
        data() {
            return {
                title: {},
                content: []
            }
        },
        // 监听
        watch: {
            // 路由变化
            '$route'() {
                if (this.$route.name === 'cateId_1') {
                    // 重新调用传输数据
                    this.changing()
                } else if (this.$route.name === 'cateId_4') {
                    this.changing()
                }
            }
        },
        methods: {
            changing(){
                // router-link传参
                this.title = this.$route.query.titles
            }
        },
        created() {
            // router-link传参
            /*this.title = this.$route.query.titles
            // 分类详情信息
            this.axios.get('')
                .then((res) => {
                    //console.log(res)
                    //this.content = res.data.content
                })
                .catch((err) => {
                    console.log(err)
                })*/
        }
    }
</script>

<style scoped>

</style>