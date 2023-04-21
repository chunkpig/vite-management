import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
import { store } from "../index";

interface tagstate{
  taglist:RouteLocationNormalizedLoaded[]
}

export const useTagStore=defineStore({
  id:'tage',
  state:():tagstate=>({
    taglist:[]
  }),
  actions:{
    addtage(route:RouteLocationNormalizedLoaded){
      const index=this.taglist.findIndex(item=>route.fullPath===item.fullPath)
      if(index===-1){
        this.taglist.push({
          ...route
        })
      }
    }
  }
})
// 便于外部使用
export const useTageStoreWithOut = () => {
    return useTagStore(store);
};
