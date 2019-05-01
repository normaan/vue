import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'





Vue.prototype.$Axios = Axios




import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);


import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
Vue.use(WeVue)

//iView-UI
import iView from 'iview'
Vue.use(iView)

//Muse-UI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../../static/vue-Layout/theme-dark.css'
Vue.use(MuseUI)


Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Mint.Indicator.open()

    Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    Mint.Indicator.close();
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
            component: HelloWorld
        }
    ]
})
