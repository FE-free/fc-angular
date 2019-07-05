/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
/**
 * @record
 */
export function NzSliderTrackStyle() { }
if (false) {
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.bottom;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.height;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.left;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.width;
    /** @type {?|undefined} */
    NzSliderTrackStyle.prototype.visibility;
}
export class NzSliderTrackComponent {
    constructor() {
        this.nzVertical = false;
        this.nzIncluded = false;
        this.style = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzIncluded) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes.nzVertical || changes.nzOffset || changes.nzLength) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    }
}
NzSliderTrackComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>"
            }] }
];
NzSliderTrackComponent.propDecorators = {
    nzOffset: [{ type: Input }],
    nzLength: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzOffset", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzSliderTrackComponent.prototype, "nzLength", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzVertical", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderTrackComponent.prototype, "nzIncluded", void 0);
if (false) {
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderTrackComponent.prototype.style;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUUvRCx3Q0FNQzs7O0lBTEMsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLGtDQUFxQjs7SUFDckIsbUNBQXNCOztJQUN0Qix3Q0FBb0I7O0FBV3RCLE1BQU0sT0FBTyxzQkFBc0I7SUFSbkM7UUFXMkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTVDLFVBQUssR0FBdUIsRUFBRSxDQUFDO0lBb0JqQyxDQUFDOzs7OztJQWxCQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixzRUFBK0M7YUFDaEQ7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOztBQUhrQjtJQUFkLFdBQVcsRUFBRTs7d0RBQWtCO0FBQ2pCO0lBQWQsV0FBVyxFQUFFOzt3REFBa0I7QUFDaEI7SUFBZixZQUFZLEVBQUU7OzBEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTs7MERBQW9COzs7SUFINUMsMENBQXlDOztJQUN6QywwQ0FBeUM7O0lBQ3pDLDRDQUE0Qzs7SUFDNUMsNENBQTRDOztJQUU1Qyx1Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpTbGlkZXJUcmFja1N0eWxlIHtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVsbDtcbiAgbGVmdD86IHN0cmluZyB8IG51bGw7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVsbDtcbiAgdmlzaWJpbGl0eT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXNsaWRlci10cmFjaycsXG4gIGV4cG9ydEFzOiAnbnpTbGlkZXJUcmFjaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpMZW5ndGg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQgPSBmYWxzZTtcblxuICBzdHlsZTogTnpTbGlkZXJUcmFja1N0eWxlID0ge307XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56SW5jbHVkZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMubnpJbmNsdWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelZlcnRpY2FsIHx8IGNoYW5nZXMubnpPZmZzZXQgfHwgY2hhbmdlcy5uekxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBudWxsO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=