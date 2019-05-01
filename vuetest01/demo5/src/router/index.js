import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '../components/Goods'
import News from '../components/News'
import hd from '../components/hd'
import ft from '../components/ft'
import con from '../components/content'
import Phone from '../components/phone'
import Huawei from '../components/huawei'
import Vivo from '../components/vivo'
import Oppo from '../components/oppo'
import Mi from '../components/mi'
import Mi8 from '../components/mi8'
import Mi8Details from '../components/mi8Details'

import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
Vue.prototype.$ajax = Axios

import $ from 'jquery'
Vue.prototype.$ = $

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

// 拦截器
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    MintUI.Indicator.open();
    setTimeout(function () {
        MintUI.Indicator.open({
            text: '加载中...',
            //spinnerType: 'fading-circle'
            spinnerType: 'fading-circle',
        });
    },1500)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
    // Do something with response data
    MintUI.Indicator.close();
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            components: {
                h:hd,
                default:con,
                f:ft
            }
        },
        {
            name:'goods',
            path:'/goods',
            component:Goods
        },
        {
            name:'news',
            path:'/news',
            component:News
        },
        {
            name:'phone',
            path:'/phone',
            component:Phone,
            children:[
                {
                    name:'phone.huawei',
                    path:'huawei',
                    component:Huawei
                },
                {
                    name:'phone.vivo',
                    path:'vivo',
                    component:Vivo
                },
                {
                    name:'phone.oppo',
                    path:'oppo',
                    component:Oppo
                },
                {
                    name:'phone.mi',
                    path:'mi',
                    component:Mi,
                    children:[
                        {
                            name:'mi8',
                            path:'mi8',
                            component:Mi8,
                            children:[
                                {
                                    name:'mi8.details',
                                    path:'mi8Details',
                                    component:Mi8Details
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]
})
