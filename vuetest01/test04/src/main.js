// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import hdNav from './components/hdNav'
import ftNav from './components/ftNav'

Vue.component('hdNav', hdNav)
Vue.component('ftNav', ftNav)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    //template: '<App/>'

    /*render: function (c) {
        return c(App)
    }*/

    render: c => c(App)
})
