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
// tslint:disable:no-any typedef no-invalid-this
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    let requestId;
    /** @type {?} */
    const later = (/**
     * @param {?} args
     * @return {?}
     */
    (args) => (/**
     * @return {?}
     */
    () => {
        requestId = null;
        fn(...args);
    }));
    /** @type {?} */
    const throttled = (/**
     * @param {...?} args
     * @return {?}
     */
    (...args) => {
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    });
    // tslint:disable-next-line:no-non-null-assertion
    ((/** @type {?} */ (throttled))).cancel = (/**
     * @return {?}
     */
    () => cancelRequestAnimationFrame((/** @type {?} */ (requestId))));
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function (target, key, descriptor) {
        /** @type {?} */
        const fn = descriptor.value;
        /** @type {?} */
        let definingProperty = false;
        return {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                const boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUUxRixNQUFNLENBQUMsT0FBTyxVQUFVLHdCQUF3QixDQUFDLEVBQU87O1FBQ2xELFNBQXdCOztVQUV0QixLQUFLOzs7O0lBQUcsQ0FBQyxJQUFXLEVBQUUsRUFBRTs7O0lBQUMsR0FBRyxFQUFFO1FBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUEsQ0FBQTs7VUFFSyxTQUFTOzs7O0lBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsaURBQWlEO0lBQ2pELENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxNQUFNOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxtQkFBQSxTQUFTLEVBQUMsQ0FBQyxDQUFBLENBQUM7SUFFMUUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0M7Ozs7OztJQUFPLFVBQVMsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlOztjQUNqRCxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUs7O1lBQ3ZCLGdCQUFnQixHQUFHLEtBQUs7UUFDNUIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJOzs7O1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEVBQUUsQ0FBQztpQkFDWDs7c0JBRUssT0FBTyxHQUFHLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixLQUFLLEVBQUUsT0FBTztvQkFDZCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSB0eXBlZGVmIG5vLWludmFsaWQtdGhpc1xuaW1wb3J0IHsgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbjogYW55KSB7XG4gIGxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGw7XG5cbiAgY29uc3QgbGF0ZXIgPSAoYXJnczogYW55W10pID0+ICgpID0+IHtcbiAgICByZXF1ZXN0SWQgPSBudWxsO1xuICAgIGZuKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmIChyZXF1ZXN0SWQgPT0gbnVsbCkge1xuICAgICAgcmVxdWVzdElkID0gcmVxQW5pbUZyYW1lKGxhdGVyKGFyZ3MpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxuICAodGhyb3R0bGVkIGFzIGFueSkuY2FuY2VsID0gKCkgPT4gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCEpO1xuXG4gIHJldHVybiB0aHJvdHRsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xuICAgIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBsZXQgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKSB7XG4gICAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm91bmRGbiA9IHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICB2YWx1ZTogYm91bmRGbixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==