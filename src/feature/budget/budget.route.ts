import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const Routers: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // data: { keep: false }
    }
];
