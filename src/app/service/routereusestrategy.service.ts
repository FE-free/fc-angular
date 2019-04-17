/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 路由复用策略,跳转路由时，params的refresh='Y'时，刷新页面，refresh='N'时，不刷新页面，保留用户操作状态
 * @email: luo.hong@neusoft.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 10:12:29
 */
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
  PRIMARY_OUTLET,
  Route
} from '@angular/router'

export class FcRouteReuseStrategy implements RouteReuseStrategy {
  private static waitDelete: string
  public static handlers: { [key: string]: DetachedRouteHandle } = {}
  // //是否允许路由复用
  // shouldDetach(route: ActivatedRouteSnapshot): boolean {
  //   if (route.routeConfig.path === 'home') {
  //     return false;
  //   }
  //   return true;
  // }
  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
      return false
    }
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false
    }
    return true
  }
  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.routeConfig.path === 'signin') {
      FcRouteReuseStrategy.handlers = {}
    }
    // 当路由离开并且需要删除时候删除
    let url = this.getRouteUrl(route)
    window.sessionStorage.getItem('removeRouter')
    if (route.queryParams['deleteRouter']) {
      FcRouteReuseStrategy.deleteRouteSnapshot(url)
    } else {
      FcRouteReuseStrategy.handlers[url] = handle
    }
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // console.log('===shouldAttach-route', route);
    if (route.queryParams['refresh'] === 'Y') {
      return false
    }
    return !!FcRouteReuseStrategy.handlers[this.getRouteUrl(route)]
  }
  /** 从缓存中获取快照，若无则返回null */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null
    }
    if (route.queryParams['refresh'] === 'Y') {
      return null
    }
    if (route.routeConfig.loadChildren) return null
    let url = this.getRouteUrl(route)
    let rtn: DetachedRouteHandle = FcRouteReuseStrategy.handlers[url]
    if (rtn !== undefined) {
      return rtn
    } else {
      return null
    }
  }

  /** 进入路由触发，判断是否同一路由 */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return (
      JSON.stringify(future.params) === JSON.stringify(curr.params) && future.routeConfig === curr.routeConfig
    )
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {
    var path = route['_routerState'].url.replace(/\//g, '_')
    return path
  }

  getRouteUrl0(route: ActivatedRouteSnapshot): string {
    let namedOutletCount: number = 0
    return (
      route.pathFromRoot.reduce((path, route) => {
        let config: Route = route.routeConfig
        if (config) {
          if (config.outlet && config.outlet !== PRIMARY_OUTLET) {
            path += `(${config.outlet}:`
            namedOutletCount++
          } else {
            path += '/'
          }
          return (path += config.path)
        }
        return path
      }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : '')
    )
  }

  public static deleteRouteSnapshot(name: string): void {
    if (FcRouteReuseStrategy.handlers[name]) {
      delete FcRouteReuseStrategy.handlers[name]
    } else {
      FcRouteReuseStrategy.waitDelete = name
    }
  }
  // //当路由离开时会触发，存储路由
  // store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
  //   if (route.routeConfig.path !== '') {
  //     if (route.routeConfig.path === 'signin') {
  //       this._cacheRouters = {};
  //     }
  //     this._cacheRouters[route.routeConfig.path] = {
  //       snapshot: route,
  //       handle: handle
  //     };
  //   }
  // }
  // //是否允许还原路由
  // shouldAttach(route: ActivatedRouteSnapshot): boolean {
  //   if (route.queryParams['refresh'] === 'Y') {
  //     return false;
  //   }
  //   if (this._cacheRouters.hasOwnProperty(route.routeConfig.path)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // //获取存储路由
  // retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
  //   if (route.queryParams['refresh'] === 'Y') {
  //     return null;
  //   }
  //   if (route.routeConfig.path.length === 0) {
  //     return null;
  //   } else if (this._cacheRouters[route.routeConfig.path] !== undefined) {
  //     return !!this._cacheRouters[route.routeConfig.path].handle;
  //   } else {
  //     return null;
  //   }
  // }
  // //进入路由触发，是否同一路由时复用路由
  // shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  //   return future.routeConfig === curr.routeConfig &&
  //     JSON.stringify(future.params) == JSON.stringify(curr.params);;
  // }
}
