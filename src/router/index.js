/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routers from './routers'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',   //没有#号
    routes:routers
})
