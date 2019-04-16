import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/service/layout.service';
import { ShareService } from 'src/app/service/share.service';
import { environment } from '../../../environments/environment.dev';
import { CommonService } from 'src/fccore/service/common.service';
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
        font-size: 24px;
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
      .fc-header-right .text .iconfont {
        margin-right: 5px;
      }
      .fc-header-right .text:hover {
        font-weight: bold;
      }
      .fc-header-right .avatar {
        cursor: pointer;
        float: left;
        margin-top: 15px;
        margin-right: 5px;
      }
      .sidebar-nav {
        position: relative;
      }
      .layout-toggle {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #f5f5f5;
        border-right: 1px solid #e8e8e8;
      }
      .layout-toggle .iconfont {
        color: #333333;
        font-size: 18px;
        cursor: pointer;
        transition: transform ease-in 0.8;
        display: inline-block;
      }
      .layout-toggle .iconfont.arrowright {
        transform: rotate(180deg);
      }
      .layout-toggle .iconfont:hover {
        color: #000000;
        font-weight: bold;
      }
      .fc-main-wrap {
        background: #f2f6f9;
      }
      .fc-main {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      ::ng-deep .navside-drawer.ant-drawer-content-wrapper {
        background-color: #ffffff;
        top: 64px;
        height: calc(100% - 64px);
      }
      ::ng-deep .navside-drawer .ant-drawer-body {
        padding: 0;
      }
      ::ng-deep .ant-tabs .anticon-close {
        cursor: pointer;
      }
      ::ng-deep .sidebar-menu .ant-menu-inline-collapsed {
        width: 64px;
      }
      ::ng-deep .sidebar-menu .ant-menu-inline-collapsed .first-level-title {
        display: none;
      }
      ::ng-deep .sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu {
        text-align: center;
      }
      ::ng-deep .sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
        padding: 0 !important;
      }
      ::ng-deep .sidebar-menu .menu-icon {
        color: #333333;
        margin-right: 10px;
      }
      ::ng-deep .ant-menu-popup::before {
        opacity: 1;
        background-color: red;
      }
      ::ng-deep .ant-menu-popup {
        z-index: 1000;
      }
      ::ng-deep .fc-tabnav {
        min-height: 40px;
        background-color: #ffffff;
        box-shadow: 0 3px 5px -6px #1890ff;
      }
      ::ng-deep .fc-tabnav .ant-tabs-bar {
        margin-bottom: 0;
      }
      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab {
        margin-left: 0px;
        margin-right: 0px;
        padding: 8px 5px 8px 16px;
      }
      ::ng-deep .fc-tabnav .ant-tabs-nav-wrap {
        margin-bottom: 0;
      }
      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab .anticon {
        margin-right: 8px;
        font-size: 12px;
        transform: scale(0.9);
        margin-left: 10px;
      }
      .tab-home {
        padding-right: 15px;
      }
    `
  ]
})
export class LayoutComponent implements OnInit {
  //是否被选中
  _navmenuSelected: boolean
  //路由打开记录
  selectMenu = {}
  // 当前所有菜单
  _menus: any = []
  // 所有的菜单
  allMenus: any[]
  // 默认选中的索引
  fcSelectedIndex = 0
  // 选项卡
  fcTabs = []
  // 单位名称
  companyName = '总公司'
  // 菜单是否收起
  menuIsCollapsed = false
  // 退出登录文字提示是否显示
  siginoutVisible: boolean
  // 消息侧边栏
  navsideVisible = false
  // 菜单导航的宽度
  menuWidth = 200
  // 侧边栏
  @ViewChild('navside')
  navside: ElementRef
  // 项目名
  projectName = environment.projectName
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mainService: LayoutService,
    private shareService: ShareService
  ) {
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
            refresh: 'N'
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
  }
  /**
   * 显示时加载
   */
  ngOnInit() {
    // 所有的菜单
    this.allMenus = this.mainService.getMenus().P_MENUS
    this.allMenus.forEach(element => {
      if (element.PID === environment.pid) {
        this._menus = element.P_CHILDMENUS
        this.shareService.switchProjectSubject.next({
          eventName: 'switchProjectSubject',
          param: { PID:element.PID }
        });
      }
    })
    // 默认选择某个菜单
    CommonService.event('selectedMenu', {
      ID: '0',
      MENUID: 'HOME',
      ROUTER: 'home',
      PID: environment.pid,
      MENUTYPE: 'INURL',
      MENUNAME: '首页',
      MENUICON: 'fc-icon-shouye'
    })
    //导航选项卡
    if (this.fcTabs) {
      this.fcTabs = []
      this.fcSelectedIndex = 0
      if (this.fcTabs.length === 0) {
        this.fcTabs.push({
          id: '0',
          index: 0,
          enabled: true,
          name: '首页',
          close: false,
          icon: 'fc-icon-shouye',
          refresh: 'N',
          content: { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: environment.pid, MENUTYPE: 'INURL' }
        })
      }
    }
    this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/home'])
  }
  /**
   * 切换项目
   * @param item
   */
  switchProject(menu: any) {
    this._menus = []
    this.allMenus.forEach(element => {
      if (element.PID === menu.PID) {
        this._menus = element.P_CHILDMENUS
        this.projectName = element.MENUNAME
        this.shareService.switchProjectSubject.next({
          eventName: 'switchProjectSubject',
          param: { PID:menu.PID }
        });
    
      }
    })
  }
  /**
   * 切换布局
   */
  toggleLayout() {
    this.menuWidth = this.menuWidth === 64 ? 200 : 64
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
   * 点击侧边栏外的区域关闭
   */
  @HostListener('document:click', ['$event']) _onOutsideClick(event: any): void {
    if (this.navsideVisible) {
      let clickedEl = event.target
      let classList = clickedEl.classList
      /**点击的区域不包括此组件本身且不包含顶部工具栏的消息按钮*/
      if (!!classList.contains('ant-drawer') && !classList.contains('fc-icon-information')) {
        this.navsideVisible = false
      }
    }
  }
  /**
  /**
   * 选中菜单
   * @param menu
   */
  selectedMenu(menu: any) {
    menu.select = true
    CommonService.event('selectedMenu', menu)
  }
  selectedTabMenu(tabMenu: any) {
    CommonService.event('tabClicked', tabMenu)
    this.mainService.navMenu(this.router, tabMenu.content, tabMenu.refresh)
  }
  /**
   * 关闭选项卡导航
   * @param tab
   */
  closeTabNav(tab: any): void {
    if (tab.close) {
      this.fcTabs.splice(this.fcTabs.indexOf(tab), 1)
      let i = 0
      this.fcTabs.forEach(item => {
        item.index = i++
      })
      if (this.fcTabs.length > 0) {
        if (this.fcSelectedIndex && tab.index === this.fcSelectedIndex) {
          CommonService.event('selectedMenu', this.fcTabs[this.fcSelectedIndex - 1].content)
        } else if (this.fcSelectedIndex && tab.index > this.fcSelectedIndex) {
          this.fcSelectedIndex = tab.index
          CommonService.event('selectedMenu', this.fcTabs[this.fcSelectedIndex].content)
        }
      }
    }
  }
  /**
   * 退出登录
   */
  siginout() {
    this.siginoutVisible = false
    this.router.navigate(['/signin'])
  }
}
