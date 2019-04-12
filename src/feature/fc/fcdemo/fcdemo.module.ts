import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fcdemo.route'
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component'
import { BgcreateComponent } from './components/bgcreate/bgcreate.component'
import { BgupdateComponent } from './components/bgupdate/bgupdate.component'
import { BgremoveComponent } from './components/bgremove/bgremove.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { BgspreadComponent } from './components/bgspread/bgspread.component'
import { BgtableComponent } from './components/bgtable/bgtable.component'
import { BgiframeComponent } from './components/bgiframe/bgiframe.component'
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule,
    SpreadSheetsModule
  ],
  declarations: [
    BglistinfoComponent, // 查询
    BgcreateComponent, // 新增
    BgupdateComponent, // 修改
    BgremoveComponent, // 删除
    BgspreadComponent, // spread报表
    BgtableComponent, // 表格
    BgiframeComponent // iframe
  ],
  providers: []
})
export class FcdemoModule {}
