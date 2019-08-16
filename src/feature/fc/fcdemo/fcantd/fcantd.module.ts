import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import { FcbuttonComponent } from './fcbutton/fcbutton.component';
import { RouterModule } from '@angular/router';
import { Routers } from './fcantd.route';
import { NzButtonModule } from 'ng-zorro-antd';

/*
 * @Author: luohong
 * @Date: 2019-08-05 09:52:34
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-05 15:22:12
 * @Description: 
 * @email: 3300536651@qq.com
 */


@NgModule({
    imports: [
        RouterModule.forChild(Routers),
        NzButtonModule
    ],
    declarations: [
        FcbuttonComponent
    ],
    providers: []
})
export class FcantdModule { }