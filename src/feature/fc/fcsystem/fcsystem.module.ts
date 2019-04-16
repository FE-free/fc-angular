import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fcsystem.route'
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component'
import { SysuserComponent } from './components/sysuser/sysuser.component'
import { SysmenuComponent } from './components/sysmenu/sysmenu.component'
import { SysroleComponent } from './components/sysrole/sysrole.component'
import { SyslogComponent } from './components/syslog/syslog.component'
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
    SysmessagedetailComponent, // 消息详情
    SysuserComponent, // 用户管理
    SysmenuComponent, // 菜单管理
    SysroleComponent, // 权限管理
    SyslogComponent // 日志管理
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule {}
