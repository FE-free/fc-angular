export const Routers = [
    {
        path: '',
        loadChildren: () => import('./fcantd/fcantd.module').then(res => res.FcantdModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcchart/fcchart.module').then(res => res.FcchartModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcicon/fcicon.module').then(res => res.FciconModule)
    },
    {
        path: '',
        loadChildren: () => import('./fciframe/fciframe.module').then(res => res.FciframeModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcspread/fcspread.module').then(res => res.FcspreadModule)
    },
    {
        path: '',
        loadChildren: () => import('./fctable/fctable.module').then(res => res.FctableModule)
    },
    {
        path: '',
        loadChildren: () => import('./fctemplate/fctemplate.module').then(res => res.FctemplateModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcthreejs/fcthreejs.module').then(res => res.FcthreejsModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcprint/fcprint.module').then(res => res.FcprintModule)
    }
];
//# sourceMappingURL=fcdemo.route.js.map