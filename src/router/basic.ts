import type {AppRouteType} from './types'
import {isArray} from '@/utils'

const LoginRoute:AppRouteType={
  path:'/',
  name:'login',
  // component:()=> import('@/views/login/index.vue'),
  component:()=>import('@/Layout/index.vue'),
  
}

const getAsyncRoute=():AppRouteType[]=>{
   const modules = import.meta.glob("./modules/**/*.ts", { eager: true, import: "default" });
    const asyncRoute: AppRouteType[] = [];
    Object.values(modules).forEach((value) => {
        const moduleList = isArray(value) ? [...(value as AppRouteType[])] : [value as AppRouteType];
        asyncRoute.push(...moduleList);
    });
    return asyncRoute;
}

const getRouteName=(routeList : AppRouteType[])=>{
  const routeArr:string[]=[]
  routeList.forEach(item=>{
    routeArr.push(item.name as string)
    if(item?.children){
      routeArr.push(...getRouteName(item?.children))
    }
  })
  return routeArr
}

//基础路由
export const basicRouter=[LoginRoute]

//异步路由
export const asyncRouter=getAsyncRoute()

//路由白名称
export const WHITE_LIST=getRouteName(basicRouter)
