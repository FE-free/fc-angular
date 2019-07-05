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
// from https://github.com/component/textarea-caret-position
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
/** @type {?} */
export var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
/** @type {?} */
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
/** @type {?} */
var isFirefox = isBrowser && ((/** @type {?} */ (window))).mozInnerScreenX != null;
/** @type {?} */
var _parseInt = (/**
 * @param {?} str
 * @return {?}
 */
function (str) { return parseInt(str, 10); });
var ɵ0 = _parseInt;
/**
 * @record
 */
export function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
export function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    var debug = (options && options.debug) || false;
    if (debug) {
        /** @type {?} */
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            (/** @type {?} */ (el.parentNode)).removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    /** @type {?} */
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    var style = div.style;
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : ((/** @type {?} */ (element))).currentStyle;
    // currentStyle for IE < 9
    /** @type {?} */
    var isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            // @ts-ignore
            style[prop] = computed[prop];
        }
    }));
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    /** @type {?} */
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    var coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
export function createDebugEle(element, coordinates) {
    /** @type {?} */
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    var rect = ((/** @type {?} */ (document.querySelector('#DEBUG')))) || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top -
        element.scrollTop +
        window.pageYOffset +
        coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left -
        element.scrollLeft +
        window.pageXOffset +
        coordinates.left + "px";
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFFWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUViLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFFYix3REFBd0Q7SUFDeEQsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFFWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsZUFBZTtJQUNmLGFBQWE7SUFFYixTQUFTO0lBQ1QsWUFBWTtDQUNiOztJQUVLLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXOzs7SUFHekMsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsZUFBZSxJQUFJLElBQUk7O0lBRWhFLFNBQVM7Ozs7QUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUE7Ozs7O0FBRXBELGlDQUlDOzs7SUFIQywwQkFBWTs7SUFDWiwyQkFBYTs7SUFDYiw2QkFBZTs7Ozs7Ozs7QUFHakIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUErQyxFQUMvQyxRQUFnQixFQUNoQixPQUE2QjtJQUU3QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO0tBQ25HOztRQUVLLEtBQUssR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSztJQUNqRCxJQUFJLEtBQUssRUFBRTs7WUFDSCxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQ0FBMkMsQ0FBQztRQUM5RSxJQUFJLEVBQUUsRUFBRTtZQUNOLG1CQUFBLEVBQUUsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7O1FBR0ssR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsMENBQTBDLENBQUM7SUFDcEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRXpCLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSzs7O1FBR2pCLFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLFlBQVk7OztRQUNyRyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPO0lBRTVDLDBCQUEwQjtJQUMxQixLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxzQkFBc0I7S0FDdEQ7SUFFRCxzQkFBc0I7SUFDdEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQywwQ0FBMEM7SUFDdkUsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0tBQzdCLENBQUMsZ0RBQWdEO0lBRWxELCtDQUErQztJQUMvQyxVQUFVLENBQUMsT0FBTzs7OztJQUFDLFVBQUMsSUFBWTtRQUM5QixJQUFJLE9BQU8sSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQ3BDLCtGQUErRjtZQUMvRixLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDcEM7YUFBTTtZQUNMLGFBQWE7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCxJQUFJLFNBQVMsRUFBRTtRQUNiLDhHQUE4RztRQUM5RyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyRCxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUM1QjtLQUNGO1NBQU07UUFDTCxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLHNFQUFzRTtLQUNsRztJQUVELEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELGlFQUFpRTtJQUNqRSxvR0FBb0c7SUFDcEcsSUFBSSxPQUFPLEVBQUU7UUFDWCxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1RDs7UUFFSyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0MseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsb0VBQW9FO0lBQ3BFLCtEQUErRDtJQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGdFQUFnRTtJQUM3SCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUVoQixXQUFXLEdBQUc7UUFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDeEQsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDM0QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0tBQ3ZDO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDcEMsY0FBYyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN0QztTQUFNO1FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLE9BQStDLEVBQUUsV0FBd0I7O1FBQ2hHLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7O1FBQ2xFLElBQUksR0FBb0IsQ0FBQyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFtQixDQUFDLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDcEgsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFNLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7UUFDckQsT0FBTyxDQUFDLFNBQVM7UUFDakIsTUFBTSxDQUFDLFdBQVc7UUFDbEIsV0FBVyxDQUFDLEdBQUcsT0FBSSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUk7UUFDdkQsT0FBTyxDQUFDLFVBQVU7UUFDbEIsTUFBTSxDQUFDLFdBQVc7UUFDbEIsV0FBVyxDQUFDLElBQUksT0FBSSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY29tcG9uZW50L3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uXG5cbi8vIFdlJ2xsIGNvcHkgdGhlIHByb3BlcnRpZXMgYmVsb3cgaW50byB0aGUgbWlycm9yIGRpdi5cbi8vIE5vdGUgdGhhdCBzb21lIGJyb3dzZXJzLCBzdWNoIGFzIEZpcmVmb3gsIGRvIG5vdCBjb25jYXRlbmF0ZSBwcm9wZXJ0aWVzXG4vLyBpbnRvIHRoZWlyIHNob3J0aGFuZCAoZS5nLiBwYWRkaW5nLXRvcCwgcGFkZGluZy1ib3R0b20gZXRjLiAtPiBwYWRkaW5nKSxcbi8vIHNvIHdlIGhhdmUgdG8gbGlzdCBldmVyeSBzaW5nbGUgcHJvcGVydHkgZXhwbGljaXRseS5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAnZGlyZWN0aW9uJywgLy8gUlRMIHN1cHBvcnRcbiAgJ2JveFNpemluZycsXG4gICd3aWR0aCcsIC8vIG9uIENocm9tZSBhbmQgSUUsIGV4Y2x1ZGUgdGhlIHNjcm9sbGJhciwgc28gdGhlIG1pcnJvciBkaXYgd3JhcHMgZXhhY3RseSBhcyB0aGUgdGV4dGFyZWEgZG9lc1xuICAnaGVpZ2h0JyxcbiAgJ292ZXJmbG93WCcsXG4gICdvdmVyZmxvd1knLCAvLyBjb3B5IHRoZSBzY3JvbGxiYXIgZm9yIElFXG5cbiAgJ2JvcmRlclRvcFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclN0eWxlJyxcblxuICAncGFkZGluZ1RvcCcsXG4gICdwYWRkaW5nUmlnaHQnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdwYWRkaW5nTGVmdCcsXG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnRcbiAgJ2ZvbnRTdHlsZScsXG4gICdmb250VmFyaWFudCcsXG4gICdmb250V2VpZ2h0JyxcbiAgJ2ZvbnRTdHJldGNoJyxcbiAgJ2ZvbnRTaXplJyxcbiAgJ2ZvbnRTaXplQWRqdXN0JyxcbiAgJ2xpbmVIZWlnaHQnLFxuICAnZm9udEZhbWlseScsXG5cbiAgJ3RleHRBbGlnbicsXG4gICd0ZXh0VHJhbnNmb3JtJyxcbiAgJ3RleHRJbmRlbnQnLFxuICAndGV4dERlY29yYXRpb24nLCAvLyBtaWdodCBub3QgbWFrZSBhIGRpZmZlcmVuY2UsIGJ1dCBiZXR0ZXIgYmUgc2FmZVxuXG4gICdsZXR0ZXJTcGFjaW5nJyxcbiAgJ3dvcmRTcGFjaW5nJyxcblxuICAndGFiU2l6ZScsXG4gICdNb3pUYWJTaXplJ1xuXTtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmNvbnN0IGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAod2luZG93IGFzIGFueSkubW96SW5uZXJTY3JlZW5YICE9IG51bGw7XG5cbmNvbnN0IF9wYXJzZUludCA9IChzdHI6IHN0cmluZykgPT4gcGFyc2VJbnQoc3RyLCAxMCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q29vcmRpbmF0ZXMoXG4gIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICBwb3NpdGlvbjogbnVtYmVyLFxuICBvcHRpb25zPzogeyBkZWJ1Zz86IGJvb2xlYW4gfVxuKTogQ29vcmRpbmF0ZXMge1xuICBpZiAoIWlzQnJvd3Nlcikge1xuICAgIHRocm93IG5ldyBFcnJvcigndGV4dGFyZWEtY2FyZXQtcG9zaXRpb24jZ2V0Q2FyZXRDb29yZGluYXRlcyBzaG91bGQgb25seSBiZSBjYWxsZWQgaW4gYSBicm93c2VyJyk7XG4gIH1cblxuICBjb25zdCBkZWJ1ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpIHx8IGZhbHNlO1xuICBpZiAoZGVidWcpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2Jyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIG1pcnJvciBkaXYgd2lsbCByZXBsaWNhdGUgdGhlIHRleHRhcmVhJ3Mgc3R5bGVcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pZCA9ICdpbnB1dC10ZXh0YXJlYS1jYXJldC1wb3NpdGlvbi1taXJyb3ItZGl2JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGNvbnN0IHN0eWxlID0gZGl2LnN0eWxlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIDogKGVsZW1lbnQgYXMgYW55KS5jdXJyZW50U3R5bGU7IC8vIGN1cnJlbnRTdHlsZSBmb3IgSUUgPCA5XG4gIGNvbnN0IGlzSW5wdXQgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnO1xuXG4gIC8vIERlZmF1bHQgdGV4dGFyZWEgc3R5bGVzXG4gIHN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuICBpZiAoIWlzSW5wdXQpIHtcbiAgICBzdHlsZS53b3JkV3JhcCA9ICdicmVhay13b3JkJzsgLy8gb25seSBmb3IgdGV4dGFyZWEtc1xuICB9XG5cbiAgLy8gUG9zaXRpb24gb2ZmLXNjcmVlblxuICBzdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7IC8vIHJlcXVpcmVkIHRvIHJldHVybiBjb29yZGluYXRlcyBwcm9wZXJseVxuICBpZiAoIWRlYnVnKSB7XG4gICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9IC8vIG5vdCAnZGlzcGxheTogbm9uZScgYmVjYXVzZSB3ZSB3YW50IHJlbmRlcmluZ1xuXG4gIC8vIFRyYW5zZmVyIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcyB0byB0aGUgZGl2XG4gIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGlzSW5wdXQgJiYgcHJvcCA9PT0gJ2xpbmVIZWlnaHQnKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIDxpbnB1dD5zIGJlY2F1c2UgdGV4dCBpcyByZW5kZXJlZCBjZW50ZXJlZCBhbmQgbGluZSBoZWlnaHQgbWF5IGJlICE9IGhlaWdodFxuICAgICAgc3R5bGUubGluZUhlaWdodCA9IGNvbXB1dGVkLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc3R5bGVbcHJvcF0gPSBjb21wdXRlZFtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAvLyBGaXJlZm94IGxpZXMgYWJvdXQgdGhlIG92ZXJmbG93IHByb3BlcnR5IGZvciB0ZXh0YXJlYXM6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTk4NDI3NVxuICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCA+IF9wYXJzZUludChjb21wdXRlZC5oZWlnaHQpKSB7XG4gICAgICBzdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJzsgLy8gZm9yIENocm9tZSB0byBub3QgcmVuZGVyIGEgc2Nyb2xsYmFyOyBJRSBrZWVwcyBvdmVyZmxvd1kgPSAnc2Nyb2xsJ1xuICB9XG5cbiAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24pO1xuICAvLyBUaGUgc2Vjb25kIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGlucHV0IHR5cGU9XCJ0ZXh0XCIgdnMgdGV4dGFyZWE6XG4gIC8vIHNwYWNlcyBuZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggbm9uLWJyZWFraW5nIHNwYWNlcyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDAyMDM1LzEyNjkwMzdcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBkaXYudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csICdcXHUwMGEwJyk7XG4gIH1cblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBXcmFwcGluZyBtdXN0IGJlIHJlcGxpY2F0ZWQgKmV4YWN0bHkqLCBpbmNsdWRpbmcgd2hlbiBhIGxvbmcgd29yZCBnZXRzXG4gIC8vIG9udG8gdGhlIG5leHQgbGluZSwgd2l0aCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYmVmb3JlICgjNykuXG4gIC8vIFRoZSAgKm9ubHkqIHJlbGlhYmxlIHdheSB0byBkbyB0aGF0IGlzIHRvIGNvcHkgdGhlICplbnRpcmUqIHJlc3Qgb2YgdGhlXG4gIC8vIHRleHRhcmVhJ3MgY29udGVudCBpbnRvIHRoZSA8c3Bhbj4gY3JlYXRlZCBhdCB0aGUgY2FyZXQgcG9zaXRpb24uXG4gIC8vIEZvciBpbnB1dHMsIGp1c3QgJy4nIHdvdWxkIGJlIGVub3VnaCwgYnV0IG5vIG5lZWQgdG8gYm90aGVyLlxuICBzcGFuLnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24pIHx8ICcuJzsgLy8gfHwgYmVjYXVzZSBhIGNvbXBsZXRlbHkgZW1wdHkgZmF1eCBzcGFuIGRvZXNuJ3QgcmVuZGVyIGF0IGFsbFxuICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XG4gICAgdG9wOiBzcGFuLm9mZnNldFRvcCArIF9wYXJzZUludChjb21wdXRlZC5ib3JkZXJUb3BXaWR0aCksXG4gICAgbGVmdDogc3Bhbi5vZmZzZXRMZWZ0ICsgX3BhcnNlSW50KGNvbXB1dGVkLmJvcmRlckxlZnRXaWR0aCksXG4gICAgaGVpZ2h0OiBfcGFyc2VJbnQoY29tcHV0ZWQubGluZUhlaWdodClcbiAgfTtcblxuICBpZiAoZGVidWcpIHtcbiAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcbiAgICBjcmVhdGVEZWJ1Z0VsZShlbGVtZW50LCBjb29yZGluYXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVidWdFbGUoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICBjb25zdCBmb250U2l6ZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XG4gIGNvbnN0IHJlY3Q6IEhUTUxTcGFuRWxlbWVudCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjREVCVUcnKSBhcyBIVE1MU3BhbkVsZW1lbnQpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlY3QpO1xuICByZWN0LmlkID0gJ0RFQlVHJztcbiAgcmVjdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHJlY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gIHJlY3Quc3R5bGUuaGVpZ2h0ID0gZm9udFNpemU7XG4gIHJlY3Quc3R5bGUud2lkdGggPSAnMXB4JztcbiAgcmVjdC5zdHlsZS50b3AgPSBgJHtlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgK1xuICAgIHdpbmRvdy5wYWdlWU9mZnNldCArXG4gICAgY29vcmRpbmF0ZXMudG9wfXB4YDtcbiAgcmVjdC5zdHlsZS5sZWZ0ID0gYCR7ZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cbiAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgIHdpbmRvdy5wYWdlWE9mZnNldCArXG4gICAgY29vcmRpbmF0ZXMubGVmdH1weGA7XG59XG4iXX0=