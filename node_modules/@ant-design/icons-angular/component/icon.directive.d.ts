import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { IconDefinition, ThemeType } from '../types';
import { IconService } from './icon.service';
export declare class IconDirective implements OnChanges {
    protected _iconService: IconService;
    protected _elementRef: ElementRef;
    protected _renderer: Renderer2;
    type: string | IconDefinition;
    theme: ThemeType;
    twoToneColor: string;
    constructor(_iconService: IconService, _elementRef: ElementRef, _renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Render a new icon in the current element. Remove the icon when `type` is falsy.
     */
    protected _changeIcon(): Promise<SVGElement | null>;
    /**
     * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
     * If namespace is specified, ignore theme because it meaningless for users' icons.
     * @param type
     * @param theme
     */
    protected _parseIconType(type: string | IconDefinition, theme: ThemeType): IconDefinition | string;
    protected _setSVGElement(svg: SVGElement): void;
    protected _clearSVGElement(): void;
}
