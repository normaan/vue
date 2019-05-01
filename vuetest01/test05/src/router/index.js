import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '../components/shop'
import newsOne from "../components/newsOne";
import newsDefault from "../components/newsDefault";
import newTwo from "../components/newTwo";
import Phones from '../components/phones'
import Huawei from '../components/huawei'
import Honor from '../components/honor'
import axios from 'axios'
import $ from 'jquery'

Vue.use(Router)

/*
    向Vue实例添加jquery
    npm i jquery -S
*/
Vue.prototype.$ = $

/*
    向Vue实例添加axios
    npm i axios -S
*/
axios.defaults.baseURL = 'http://127.0.0.1:8080/zw_repertory_layui/'
Vue.prototype.axios = axios

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            components: {
                one: newsOne,
                // default: HelloWorld,
                default: newsDefault,
                two: newTwo
            }
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/phones',
            name: 'phones',
            component: Phones,
            children: [
                {
                    path: 'huawei',
                    name: 'huawei',
                    component: Huawei,
                    children: [
                        {
                            path: 'honor',
                            name: 'honor',
                            component: Honor
                        }
                    ]
                }
            ]
        }
    ]
})
