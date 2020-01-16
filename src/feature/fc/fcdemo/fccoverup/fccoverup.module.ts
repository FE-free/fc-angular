import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Routers } from './fccoverup.route';
import { FccoverupComponent } from './fccoverup.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FccoverupComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FccoverupModule { }
