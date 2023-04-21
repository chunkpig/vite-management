import { defineStore } from "pinia";
import { store } from "../index";
import {deepMerge} from '@/utils'
export interface MenuSetting {
    collapse?: boolean;
    sideWidth?: number;
    sideCollapsed?: number;
    systemTitle?: string;
}


interface AppState{
     menuConfig?: MenuSetting;
}

export const useAppStore=defineStore({
  id:'app',
  persist:true,
  state:():AppState=>({
    menuConfig:{
      collapse:false,
      sideWidth:240,
      sideCollapsed:64,
      systemTitle:'vite management'
    }
  }),
  actions:{
    setAppConfig(config: AppState): void {
            this.$state = deepMerge(this.$state, config);
        }
  }
})
// 便于外部使用
export const useAppStoreWithOut = () => {
    return useAppStore(store);
};
