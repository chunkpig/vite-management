import {AppRouteType} from '../types'
const dashboard : AppRouteType[]=[
  {
    path:'/dashboard',
    name:'Dashboard',
    component:()=>import ('@/Layout/index.vue'),
    redirect:'/dashboard/analyse',
     meta: {
            title: "首页",
            icon: "Operation",
            sort: 1,
            permission: "admin_dashboard"
        },
    children:[
      {
        path:'analyse',
         name: "Analyse",
                component: () => import("@/views/dashboard/analyse/index.vue"),
                meta: {
                    title: "分析页",
                    sort: 1,
                    icon: ""
                }
      },
      {
        path:'workbench',
         name: "Workbench",
                component: () => import("@/views/dashboard/workbench/index.vue"),
                meta: {
                    title: "工作台",
                    sort: 1,
                    icon: ""
                }
      },
    ]
  }
]
export default dashboard;
