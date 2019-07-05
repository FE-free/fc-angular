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
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSliderHandleComponent } from './nz-slider-handle.component';
import { NzSliderMarksComponent } from './nz-slider-marks.component';
import { NzSliderStepComponent } from './nz-slider-step.component';
import { NzSliderTrackComponent } from './nz-slider-track.component';
import { NzSliderComponent } from './nz-slider.component';
export class NzSliderModule {
}
NzSliderModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    NzSliderComponent,
                    NzSliderTrackComponent,
                    NzSliderHandleComponent,
                    NzSliderStepComponent,
                    NzSliderMarksComponent
                ],
                declarations: [
                    NzSliderComponent,
                    NzSliderTrackComponent,
                    NzSliderHandleComponent,
                    NzSliderStepComponent,
                    NzSliderMarksComponent
                ],
                imports: [CommonModule, NzToolTipModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW1CMUQsTUFBTSxPQUFPLGNBQWM7OztZQWpCMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlclN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1zdGVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlclRyYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1xuICAgIE56U2xpZGVyQ29tcG9uZW50LFxuICAgIE56U2xpZGVyVHJhY2tDb21wb25lbnQsXG4gICAgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQsXG4gICAgTnpTbGlkZXJTdGVwQ29tcG9uZW50LFxuICAgIE56U2xpZGVyTWFya3NDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpTbGlkZXJDb21wb25lbnQsXG4gICAgTnpTbGlkZXJUcmFja0NvbXBvbmVudCxcbiAgICBOelNsaWRlckhhbmRsZUNvbXBvbmVudCxcbiAgICBOelNsaWRlclN0ZXBDb21wb25lbnQsXG4gICAgTnpTbGlkZXJNYXJrc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyTW9kdWxlIHt9XG4iXX0=