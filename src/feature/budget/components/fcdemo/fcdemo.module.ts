import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fcdemo.route'
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component';
import { BgcreateComponent } from './components/bgcreate/bgcreate.component';
import { BgupdateComponent } from './components/bgupdate/bgupdate.component';
import { BgremoveComponent } from './components/bgremove/bgremove.component';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(Routers)],
  declarations: [
    BglistinfoComponent, // 查询
    BgcreateComponent, // 新增
    BgupdateComponent, // 修改
    BgremoveComponent // 删除
  ],
  providers: []
})
export class FcdemoModule {}
