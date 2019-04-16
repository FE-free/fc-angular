import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
export const Routers: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', // 预算体系模块
    loadChildren: './tx/tx.module#TxModule'
  },
  {
    path: '', // 预算报表模块
    loadChildren: './budget_report/bgreport.module#BgreportModule'
  }
]
