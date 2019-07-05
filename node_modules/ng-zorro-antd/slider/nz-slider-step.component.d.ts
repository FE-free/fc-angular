/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { DisplayedStep, ExtendedMark } from './nz-slider-definitions';
export declare class NzSliderStepComponent implements OnChanges {
    nzLowerBound: number | null;
    nzUpperBound: number | null;
    nzMarksArray: ExtendedMark[];
    nzVertical: boolean;
    nzIncluded: boolean;
    steps: DisplayedStep[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, step: DisplayedStep): number;
    private buildSteps;
    private togglePointActive;
}
