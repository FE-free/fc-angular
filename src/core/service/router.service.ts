import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router'; 

export class FcRouterService implements RouteReuseStrategy {

  _cacheRouters: { [key: string]: any } = {};
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig.path === 'home') {
      return false;
    }
    return true;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.routeConfig.path !== '') {
      if (route.routeConfig.path === 'signin') {
        this._cacheRouters = {};
      }
      this._cacheRouters[route.routeConfig.path] = {
        snapshot: route,
        handle: handle
      };
    }
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if(route.routeConfig.path){
      return false;
    }
    if(this._cacheRouters.hasOwnProperty(route.routeConfig.path)){
      return true; 
    }else{
      return false;
    }
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (route.queryParams['refresh'] === 'Y') {
      return null;
    }
    if (route.routeConfig.path.length === 0) {
      return null;
    } else if (this._cacheRouters[route.routeConfig.path] !== undefined) {
      return this._cacheRouters[route.routeConfig.path].handle;
    } else {
      return null;
    }
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
