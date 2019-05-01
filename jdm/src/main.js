// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 公共css
import '../static/css/public.css'


// Mint UI
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


// 引入公共头部组件
import headNav from './components/common/HeadNav'
Vue.component('headNav', headNav)


import defaultPage from './components/category/content/DefaultPage'
Vue.component('defaultPage', defaultPage)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
