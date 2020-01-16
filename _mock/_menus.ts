/*
 * @Author: honghong
 * @Date: 2019-10-11 10:16:13
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 16:01:15
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as Mock from 'mockjs';
export const menus = {
  P_MENUS: [
    {
      ID: '10',
      PID: 'FC',
      MENUID: 'FC',
      MENUNAME: '快速开发平台',
      ENABLE: 'Y',
      WXMENU: 'N',
      MENUTYPE: 'MENU',
      HASCHILD: 'Y',
      MENUICON: 'icon iconfont icon-ppbs',
      SORT: 1000,
      ROUTER: '/fc',
      P_CHILDMENUS: [
        {
          ID: '100',
          PID: 'FC',
          MENUID: 'FCANTDESIGN',
          MENUNAME: 'Ant Design',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-antdesign',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fcantd'
        },
        {
          ID: '200',
          PID: 'FC',
          MENUID: 'FCCHART',
          MENUNAME: '图表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-tubiao',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fcchart',
          P_CHILDMENUS: [
            {
              ID: '210',
              PID: 'FC',
              MENUID: 'FCG2',
              MENUNAME: 'g2',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FC',
              MENUICON: '',
              SORT: 1152,
              ROUTER: '/fcg2'
            }
          ]
        },
        {
          ID: '300',
          PID: 'FC',
          MENUID: 'FCTHREEJS',
          MENUNAME: 'threejs',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-threejs',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fcthreejs',
          P_CHILDMENUS: [
            {
              ID: '310',
              PID: 'FC',
              MENUID: 'FCBOXGEOMETRY',
              MENUNAME: '立方体',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FC',
              MENUICON: '',
              SORT: 1152,
              ROUTER: '/fcboxgeometry'
            }
          ]
        },
        {
          ID: '400',
          PID: 'FC',
          MENUID: 'FCSPREAD',
          MENUNAME: 'spread报表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'FC',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-shujubiaoge',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fcspread'
        },
        {
          ID: '500',
          PID: 'FC',
          MENUID: 'FCICON',
          MENUNAME: 'icon',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'FC',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-icon',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fcicon'
        },
        {
          ID: '600',
          PID: 'FC',
          MENUID: 'FCIFRAME',
          MENUNAME: 'iframe',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-iframe',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fciframe'
        },
        {
          ID: '1600',
          PID: 'FC',
          MENUID: 'FCPRINT',
          MENUNAME: 'print',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-print',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fcprint'
        },
        {
          ID: '1700',
          PID: 'FC',
          MENUID: 'FCCOVERUP',
          MENUNAME: '套打',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-print',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fccoverup'
        },
        {
          ID: '700',
          PID: 'FC',
          MENUID: 'FCOUTURL',
          MENUNAME: '外链',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'OUTURL',
          APPID: 'SYSMENU',
          HASCHILD: 'N',
          MENUICON: 'fc-icon-iframe',
          PARENT: 'FC',
          SORT: 1152,
          ROUTER: 'http://www.baidu.com'
        },
        // {
        //   ID: '63fbb2f0708f4fd68db04a92dd5df121',
        //   PID: 'FC',
        //   MENUID: 'FCAGGRID',
        //   MENUNAME: 'ag-grid表格',
        //   ENABLE: 'Y',
        //   WXMENU: 'N',
        //   MENUTYPE: 'APP',
        //   APPID: 'SYSMENU',
        //   HASCHILD: 'N',
        //   MENUICON: 'fc-icon-datatable',
        //   PARENT: 'SYSTEM',
        //   SORT: 1152,
        //   ROUTER: '/building'
        // },
        {
          ID: '800',
          PID: 'FC',
          MENUID: 'FCTEMPLATE',
          MENUNAME: '模版页面',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fctemplate',
          P_CHILDMENUS: [
            {
              ID: '810',
              PID: 'FC',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatelist'
            },
            {
              ID: '820',
              PID: 'FC',
              MENUID: 'FCTEMPLATEFORM',
              MENUNAME: '表单',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplateform'
            },
            {
              ID: '830',
              PID: 'FC',
              MENUID: 'FCTEMPLATEDETAIL',
              MENUNAME: '详情',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatedetail'
            },
            {
              ID: '840',
              PID: 'FC',
              MENUID: 'FCTEMPLATETREELIST',
              MENUNAME: '树列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatetreelist'
            }
          ]
        }
        // {
        //   ID: '900',
        //   PID: 'FC',
        //   MENUID: 'SYSTEM',
        //   MENUNAME: '系统管理',
        //   ENABLE: 'Y',
        //   WXMENU: 'N',
        //   MENUTYPE: 'MENU',
        //   HASCHILD: 'Y',
        //   MENUICON: 'fc-icon-peizhi',
        //   PARENT: 'FC',
        //   SORT: 1150,
        //   ROUTER: '/system',
        //   P_CHILDMENUS: [
        //     {
        //       ID: '910',
        //       PID: 'FC',
        //       MENUID: 'SYSTEMBASIC',
        //       MENUNAME: '基础设置',
        //       ENABLE: 'Y',
        //       WXMENU: 'N',
        //       MENUTYPE: 'APP',
        //       APPID: 'SYSMENU',
        //       HASCHILD: 'Y',
        //       PARENT: 'SYSTEM',
        //       MENUICON: 'fc-icon-jichushezhi',
        //       SORT: 1152,
        //       ROUTER: '/sysbasic',
        //       P_CHILDMENUS: [
        //         {
        //           ID: '911',
        //           PID: 'FC',
        //           MENUID: 'SYSROLE',
        //           MENUNAME: '权限管理',
        //           ENABLE: 'Y',
        //           WXMENU: 'N',
        //           MENUTYPE: 'APP',
        //           APPID: 'SYSMENU',
        //           MENUICON: 'fc-icon-peizhi',
        //           HASCHILD: 'N',
        //           PARENT: 'SYSTEMBASIC',
        //           SORT: 1152,
        //           ROUTER: '/sysroleList'
        //         },
        //         {
        //           ID: '912',
        //           PID: 'FC',
        //           MENUID: 'SYSUSER',
        //           MENUNAME: '用户管理',
        //           ENABLE: 'Y',
        //           WXMENU: 'N',
        //           MENUTYPE: 'APP',
        //           APPID: 'SYSMENU',
        //           HASCHILD: 'N',
        //           MENUICON: 'fc-icon-peizhi',
        //           PARENT: 'SYSTEMBASIC',
        //           SORT: 1152,
        //           ROUTER: '/sysuserList'
        //         },
        //         {
        //           ID: '913',
        //           PID: 'FC',
        //           MENUID: 'SYSMENU',
        //           MENUNAME: '菜单管理',
        //           ENABLE: 'Y',
        //           WXMENU: 'N',
        //           MENUTYPE: 'APP',
        //           APPID: 'SYSMENU',
        //           HASCHILD: 'N',
        //           PARENT: 'SYSTEMBASIC',
        //           SORT: 1152,
        //           ROUTER: '/sysmenuList'
        //         },
        //         {
        //           ID: '914',
        //           PID: 'FC',
        //           MENUID: 'SYSLOG',
        //           MENUNAME: '日志管理',
        //           ENABLE: 'Y',
        //           WXMENU: 'N',
        //           MENUTYPE: 'APP',
        //           APPID: 'SYSMENU',
        //           HASCHILD: 'N',
        //           PARENT: 'SYSTEMBASIC',
        //           SORT: 1152,
        //           ROUTER: '/syslogList'
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  ]
};
