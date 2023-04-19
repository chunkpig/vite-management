import {AppRouteType} from '../types'
const about : AppRouteType[]=[
  {
    path:'/about',
    name:'About',
    component:()=>import ('@/Layout/index.vue'),
    redirect:'/about/index',
     meta: {
            title: "关于",
            icon: "Operation",
            sort: 3,
            hideChildren: true
        },
    children:[
      {
        path:'index',
         name: "AboutIndex",
                component: () => import("@/views/about/index.vue"),
                meta: {
                    title: "关于",
                    sort: 1,
                    icon: ""
                }
      }
    ]
  }
]
export default about;
