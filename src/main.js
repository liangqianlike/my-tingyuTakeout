import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import './api'
// new Vue({
//     el: '#app',
//     components: {
//         App
//     },
//     template: '<App/>'
// })
Vue.config.productionTip = true // 禁止在 Vue 启动时的生产提示

Vue.component('Header',Header)

new Vue({
    // el: '#app',
    render: h=> h(App),
    router,
}).$mount('#app')