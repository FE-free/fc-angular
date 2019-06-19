"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var GC = require("@grapecity/spread-sheets");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ColumnComponent = (function () {
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ColumnComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColumnComponent.prototype, "dataField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColumnComponent.prototype, "headerText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "resizable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "autoFit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.CellTypes.Base)
], ColumnComponent.prototype, "cellType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "headerStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ColumnComponent.prototype, "formatter", void 0);
ColumnComponent = __decorate([
    core_1.Component({
        selector: 'gc-column',
        template: "\n        <ng-content></ng-content>\n    "
    })
], ColumnComponent);
exports.ColumnComponent = ColumnComponent;
var WorksheetComponent = (function () {
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
__decorate([
    core_1.ContentChildren(ColumnComponent),
    __metadata("design:type", core_1.QueryList)
], WorksheetComponent.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksheetComponent.prototype, "dataSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenColumnCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenRowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "allowCellOverflow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "frozenlineColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "sheetTabColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionPolicy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionUnit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "zoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "currentTheme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "clipBoardOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "colHeaderVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "isProtected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showRowOutline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showColumnOutline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBackColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBorderColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], WorksheetComponent.prototype, "defaultStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "autoGenerateColumns", void 0);
WorksheetComponent = __decorate([
    core_1.Component({
        selector: 'gc-worksheet',
        template: "\n        <ng-content></ng-content>\n    "
    }),
    __metadata("design:paramtypes", [])
], WorksheetComponent);
exports.WorksheetComponent = WorksheetComponent;
var SpreadSheetsComponent = (function () {
    function SpreadSheetsComponent(elRef) {
        this.style = {
            width: '800px',
            height: '600px'
        };
        this.workbookInitialized = new core_1.EventEmitter();
        this.validationError = new core_1.EventEmitter();
        this.cellClick = new core_1.EventEmitter();
        this.cellDoubleClick = new core_1.EventEmitter();
        this.enterCell = new core_1.EventEmitter();
        this.leaveCell = new core_1.EventEmitter();
        this.valueChanged = new core_1.EventEmitter();
        this.topRowChanged = new core_1.EventEmitter();
        this.leftColumnChanged = new core_1.EventEmitter();
        this.invalidOperation = new core_1.EventEmitter();
        this.rangeFiltering = new core_1.EventEmitter();
        this.rangeFiltered = new core_1.EventEmitter();
        this.tableFiltering = new core_1.EventEmitter();
        this.tableFiltered = new core_1.EventEmitter();
        this.rangeSorting = new core_1.EventEmitter();
        this.rangeSorted = new core_1.EventEmitter();
        this.clipboardChanging = new core_1.EventEmitter();
        this.clipboardChanged = new core_1.EventEmitter();
        this.clipboardPasting = new core_1.EventEmitter();
        this.clipboardPasted = new core_1.EventEmitter();
        this.columnWidthChanging = new core_1.EventEmitter();
        this.columnWidthChanged = new core_1.EventEmitter();
        this.rowHeightChanging = new core_1.EventEmitter();
        this.rowHeightChanged = new core_1.EventEmitter();
        this.dragDropBlock = new core_1.EventEmitter();
        this.dragDropBlockCompleted = new core_1.EventEmitter();
        this.dragFillBlock = new core_1.EventEmitter();
        this.dragFillBlockCompleted = new core_1.EventEmitter();
        this.editStarting = new core_1.EventEmitter();
        this.editChange = new core_1.EventEmitter();
        this.editEnding = new core_1.EventEmitter();
        this.editEnd = new core_1.EventEmitter();
        this.editEnded = new core_1.EventEmitter();
        this.rangeGroupStateChanging = new core_1.EventEmitter();
        this.rangeGroupStateChanged = new core_1.EventEmitter();
        this.selectionChanging = new core_1.EventEmitter();
        this.selectionChanged = new core_1.EventEmitter();
        this.sheetTabClick = new core_1.EventEmitter();
        this.sheetTabDoubleClick = new core_1.EventEmitter();
        this.sheetNameChanging = new core_1.EventEmitter();
        this.sheetNameChanged = new core_1.EventEmitter();
        this.userZooming = new core_1.EventEmitter();
        this.userFormulaEntered = new core_1.EventEmitter();
        this.cellChanged = new core_1.EventEmitter();
        this.columnChanged = new core_1.EventEmitter();
        this.rowChanged = new core_1.EventEmitter();
        this.activeSheetChanging = new core_1.EventEmitter();
        this.activeSheetChanged = new core_1.EventEmitter();
        this.sparklineChanged = new core_1.EventEmitter();
        this.rangeChanged = new core_1.EventEmitter();
        this.buttonClicked = new core_1.EventEmitter();
        this.editorStatusChanged = new core_1.EventEmitter();
        this.floatingObjectChanged = new core_1.EventEmitter();
        this.floatingObjectSelectionChanged = new core_1.EventEmitter();
        this.pictureChanged = new core_1.EventEmitter();
        this.floatingObjectRemoving = new core_1.EventEmitter();
        this.floatingObjectRemoved = new core_1.EventEmitter();
        this.pictureSelectionChanged = new core_1.EventEmitter();
        this.floatingObjectLoaded = new core_1.EventEmitter();
        this.touchToolStripOpening = new core_1.EventEmitter();
        this.commentChanged = new core_1.EventEmitter();
        this.commentRemoving = new core_1.EventEmitter();
        this.commentRemoved = new core_1.EventEmitter();
        this.slicerChanged = new core_1.EventEmitter();
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
        this.sheets.changes.subscribe(function (changes) { _this.onSheetsChanged(changes); });
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
            'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving', 'FloatingObjectRemoved', 'PictureSelectionChanged',
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabEditable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "autoFitType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "hostStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "hostClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "validationError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "enterCell", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leaveCell", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "valueChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editStarting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnding", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userZooming", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
__decorate([
    core_1.ContentChildren(WorksheetComponent),
    __metadata("design:type", core_1.QueryList)
], SpreadSheetsComponent.prototype, "sheets", void 0);
SpreadSheetsComponent = __decorate([
    core_1.Component({
        selector: 'gc-spread-sheets',
        template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"hostClass\">\n            <ng-content></ng-content>\n        </div>\n    "
    }),
    __param(0, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SpreadSheetsComponent);
exports.SpreadSheetsComponent = SpreadSheetsComponent;
var SpreadSheetsModule = (function () {
    function SpreadSheetsModule() {
    }
    return SpreadSheetsModule;
}());
SpreadSheetsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
        exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
    })
], SpreadSheetsModule);
exports.SpreadSheetsModule = SpreadSheetsModule;
