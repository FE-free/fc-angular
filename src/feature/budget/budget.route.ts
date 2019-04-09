import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

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
    loadChildren: './components/fcdemo/fcdemo.module#FcdemoModule'
  }
]
