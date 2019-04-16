import { Routes } from '@angular/router'
import { HomeComponent } from './fcsystem/components/home/home.component'

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
    path: '', // demo组件
    loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
  },
  {
    path: '', // system
    loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
  }
]
