export const menus = {
  P_MENUS: [
    {
      ID: '3ae5c74930da4b1e877efabee3af0005',
      PID: 'BUDGET',
      MENUID: 'BUDGET',
      MENUNAME: '全面预算管理系统',
      ENABLE: 'Y',
      WXMENU: 'N',
      MENUTYPE: 'MENU',
      HASCHILD: 'Y',
      MENUICON: 'icon iconfont icon-ppbs',
      SORT: 1000,
      ROUTER: '/budget',
      P_CHILDMENUS: [
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'BUDGET',
          MENUID: 'BGTX',
          MENUNAME: '预算体系',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGITEM',
              MENUNAME: '预算项目',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgitemList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGRPTASK',
              MENUNAME: '报表任务',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgrptaskList'
            }
          ]
        }
      ]
    },
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
          MENUID: 'BGBUSSINESS',
          MENUNAME: '业务组件',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fc',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGLISTINFO',
              MENUNAME: '查询',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bglistinfoList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGCREATE',
              MENUNAME: '新增',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgcreateList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGUPDATE',
              MENUNAME: '修改',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgupdateList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGREMOVE',
              MENUNAME: '删除',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgremoveList'
            }
          ]
        },
        {
          ID: '3ae5c74930dab18e877efabee3af0004',
          PID: 'FC',
          MENUID: 'BGDEMO',
          MENUNAME: 'UI示例',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGSPREAD',
              MENUNAME: 'spread报表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgspreadList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGIFRAME',
              MENUNAME: 'iframe',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgiframeList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'FC',
              MENUID: 'BGTABLE',
              MENUNAME: '表格',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/bgtableList'
            }
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
          ROUTER: '/budget',
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
              SORT: 1152,
              ROUTER: '/sysmenuList',
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
