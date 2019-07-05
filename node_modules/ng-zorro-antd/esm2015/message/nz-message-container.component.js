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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
export class NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, defaultConfig, config) {
        this.cdr = cdr;
        this.messages = [];
        this.setConfig(Object.assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = Object.assign({}, this.config, config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    createMessage(message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    }
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    removeMessage(messageId, userAction = false) {
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        (message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    }
    /**
     * Remove all messages.
     * @return {?}
     */
    removeMessageAll() {
        this.messages = [];
        this.cdr.detectChanges();
    }
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    _mergeMessageOptions(options) {
        /** @type {?} */
        const defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return Object.assign({}, defaultOptions, options);
    }
}
NzMessageContainerComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-message-container',
                exportAs: 'nzMessageContainer',
                preserveWhitespaces: false,
                template: "<div class=\"ant-message\" [style.top]=\"top\">\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\n</div>"
            }] }
];
/** @nocollapse */
NzMessageContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
];
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVdwRyxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7SUFLdEMsWUFDWSxHQUFzQixFQUNlLGFBQThCLEVBQ3RDLE1BQXVCO1FBRnBELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTGxDLGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBU25DLElBQUksQ0FBQyxTQUFTLG1CQUFNLGFBQWEsRUFBSyxNQUFNLEVBQUcsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUF1QjtRQUMvQixJQUFJLENBQUMsTUFBTSxxQkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFNRCxhQUFhLENBQUMsT0FBNEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQU9ELGFBQWEsQ0FBQyxTQUFpQixFQUFFLGFBQXNCLEtBQUs7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsbUJBQUEsT0FBTyxDQUFDLE9BQU8sRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBTVMsb0JBQW9CLENBQUMsT0FBOEI7O2NBQ3JELGNBQWMsR0FBeUI7WUFDM0MsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7U0FDM0M7UUFDRCx5QkFBWSxjQUFjLEVBQUssT0FBTyxFQUFHO0lBQzNDLENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwwTEFBb0Q7YUFDckQ7Ozs7WUFwQkMsaUJBQWlCOzRDQTRCZCxRQUFRLFlBQUksTUFBTSxTQUFDLHlCQUF5Qjs0Q0FDNUMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFQdkMsK0NBQXFDOztJQUNyQyw2Q0FBa0M7O0lBQ2xDLDBDQUFtQjs7Ozs7SUFHakIsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZywgTlpfTUVTU0FHRV9DT05GSUcsIE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LW1lc3NhZ2UtY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2VDb250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuICBtZXNzYWdlczogTnpNZXNzYWdlRGF0YUZpbGxlZFtdID0gW107XG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnPjtcbiAgdG9wOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpNZXNzYWdlQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9DT05GSUcpIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnXG4gICkge1xuICAgIHRoaXMuc2V0Q29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnIH0pO1xuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLnRvcCA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpUb3ApO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBQYXJzZWQgbWVzc2FnZSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcbiAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBtZXNzYWdlLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgbWVzc2FnZS5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIG1lc3NhZ2UgYnkgYG1lc3NhZ2VJZGAuXG4gICAqIEBwYXJhbSBtZXNzYWdlSWQgSWQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHVzZXJBY3Rpb24gV2hldGhlciB0aGlzIGlzIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLlxuICAgKi9cbiAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQ6IHN0cmluZywgdXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcy5zb21lKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZUlkID09PSBtZXNzYWdlSWQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIG1lc3NhZ2Uub25DbG9zZSEubmV4dCh1c2VyQWN0aW9uKTtcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG1lc3NhZ2VzLlxuICAgKi9cbiAgcmVtb3ZlTWVzc2FnZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyBhbmQgY3VzdG9tIG1lc3NhZ2Ugb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgcHJvdGVjdGVkIF9tZXJnZU1lc3NhZ2VPcHRpb25zKG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFPcHRpb25zIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpNZXNzYWdlRGF0YU9wdGlvbnMgPSB7XG4gICAgICBuekR1cmF0aW9uOiB0aGlzLmNvbmZpZy5uekR1cmF0aW9uLFxuICAgICAgbnpBbmltYXRlOiB0aGlzLmNvbmZpZy5uekFuaW1hdGUsXG4gICAgICBuelBhdXNlT25Ib3ZlcjogdGhpcy5jb25maWcubnpQYXVzZU9uSG92ZXJcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gIH1cbn1cbiJdfQ==