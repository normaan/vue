import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Category from '../components/category/Category'
import Find from '../components/find/Find'
import ShopCart from '../components/shopCart/ShopCart'
import My from '../components/my/My'
import Banner from '../components/banner/Banner'
import Login from '../components/login/Login'

// 分类详情页面
import cateId_1 from '../components/category/content/cateId_1'


// 引入jq
import $ from 'jquery'
// 引入axios
import axios from 'axios'
import qs from 'qs'


// 向Vue原型添加
Vue.prototype.$ = $
// 设置axios默认请求格式
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

axios.defaults.baseURL = 'http://127.0.0.1:8080/jdm/'
Vue.prototype.axios = axios
// axios中post数据序列化
Vue.prototype.qs = qs


Vue.use(Router)

export default new Router({

    // 点击链接添加类名
    linkActiveClass: 'ftActive',

    routes: [
        {
            // 重定向解决linkActiveClass默认第一个选中问题
            path: '/',
            redirect: {
                name: 'index'
            }
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        // 分类
        {
            path: '/classify',
            name: 'classify',
            component: Category,
            children: [
                {
                    path: 'page',
                    name: 'cateId_1',
                    component: cateId_1
                },
                {
                    path: 'page',
                    name: 'cateId_4',
                    component: cateId_1
                }
            ]
        },
        {
            path: '/find',
            name: 'find',
            component: Find
        },
        {
            path: '/shopCart',
            name: 'shopCart',
            component: ShopCart
        },
        {
            path: '/my',
            name: 'my',
            component: My
        },
        {
            path: '/banner',
            name: 'banner',
            component: Banner
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

    ]
})
