import {Router} from 'vue-router'
import {usePermissionStoreWithOut} from '@/stores/modules/permission'
export const createPermission=(router:Router)=>{
  router.beforeEach(async (to,from,next)=>{
    const usePermissionStore=usePermissionStoreWithOut()
    const {getRoute} =usePermissionStore
    // 是否已经挂载过路由
        if (getRoute.length > 0) {
            if (router.hasRoute(<string>to.name)) {
                next();
            } else {
                next(getRoute[0]);
            }
            return;
        }
     const routeList = await usePermissionStore.initRoute();
        routeList.forEach((route) => {
            router.addRoute(route);
        });
      let redirectPath = (from.query.redirect || to.path) as string;
      
        if (redirectPath === "/dashboard") {
            redirectPath = routeList[0].path;
        }
        const redirect = decodeURIComponent(redirectPath);
        const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
        next(nextData);
  })
} 
