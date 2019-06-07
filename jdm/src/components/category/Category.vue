<template>
    <div class="classify clearfix">
        <!--公共标题-->
        <head-nav title="分类"></head-nav>

        <!--左侧栏-->
        <div class="leftCol">
            <ul>
                <li v-for="(item, index) in categories" :key="index">
                    <!--:to=name字符串拼接为了匹配路由-->
                    <router-link :to="{name: 'cateId_'+item.cateId, query:{titles: item} }">{{ item.cateName }}</router-link>
                </li>
            </ul>
        </div>

        <!--右侧栏-->
        <div class="rightCol">
            <!--<default-page></default-page>-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classify",
        data() {
            return {
                // 商品种类列表
                categories: [],
            }
        },
        created() {
            this.axios.get('category/select?pId=0')
                // 商品种类列表
                .then((res) => {
                    this.categories = res.data.categories
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
</script>

<style scoped lang="less">
    @rem: 64rem;

    .classify {
        width: 100%;

        .actionBg {
            background-color: white;
            color: red;
        }

        .leftCol {
            float: left;
            width: 25%;
            text-align: center;
            background-color: rgb(248, 248, 248);
        }

        .leftCol ul li {
            width: 100%;

            a {
                display: block;
                padding: 15% 0;
                font-size: 14px;
            }
        }

        .rightCol {
            float: right;
            width: 75%;
            height: 1000/@rem;
            background-color: white;
        }
    }

</style>
