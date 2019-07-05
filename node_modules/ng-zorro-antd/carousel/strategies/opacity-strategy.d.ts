/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCarouselContentDirective } from '../nz-carousel-content.directive';
import { NzCarouselBaseStrategy } from './base-strategy';
export declare class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
    withCarouselContents(contents: QueryList<NzCarouselContentDirective> | null): void;
    switch(_f: number, _t: number): Observable<void>;
    dispose(): void;
}
