
import { createWebHashHistory, createRouter } from "vue-router";
import {AppRouteType} from './types'
import {basicRouter ,WHITE_LIST} from './basic'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...basicRouter] as AppRouteType[] ,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * router
 * router.getRoutes() 获取一个包含所有路由记录的数组
 * router.hasRoute() 检查路由是否存在
 * 
 */

export function resetRouter() {
    router.getRoutes().forEach((route) => {
        const { name } = route;
        if (name && !WHITE_LIST.includes(name as string)) {
            router.hasRoute(name) && router.removeRoute(name);
        }
    });
}

export default router;
