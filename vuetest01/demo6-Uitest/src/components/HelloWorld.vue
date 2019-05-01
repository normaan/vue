<template>
    <div class="hello">
        <div>
            <section class="aui-refresh-content">
                <div class="aui-content">
                    <div id="demo">
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="refreshContainer">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="(item,index) in banner1" :key="index">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" :src="item.picUrl">
                        <div class="mui-media-body">
                            <p class='mui-ellipsis'>{{item.title}}</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
        <h1>{{ msg }}</h1>
        <hr>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <hr>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
        </el-row>
        <hr>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <hr>

        <el-switch
                v-model="value3"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <el-switch
                style="display: block"
                v-model="value4"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费">
        </el-switch>
        <div>
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>
        <hr>
        <div class="banner1">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item,index) in banner1" :key="index">
                    <img v-lazy="item.picUrl" :src="item.picUrl" width="100%" height="100%" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="banner1">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="(item,index) in banner1" :key="index">
                    <img v-lazy="item.picUrl" :src="item.picUrl" width="100%" height="100%" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <hr>
        <br>
        <hr>
        <div>
            <mt-button type="primary" @click="tip">primary</mt-button>
            <mt-button type="danger" @click="send">primary</mt-button>
        </div>
        <div>
            <mt-range
                    v-model="rangeValue"
                    :min="10"
                    :max="90"
                    :step="10"
                    :bar-height="5">
            </mt-range>
        </div>
        <div>
            <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div>
            <mt-swipe class="banner1" :auto="4000">
                <mt-swipe-item v-for="(item,index) in banner1" :key="index">
                    <img v-lazy="item.picUrl" :src="item.picUrl" width="600" height="300" alt="">
                </mt-swipe-item>

            </mt-swipe>
        </div>
        <div class="banner1">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" class="mint-tab-item is-selected">选项一</mt-tab-item>
                <mt-tab-item id="2">选项二</mt-tab-item>
                <mt-tab-item id="3">选项三</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1" class="mint-tab-item mint-tab-item is-selected">
                    <mt-cell v-for="n in 10" :title="'内容 ' + n"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <div class="banner1">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-collapse">
                    <a class="mui-navigate-right" href="#">面板1</a>
                    <div class="mui-collapse-content">
                        <p>面板1子内容</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="hello">
            <div id="refreshContainer2">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media" v-for="(item,index) in banner1" :key="index">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.picUrl">
                            <div class="mui-media-body">
                                <p class='mui-ellipsis'>{{item.title}}</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>


        <div>
            <section class="aui-refresh-content">
                <div class="aui-content">
                    <div id="demo">
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                        <div class="aui-card-list">
                            <div class="aui-card-list-header">
                                卡片布局头部区域
                            </div>
                            <div class="aui-card-list-content-padded">
                                内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                            </div>
                            <div class="aui-card-list-footer">
                                底部区域
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-home"></i>
                    <div class="aui-grid-label">首页</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-gear"></i>
                    <div class="aui-grid-label">设置</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-map"></i>
                    <div class="aui-grid-label">地图</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-calendar"></i>
                    <div class="aui-grid-label">日历</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-date"></i>
                    <div class="aui-grid-label">日期</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-cart"></i>
                    <div class="aui-grid-label">购物车</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-paper"></i>
                    <div class="aui-grid-label">发现</div>
                </div>
                <div class="aui-col-xs-3">
                    <i class="aui-iconfont aui-icon-video"></i>
                    <div class="aui-grid-label">视频</div>
                </div>
            </div>
        </section>

        <div class="aui-btn aui-btn-block aui-btn-warning" tapmode @click="showDefault">弹出loading样式（toast）
        </div>

        <div class="banner1">
            <wv-swipe :height="130" :autoplay="4000">
                <wv-swipe-item v-for="(item,index) in banner1" :key="index" style="background-color: #f44336">
                    <img v-lazy="item.picUrl" :src="item.picUrl" width="100%" height="100%" alt="">
                </wv-swipe-item>
            </wv-swipe>
        </div>

        <div>
            <wv-button type="primary" @click="topTips">页面主要操作 Normal</wv-button>
            <wv-button type="default">页面次要操作 Normal</wv-button>
            <wv-button type="warn">警告类操作 Normal</wv-button>
        </div>
        <div>
            <wv-checklist title="基本示例" :options="options" v-model="checkedItems"></wv-checklist>
        </div>


        <div>
            <wv-tabbar>
                <wv-tabbar-item to="/" is-on>
      <span slot="icon" style="display: inline-block; position: relative;">
          <span class="weui-tabbar__icon icon iconfont icon-gouwuche" src="icon.png" slot="icon"></span>
        <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge>
      </span>
                    微信
                </wv-tabbar-item>
                <wv-tabbar-item to="/tabbar">
                    <span class="weui-tabbar__icon icon iconfont icon-huiyuan" src="icon.png" slot="icon"></span> 通讯录
                </wv-tabbar-item>
                <wv-tabbar-item to="/">
      <span slot="icon" style="display: inline-block; position: relative;">
        <span class="weui-tabbar__icon icon iconfont icon-ditu" src="icon.png" slot="icon"></span>
        <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
      </span>
                    发现
                </wv-tabbar-item>
                <wv-tabbar-item to="/profile">
                    <span class="weui-tabbar__icon icon iconfont icon-weibiaoti2fuzhi12" src="icon.png"
                          slot="icon"></span>
                    我的
                </wv-tabbar-item>
            </wv-tabbar>
        </div>


        <section>
            <mu-appbar title="App Bar">
            </mu-appbar>
        </section>
        <hr>
        <br>
        <br>
        <br>
        <mu-divider/>
        <mu-linear-progress/>
        <br>
        <br><br>
        <br>
        <hr>
        <br>
        <br><br>
        <br>
        <mu-row>
            <mu-col width="20" tablet="20" desktop="20" >
                商品展示
            </mu-col>
            <mu-col width="20" tablet="20" desktop="20">
                商品详情
            </mu-col>
        </mu-row>
        <hr>
        <br>
        <div class="mu-ripple">
            <mu-ripple  class="demo-color-btn mu-ripple-demo demo-1" >
                Click Me
            </mu-ripple>
            <mu-ripple class="mu-ripple-demo demo-2" color="yellow" :opacity="0.7">
                Click Me
            </mu-ripple>
            <mu-ripple class="mu-ripple-demo demo-3" color="red" :opacity="0.5">
                Click Me
            </mu-ripple>
        </div>
        <mu-menu placement="top-start" open-on-hover>
            <mu-button color="primary">Open On Hover</mu-button>
            <mu-list slot="content">
                <mu-list-item button>
                    <mu-list-item-title>Refresh</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Send feedback</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Settings</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Help</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Sign out</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-menu>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import {Indicator} from 'mint-ui';

    var toast = new auiToast();
    import {TopTips} from 'we-vue'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                radio: '1',
                value3: true,
                value4: true,
                dialogVisible: false,
                banner1: [],
                rangeValue: 50,
                selected: true,
                options: [
                    {
                        label: '选项1',
                        value: 'value1'
                    },
                    {
                        label: '选项2',
                        value: 'value2'
                    },
                    {
                        label: '选项3',
                        value: 'value3'
                    },
                    {
                        label: '选项4（禁用）',
                        value: 'value4',
                        disabled: true
                    }
                ],
                checkedItems: ['value1', 'value3']
            }
        },
        created() {

            this.$Axios.get('vue.php?title=banner')
                .then((res) => {
                    this.banner1 = res.data
                })
        },
        mounted() {

            mui.init({
                pullRefresh: {
                    container: "#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
                    down: {
                        style: 'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
                        color: '#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
                        height: '50px',//可选,默认50px.下拉刷新控件的高度,
                        range: '100px', //可选 默认100px,控件可下拉拖拽的范围
                        offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
                        auto: true,//可选,默认false.首次加载自动上拉刷新一次
                        callback: function () {
                            console.log(123)
                            //mui('#refreshContainer').pullRefresh().endPulldown();
                        } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    }
                }
            });

            mui.init({
                pullRefresh: {
                    container: refreshContainer2,//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
                    up: {
                        height: 50,//可选.默认50.触发上拉加载拖动距离
                        auto: true,//可选,默认false.自动上拉加载一次
                        contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                        contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                        callback: function () {
                            console.log(456)
                            this.endPullupToRefresh(true);
                            //mui('#refreshContainer2').pullRefresh().endPulldown();
                        }  //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                    }
                }
            });

            var pullRefresh = new auiPullToRefresh({
                container: document.querySelector('.aui-refresh-content'),
                triggerDistance: 100
            }, function (ret) {
                if (ret.status == "success") {
                    setTimeout(function () {
                        var wrap = document.getElementById("demo")
                        var lis = wrap.querySelectorAll('.aui-card-list');
                        for (var i = lis.length, length = i + 10; i < length; i++) {
                            var html = '<div class="aui-card-list">' +
                                '<div class="aui-card-list-header">' +
                                '卡片布局头部区域' + (i + 1) + '' +
                                '</div>' +
                                '<div class="aui-card-list-content-padded">' +
                                '内容区域，卡片列表布局样式可以实现APP中常见的各类样式' +
                                '</div>' +
                                '<div class="aui-card-list-footer">' +
                                '底部区域' +
                                '</div>' +
                                '</div>';
                            wrap.insertAdjacentHTML('afterbegin', html);
                        }
                        pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
                    }, 1500)
                }
            })

        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
            },
            tip() {
                Toast('提示信息');
            },
            send() {
                // 显示加载图标
                this.$Axios.get('vue.php?title=banner')
                    .then((res) => {
                        this.banner1 = res.data
                        // 隐藏加载图标
                    })
            },
            showDefault() {
                toast.loading({
                    title: "加载中",
                    duration: 2000
                }, function (ret) {
                    console.log(ret);
                    setTimeout(function () {
                        toast.hide();
                    }, 3000)
                });
            },
            topTips() {
                TopTips({
                    message: '提示信息',
                    duration: 2000
                })

            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {

    }
    .mu-ripple{

        width: 500px;
        display: flex;
        justify-content: space-around;
        height: 200px;
        line-height: 200px;
        border: 1px solid;
    }
    .mu-ripple-demo{
        position: relative;
        flex: 1;
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .mui-table-view-cell {
        width: 100%;
    }

    .banner1 {
        width: 600px;
        height: 300px;
        margin: 50px auto;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


</style>
