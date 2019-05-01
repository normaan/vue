<template>
    <div id="app">

        <router-view></router-view>

        <!--底部导航栏-->
        <footer>
            <ul>
                <li>
                    <router-link :to="{name: 'index'}">
                        <i class="iconfont icon-jiudian"></i>
                        <p>首页</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'classify'}">
                        <i class="iconfont icon-xin"></i>
                        <p>分类</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'find'}">
                        <i class="iconfont icon-sousuo"></i>
                        <p>发现</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'shopCart'}">
                        <i class="iconfont icon-gouwuche"></i>
                        <p>购物车</p>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'my'}">
                        <i class="iconfont icon-ren"></i>
                        <p>我的</p>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>


<script>
    export default {
        name: 'App',
    }


    // 动态改变html的字体大小
    let html = document.querySelector('html');
    changeRem();
    window.addEventListener('resize',changeRem);
    function changeRem() {
        let width = html.getBoundingClientRect().width;
        //console.log( width );
        html.style.fontSize = width/10+ 'px';
    }
</script>


<style scoped lang="less">
    // @rem:750/10rem;
    @rem:64rem;

    #app {
        //height: 2000px;

        .ftActive {
            color: red !important; // 最高级
        }
        //max-width: 640/@rem;
        /*margin: auto;*/

        //底部固定定位导航栏
        footer{
            position: fixed;
            z-index: 999;
            bottom: 0;
            width: 100%;
            //height: 54px;
            background: #fff;

            ul {
                display: flex;
            }

            ul li {
                width: 20%;
            }

            ul li a {
                display: block;
                padding: 8% 0;
                text-align: center;
                font-size: 20px/@rem;
                //color: skyblue;
            }

        }
    }
</style>
