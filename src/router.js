import {createRouter,createWebHistory} from 'vue-router'
const routes =[
    {
        path: '/',
        redirect: '/home',
    },{
        path: '/home',
        name: 'home',
        component: () => import('./views/home.vue'),
        children: [
            {
                path: '/ref',
                name: 'ref',
                component: () => import('./views/ref/ref.vue')
            }, {
                path: '/reactive',
                name: 'reactive',
                component: () => import('./views/reactive/reactive.vue')
            },{
                path: '/readonly',
                name: 'readonly',
                component: () => import('./views/readonly/readonly.vue')
            },{
                path: '/watch',
                name: 'watch',
                component: () => import('./views/watch/watch.vue')
            },{
                path: '/toRaw',
                name: 'toRaw',
                component: () => import('./views/toRaw/toRaw.vue')
            },{
                path: '/pinia',
                name: 'pinia',
                component: () => import('./views/pinia/index.vue')
            },{
                path: '/getters',
                name: 'getters',
                component: () => import('./views/pinia/getters.vue')
            },{
                path: '/componentslot',
                name: 'component',
                component: () => import('./views/component/slot.vue')
            },{
                path: '/componentattr',
                name: 'componentattr',
                component: () => import('./views/component/attr.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
