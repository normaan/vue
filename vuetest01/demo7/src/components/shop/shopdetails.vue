<template>

    <div class="mb ">
        <head-nav title="商品详情"></head-nav>
        <div class="shopdedatils" v-if="newsDetails">
            <img :src="newsDetails.imgUrl" width="80%" >
            <h3 v-text="newsDetails.des"></h3>
            <p class="money">
                <span class="symbol" v-text="newsDetails.symbol"></span>
                <span class="price" v-text="newsDetails.price"></span>
            </p>
            <p class="courier">快递：包邮 <span class="fr" v-text="newsDetails.alreadyPaid"></span></p>
            <div class="buyNum clearFix">
                <p class="fl buyfont">购买数量</p>
                <p class="addNum fr">
                    <a href="javascript:;" class="reduce" @click="shopReduce">-</a>
                    <a href="javascript:;" class="num">{{num}}</a>
                    <a href="javascript:;" class="add" @click="shopAdd">+</a>
                </p>
            </div>
            <div class="buy">
                <a href="javascript:;" class="addCart" @click="addCart">加入购物车</a>
                <router-link :to="{name:'shopcart'}" class="nowBuy" @click="nowBuy">立即购买</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                newsDetails:{},
                num:0,
                index:0
            }
        },
        created(){
            // 点击对应的轮播图 显示对应的详情
            //this.index = this.$route.params.id;

            let index = this.$route.query.id;
            if(index){
                let file = 'vue.php';
                let title = this.$route.query.title;
                let url = file + '?title=' + title + index;
                this.$ajax.get(url)
                    .then(res=>{
                        //console.log(res.data[index]);
                        res.data['id'] = index;
                        this.newsDetails = res.data;
                        //console.log(this.newsDetails);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
            }
            shopTools.cartCount = this.$store.state.cartCount;
        },
        methods:{
            addCart(){  // 加入购物车
                //console.log('开始添加购物车')
                if( this.num !=0 ){
                    //console.log( this.num )
                    connect.$emit('addCart',this.num)
                    shopTools.addUpdate({
                        id:this.newsDetails.id,
                        num:this.num
                    })
                    //console.log( shopTools.getShop() )
                }


                /*//console.log(this.num,this.newsDetails)
                var options = {};
                options[this.newsDetails.id] = this.num;
                this.$store.commit('updateCartCount',options)*/
            },
            nowBuy(){   //  立即购买
                //console.log('立即购买')
            },
            shopReduce(){   //  商品数量减少
                //console.log('--')
                if( this.num <=1 ) return;
                this.num--;
                /*this.$store.commit('updateCartCount',-1)*/
            },
            shopAdd(){     //   商品数量增加
                //console.log('++')
                this.num++;
                /*this.$store.commit('updateCartCount',1)*/
            }
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .shopdedatils{
        padding: 22/@rem;
        position: relative;
        text-align: left;
        background: white;
        img{
            display: block;
            margin: auto;
        }
        h3{
            font-size: 33/@rem;
        }
        .money{
            color: red;
            .symbol{
                font-size: 22/@rem;
            }
            .price{
                font-size: 32/@rem;
            }
        }
        .courier{
            font-size: 25/@rem;
            color: #999;
        }
        .buyNum{
            border: 1px solid #e7e7e7;
            border-left: none;
            border-right: none;

            padding: 20/@rem;
            .buyfont{
                font-size: 40/@rem;
            }
            .addNum{
                font-size: 40/@rem;
                a{
                    width: 60/@rem;
                    height: 60/@rem;
                    background: #f1f1f1;
                    display: inline-block;
                    color: #878787;
                    text-align: center;
                }
                a:active{
                    background: #ddd;
                }
            }
        }
        .buy{
            display: flex;
            height: 96/@rem;
            text-align: center;
            line-height: 96/@rem;
            a{
                flex: 1;
                color: white;
                font-size: 31/@rem;
            }
            .addCart{
                background: #ff9402;
            }
            .nowBuy{
                background: #ff5000;
            }
        }
    }
</style>
