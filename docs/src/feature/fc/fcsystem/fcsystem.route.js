export const Routers = [
    {
        path: '',
        loadChildren: () => import('./components/sysmessage/sysmessage.module').then(res => res.SysmessageModule)
    },
    {
        path: 'sysuserList',
        loadChildren: () => import('./components/sysuser/sysuser.module').then(res => res.SysuserModule)
    },
    {
        path: 'sysmenuList',
        loadChildren: () => import('./components/sysmenu/sysmenu.module').then(res => res.SysmenuModule)
    },
    {
        path: 'sysroleList',
        loadChildren: () => import('./components/sysrole/sysrole.module').then(res => res.SysroleModule)
    },
    {
        path: 'syslogList',
        loadChildren: () => import('./components/syslog/syslog.module').then(res => res.SyslogModule)
    }
];
//# sourceMappingURL=fcsystem.route.js.map