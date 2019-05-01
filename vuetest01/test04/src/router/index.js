import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import NotFount from '../components/404'
import News from "../components/newsDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // 路径重定向
            redirect: {
                name: 'index',
            }
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/newsDetail',
            name: 'news',
            component: News
        },
        // 字符串地址
        {
            path: '/newsDetail',
            name: 'news2',
            component: News
        },
        // 路径地址
        {
            path: '/newsDetail/:id',
            name: 'news3',
            component: News
        },
        {
            path: '*',
            name: '404',
            component: NotFount
        }
    ]
})
