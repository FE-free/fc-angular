import { BuildingComponent } from 'src/app/components/building/building.component';
import { HomeComponent } from './fcsystem/components/home/home.component';
export const Routers = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'building',
        component: BuildingComponent
    },
    {
        path: '',
        loadChildren: () => import('./fcdemo/fcdemo.module').then(res => res.FcdemoModule)
    },
    {
        path: '',
        loadChildren: () => import('./fcsystem/fcsystem.module').then(res => res.FcsystemModule)
    }
];
//# sourceMappingURL=fc.route.js.map