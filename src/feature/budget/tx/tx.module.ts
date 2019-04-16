import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './tx.route'
import { BgitemComponent } from './components/bgitem/bgitem.component'
import { BgitemBusiness } from './business/bgitem.business'
import { NgZorroAntdModule } from 'ng-zorro-antd'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule
  ],
  declarations: [
    BgitemComponent // 组件-预算项目
  ],
  providers: [
    BgitemBusiness // 业务-预算项目
  ]
})
export class TxModule {}
