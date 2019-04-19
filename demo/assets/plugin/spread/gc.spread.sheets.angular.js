import * as GC from '@grapecity/spread-sheets';
import { OnChanges, SimpleChanges, AfterViewInit, QueryList, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
var ColumnComponent = /** @class */ (function () {
    function ColumnComponent() {
        this.changes = {};
    }
    ColumnComponent.prototype.onAttached = function (sheet, index) {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    };
    ColumnComponent.prototype.onColumnChanged = function () {
        if (this.sheet) {
            var sheet = this.sheet;
            sheet.suspendPaint();
            sheet.suspendEvent();
            var changes = this.changes;
            for (var changeName in changes) {
                var newValue = changes[changeName].currentValue;
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
    };
    ColumnComponent.prototype.ngOnChanges = function (changes) {
        this.changes = {};
        var changesCache = this.changes;
        for (var changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    };
    return ColumnComponent;
}());
export { ColumnComponent };
var WorksheetComponent = /** @class */ (function () {
    function WorksheetComponent() {
        this.sheet = new GC.Spread.Sheets.Worksheet("");
    }
    WorksheetComponent.prototype.onAttached = function () {
        var _this = this;
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach(function (columnComponent, index) {
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
            this.columns.forEach(function (columnComponent, index) {
                columnComponent.onAttached(_this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    };
    WorksheetComponent.prototype.getSheet = function () {
        return this.sheet;
    };
    WorksheetComponent.prototype.ngOnChanges = function (changes) {
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
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
                    newValue.forEach(function (item) {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach(function (item) {
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
    };
    WorksheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.columns.changes.subscribe(function () { _this.onAttached(); });
    };
    WorksheetComponent.prototype.ngOnDestroy = function () {
        var sheet = this.sheet;
        var spread = sheet ? sheet.getParent() : null;
        if (spread) {
            var sheetIndex = spread.getSheetIndex(sheet.name());
            if (sheetIndex !== void 0) {
                spread.removeSheet(sheetIndex);
            }
        }
    };
    return WorksheetComponent;
}());
export { WorksheetComponent };
var SpreadSheetsComponent = /** @class */ (function () {
    function SpreadSheetsComponent(elRef) {
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
    SpreadSheetsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var elRef = this.elRef;
        var dom = elRef.nativeElement;
        var hostElement = dom.querySelector('div');
        this.spread = new GC.Spread.Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        this.initSheets();
        this.sheets.changes.subscribe(function (changes) { _this.onSheetsChanged(changes); }); // may change sheets using bingidng.
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    };
    SpreadSheetsComponent.prototype.onSheetsChanged = function (sheetComponents) {
        var spread = this.spread;
        spread.suspendPaint();
        if (sheetComponents) {
            sheetComponents.forEach(function (sheetComponent, index) {
                var sheet = sheetComponent.getSheet();
                if (sheet && !sheet.getParent()) {
                    spread.addSheet(index, sheetComponent.getSheet());
                    sheetComponent.onAttached();
                }
            });
        }
        spread.resumePaint();
    };
    SpreadSheetsComponent.prototype.initSheets = function () {
        var sheets = this.sheets;
        var spread = this.spread;
        spread.clearSheets();
        sheets.forEach(function (sheetComponent, index) {
            spread.addSheet(index, sheetComponent.getSheet());
            sheetComponent.onAttached();
        });
        // when there is no sheet, add default sheet to spread
        if (sheets.length === 0) {
            this.spread.addSheet(0, new GC.Spread.Sheets.Worksheet(""));
        }
    };
    SpreadSheetsComponent.prototype.bindCustomEvent = function (spread) {
        var _this = this;
        var customEventNameSpace = '.ng';
        var events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell',
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
        events.forEach(function (event) {
            spread.bind(event + customEventNameSpace, function (event, data) {
                var eventType = event.type;
                var camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
                _this[camelCaseEvent].emit(data);
            });
        });
    };
    SpreadSheetsComponent.prototype.setSpreadOptions = function () {
        var spread = this.spread;
        if (!this.spread) {
            return;
        }
        spread.suspendEvent();
        spread.suspendPaint();
        var options = this.spreadOptions;
        options && options.forEach(function (option) {
            if (option.name === 'name') {
                spread.name = option.value;
            }
            else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    };
    SpreadSheetsComponent.prototype.ngOnChanges = function (changes) {
        var options = [];
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
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
    };
    SpreadSheetsComponent.prototype.ngOnDestroy = function () {
        this.spread.destroy();
    };
    return SpreadSheetsComponent;
}());
export { SpreadSheetsComponent };
var SpreadSheetsModule = /** @class */ (function () {
    function SpreadSheetsModule() {
    }
    return SpreadSheetsModule;
}());
export { SpreadSheetsModule };
