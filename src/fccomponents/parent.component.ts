import { OnInit } from '@angular/core';

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 父级基类
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 16:41:47
 */
export abstract class ParentComponent {
    // 主表对象
    mainObj: any;
    // 查询对象
    searchObj: any;
    // 列表数据
    pageList: any[]=[];
    constructor() {
    }
    abstract event(eventName: string, context?: any): void;
}
