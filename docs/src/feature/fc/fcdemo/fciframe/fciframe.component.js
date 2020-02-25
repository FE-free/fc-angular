import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: iframe
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 14:03:06
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
let FciframeComponent = class FciframeComponent {
    constructor(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        // iframe页里的内容并不属于节点的信息,所以路由复用会重新渲染iframe的内容
        let url = 'https://ng.ant.design/components/form/zh';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
FciframeComponent = tslib_1.__decorate([
    Component({
        selector: 'fciframe',
        templateUrl: './fciframe.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        ActivatedRoute,
        DomSanitizer])
], FciframeComponent);
export { FciframeComponent };
//# sourceMappingURL=fciframe.component.js.map