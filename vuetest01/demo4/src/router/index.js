import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld' // @代表 src目录 没有提示
import Index from '../components' // 相对路径有提示
import News from '../components/newsDetail'
import Goods from '../components/goodsList'
import NotFount from '../components/404'
Vue.use(Router)

export default new Router({
    routes: [ // 从上至下 依次执行
        {
            path:'/',
            redirect:{
                name:'index123'
            }
        },
        {
            path: '/index.html',
            name:'index123',
            component: Index
        },
        {
            path:'/newsDetail/:id',
            name:'news',
            component:News
        },
        {
            path:'/goodsList',
            name:'goods',
            component:Goods
        },
        {
            path:'*',
            component:NotFount
        }
    ]
})
