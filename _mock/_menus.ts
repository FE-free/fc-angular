/*
 * @Author: luohong
 * @Date: 2019-08-16 09:28:26
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-23 15:52:29
 * @Description: 
 * @email: 3300536651@qq.com
 */
export const menus = {
  P_MENUS: [
    {
      ID: '3ae5c74930da4b1e877efabee3af0005',
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
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCVISUAL',
          MENUNAME: '可视化',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-yibiaopan',
          PARENT: 'FC',
          SORT: 1100,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTHREEJS',
              MENUNAME: 'threejs',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'MENU',
              APPID: 'SYSMENU',
              HASCHILD: 'Y',
              PARENT: 'FCVISUAL',
              SORT: 1101,
              ROUTER: '/fcthreejs',
              P_CHILDMENUS: [
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'FCEARTH',
                  MENUNAME: '地球',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1101,
                  ROUTER: '/fcearth'
                }
              ]
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
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
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCCHARTBAR',
              MENUNAME: 'g2',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCCHART',
              SORT: 1151,
              ROUTER: '/fcg2'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCEDITOR',
          MENUNAME: '富文本',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-tubiao',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCCKEEDITOR',
              MENUNAME: '富文本',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCEDITOR',
              SORT: 1151,
              ROUTER: '/fcckeeditor'
            }
          ]
        },
        {
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
          PID: 'FC',
          MENUID: 'FCSPREAD',
          MENUNAME: 'spread报表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-shujubiaoge',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCSPREAD',
              MENUNAME: 'fcspreadbasic',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCSPREAD',
              SORT: 1151,
              ROUTER: '/fcspreadbasic'
            }
          ]
        },
        {
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
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
          ID: '63fbb2f0708f4fd68db04a92dd5df121',
          PID: 'FC',
          MENUID: 'FCAGGRID',
          MENUNAME: '表格',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-datatable',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCAGGRID',
              MENUNAME: '基础表格',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCAGGRID',
              SORT: 1151,
              ROUTER: '/fctablebasic'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'FCPAGES',
          MENUNAME: '模版页面',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-pages',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATEFASTPOSITION',
              MENUNAME: '快速定位',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatefastposition'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATEFORM',
              MENUNAME: '表单',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplateform'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATELIST',
              MENUNAME: '列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatelist'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATETABFORM',
              MENUNAME: '选项卡表单',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatetabform'
            }, {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATETABLIST',
              MENUNAME: '选项卡列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatetablist'
            }, {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATETREEFORMS',
              MENUNAME: '树表单',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatetreeforms'
            }, {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATETREETREELISTS',
              MENUNAME: '树列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatetreelists'
            }, {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'FCTEMPLATETREETABLIST',
              MENUNAME: '树选项卡列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCPAGES',
              SORT: 1152,
              ROUTER: '/fctemplatetreetablist'
            },
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'SYSTEM',
          MENUNAME: '系统管理',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/system',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '基础设置',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSTEMBASIC',
              HASCHILD: 'Y',
              PARENT: 'SYSTEM',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/systembasic',
              P_CHILDMENUS: [
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSROLE',
                  MENUNAME: '权限管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSROLE',
                  MENUICON: 'fc-icon-peizhi',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysroleList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSMENU',
                  MENUNAME: '用户管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  MENUICON: 'fc-icon-peizhi',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysmenuList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSMENU',
                  MENUNAME: '菜单管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/sysmenuList'
                },
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'FC',
                  MENUID: 'SYSLOG',
                  MENUNAME: '日志管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEM',
                  SORT: 1152,
                  ROUTER: '/syslogList'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
