import { Component, OnInit } from '@angular/core'
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  RoutesRecognized
} from '@angular/router'
import { LayoutService } from 'src/app/service/layout.service'
import { environment } from '../../../environments/environment.dev'
import { CommonService } from 'src/core/service/common.service'
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      .layout {
        width: 100%;
        height: 100%;
      }
      .logo {
        overflow: auto;
        float: left;
      }
      .logo .iconfont {
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
      .fc-header-right {
        float: right;
      }
      .fc-header-right .yt-header-icon {
        font-size: 26px;
        color: #fff;
        margin-right: 15px;
        cursor: pointer;
        float: left;
      }
      .fc-header-right .text {
        font-size: 16px;
        color: #fff;
        margin-right: 15px;
        cursor: pointer;
        float: left;
      }
      .sidebar-nav {
        position: relative;
      }
      .layout-toggle {
        positon: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #f5f5f5;
      }
      .layout-toggle .iconfont {
        color: #333333;
        font-size: 18px;
        cursor: pointer;
      }
      .layout-toggle .iconfont:hover {
        color: #000000;
        font-weight: bold;
      }
      ::ng-deep .navside.ant-drawer-content-wrapper {
        background-color: #ffffff;
        top: 64px;
        height: calc(100% - 64px);
      }
      ::ng-deep .navside .ant-drawer-body {
        padding: 0;
      }
    `
  ]
})
export class LayoutComponent implements OnInit {
  //导航栏状态
  _navbarStatus = 'closed'
  //菜单栏状态
  _navmenuStatus = 'opened'
  //是否被选中
  _navmenuSelected: boolean
  //路由打开记录
  selectMenu = {}
  // 当前所有菜单
  _menus: any = []
  //子菜单
  _childMenus: any = []
  //布局比例
  _layoutSpans: string = '0,1'
  //子菜单默认选择第一个选项卡
  childTabSelectedIndex: number
  //主题颜色,默认为大屏
  theme: string
  fcSelectedIndex = 0
  fcTabs = []
  // 单位名称
  companyName = '总公司'
  //
  menuIsCollapsed = false
  // 退出登录文字提示是否显示
  siginoutVisible: boolean
  // 消息侧边栏
  navsideVisible = false
  // 菜单导航的宽度
  menuWidth = 200
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainService: LayoutService
  ) {
    this.siginoutVisible = false
    //监听路由变化
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        //
      } else if (event instanceof NavigationEnd) {
        //
        this.siginoutVisible = false
      } else if (event instanceof NavigationCancel) {
        //
      } else if (event instanceof NavigationError) {
        //
      } else if (event instanceof RoutesRecognized) {
        //
      }
    })
    this.fcTabs = []
    // 点击左侧导航
    CommonService.subscribe('selectedMenu', (event: any) => {
      if (event) {
        let selectMenu_1 = event.param
        let tabOne = this.fcTabs.filter(tab => tab.content.MENUID === selectMenu_1.MENUID)
        if (tabOne.length > 0) {
          this.fcSelectedIndex = tabOne[0].index
          this.selectedTabMenu(tabOne[0])
        } else {
          let tab = {
            id: selectMenu_1.ID,
            index: this.fcTabs.length,
            enabled: false,
            name: selectMenu_1.MENUNAME,
            close: true,
            icon: selectMenu_1.MENUICON,
            content: selectMenu_1,
            refresh: 'Y'
          }
          if (this.fcTabs.length === 0) {
            tab.enabled = true
            tab.close = false
          }
          this.fcTabs.push(tab)
          this.fcSelectedIndex = this.fcTabs.length - 1
          this.selectedTabMenu(tab)
        }
      }
    })
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
    this._menus = this.mainService.getMenus().P_MENUS[0].P_CHILDMENUS
    //默认选中第一个选项卡
    this.childTabSelectedIndex = 0
    // 默认选择某个菜单
    CommonService.event('selectedMenu', {
      ID: '0',
      MENUID: 'HOME',
      ROUTER: 'home',
      PID: environment.pid,
      MENUTYPE: 'INURL',
      MENUNAME: '首页',
      MENUICON: 'fc-icon-home'
    })
    //导航选项卡
    if (this.fcTabs) {
      this.fcTabs = []
      this.fcSelectedIndex = 0
      //把弹出确认框变量存入到服务里
      // MessageService.confirmModal = this.confirmmodal;
      if (this.fcTabs.length === 0) {
        this.fcTabs.push({
          id: '0',
          index: 0,
          enabled: true,
          name: '首页',
          close: false,
          icon: 'fc-icon-home',
          refresh: 'Y',
          content: { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: environment.pid, MENUTYPE: 'INURL' }
        })
        console.log(this.fcTabs)
      }
    }
    this.router.navigate(['/' + 'budget' + '/home'])
  }
  /**
   * 切换布局
   */
  toggleLayout() {
    this.menuWidth = this.menuWidth === 50 ? 200 : 50
    this.menuIsCollapsed = this.menuIsCollapsed === true ? false : true
  }
  /**
   * 打开或者关闭侧边栏
   */
  toggleSidebar() {
    this.navsideVisible = this.navsideVisible === false ? true : false
  }
  /**
   * 关闭侧边栏
   */
  closeNavSide() {
    this.navsideVisible = false
  }
  /**
   * 选中
   * @param menu
   */
  selectedMenu(menu: any) {
    menu.select = true
    CommonService.event('selectedMenu', menu)
    console.log(menu)
  }
  selectedTabMenu(tabMenu: any) {
    CommonService.event('tabClicked', tabMenu)
    this.mainService.navMenu(this.router, tabMenu.content, tabMenu.refresh)
  }
  /**
   * 关闭
   * @param tabMenu
   */
  closeTabMenu(tabMenu: string): void {
    this.fcTabs.splice(this.fcTabs.indexOf(tabMenu), 1)
  }
  /**
   * 退出登录
   */
  siginout() {
    this.siginoutVisible = false
    this.router.navigate(['/signin'])
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
      refresh = 'Y'
    }
    this.childTabSelectedIndex = 0
    if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
      this._childMenus = Object.assign([], menu.P_CHILDMENUS)
      this.selectedtabsub(this._childMenus[0])
    } else {
      this._childMenus.length = 0
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
