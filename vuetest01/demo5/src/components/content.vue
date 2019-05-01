<template>
    <div>
        <h2> 主体内容 </h2>
        <hr>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>

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

        <hr>
        <mt-header title="多个按钮">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <mt-button @click="handleClose">关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <hr>
        <!--
                <router-link :to="{name:'phone'}"> 手机类目 </router-link>
                <router-view class="phone"></router-view>
                <hr>
                <ol>
                    <li v-for="(item,index) in banner" :key="index">
                        <img v-lazy="item" :src="item.picUrl" width="200" alt="">
                    </li>
                </ol>
                <hr>

                <hr>-->
        <button @click="send"> 发起请求</button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                banner: [],
                activeName: '',
                dialogVisible: false
            }
        },
        methods: {
            handleClick() {
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            send() {
                let php = 'vue.php';
                let title = 'banner1';
                let url = php + '?title=' + title

                Toast('提示信息');

                /*this.$ajax.get('http://47.96.29.109/vueProject/'+url)
                    .then((res)=>{
                        console.log(res.data)
                    })*/
                // 分发

                this.$ajax.all([
                    this.$ajax.get('vue.php?title=banner'),
                    this.$ajax.get('vue.php?title=banner'),
                    this.$ajax.get('vue.php?title=banner'),
                ])
                    .then(this.$ajax.spread((res1, res2, res3) => {
                        console.log(res1.data)
                        console.log(res2.data)
                        console.log(res3.data)
                    }))
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        created() {
                /*  this.$.get('http://47.96.29.109:6333/users')
                      .then((res)=>{
                          //console.log( JSON.parse(res) )
                      });*/

            /* this.$ajax.get('http://47.96.29.109/vueProject/vue.php?title=banner')
                 .then((res)=>{
                     //console.log( res.data );
                     this.banner = res.data
                 })*/
        }
    }
</script>

<style scoped>
    ol {
        width: 600px;
    }

    ol li {
        float: left;
    }
</style>
