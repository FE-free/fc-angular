import { Component, OnInit, ViewChild } from '@angular/core';
// import { FcnavmenuComponent, FcnavtabComponent, NavsideOptions, MenuOptions } from 'fccomponent2';
import { environment } from '../../../environments/environment';
import { CommonService } from 'fccore2/common/common';
// import LayoutBusiness from '../../business/layout.business';
import SystemBusiness from 'fccore2/classes/system.business';
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [`
    .layout {
      width: 100%;
      height: 100%;
    }
    .logo {
      overflow: auto;
      float: left;
    }
    .yt-icon-logo {
      color: #fff;
      font-size: 30px;
      float: left;
      margin-right: 10px;
    }
    .logo-text {
      color: #fff;
      float: left;
      font-size: 20px;
    }
    .yt-header-right {
      float: right;
    }
    .yt-header-right .yt-header-icon {
      font-size: 20px;
      color: #fff;
      margin-right: 10px;
      cursor: pointer;
    }
  `]
})
export class LayoutComponent implements OnInit {
  // 当前产品
  productObj: any = { DISPLAYMODE: 'TAB' };
  // @ViewChild('fcnavmenu')
  // fcnavmenu: FcnavmenuComponent;
  // @ViewChild('fcnavtab')
  // fcnavtab: FcnavtabComponent;
  // @ViewChild('confirmmodal')
  // confirmmodal: FcmodalconfirmComponent; 
  //导航栏状态
  _navbarStatus = "closed";
  //菜单栏状态
  _navmenuStatus = "opened";
  //是否被选中
  _navmenuSelected: boolean;
  //侧边栏配置
  // _navSideOption: NavsideOptions;
  //按钮配置
  // _menuOptions: MenuOptions = {
  //   //所在产品优先级最高，当有产品时其它条件忽略
  //   fcPid: environment.pid
  // };
  //路由打开记录
  selectMenu = {};
  // 当前所有菜单
  _menus: any = [];
  //子菜单
  _childMenus: any = [];
  //布局比例
  _layoutSpans: string = "0,1";
  //子菜单默认选择第一个选项卡
  childTabSelectedIndex: number;
  //主题颜色,默认为大屏
  theme: string;
  index = 0;
  tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }
  constructor() {
    //初始化消息配置
    // this._navSideOption = LayoutBusiness.initNavSideOptions();
    // 初始化消息
    // LayoutBusiness.getRealMessage().subscribe(data => {
    //   if (data.length !== 0) {
    //     this._navSideOption.fcValues1.unshift(JSON.parse(data));
    //     this._navSideOption.fcValues1.unshift(JSON.parse(data));
    //   }
    // });
    //如果是产品是tab的显示模式,默认选中第一个导航
    // SystemBusiness.getProduct(environment.pid).subscribe(result => {
    //   if (result.CODE === '0') {
    //     this.productObj = result.DATA[0];
    //     if (undefined !== this.productObj && null !== this.productObj && '' !== this.productObj) {
    //       if (this.productObj.DISPLAYMODE === 'TAB') {
    //         if (this._menus && this._menus.length !== 0) {
    //           // this.selectedtabmain(this._menus[0]);
    //         }
    //       }
    //     }
    //   }
    // });
  }
  /**
   * 显示时加载
   */
  ngOnInit() {
    //默认选中第一个选项卡
    this.childTabSelectedIndex = 0;
    // 默认选择某个菜单
    CommonService.event('selectedMenu', {
      ID: '0', MENUID: 'HOME', ROUTER: 'home',
      PID: environment.pid, MENUTYPE: 'INURL', MENUNAME: '首页', MENUICON: 'fc-icon-home'
    });
    // 事件订阅，点击tab的时候
    CommonService.subscribe('tabClicked', (result) => {
      if (result) {
        // let menu = LayoutBusiness.findMenuByRouter(this.fcnavmenu.fcMenus, result.param.ROUTER);
        // if (menu && !menu.select) {
        //   menu.select = true;
        // }
      }
    });
    // 获取当前消息
    this.getMessage();
    //导航选项卡
    // if (this.fcnavtab) {
    //   this.fcnavtab.fcTabs = [];
    //   this.fcnavtab.fcSelectedIndex = 0;
    //   //把弹出确认框变量存入到服务里
    //   // MessageService.confirmModal = this.confirmmodal;
    //   if (this.fcnavtab.fcTabs.length === 0) {
    //     this.fcnavtab.fcTabs.push({
    //       id: '0', index: 0, enabled: true, name: '首页', close: false, icon: 'fc-icon-home', refresh: 'Y', content:
    //         { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: environment.pid, MENUTYPE: 'INURL' }
    //     });
    //   }
    // }
    // SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/home"]);
  }
  /**
   * 获取当前消息
   */
  getMessage() {
    // LayoutBusiness.getMessage().subscribe(res => {
    //   if (res[0].CODE === '0') {
    //     this._navSideOption.fcValues1 = res[1].DATA;
    //     this._navSideOption.fcValues1.forEach(element => {
    //       if (element.TS !== null && element.TS !== '') {
    //         element.TS = CommonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
    //       }
    //     })
    //   }
    //   if (res[1].CODE === '0') {
    //     this._navSideOption.fcValues2 = res[0].DATA;
    //     this._navSideOption.fcValues2.forEach(element => {
    //       if (element.TS !== null && element.TS !== '') {
    //         element.TS = CommonService.timestampFormat(Number.parseInt(element.TS) * 1000, 'yyyy-MM-dd hh:mm:ss') + "";
    //       }
    //     })
    //   }
    // });
  }
  /**
   * 导航栏事件
   * @param event
   */
  // navbarEvent(event: FCEVENT) {
  //   switch (event.eventName) {
  //     case 'toggle'://展开收起消息
  //       this._navbarStatus = event.param;
  //       break;
  //     case 'selectDropdown'://下拉菜单
  //     case 'selectMenu'://下拉菜单 
  //       if (undefined !== this.productObj && '' !== this.productObj && null !== this.productObj) {
  //         // 切换布局 有选项卡模式和左侧菜单模式
  //         if (this.productObj.DISPLAYMODE === 'TAB') {
  //           this._layoutSpans = "0,1";
  //         } else {
  //           this._layoutSpans = "2,9";
  //         }
  //       }
  //       if (undefined !== event.param && null !== event.param && '' !== event.param) {
  //         this._menus = event.param.P_CHILDMENUS;
  //       }
  //       let menu = this._menus[0];
  //       if (menu.HASCHILD === 'Y') {
  //         menu.opened = true;
  //         let childMenu = menu.P_CHILDMENUS[0];
  //         if (childMenu.HASCHILD === 'Y') {
  //           childMenu.opened = true;
  //           let gChildMenu = childMenu.P_CHILDMENUS[0];
  //           gChildMenu.select = true;
  //         } else {
  //           childMenu.select = true;
  //         }
  //         break;
  //       } else {
  //         menu.select = true;
  //       }
  //       break;
  //     case 'logout'://登出
  //       SystemBusiness.userService.logout().subscribe(result => {
  //         //清除用户缓存
  //         SystemBusiness.userService.clearUserinfo();
  //         // 清除菜单缓存
  //         // SystemBusiness.menuService.removeMenus();
  //         // 清除tab页面
  //         // if (this.productObj.DISPLAYMODE === 'MENU') {
  //         //   this.fcnavtab.fcTabs = [];
  //         //   this.fcnavtab.fcSelectedIndex = undefined;
  //         // }
  //         SystemBusiness.navigate(['/signin']);
  //       })
  //       break;
  //     case 'editUser'://修改密码
  //       SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/sysprofileList"]);
  //       break;
  //     case 'changeLayout': //切换布局 有选项卡模式和左侧菜单模式
  //       if (event.param === '选项卡') {
  //         this.productObj.DISPLAYMODE = 'TAB';
  //         this._layoutSpans = "0,1";
  //         this.theme = 'default';
  //       } else if (event.param === '菜单') {
  //         this.productObj.DISPLAYMODE = 'MENU';
  //         this._layoutSpans = "2,9";
  //         this.theme = 'blue';
  //       }
  //       break;
  //     case 'changeThemes': //切换皮肤 有default、blue、dark
  //       if (event.param === 'default') {
  //         this.theme = 'default';
  //       } else if (event.param === 'blue') {
  //         this.theme = 'blue';
  //       } else if (event.param === 'dark') {
  //         this.theme = 'dark';
  //       }
  //       break;
  //   }
  // }
  /**
   * 导航父级选项卡跳转路由
   * @param menu 
   */
  selectedtabmain(menu: any, refresh?: string) {
    if (refresh === undefined) {
      refresh = 'Y';
    }
    this.childTabSelectedIndex = 0;
    if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
      this._childMenus = Object.assign([], menu.P_CHILDMENUS);
      this.selectedtabsub(this._childMenus[0]);
    } else {
      this._childMenus.length = 0;
      // SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER], {
      //   queryParams: { refresh: refresh, MENUICON: menu.MENUICON }
      // });
    }
  }
  /**
   * 导航子级选项卡跳转路由
   * @param menu 
   */
  selectedtabsub(menu: any) {
    // SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER], { queryParams: { refresh: 'Y', MENUICON: menu.MENUICON } });
  }
  /**
   *  菜单事件
   * @param event
   */
  // navmenuEvent(event: FCEVENT) {
  //   switch (event.eventName) {
  //     case 'toggle'://展开收起左侧导航
  //       this._navmenuStatus = event.param;
  //       if (this._navmenuStatus === "closed") {
  //         this._layoutSpans = "3,85";
  //       } else if (this._navmenuStatus === "opened") {
  //         this._layoutSpans = "2,9";
  //       }
  //       break;
  //     case 'select':
  //       //导航并存储列表
  //       event.param.refresh = 'Y';        
  //       CommonService.event('selectedMenu', event.param);        
  //       break;
  //   }
  // }
  /**
   * 多tab页面事件
   * @param event tab页面事件
   */
  // navtabEvent(event: FCEVENT): void {
  //   switch (event.eventName) {
  //     case 'closed':
  //       this.selectMenu[event.param.MENUID] = "";
  //       break;
  //     case 'selected':
  //       if (!this.selectMenu[event.param.MENUID]) {
  //         //将该路由存放在路由打开记录中
  //         this.selectMenu[event.param.MENUID] = event.param.MENUID;
  //       }
  //       CommonService.event('tabClicked', event.param);
  //       // LayoutBusiness.navMenu(event.param);
  //       break;
  //   }
  // }
  /**
    * 侧边栏页面事件
    * @param event tab页面事件
    */
  // navsideEvent(event: FCEVENT): void {
  //   switch (event.eventName) {
  //     case 'closed':
  //       // 删除缓存
  //       break;
  //     case 'click':
  //       //点击一项
  //       debugger;
  //       // LayoutBusiness.navMessage(event.param);
  //       break;
  //     case 'toggle':
  //       this._navbarStatus = event.param;
  //   }
  // }
  /**
   *
   */
  ngOnDestroy(): void {
    // SystemBusiness.daoService.ws.close();
  }
}
