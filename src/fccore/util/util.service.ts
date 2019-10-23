import { Injectable } from '@angular/core';
import { LogService } from '../service/log.service';
@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor() {
    }
    /**
     * 列表高度
     * @param calc 减去高度
     */
    static fixedTableHeader(calc: number): Object {
        let y = document.body.clientHeight - calc;
        LogService.debug(y, '列表高度');
        if (y < 0) {
            return { y: 0 }
        } else {
            return { y: y + 'px' }
        }
    }
}
