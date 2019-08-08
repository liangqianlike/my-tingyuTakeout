import Vue from 'vue'
import App from './App.vue'

import './validate'
import router from './router'
import Header from './components/Header/Header.vue'
import './api'
import store from './store'
import Star from './components/Star/Star.vue'
// new Vue({
//     el: '#app',
//     components: {
//         App
//     },
//     template: '<App/>'
// })
Vue.config.productionTip = false // 禁止在 Vue 启动时的生产提示

Vue.component('Header',Header)
Vue.component('Star',Star)


new Vue({
    // el: '#app',
    render: h=> h(App),
    router,
    store
}).$mount('#app')