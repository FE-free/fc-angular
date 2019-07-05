/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCountdownComponent } from './nz-countdown.component';
import { NzStatisticNumberComponent } from './nz-statistic-number.component';
import { NzStatisticComponent } from './nz-statistic.component';
import { NzTimeRangePipe } from './nz-time-range.pipe';
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
    NzStatisticModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe],
                    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe]
                },] }
    ];
    return NzStatisticModule;
}());
export { NzStatisticModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQ7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBQztvQkFDdkcsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFDO2lCQUNuRzs7SUFDK0Isd0JBQUM7Q0FBQSxBQUxqQyxJQUtpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL256LWNvdW50ZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56U3RhdGlzdGljQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGltZVJhbmdlUGlwZSB9IGZyb20gJy4vbnotdGltZS1yYW5nZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW056U3RhdGlzdGljQ29tcG9uZW50LCBOekNvdW50ZG93bkNvbXBvbmVudCwgTnpTdGF0aXN0aWNOdW1iZXJDb21wb25lbnQsIE56VGltZVJhbmdlUGlwZV0sXG4gIGV4cG9ydHM6IFtOelN0YXRpc3RpY0NvbXBvbmVudCwgTnpDb3VudGRvd25Db21wb25lbnQsIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50LCBOelRpbWVSYW5nZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTW9kdWxlIHt9XG4iXX0=