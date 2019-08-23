import * as GC from '@grapecity/spread-sheets';
import {
    Component, Input, OnChanges, SimpleChanges,
    AfterViewInit, QueryList, ContentChildren, OnDestroy, Output, EventEmitter, ElementRef, Inject, NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'gc-column',
    template: `
        <ng-content></ng-content>
    `
})
export class ColumnComponent implements OnChanges {
    private changes: any = {};
    private sheet: GC.Spread.Sheets.Worksheet;
    private index: number;

    // indicate all inputs
    @Input() width: number;
    @Input() dataField: string;
    @Input() headerText: string;
    @Input() visible: boolean;
    @Input() resizable: boolean;
    @Input() autoFit: boolean;
    @Input() style: GC.Spread.Sheets.Style;
    @Input() cellType: GC.Spread.Sheets.CellTypes.Base;
    @Input() headerStyle: GC.Spread.Sheets.Style;
    @Input() formatter: any;

    public onAttached(sheet: GC.Spread.Sheets.Worksheet, index: number): void {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    }

    private onColumnChanged() {
        if (this.sheet) {
            let sheet = this.sheet;
            sheet.suspendPaint();
            sheet.suspendEvent();
            let changes = this.changes;
            for (let changeName in changes) {
                let newValue = changes[changeName].currentValue;
                if (newValue === null || newValue === void 0) {
                    continue;
                }
                switch (changeName) {
                    case 'width':
                        sheet.setColumnWidth(this.index, newValue);
                        break;
                    case 'visible':
                        sheet.setColumnVisible(this.index, newValue);
                        break;
                    case 'resizable':
                        sheet.setColumnResizable(this.index, newValue);
                        break;
                    case 'autoFit':
                        if (newValue) {
                            sheet.autoFitColumn(this.index);
                        }
                        break;
                    case 'style':
                        sheet.setStyle(-1, this.index, newValue);
                        break;
                    case 'headerStyle':
                        sheet.setStyle(-1, this.index, newValue, GC.Spread.Sheets.SheetArea.colHeader);
                        break;
                    case 'cellType':
                        sheet.setCellType(-1, this.index, newValue);
                        break;
                    case 'formatter':
                        sheet.setFormatter(-1, this.index, newValue, GC.Spread.Sheets.SheetArea.viewport);
                        break;
                }
            }
            sheet.resumeEvent();
            sheet.resumePaint();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.changes = {};
        let changesCache = this.changes;
        for (let changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    }
}

@Component({
    selector: 'gc-worksheet',
    template: `
        <ng-content></ng-content>
    `
})
export class WorksheetComponent implements OnChanges, AfterViewInit {
    private sheet: GC.Spread.Sheets.Worksheet;
    @ContentChildren(ColumnComponent)
    columns: QueryList<ColumnComponent>;

    // indicate all inputs
    @Input() rowCount: number;
    @Input() colCount: number;
    @Input() dataSource: any;
    @Input() name: string;
    @Input() frozenColumnCount: number;
    @Input() frozenRowCount: number;
    @Input() frozenTrailingRowCount: number;
    @Input() frozenTrailingColumnCount: number;
    @Input() allowCellOverflow: boolean;
    @Input() frozenlineColor: string;
    @Input() sheetTabColor: string;
    @Input() selectionPolicy: number;
    @Input() selectionUnit: number;
    @Input() zoom: number;
    @Input() currentTheme: string;
    @Input() clipBoardOptions: number;
    @Input() rowHeaderVisible: boolean;
    @Input() colHeaderVisible: boolean;
    @Input() rowHeaderAutoText: number;
    @Input() colHeaderAutoText: number;
    @Input() rowHeaderAutoTextIndex: number;
    @Input() colHeaderAutoTextIndex: number;
    @Input() isProtected: boolean;
    @Input() showRowOutline: boolean;
    @Input() showColumnOutline: boolean;
    @Input() selectionBackColor: string;
    @Input() selectionBorderColor: string;
    @Input() defaultStyle: GC.Spread.Sheets.Style;
    @Input() rowOutlineInfo: any[];
    @Input() columnOutlineInfo: any[];
    @Input() autoGenerateColumns: boolean;


    constructor() {
        this.sheet = new GC.Spread.Sheets.Worksheet("");
    }

    public onAttached(): void {
        let sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach((columnComponent: ColumnComponent, index: number) => {
                if (columnComponent.dataField) {
                    sheet.bindColumn(index, {
                        name: columnComponent.dataField,
                        displayName: columnComponent.headerText
                    });
                }
            });
        }
        if (this.columns.length > 0) {
            sheet.setColumnCount(this.columns.length);
            this.columns.forEach((columnComponent: ColumnComponent, index: number) => {
                columnComponent.onAttached(this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    }
    public getSheet() {
        return this.sheet;
    }

    ngOnChanges(changes: SimpleChanges) {
        let sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        for (let changeName in changes) {
            let newValue = changes[changeName].currentValue;
            if (newValue === null || newValue === void 0) {
                continue;
            }
            switch (changeName) {
                case "rowCount":
                    sheet.setRowCount(newValue);
                    break;
                case "colCount":
                    sheet.setColumnCount(newValue);
                    break;
                case "name":
                    sheet.name(newValue);
                    break;
                case "frozenColumnCount":
                    sheet.frozenColumnCount(newValue);
                    break;
                case "frozenRowCount":
                    sheet.frozenRowCount(newValue);
                    break;
                case "frozenTrailingRowCount":
                    sheet.frozenTrailingRowCount(newValue);
                    break;
                case "frozenTrailingColumnCount":
                    sheet.frozenTrailingColumnCount(newValue);
                    break;
                case "selectionPolicy":
                    sheet.selectionPolicy(newValue);
                    break;
                case "selectionUnit":
                    sheet.selectionUnit(newValue);
                    break;
                case "zoom":
                    sheet.zoom(newValue);
                    break;
                case "currentTheme":
                    sheet.currentTheme(newValue);
                    break;
                case "defaultStyle":
                    sheet.setDefaultStyle(newValue);
                    break;
                case "rowOutlineInfo":
                    newValue.forEach((item: any) => {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach((item: any) => {
                        sheet.columnOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "showRowOutline":
                    sheet.showRowOutline(newValue);
                    break;
                case "showColumnOutline":
                    sheet.showColumnOutline(newValue);
                    break;
                case "dataSource":
                    sheet.setDataSource(newValue);
                    break;
                case "autoGenerateColumns":
                    sheet[changeName] = newValue;
                default:
                    sheet.options[changeName] = newValue;
            }
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    }

    ngAfterViewInit() {
        this.columns.changes.subscribe(() => { this.onAttached() });
    }

    ngOnDestroy() {
        let sheet = this.sheet;
        let spread = sheet ? sheet.getParent() : null;
        if (spread) {
            let sheetIndex = spread.getSheetIndex(sheet.name());
            if (sheetIndex !== void 0) {
                spread.removeSheet(sheetIndex);
            }
        }
    }
}

@Component({
    selector: 'gc-spread-sheets',
    template: `
        <div [ngStyle]="style" [ngClass]="hostClass">
            <ng-content></ng-content>
        </div>
    `
})
export class SpreadSheetsComponent implements OnChanges, AfterViewInit, OnDestroy {
    private elRef: ElementRef;
    private spread: GC.Spread.Sheets.Workbook;
    private spreadOptions: any[];

    style = {
        width: '800px',
        height: '600px'
    };

    // indicate all options
    @Input() allowUserResize: boolean;
    @Input() allowUserZoom: boolean;
    @Input() allowUserEditFormula: boolean;
    @Input() allowUserDragFill: boolean;
    @Input() allowUserDragDrop: boolean;
    @Input() highlightInvalidData: boolean;
    @Input() newTabVisible: boolean;
    @Input() tabStripVisible: boolean;
    @Input() tabEditable: boolean;
    @Input() autoFitType: number;
    @Input() referenceStyle: number;
    @Input() backColor: string;
    @Input() grayAreaBackColor: string;
    @Input() showVerticalScrollbar: boolean;
    @Input() showHorizontalScrollbar: boolean;
    @Input() hostStyle: any; // used for get styles form parent host DIV
    @Input() hostClass: string;
    @Input() name: string;
    @Input() backgroundImage: string;
    @Input() backgroundImageLayout: number;
    @Input() showScrollTip: number;
    @Input() showResizeTip: number;
    @Input() showDragDropTip: boolean;
    @Input() showDragFillTip: boolean;


    // outputs events
    @Output() workbookInitialized = new EventEmitter<any>();
    @Output() validationError = new EventEmitter<any>();
    @Output() cellClick = new EventEmitter<any>();
    @Output() cellDoubleClick = new EventEmitter<any>();
    @Output() enterCell = new EventEmitter<any>();
    @Output() leaveCell = new EventEmitter<any>();
    @Output() valueChanged = new EventEmitter<any>();
    @Output() topRowChanged = new EventEmitter<any>();
    @Output() leftColumnChanged = new EventEmitter<any>();
    @Output() invalidOperation = new EventEmitter<any>();
    @Output() rangeFiltering = new EventEmitter<any>();
    @Output() rangeFiltered = new EventEmitter<any>();
    @Output() tableFiltering = new EventEmitter<any>();
    @Output() tableFiltered = new EventEmitter<any>();
    @Output() rangeSorting = new EventEmitter<any>();
    @Output() rangeSorted = new EventEmitter<any>();
    @Output() clipboardChanging = new EventEmitter<any>();
    @Output() clipboardChanged = new EventEmitter<any>();
    @Output() clipboardPasting = new EventEmitter<any>();
    @Output() clipboardPasted = new EventEmitter<any>();
    @Output() columnWidthChanging = new EventEmitter<any>();
    @Output() columnWidthChanged = new EventEmitter<any>();
    @Output() rowHeightChanging = new EventEmitter<any>();
    @Output() rowHeightChanged = new EventEmitter<any>();
    @Output() dragDropBlock = new EventEmitter<any>();
    @Output() dragDropBlockCompleted = new EventEmitter<any>();
    @Output() dragFillBlock = new EventEmitter<any>();
    @Output() dragFillBlockCompleted = new EventEmitter<any>();
    @Output() editStarting = new EventEmitter<any>();
    @Output() editChange = new EventEmitter<any>();
    @Output() editEnding = new EventEmitter<any>();
    @Output() editEnd = new EventEmitter<any>();
    @Output() editEnded = new EventEmitter<any>();
    @Output() rangeGroupStateChanging = new EventEmitter<any>();
    @Output() rangeGroupStateChanged = new EventEmitter<any>();
    @Output() selectionChanging = new EventEmitter<any>();
    @Output() selectionChanged = new EventEmitter<any>();
    @Output() sheetTabClick = new EventEmitter<any>();
    @Output() sheetTabDoubleClick = new EventEmitter<any>();
    @Output() sheetNameChanging = new EventEmitter<any>();
    @Output() sheetNameChanged = new EventEmitter<any>();
    @Output() userZooming = new EventEmitter<any>();
    @Output() userFormulaEntered = new EventEmitter<any>();
    @Output() cellChanged = new EventEmitter<any>();
    @Output() columnChanged = new EventEmitter<any>();
    @Output() rowChanged = new EventEmitter<any>();
    @Output() activeSheetChanging = new EventEmitter<any>();
    @Output() activeSheetChanged = new EventEmitter<any>();
    @Output() sparklineChanged = new EventEmitter<any>();
    @Output() rangeChanged = new EventEmitter<any>();
    @Output() buttonClicked = new EventEmitter<any>();
    @Output() editorStatusChanged = new EventEmitter<any>();
    @Output() floatingObjectChanged = new EventEmitter<any>();
    @Output() floatingObjectSelectionChanged = new EventEmitter<any>();
    @Output() pictureChanged = new EventEmitter<any>();
    @Output() floatingObjectRemoving = new EventEmitter<any>();
    @Output() floatingObjectRemoved = new EventEmitter<any>();
    @Output() pictureSelectionChanged = new EventEmitter<any>();
    @Output() floatingObjectLoaded = new EventEmitter<any>();
    @Output() touchToolStripOpening = new EventEmitter<any>();
    @Output() commentChanged = new EventEmitter<any>();
    @Output() commentRemoving = new EventEmitter<any>();
    @Output() commentRemoved = new EventEmitter<any>();
    @Output() slicerChanged = new EventEmitter<any>();


    @ContentChildren(WorksheetComponent)
    sheets: QueryList<WorksheetComponent>;

    constructor(@Inject(ElementRef) elRef: ElementRef) {
        this.elRef = elRef;
    }

    ngAfterViewInit() {
        let elRef = this.elRef;
        let dom = <HTMLElement>elRef.nativeElement;
        let hostElement = dom.querySelector('div');
        this.spread = new GC.Spread.Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        this.initSheets();
        this.sheets.changes.subscribe((changes) => { this.onSheetsChanged(changes) }) // may change sheets using bingidng.
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    }

    private onSheetsChanged(sheetComponents: QueryList<WorksheetComponent>) {
        let spread = this.spread;
        spread.suspendPaint();
        if (sheetComponents) {
            sheetComponents.forEach((sheetComponent: WorksheetComponent, index: number) => {
                let sheet = sheetComponent.getSheet();
                if (sheet && !sheet.getParent()) {
                    spread.addSheet(index, sheetComponent.getSheet());
                    sheetComponent.onAttached();
                }
            });
        }
        spread.resumePaint();
    }

    private initSheets() {
        let sheets = this.sheets;
        let spread = this.spread;
        spread.clearSheets();
        sheets.forEach((sheetComponent, index) => {
            spread.addSheet(index, sheetComponent.getSheet());
            sheetComponent.onAttached();
        });
        // when there is no sheet, add default sheet to spread
        if (sheets.length === 0) {
            this.spread.addSheet(0, new GC.Spread.Sheets.Worksheet(""));
        }
    }

    private bindCustomEvent(spread: GC.Spread.Sheets.Workbook) {
        let customEventNameSpace = '.ng';
        let events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell',
            'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged',
            'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering',
            'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging',
            'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging',
            'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock',
            'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting',
            'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging',
            'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick',
            'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged',
            'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged',
            'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged',
            'SparklineChanged',
            'RangeChanged', 'ButtonClicked', 'EditorStatusChanged',
            'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving',
            'FloatingObjectRemoved', 'PictureSelectionChanged',
            'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
        events.forEach((event) => {
            spread.bind(event + customEventNameSpace, (event: any, data: any) => {
                let eventType = event.type;
                let camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
                this[camelCaseEvent].emit(data);
            });
        });
    }

    setSpreadOptions() {
        let spread = this.spread;
        if (!this.spread) {
            return;
        }
        spread.suspendEvent();
        spread.suspendPaint();
        let options = this.spreadOptions;
        options && options.forEach((option) => {
            if (option.name === 'name') {
                spread.name = option.value;
            } else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    }

    ngOnChanges(changes: SimpleChanges) {
        let options = [];
        for (let changeName in changes) {
            let newValue = changes[changeName].currentValue;
            if (newValue !== null && newValue !== void 0) {
                switch (changeName) {
                    case 'hostStyle':
                        this.style = newValue;
                        break;
                    case 'hostClass':
                        break;
                    default:
                        options.push({ name: changeName, value: newValue });
                }
            }
        }
        this.spreadOptions = options;
        this.setSpreadOptions();
    }

    ngOnDestroy() {
        this.spread.destroy();
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
    exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
})
export class SpreadSheetsModule {
}
