/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, QueryList, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { NzCarouselContentDirective } from '../nz-carousel-content.directive';
import { FromToInterface, NzCarouselComponentAsSource, PointerVector } from '../nz-carousel-definitions';
export declare abstract class NzCarouselBaseStrategy {
    protected cdr: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected carouselComponent: NzCarouselComponentAsSource | null;
    protected contents: NzCarouselContentDirective[];
    protected slickListEl: HTMLElement;
    protected slickTrackEl: HTMLElement;
    protected length: number;
    protected unitWidth: number;
    protected unitHeight: number;
    protected readonly maxIndex: number;
    protected readonly firstEl: HTMLElement;
    protected readonly lastEl: HTMLElement;
    constructor(carouselComponent: NzCarouselComponentAsSource, cdr: ChangeDetectorRef, renderer: Renderer2);
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    withCarouselContents(contents: QueryList<NzCarouselContentDirective> | null): void;
    /**
     * Trigger transition.
     */
    abstract switch(_f: number, _t: number): Observable<void>;
    /**
     * When user drag the carousel component.
     * @optional
     */
    dragging(_vector: PointerVector): void;
    /**
     * Destroy a scroll strategy.
     */
    dispose(): void;
    protected getFromToInBoundary(f: number, t: number): FromToInterface;
}
