import type {App} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

/**
 * createWebHashHistory hash 路由
 * createWebHistory history 路由
 * createMemoryHistory 带缓存 history 路由
 */
const routerHistory = createWebHistory()

const Layout = () => import('@/layout/index.vue')

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/note',
            children: [
                {
                    path: '/note',
                    name: 'note',
                    component: () => import('views/note/index.vue'),
                },
                {
                    path: '/demo',
                    name: 'demo',
                    component: () => import('views/demo/index.vue'),
                },
                {
                    path: '/svgIcon',
                    name: 'svgIcon',
                    component: () => import('views/svgIcon/index.vue'),
                },
                {
                    path: '/elementIcon',
                    name: 'elementIcon',
                    component: () => import('views/elementIcon/index.vue'),
                }

            ]
        }
    ]
})

// 删除/重置路由
export function resetRoute(): void {
    router.getRoutes().forEach((route) => {
        const {name} = route
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

export function setupRouter(app: App<Element>): void {
    app.use(router)
}

export default router
