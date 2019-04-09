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
          MENUID: 'BGBUSSINESS',
          MENUNAME: '业务组件',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-nhs',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'BUDGET',
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
              PID: 'BUDGET',
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
              PID: 'BUDGET',
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
              PID: 'BUDGET',
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
          PID: 'BUDGET',
          MENUID: 'BGDEMO',
          MENUNAME: 'UI示例',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-nhs',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'BUDGET',
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
              PID: 'BUDGET',
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
          PID: 'BUDGET',
          MENUID: 'SYSTEM',
          MENUNAME: '系统管理',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-nhs',
          PARENT: 'BUDGET',
          SORT: 1150,
          ROUTER: '/budget',
          P_CHILDMENUS: [
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'BUDGET',
              MENUID: 'SYSEDITPASSWORD',
              MENUNAME: '修改密码',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/editpasswordList'
            },
            {
              ID: '63fbb2f0708f4fd68db04a92dd5df121',
              PID: 'BUDGET',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '基础设置',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'Y',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/sysmenuList',
              P_CHILDMENUS: [
                {
                  ID: '63fbb2f0708f4fd68db04a92dd5df121',
                  PID: 'BUDGET',
                  MENUID: 'SYSTEMBASIC',
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
                  PID: 'BUDGET',
                  MENUID: 'SYSTEMBASIC',
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
                  PID: 'BUDGET',
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
                  PID: 'BUDGET',
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
