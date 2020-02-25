/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 路由复用策略,跳转路由时，params的refresh='Y'时，刷新页面，refresh='N'时，不刷新页面，保留用户操作状态
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-07-05 12:15:00
 */
import { PRIMARY_OUTLET } from '@angular/router';
export class FcRouteReuseStrategy {
    /**
     * @description: 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断
     * @param {type}
     * @return:
     */
    shouldDetach(route) {
        if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
            return false; // 不允许路由复用
        }
        if (route.routeConfig['data'] && !route.routeConfig['data']['keepAlive']) {
            return false; // 不允许路由复用
        }
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false; // 不允许路由复用
        }
        return true;
    }
    /**
     * @description: 当路由离开时会触发，存储路由,按path作为key存储路由快照&组件当前实例对象
     * @param {type}
     * @return:
     */
    store(route, handle) {
        if (route.routeConfig.path === 'signin') {
            FcRouteReuseStrategy.handlers = {};
        }
        let url = this.getRouteUrl(route);
        FcRouteReuseStrategy.handlers[url] = handle;
    }
    /**
     * @description:若 path 在缓存中有的都认为允许还原路由
     * @param {type}
     * @return:
     */
    shouldAttach(route) {
        if (route.queryParams['refresh'] === 'Y') {
            return false;
        }
        let url = this.getRouteUrl(route);
        return !!FcRouteReuseStrategy.handlers[url];
    }
    /**
     * @description: 从缓存中获取快照，若无则返回null
     * @param {type}
     * @return:
     */
    retrieve(route) {
        if (!route.routeConfig || route.queryParams['refresh'] === 'Y' || route.routeConfig.loadChildren) {
            return null;
        }
        let url = this.getRouteUrl(route);
        let rtn = FcRouteReuseStrategy.handlers[url];
        if (rtn !== undefined) {
            return rtn;
        }
        else {
            return null;
        }
    }
    /**
     * @description: 进入路由触发，判断是否同一路由
     * @param {type}
     * @return:
     */
    shouldReuseRoute(future, curr) {
        // console.log(future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params), '判断是否是同一个路由')
        // return (
        //   // 同一路由时复用路由
        //   future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params)
        // )
        let ret = future.routeConfig === curr.routeConfig;
        if (!ret)
            return false;
        const path = ((future.routeConfig && future.routeConfig.path) || '');
        if (path.length > 0 && ~path.indexOf(':')) {
            const futureUrl = this.getRouteUrl(future);
            const currUrl = this.getRouteUrl(curr);
            ret = futureUrl === currUrl;
        }
        return ret;
    }
    /**
     * @description:获取路由路径
     * @param {type}
     * @return:
     */
    getRouteUrl(route) {
        let path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }
    /**
     * @description:
     * @param {type}
     * @return:
     */
    getRouteUrl0(route) {
        let namedOutletCount = 0;
        return (route.pathFromRoot.reduce((path, route) => {
            let config = route.routeConfig;
            if (config) {
                if (config.outlet && config.outlet !== PRIMARY_OUTLET) {
                    path += `(${config.outlet}:`;
                    namedOutletCount++;
                }
                else {
                    path += '/';
                }
                return (path += config.path);
            }
            return path;
        }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : ''));
    }
    /**
     * @description: 删除快照
     * @param {type}
     * @return:
     */
    static deleteRouteSnapshot(name) {
        if (FcRouteReuseStrategy.handlers[name]) {
            delete FcRouteReuseStrategy.handlers[name];
        }
        else {
            FcRouteReuseStrategy.waitDelete = name;
        }
    }
}
FcRouteReuseStrategy.handlers = {};
//# sourceMappingURL=routereusestrategy.service.js.map