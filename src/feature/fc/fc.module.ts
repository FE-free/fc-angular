import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fc.route'
import { HomeComponent } from './fcsystem/components/home/home.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule
  ],
  declarations: [HomeComponent],
  providers: []
})
export class FcModule {}
