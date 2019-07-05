/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ExistingProvider, OnDestroy, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
export declare const NZ_AUTOCOMPLETE_VALUE_ACCESSOR: ExistingProvider;
export declare function getNzAutocompleteMissingPanelError(): Error;
export declare class NzAutocompleteTriggerDirective implements ControlValueAccessor, OnDestroy {
    private elementRef;
    private _overlay;
    private viewContainerRef;
    private document;
    /** Bind nzAutocomplete component */
    nzAutocomplete: NzAutocompleteComponent;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    panelOpen: boolean;
    /** Current active option */
    readonly activeOption: NzAutocompleteOptionComponent | undefined;
    private overlayRef;
    private portal;
    private positionStrategy;
    private previousValue;
    private selectionChangeSubscription;
    private optionsChangeSubscription;
    private overlayBackdropClickSubscription;
    private overlayPositionChangeSubscription;
    constructor(elementRef: ElementRef, _overlay: Overlay, viewContainerRef: ViewContainerRef, document: any);
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: {}) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    openPanel(): void;
    closePanel(): void;
    handleKeydown(event: KeyboardEvent): void;
    handleInput(event: KeyboardEvent): void;
    handleFocus(): void;
    handleBlur(): void;
    /**
     * Subscription data source changes event
     */
    private subscribeOptionsChange;
    /**
     * Subscription option changes event and set the value
     */
    private subscribeSelectionChange;
    /**
     * Subscription external click and close panel
     */
    private subscribeOverlayBackdropClick;
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    private subscribeOverlayPositionChange;
    private attachOverlay;
    private destroyPanel;
    private getOverlayConfig;
    private getConnectedElement;
    private getHostWidth;
    private getOverlayPosition;
    private resetActiveItem;
    private setValueAndClose;
    private setTriggerValue;
    private doBackfill;
    private canOpen;
}
