import { UserService } from 'src/fccore/service/user.service';
import { ErrorComponent } from './components/error/error.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SyssigninComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignin/syssignin.component';
import { SysforgotComponent } from 'src/feature/fc/fcsystem/components/syspassword/sysforgot/sysforgot.component';
import { SyssignupComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignup/syssignup.component';
const SignIn = 'signin';
export const AppRoutes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [UserService],
        children: [
            {
                path: 'error',
                component: ErrorComponent
            },
            {
                path: 'fc',
                loadChildren: () => import('../feature/fc/fc.module').then(res => res.FcModule)
            }
        ]
    },
    {
        path: SignIn,
        component: SyssigninComponent
    },
    {
        path: 'forgot',
        component: SysforgotComponent
    },
    {
        path: 'lockscreen',
        component: LockscreenComponent
    },
    {
        path: 'signup',
        component: SyssignupComponent
    }
];
//# sourceMappingURL=app.route.js.map