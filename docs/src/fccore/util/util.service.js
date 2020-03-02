import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LogService } from '../service/log.service';
let UtilService = class UtilService {
    constructor() {
    }
    /**
     * 列表高度
     * @param calc 减去高度
     */
    static fixedTableHeader(calc) {
        let y = document.body.clientHeight - calc;
        LogService.debug(y, '列表高度');
        if (y < 0) {
            return { y: 0 };
        }
        else {
            return { y: y + 'px' };
        }
    }
};
UtilService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], UtilService);
export { UtilService };
//# sourceMappingURL=util.service.js.map