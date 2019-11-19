import * as tslib_1 from "tslib";
import * as GC from '@grapecity/spread-sheets';
import { Component, Input, OnChanges, SimpleChanges, AfterViewInit, QueryList, ContentChildren, OnDestroy, Output, EventEmitter, ElementRef, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
let ColumnComponent = class ColumnComponent {
    constructor() {
        this.changes = {};
    }
    onAttached(sheet, index) {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    }
    onColumnChanged() {
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
    ngOnChanges(changes) {
        this.changes = {};
        let changesCache = this.changes;
        for (let changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], ColumnComponent.prototype, "width", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ColumnComponent.prototype, "dataField", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ColumnComponent.prototype, "headerText", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ColumnComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ColumnComponent.prototype, "resizable", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ColumnComponent.prototype, "autoFit", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GC.Spread.Sheets.CellTypes.Base)
], ColumnComponent.prototype, "cellType", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "headerStyle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ColumnComponent.prototype, "formatter", void 0);
ColumnComponent = tslib_1.__decorate([
    Component({
        selector: 'gc-column',
        template: `
        <ng-content></ng-content>
    `
    })
], ColumnComponent);
export { ColumnComponent };
let WorksheetComponent = class WorksheetComponent {
    constructor() {
        this.sheet = new GC.Spread.Sheets.Worksheet("");
    }
    onAttached() {
        let sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach((columnComponent, index) => {
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
            this.columns.forEach((columnComponent, index) => {
                columnComponent.onAttached(this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    }
    getSheet() {
        return this.sheet;
    }
    ngOnChanges(changes) {
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
                    newValue.forEach((item) => {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach((item) => {
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
        this.columns.changes.subscribe(() => { this.onAttached(); });
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
};
tslib_1.__decorate([
    ContentChildren(ColumnComponent),
    tslib_1.__metadata("design:type", QueryList)
], WorksheetComponent.prototype, "columns", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "rowCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "colCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], WorksheetComponent.prototype, "dataSource", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenColumnCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenRowCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "allowCellOverflow", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "frozenlineColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "sheetTabColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionPolicy", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionUnit", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "zoom", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "currentTheme", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "clipBoardOptions", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "colHeaderVisible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "isProtected", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showRowOutline", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showColumnOutline", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBackColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBorderColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", GC.Spread.Sheets.Style)
], WorksheetComponent.prototype, "defaultStyle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], WorksheetComponent.prototype, "autoGenerateColumns", void 0);
WorksheetComponent = tslib_1.__decorate([
    Component({
        selector: 'gc-worksheet',
        template: `
        <ng-content></ng-content>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [])
], WorksheetComponent);
export { WorksheetComponent };
let SpreadSheetsComponent = class SpreadSheetsComponent {
    constructor(elRef) {
        this.style = {
            width: '800px',
            height: '600px'
        };
        // outputs events
        this.workbookInitialized = new EventEmitter();
        this.validationError = new EventEmitter();
        this.cellClick = new EventEmitter();
        this.cellDoubleClick = new EventEmitter();
        this.enterCell = new EventEmitter();
        this.leaveCell = new EventEmitter();
        this.valueChanged = new EventEmitter();
        this.topRowChanged = new EventEmitter();
        this.leftColumnChanged = new EventEmitter();
        this.invalidOperation = new EventEmitter();
        this.rangeFiltering = new EventEmitter();
        this.rangeFiltered = new EventEmitter();
        this.tableFiltering = new EventEmitter();
        this.tableFiltered = new EventEmitter();
        this.rangeSorting = new EventEmitter();
        this.rangeSorted = new EventEmitter();
        this.clipboardChanging = new EventEmitter();
        this.clipboardChanged = new EventEmitter();
        this.clipboardPasting = new EventEmitter();
        this.clipboardPasted = new EventEmitter();
        this.columnWidthChanging = new EventEmitter();
        this.columnWidthChanged = new EventEmitter();
        this.rowHeightChanging = new EventEmitter();
        this.rowHeightChanged = new EventEmitter();
        this.dragDropBlock = new EventEmitter();
        this.dragDropBlockCompleted = new EventEmitter();
        this.dragFillBlock = new EventEmitter();
        this.dragFillBlockCompleted = new EventEmitter();
        this.editStarting = new EventEmitter();
        this.editChange = new EventEmitter();
        this.editEnding = new EventEmitter();
        this.editEnd = new EventEmitter();
        this.editEnded = new EventEmitter();
        this.rangeGroupStateChanging = new EventEmitter();
        this.rangeGroupStateChanged = new EventEmitter();
        this.selectionChanging = new EventEmitter();
        this.selectionChanged = new EventEmitter();
        this.sheetTabClick = new EventEmitter();
        this.sheetTabDoubleClick = new EventEmitter();
        this.sheetNameChanging = new EventEmitter();
        this.sheetNameChanged = new EventEmitter();
        this.userZooming = new EventEmitter();
        this.userFormulaEntered = new EventEmitter();
        this.cellChanged = new EventEmitter();
        this.columnChanged = new EventEmitter();
        this.rowChanged = new EventEmitter();
        this.activeSheetChanging = new EventEmitter();
        this.activeSheetChanged = new EventEmitter();
        this.sparklineChanged = new EventEmitter();
        this.rangeChanged = new EventEmitter();
        this.buttonClicked = new EventEmitter();
        this.editorStatusChanged = new EventEmitter();
        this.floatingObjectChanged = new EventEmitter();
        this.floatingObjectSelectionChanged = new EventEmitter();
        this.pictureChanged = new EventEmitter();
        this.floatingObjectRemoving = new EventEmitter();
        this.floatingObjectRemoved = new EventEmitter();
        this.pictureSelectionChanged = new EventEmitter();
        this.floatingObjectLoaded = new EventEmitter();
        this.touchToolStripOpening = new EventEmitter();
        this.commentChanged = new EventEmitter();
        this.commentRemoving = new EventEmitter();
        this.commentRemoved = new EventEmitter();
        this.slicerChanged = new EventEmitter();
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        let elRef = this.elRef;
        let dom = elRef.nativeElement;
        let hostElement = dom.querySelector('div');
        this.spread = new GC.Spread.Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        this.initSheets();
        this.sheets.changes.subscribe((changes) => { this.onSheetsChanged(changes); }); // may change sheets using bingidng.
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    }
    onSheetsChanged(sheetComponents) {
        let spread = this.spread;
        spread.suspendPaint();
        if (sheetComponents) {
            sheetComponents.forEach((sheetComponent, index) => {
                let sheet = sheetComponent.getSheet();
                if (sheet && !sheet.getParent()) {
                    spread.addSheet(index, sheetComponent.getSheet());
                    sheetComponent.onAttached();
                }
            });
        }
        spread.resumePaint();
    }
    initSheets() {
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
    bindCustomEvent(spread) {
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
            spread.bind(event + customEventNameSpace, (event, data) => {
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
            }
            else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    }
    ngOnChanges(changes) {
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
};
SpreadSheetsComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabEditable", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "autoFitType", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "hostStyle", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SpreadSheetsComponent.prototype, "hostClass", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SpreadSheetsComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "validationError", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "enterCell", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leaveCell", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "valueChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editStarting", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnding", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userZooming", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
tslib_1.__decorate([
    ContentChildren(WorksheetComponent),
    tslib_1.__metadata("design:type", QueryList)
], SpreadSheetsComponent.prototype, "sheets", void 0);
SpreadSheetsComponent = tslib_1.__decorate([
    Component({
        selector: 'gc-spread-sheets',
        template: `
        <div [ngStyle]="style" [ngClass]="hostClass">
            <ng-content></ng-content>
        </div>
    `
    }),
    tslib_1.__param(0, Inject(ElementRef)),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], SpreadSheetsComponent);
export { SpreadSheetsComponent };
let SpreadSheetsModule = class SpreadSheetsModule {
};
SpreadSheetsModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
        exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
    })
], SpreadSheetsModule);
export { SpreadSheetsModule };
//# sourceMappingURL=gc.spread.sheets.angular.js.map