(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcspread-fcspread-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: spread\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 14:42:08\n -->\n<div class=\"page\">\n  <div class=\"fc-toolbar\">\n    <button nz-button nzType=\"primary\">新增</button>\n    <button nz-button nzType=\"primary\">修改</button>\n    <button nz-button nzType=\"primary\">删除</button>\n  </div>\n  <div class=\"fc-spread-content\">\n    <gc-spread-sheets  (workbookInitialized)=\"workbookInit($event)\" [hostStyle]=\"spreadStyle\">\n    </gc-spread-sheets>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts":
/*!**************************************************************!*\
  !*** ./src/assets/plugin/spread/gc.spread.sheets.angular.ts ***!
  \**************************************************************/
/*! exports provided: ColumnComponent, WorksheetComponent, SpreadSheetsComponent, SpreadSheetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetComponent", function() { return WorksheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsComponent", function() { return SpreadSheetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsModule", function() { return SpreadSheetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




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
                        sheet.setStyle(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.colHeader);
                        break;
                    case 'cellType':
                        sheet.setCellType(-1, this.index, newValue);
                        break;
                    case 'formatter':
                        sheet.setFormatter(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.viewport);
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ColumnComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ColumnComponent.prototype, "dataField", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ColumnComponent.prototype, "headerText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "visible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "resizable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ColumnComponent.prototype, "autoFit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], ColumnComponent.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.CellTypes.Base)
], ColumnComponent.prototype, "cellType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], ColumnComponent.prototype, "headerStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ColumnComponent.prototype, "formatter", void 0);
ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-column',
        template: `
        <ng-content></ng-content>
    `
    })
], ColumnComponent);

let WorksheetComponent = class WorksheetComponent {
    constructor() {
        this.sheet = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet("");
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(ColumnComponent),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], WorksheetComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WorksheetComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenColumnCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenRowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "allowCellOverflow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "frozenlineColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "sheetTabColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "selectionPolicy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "selectionUnit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "zoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "currentTheme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "clipBoardOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "colHeaderVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "isProtected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "showRowOutline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "showColumnOutline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "selectionBackColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], WorksheetComponent.prototype, "selectionBorderColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
], WorksheetComponent.prototype, "defaultStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], WorksheetComponent.prototype, "autoGenerateColumns", void 0);
WorksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-worksheet',
        template: `
        <ng-content></ng-content>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorksheetComponent);

let SpreadSheetsComponent = class SpreadSheetsComponent {
    constructor(elRef) {
        this.style = {
            width: '800px',
            height: '600px'
        };
        // outputs events
        this.workbookInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.validationError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.enterCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leaveCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.topRowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leftColumnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.invalidOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editStarting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnding = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userZooming = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userFormulaEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sparklineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editorStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.touchToolStripOpening = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.slicerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        let elRef = this.elRef;
        let dom = elRef.nativeElement;
        let hostElement = dom.querySelector('div');
        this.spread = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Workbook(hostElement, { sheetCount: 0 });
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
            this.spread.addSheet(0, new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet(""));
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabEditable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "autoFitType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "backColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "hostStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "hostClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "validationError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "enterCell", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "leaveCell", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "valueChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editStarting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "userZooming", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "cellChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "columnChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rowChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(WorksheetComponent),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
], SpreadSheetsComponent.prototype, "sheets", void 0);
SpreadSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'gc-spread-sheets',
        template: `
        <div [ngStyle]="style" [ngClass]="hostClass">
            <ng-content></ng-content>
        </div>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], SpreadSheetsComponent);

let SpreadSheetsModule = class SpreadSheetsModule {
};
SpreadSheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
        exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
    })
], SpreadSheetsModule);



/***/ }),

/***/ "./src/feature/fc/fcspread/fcspread.module.ts":
/*!****************************************************!*\
  !*** ./src/feature/fc/fcspread/fcspread.module.ts ***!
  \****************************************************/
/*! exports provided: FcspreadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcspreadModule", function() { return FcspreadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcspread_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fcspread.route */ "./src/feature/fc/fcspread/fcspread.route.ts");
/* harmony import */ var _fcspreadbasic_fcspreadbasic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcspreadbasic/fcspreadbasic.component */ "./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.ts");
/* harmony import */ var src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/plugin/spread/gc.spread.sheets.angular */ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-23 14:43:48
 */






let FcspreadModule = class FcspreadModule {
};
FcspreadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcspread_route__WEBPACK_IMPORTED_MODULE_4__["Routers"]),
            src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_6__["SpreadSheetsModule"]
        ],
        declarations: [
            _fcspreadbasic_fcspreadbasic_component__WEBPACK_IMPORTED_MODULE_5__["FcspreadbasicComponent"]
        ],
        providers: []
    })
], FcspreadModule);



/***/ }),

/***/ "./src/feature/fc/fcspread/fcspread.route.ts":
/*!***************************************************!*\
  !*** ./src/feature/fc/fcspread/fcspread.route.ts ***!
  \***************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcspreadbasic_fcspreadbasic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcspreadbasic/fcspreadbasic.component */ "./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.ts");

const Routers = [
    {
        path: 'fcspreadbasic',
        component: _fcspreadbasic_fcspreadbasic_component__WEBPACK_IMPORTED_MODULE_0__["FcspreadbasicComponent"]
    },
];


/***/ }),

/***/ "./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.ts":
/*!**************************************************************************!*\
  !*** ./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.ts ***!
  \**************************************************************************/
/*! exports provided: FcspreadbasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcspreadbasicComponent", function() { return FcspreadbasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: spread
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 14:42:16
 */


let FcspreadbasicComponent = class FcspreadbasicComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // spread 样式
        this.spreadStyle = {
            width: '100%',
            height: '100%'
        };
    }
    /**
     * @description spreadJs 初始化
     * @param args
     */
    workbookInit(args) {
        this.spread = args.spread;
    }
};
FcspreadbasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-spreadbasic',
        template: __webpack_require__(/*! raw-loader!./fcspreadbasic.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcspread/fcspreadbasic/fcspreadbasic.component.html"),
        styles: ["\n      .fc-spread-content {\n        width: 100%;\n        height: 700px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FcspreadbasicComponent);



/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 共享模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-19 10:08:26
 * @LastEditTime: 2019-04-19 10:12:39
 */





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=fcspread-fcspread-module-es2015.js.map