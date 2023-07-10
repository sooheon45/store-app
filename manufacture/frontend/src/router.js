
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import FactoryManager from "./components/listers/FactoryCards"
import FactoryDetail from "./components/listers/FactoryDetail"

import StoreManager from "./components/listers/StoreCards"
import StoreDetail from "./components/listers/StoreDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/factories',
                name: 'FactoryManager',
                component: FactoryManager
            },
            {
                path: '/factories/:id',
                name: 'FactoryDetail',
                component: FactoryDetail
            },

            {
                path: '/stores',
                name: 'StoreManager',
                component: StoreManager
            },
            {
                path: '/stores/:id',
                name: 'StoreDetail',
                component: StoreDetail
            },



    ]
})
