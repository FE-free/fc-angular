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
import { Directive, Host, Optional } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
var NzTbodyDirective = /** @class */ (function () {
    function NzTbodyDirective(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
    }
    NzTbodyDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tbody',
                    host: {
                        '[class.ant-table-tbody]': 'nzTableComponent'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTbodyDirective.ctorParameters = function () { return [
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return NzTbodyDirective;
}());
export { NzTbodyDirective };
if (false) {
    /** @type {?} */
    NzTbodyDirective.prototype.nzTableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGJvZHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRib2R5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQVFFLDBCQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7O2dCQVI5RSxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxPQUFPO29CQUNqQixJQUFJLEVBQUU7d0JBQ0oseUJBQXlCLEVBQUUsa0JBQWtCO3FCQUM5QztpQkFDRjs7OztnQkFSUSxnQkFBZ0IsdUJBVVYsSUFBSSxZQUFJLFFBQVE7O0lBQy9CLHVCQUFDO0NBQUEsQUFURCxJQVNDO1NBRlksZ0JBQWdCOzs7SUFDZiw0Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0Ym9keScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS10Ym9keV0nOiAnbnpUYWJsZUNvbXBvbmVudCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRib2R5RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCkge31cbn1cbiJdfQ==