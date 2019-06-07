<template>
    <div class="index">

        <!--头部-start-->
        <header>
            <form>
                <span></span>
                <i class="iconfont icon-sousuo"></i>
                <input type="text" name="text" placeholder="PLUS DAY会员狂欢，抽专属神券199减149！">
            </form>
            <router-link class="login" :to="{name: 'login'}">登录</router-link>
        </header>


        <!--轮播图-->
        <div class="banner">
            <mt-swipe>
                <mt-swipe-item v-for="(item, index) in banner" :key="index">
                    <router-link :to="{name: 'banner'}">
                        <img v-lazy="item.ppath" alt="" width="1125" height="549">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>


        <!--菜单-->
        <nav>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/1.png" alt="" width="120" height="120"><span>京东超市</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/2.png" alt="" width="120" height="120"><span>全球购</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/3.png" alt="" width="120" height="120"><span>京东服饰</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/4.png" alt="" width="120" height="120"><span>京东生鲜</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/5.png" alt="" width="120" height="120"><span>排行榜</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/6.png" alt="" width="120" height="120"><span>充值缴费</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/7.png" alt="" width="120" height="120"><span>领京豆</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/8.png" alt="" width="120" height="120"><span>领券</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/1.png" alt="" width="120" height="120"><span>赚钱</span>
            </router-link>
            <router-link :to="{name: ''}">
                <img src="../../static/images/body-2/2.png" alt="" width="120" height="120"><span>物流查询</span>
            </router-link>
        </nav>

        <!-- 圣诞惊喜gif -->
        <section class="surprise">
            <img src="../../static/images/block/0.gif" alt="" width="1125" height="345">
        </section>

        <!--新人礼包-->
        <div class="newUser">
            <ul class="clearfix">
                <li v-for="(item, index) in newUser" :key="index">
                    <router-link :to="{name: ''}">
                        <img v-lazy="item.ppath" alt="" width="" height="">
                    </router-link>
                </li>
            </ul>
        </div>

        <!--爱生活过渡-->
        <section class="section3"></section>

        <!-- 商品-大图 -->
        <div class="content2 content2-2">
            <ul>
                <li>
                    <a href="">
                        <h3>美食诚</h3>
                        <p>低至五折</p>
                        <div class="pic">
                            <img src="../../static/images/content2/1.jpg" alt="" width="240" height="240" title="">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!--商品-小图-->
        <div class="content">
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <router-link :to="{name: ''}">
                        <h3>{{ item.itemTitle }}</h3>
                        <p>{{ item.price }}</p>
                        <img v-lazy="item.itemImg" alt="" width="240" height="240">
                    </router-link>
                </li>
            </ul>
        </div>


        <!--块区-轮播1-智能生活馆-->
        <div class="block">
            <mt-swipe :show-indicators="false" :auto="2000">
                <mt-swipe-item v-for="(item, index) in block2" :key="index">
                    <router-link :to="{name: 'block'}">
                        <img v-lazy="item.ppath" alt="" width="" height="">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>


        <!--逛商场-->
        <section class="section3 section3-1"></section>


        <!-- 商品-大图 -->
        <div class="content2 content2-2">
            <ul>
                <li>
                    <a href="">
                        <h3>美食诚</h3>
                        <p>低至五折</p>
                        <div class="pic">
                            <img src="../../static/images/content2/1.jpg" alt="" width="240" height="240" title="">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <!--商品-小图-->
        <div class="content">
            <ul v-for="(item, index) in items" :key="index">
                <li>
                    <router-link :to="{name: ''}">
                        <h3>{{ item.itemTitle }}</h3>
                        <p>{{ item.price }}</p>
                        <img v-lazy="item.itemImg" alt="" width="240" height="240">
                    </router-link>
                </li>
            </ul>
        </div>


        <!--块区-轮播2-猪年京东年货节-->
        <div class="block">
            <mt-swipe :show-indicators="false">
                <mt-swipe-item v-for="(item, index) in block" :key="index">
                    <router-link :to="{name: 'block'}">
                        <img v-lazy="item.ppath" alt="" width="" height="">
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>


        <!--特色推荐-->
        <section class="section3 section3-2"></section>


        <!--为您推荐-->
        <div class="nav-1">
            <ul class="clearfix">
                <li v-for="(item, index) in suggest" :key="index">
                    <router-link :to="{name: ''}">
                        <img :src="item.ppath" alt="" width="" height="" title="">
                        <p>虞珂婧衬衫女长袖2017秋新品宽松外套中长款</p>
                        <p>¥ 158.00</p>
                    </router-link>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                // banner
                banner: [],
                // 新人礼包
                newUser: [],
                // 商品
                items: [],
                // 区块轮播1
                block: [],
                // 区块轮播2
                block2: [],
                // 推荐
                suggest: []
            }
        },
        methods: {

        },
        // 钩子函数-前
        created() {

            // 获取图片地址
            this.axios.all([
                this.axios.get('picture/select?ptype=banner'),
                this.axios.get('picture/select?ptype=newUser'),
                this.axios.get('item/select?status=1'),
                this.axios.get('picture/select?ptype=block'),
                this.axios.get('picture/select?ptype=block2'),
                this.axios.get('picture/select?ptype=suggest')
            ])
                .then(this.axios.spread((banner, newUser, items, block, block2, suggest) => {
                    // banner图片
                    this.banner = banner.data.pictures
                    // 新人礼包
                    this.newUser = newUser.data.pictures
                    // 白条商城图
                    this.items = items.data.items
                    // 区块轮播1
                    this.block = block.data.pictures
                    // 区块轮播2
                    this.block2 = block2.data.pictures
                    // 推荐
                    this.suggest = suggest.data.pictures
                }))
                .catch((err) => {
                    console.log(err)
                })
        },
        // 钩子函数-后
        mounted() {

        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @rem: 64rem;

    .index {

        header {
            z-index: 99999;
            display: flex;
            position: fixed;
            width: 100%;
            height: 40px;
            background: rgba(225, 0, 0, .4);

            form {
                flex: 1;
                position: relative;
            }

            form input {
                width: 100%;
                height: 30px;
                margin: 4px 0 0 10/@rem;
                outline: none;
                background: #fff;
                border-radius: 15px;
                border: none;
                text-indent: 60px;
                font-size: 12px;
                line-height: 30/@rem;
                white-space: nowrap;
            }

            form span {
                display: inline-block;
                position: absolute;
                top: 13px;
                left: 18px;
                width: 19px;
                height: 14px;
                background: url("../../static/images/index/1.png") no-repeat center/cover;
            }

            form i {
                position: absolute;
                top: 24%;
                left: 42px;
                color: #ccc;
                font-size: 16px;
            }

            // 首页登录按钮
            .login {
                //flex: none;
                //margin-left: 10/@rem;
                margin: 0 10/@rem 0 20/@rem;
                background: transparent;
                //border: none;
                //outline: none;
                cursor: pointer;
                line-height: 39px;
                font-size: 16px;
                font-weight: bold;
                color: white;
            }
        }


        //轮播图
        .banner .mint-swipe {
            width: 100%;
            height: 312/@rem;
        }

        .banner .mint-swipe a img {
            width: 100%;
            height: 100%;
        }


        //菜单-nav
        nav {
            display: flex;
            flex-wrap: wrap;
            padding: 13.5/@rem 0 0 0;

            //控制每个小部分
            a {
                display: block;
                width: 20%;
                height: 105/@rem;
                padding: 2/@rem 0 10/@rem 0;
                text-align: center;
            }

            //控制图片
            a img {
                width: 57/@rem;
                height: 57/@rem;
            }

            //控制字体
            a span {
                display: block;
                margin-top: 8/@rem;
                white-space: nowrap;
                font-size: 12/@rem;
            }
        }

        // 圣诞惊喜gif
        .surprise {
            width: 640/@rem;
            height: 196/@rem;
            //background: url('../../static/images/body-3/8.gif') no-repeat center/cover;

            img {
                width: 100%;
                height: 100%;
            }
        }


        .newUser {
            width: 100%;
            margin-top: 10/@rem;

            ul li {
                float: left;
                width: 50%;
            }

            ul li:nth-child(2) {
                width: 25%;
            }

            ul li:nth-child(3) {
                width: 25%;
            }

            ul li a {
                display: block;
            }

            ul li a img {
                width: 100%;
                height: 100%;
            }
        }


        // 商品-小图
        .content {
            //display: flex;     弹性盒模型父级得加在ul上
            //flex-wrap: wrap;
            width: 100%;
            white-space: nowrap; //文本不换行
            background: #fff;

            //弹性盒模型
            ul {
                display: flex;
                flex-wrap: wrap;
            }

            // 单个li
            ul li {
                width: 25%;
                height: 204/@rem; //height: 204/@rem;因为有怪异盒模型,所以padding后不需要进行修改
                //border: 1px solid blue;
                box-sizing: border-box;
                text-align: left;
                border: 1px solid #eee;
            }

            // 整体a标签
            ul li a {
                display: block;
                padding: 15/@rem 20/@rem 5/@rem;
            }

            // 图片
            ul li a img {
                //display: block;
                width: 110/@rem;
                height: 110/@rem;
                //margin: auto;
            }

            // 每小个标题
            ul li a h3 {
                font-size: 28/@rem;
                font-weight: normal;
                color: transparent;
                background-image: linear-gradient(to right, rgb(255, 42, 42), rgb(241, 57, 210));
                -webkit-background-clip: text;
            }

            // 小标题的副标题
            ul li a p {
                font-size: 18/@rem;
            }

        }

        // 爱生活过渡区块
        .section3 {
            width: 327/@rem;
            height: 59/@rem;
            margin: 10/@rem auto 0;
            background: url("../../static/images/block/1.jpg") no-repeat center/cover;
        }

        //逛商场过渡区块
        .section3-1 {
            background-image: url("../../static/images/block/2.jpg");
        }


        // mini轮播区块
        .block .mint-swipe {
            width: 100%;
            height: 170/@rem;
            margin-top: 10/@rem;
        }

        .block .mint-swipe a img {
            width: 100%;
            height: 100%;
        }


        //商品-大图
        .content2{
            width: 100%;
            background: #fff;

        }
        //整体弹性盒模型
        .content2 ul{
            display: flex;
            flex-wrap: wrap;
        }
        //单个
        .content2 ul li{
            width: 50%;
            height: 204/@rem;
            padding: 15/@rem 20/@rem 20/@rem;
            box-sizing: border-box;
            text-align: left;
            border: 1px solid #eee;
        }
        .content2 ul li:nth-child(2){
            position: relative;
        }
        .content2 ul li a{
            display: block;
        }
        //标题
        .content2 ul li a h3{
            font-size: 28/@rem;
            font-weight: normal;
            color: #000;
        }
        //副标题
        .content2 ul li a p{
            font-size: 18/@rem;
            color: red;
        }
        //图片
        .content2 .pic{
            text-align: center;
        }
        .content2 .pic img{
            //display: block;
            //margin: auto;
            width: 110/@rem;
            height: 110/@rem;
        }
        //绝对定位小标签
        .content2 .picbut p{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 96px;
            height: 23px;
            background-image: linear-gradient(to right,rgb(255, 110, 0), rgb(255, 86, 68), rgb(255, 74, 125));
            line-height: 20px;
            font-size: 16px;
            color: #fff;
        }
        .content2 .picbut p span{
            vertical-align: middle;
        }
        .content2 .picbut p i{
            vertical-align: middle;
        }


        //中间内容2-2
        .content2-2 .pic{
            text-align: right;
        }
        //字体紫色
        .content2-2 ul li a p{
            color: #D663E1;
        }



        //特色推荐区块
        .section3-2{
            background-image: url("../../static/images/block/3.jpg");
        }



        // 为您推荐
        .nav-1{
            //width: 100%;
            margin-bottom: 100/@rem;
        }
        .nav-1 ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .nav-1 ul li{
            position: relative;
            width: 318/@rem;
            height: 413/@rem;
            margin-bottom: 4/@rem;
            //box-sizing: border-box;
            background: #fff;
            //border: 1.2/@rem solid #eee;  //间隙
        }
        .nav-1 ul li a{
            display: block;
        }
        //图片
        .nav-1 ul li a img{
            width: 100%;
            height: 318/@rem;
        }
        //价钱
        .nav-1 ul li a p:nth-of-type(2){
            margin: 0 5/@rem;
            font-size: 16/@rem;
            color: red;
        }

    }

</style>
