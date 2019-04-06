import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './fcsystem.route';
import { HomeComponent } from '../budget/components/home/home.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
   
  ]
})
export class BudgetModule { }
