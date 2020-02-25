import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 整体布局包括顶部工具栏、左侧菜单、侧边栏、选项卡导航主体内容区
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 17:59:22
 */
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { LayoutService } from 'src/app/service/layout.service';
import { ShareService } from 'src/app/share.service';
import { CacheService } from 'src/fccore/common/cache';
import { CommonService } from 'src/fccore/common/common';
import { environment } from '../../../environments/environment.dev';
import { SyseditpasswordComponent } from './dialog/syseditpassword.dialog';
let LayoutComponent = class LayoutComponent {
    constructor(router, activatedRoute, mainService, shareService, modalService, message) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.shareService = shareService;
        this.modalService = modalService;
        this.message = message;
        // 路由打开记录
        this.selectMenu = {};
        // 当前所有菜单
        this._menus = [];
        // 默认选中的索引
        this.fcSelectedIndex = 0;
        // 选项卡
        this.fcTabs = [];
        // 单位名称
        this.companyName = 'admin';
        // 菜单是否收起
        this.menuIsCollapsed = false;
        // 消息侧边栏
        this.navsideVisible = false;
        // 菜单导航的宽度
        this.menuWidth = 200;
        // 头像
        this.avatar = 'assets/image/avatar.jpeg';
        // 项目名
        this.projectName = environment.projectName;
        // 未读消息
        this.noReadMessage = [];
        // 已读消息
        this.isReadMessage = [];
        this.fcTabs = [];
        // 点击左侧导航
        CommonService.subscribe('selectedMenu', (event) => {
            if (event) {
                this.selectMenu_1 = event.param;
                const tabOne = this.fcTabs.filter(tab => tab.content.MENUID === this.selectMenu_1.MENUID);
                if (tabOne.length > 0) {
                    this.fcSelectedIndex = tabOne[0].index;
                    this.selectedTabMenu(tabOne[0]);
                }
                else {
                    const tab = {
                        id: this.selectMenu_1.ID,
                        index: this.fcTabs.length,
                        enabled: false,
                        name: this.selectMenu_1.MENUNAME,
                        close: true,
                        icon: this.selectMenu_1.MENUICON,
                        content: this.selectMenu_1,
                        refresh: 'Y'
                    };
                    if (this.fcTabs.length === 0) {
                        tab.enabled = true;
                        tab.close = false;
                    }
                    this.fcTabs.push(tab);
                    this.fcSelectedIndex = tab.index;
                    this.selectedTabMenu(tab);
                }
            }
        });
    }
    /**
     * 发起事件
     */
    select() {
        this.shareService.switchProjectSubject.next({
            eventName: 'changeDate',
            param: {} // 参数
        });
    }
    /**
     * 显示时加载
     */
    ngOnInit() {
        // 所有的菜单
        this.allMenus = this.mainService.getMenus().P_MENUS;
        this._menus = this.allMenus[0].P_CHILDMENUS;
        // 默认选择某个菜单
        CommonService.event('selectedMenu', {
            ID: '0',
            MENUID: 'HOME',
            ROUTER: 'home',
            PID: environment.pid,
            MENUTYPE: 'INURL',
            MENUNAME: '首页',
            MENUICON: 'fc-icon-shouye'
        });
        // 导航选项卡
        if (this.fcTabs) {
            this.fcTabs = [];
            this.fcSelectedIndex = 0;
            if (this.fcTabs.length === 0) {
                this.fcTabs.push({
                    id: '0',
                    index: 0,
                    enabled: true,
                    name: '首页',
                    close: false,
                    icon: 'fc-icon-shouye',
                    refresh: 'N',
                    content: {
                        ID: '0',
                        MENUID: 'HOME',
                        ROUTER: 'home',
                        PID: environment.pid,
                        MENUTYPE: 'INURL'
                    }
                });
            }
        }
        this.router.navigate(['/' + environment.pid.toLocaleLowerCase() + '/home']);
        for (let i = 0; i < 50; i++) {
            if (i % 2 === 0) {
                this.noReadMessage.push({
                    id: i,
                    title: '这是一条未读消息,这是一条未读消息.',
                    time: '2019-10-01'
                });
                this.isReadMessage.push({
                    id: i,
                    title: '这是一条已读消息,这是一条已读消息.',
                    time: '2019-10-01'
                });
            }
            else {
                this.noReadMessage.push({
                    id: i,
                    title: '这是一条未读消息,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号.',
                    time: '2010-10-01'
                });
                this.isReadMessage.push({
                    id: i,
                    title: '这是一条已读消息,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号,超出部分显示省略号.',
                    time: '2010-10-01'
                });
            }
        }
    }
    /**
     * 切换项目
     * @param item
     */
    switchProject(menu) {
        this._menus = [];
        this.allMenus.forEach(element => {
            if (element.PID === menu.PID) {
                this._menus = element.P_CHILDMENUS;
                this.projectName = element.MENUNAME;
            }
        });
    }
    toggleLayout() {
        this.menuWidth = this.menuWidth === 64 ? 200 : 64;
        this.menuIsCollapsed = this.menuIsCollapsed === true ? false : true;
    }
    /**
     * 打开或者关闭侧边栏
     */
    toggleSidebar() {
        this.navsideVisible = this.navsideVisible === false ? true : false;
    }
    /**
     * 关闭侧边栏
     */
    closeNavSide() {
        this.navsideVisible = false;
    }
    /**
     * 点击侧边栏外的区域关闭
     */
    _onOutsideClick(event) {
        if (this.navsideVisible) {
            const clickedEl = event.target;
            const classList = clickedEl.classList;
            // 点击的区域不包括此组件本身且不包含顶部工具栏的消息按钮
            if (!!classList.contains('ant-drawer') &&
                !classList.contains('fc-icon-information')) {
                this.navsideVisible = false;
            }
        }
    }
    /**
     * 选中菜单
     * @param menu
     */
    selectedMenu(menu) {
        menu.select = true;
        CommonService.event('selectedMenu', menu);
    }
    /**
     * @description: 选中选项卡导航
     * @param {type}
     * @return:
     */
    selectedTabMenu(tabMenu) {
        let refresh = 'Y';
        // 判断路由是否打开过，如果已打开不刷新，反之，刷新
        refresh = (this.selectMenu[tabMenu.content.MENUID] && this.selectMenu[tabMenu.content.MENUID] !== '') ? 'N' : "Y";
        if (!this.selectMenu[tabMenu.content.MENUID]) {
            // 将该路由存放在路由打开记录中
            this.selectMenu[tabMenu.content.MENUID] = tabMenu.content.MENUID;
        }
        else {
            refresh = 'N';
        }
        this.mainService.navMenu(this.router, tabMenu.content, refresh);
    }
    /**
     * 关闭选项卡导航
     * @param tab
     */
    closeTabNav(tab) {
        this.selectMenu[tab.content.MENUID] = "";
        if (tab.close) {
            this.fcTabs.splice(this.fcTabs.indexOf(tab), 1);
            let i = 0;
            this.fcTabs.forEach(item => {
                item.index = i++;
            });
            if (this.fcTabs.length > 0) {
                // 如果关闭的选项卡索引 等于 激活的选项卡, 关闭选项卡后，打开选中索引前一个
                if (this.fcSelectedIndex && tab.index > this.fcSelectedIndex) {
                    CommonService.event('selectedMenu', this.fcTabs[this.fcSelectedIndex]['content']);
                }
                else {
                    CommonService.event('selectedMenu', this.fcTabs[this.fcSelectedIndex - 1]['content']);
                }
            }
        }
    }
    /**
     * 退出登录
     */
    siginout() {
        this.siginoutVisible = false;
        this.router.navigate(['/signin']);
    }
    /**
     * 修改密码
     */
    editPassWord() {
        const modal = this.modalService.create({
            nzTitle: '修改密码',
            nzContent: SyseditpasswordComponent,
            nzWrapClassName: 'edituser-dialog-wrap',
            nzComponentParams: {
                oldPassword: '',
                newPassword: 'newPassword'
            },
            nzFooter: null
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.newPassword = 'passWord is changed';
        }, 2000);
    }
    /**
     * 清除缓存
     */
    clearCache() {
        CacheService.clear();
        this.message.success('清除缓存成功！');
    }
};
tslib_1.__decorate([
    ViewChild('navside', { static: false }),
    tslib_1.__metadata("design:type", ElementRef
    // 项目名
    )
], LayoutComponent.prototype, "navside", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LayoutComponent.prototype, "_onOutsideClick", null);
LayoutComponent = tslib_1.__decorate([
    Component({
        selector: 'layout',
        templateUrl: './layout.component.html',
        styles: [
            `
      .layout {
        width: 100%;
        height: 100%;
      }
      .logo {
        height: 64px;
        line-height: 64px;
        float: left;
      }
      .logo:after, .fc-header-right:after {
        content:'';
        display: block;
        clear: both;
      }
      .logo img{
        margin-right: 20px;
        vertical-align: top;
        height: 50px;
        margin-top: 7px;
        margin-left: -10px;
        float: left;
      }
      .logo .iconfont {
        color: #fff;
        font-size: 30px;
        cursor: pointer;
      }
      .logo-text {
        color: #fff;
        font-size: 20px;
      }
      .fc-header-icon-wrap {
        float: left;
        transition: .2s;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        margin-top: 12px;
        margin-right: 10px;
      }
      .fc-header-icon-wrap:hover {
        background: #40a9ff;
        color: #fff;
      }
      .fc-header-dropdown {
        width: auto;
      }
      .fc-header-left .icon {
        float: none;
        font-size: 24px;
        cursor: pointer;
      }
      .fc-header-right {
        height: 64px;
        line-height: 64px;
        float: right;
        overflow: hidden;
      }
      .fc-header-right .fc-header-icon {
        font-size: 24px;
        color: #fff;
        cursor: pointer;
      }
      .fc-header-right .text {
        font-size: 16px;
        color: #fff;
        margin-right: 15px;
        cursor: pointer;
      }
      .fc-header-right .text .iconfont {
        margin-right: 5px;
      }
      .fc-header-right .avatar {
        cursor: pointer;
        float: left;
        margin: 4px 10px 0 10px;
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
        overflow:hidden;
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
      ::ng-deep .fc-sidebar-menu {
        background: #ffffff;
      }
      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-item {
        padding: 0!important;
        text-align: center;
      }
      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed {
        width: 64px;
      }
      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .first-level-title {
        display: none;
      }
      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu {
        text-align: center;
      }
      ::ng-deep
        .fc-sidebar-menu
        .ant-menu-inline-collapsed
        > .ant-menu-submenu
        > .ant-menu-submenu-title {
        padding: 0 !important;
      }
      ::ng-deep .fc-sidebar-menu .menu-icon {
        color: #333333;
        margin-right: 10px;
      }
      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .menu-icon {
        margin-right: 0px;
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
      ::ng-deep .navside-drawer .ant-tabs-nav .ant-tabs-tab {
        width: 50%;
        text-align: center;
        margin: 0;
      }
      ::ng-deep .navside-drawer .ant-drawer-body {
        height: 100%;
      }
      ::ng-deep .navside-drawer .ant-drawer-body .ant-tabs {
        height: 100%;
        overflow: hidden;
      }
      ::ng-deep .navside-drawer .ant-drawer-body .ant-tabs-content {
        height: 100%;
      }
      .navside-information-icon {
        padding: 0 10px;
      }
      .navside-information-icon .icon {
       font-size: 22px;
      }
      .navside-message-noread .navside-information-icon .icon{
        color:  #ffd740;
      }
      .navside-message-isread .navside-information-icon .icon{
        color:  #1890ff;
      }
      .navside-item-content {
        flex: 1;
        overflow: hidden;
      }
      .navside-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .navside-time {
        font-size: 12px;
        color: rgba(0,0,0,.54);
      }
      ::ng-deep .navside-drawer .ant-list-item:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,.04);
      }
      ::ng-deep .navside-drawer .ant-tabs-nav {
        width: 100%;
      }
      ::ng-deep .navside-drawer .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane, 
      ::ng-deep .navside-drawer .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {
        height: calc(100% - 60px);
        overflow: auto;
      }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        LayoutService,
        ShareService,
        NzModalService,
        NzMessageService])
], LayoutComponent);
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map