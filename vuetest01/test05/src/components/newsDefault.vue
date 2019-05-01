<template>
    <div>
        <h2>新闻默认页面</h2>

        <div>
            <!--嵌套路由-->
            <router-link :to="{name: 'phones'}">手机分类</router-link>
            <router-view></router-view>
        </div>

        <div>
            <ul v-for="(item, index) in msg" :key="index">
                <li>{{ item.listName }}</li>
            </ul>
        </div>
    </div>

    <!--Component template should contain exactly
        one root element. If you are using v-if on multiple
        elements, use v-else-if to chain them instead.-->
</template>

<script>
    export default {
        name: "newsDefault",
        data() {
            return {
                msg: []
            }
        },
        // 钩子函数
        created() {
            // axios
            this.axios.get('repertory/repertorySelect')
                .then((res) => {
                    console.log(res)
                    this.msg = res.data.code.list
                })
                .catch((err) => {
                    console.log(err)
                });

            // axios分发
            this.axios.all([
                this.axios.get('repertory/repertorySelect'),
                this.axios.get('repertory/repertorySelect'),
                this.axios.get('repertory/repertorySelect')
            ])
                .then(this.axios.spread((res1, res2, res3) => {
                    console.log(res1)
                    console.log(res2)
                    console.log(res3)
                }))
                .catch((err) => {
                    console.log(err)
                });

            // ajax
            this.$.get('http://127.0.0.1:8080/zw_repertory_layui/repertory/repertorySelect')
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>