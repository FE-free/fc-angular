import { Observable } from "rxjs";
import { NavigationExtras } from "@angular/router";
import { ParentBusiness } from "./parent.business";
export declare class SystemBusiness extends ParentBusiness {
    static wins: any;
    static menus: any;
    static store: any;
    static init(pid: string, window: any, store: any): void;
    /**
     * 初始化工程，并写入到缓存，如果缓存存在，则不初始化
     */
    static initProduct(pid: string): void;
    /**
     * 获取产品详情
     */
    static getProduct(pid: string): Observable<any>;
    /**
     * 获取产品详情
     */
    static getMenus(pid: string): Observable<any>;
    /**
     * 路由跳转至
     */
    static navigate(commands: any[], extras?: NavigationExtras): Promise<any>;
    /**
     * 获取url
     * @param serviceId 服务
     * @param action 事件名称
     */
    static getUrl(serviceId: string, action: string): string;
}
