import type { RouteRecordRaw, RouteMeta } from "vue-router";
/**
 * <T>泛型 通过给类型传参，得到一个更加通用的类型，就像给函数传参一样
 * typeof 用于获取对象或者函数的结构类型。
 * 
 */
export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import("*.vue")>) | (() => Promise<T>);

export interface MetaType extends RouteMeta {
    title: string;
    keepAlive?: boolean;
    hidden?: boolean;
    permission?: string;
    affix?: boolean;
    icon?: string;
    hideChildren?: boolean;
    sort?: number;
}

export interface AppRouteType extends Omit<RouteRecordRaw, "props"> {
    name: string;
    component?: Component | string;
    components?: Component;
    children?: AppRouteType[];
    fullPath?: string;
    meta?: MetaType;
    redirect?: string;
}
