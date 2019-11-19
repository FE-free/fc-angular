(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcprint-fcprint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcprint/fcprint.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcprint/fcprint.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fc-print\">\r\n  <div>\r\n    <p>\r\n      1：若只打印《表单一》,看一下<a\r\n        href=\"javascript:;\"\r\n        (click)=\"printPreview()\"\r\n        >打印预览</a\r\n      >,可<a href=\"javascript:;\" (click)=\"directPrint()\">直接打印</a>也可\r\n      <a href=\"javascript:;\" (click)=\"printerSelect()\">选择打印机</a\r\n      >打印。<br /><br />\r\n      2：若《表单一》和《表单二》一起并列输出,看一下<a\r\n        href=\"javascript:;\" (click)=\"prn2_preview()\"\r\n        >打印预览</a\r\n      >,其布局风格可<a href=\"javascript:;\" (click)=\"prn2_manage()\">打印维护</a>调整。\r\n    </p>\r\n\r\n    <p>\r\n      3：若打印整个页面,看看<a href=\"javascript:;\" (click)=\"prn3_preview()\">打印预览</a\r\n      >。<br /><br />\r\n      本例要点是用Document的innerHTML方法把打印目标的超文本送给控件。\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"fc-conetent\">\r\n    <!-- 需要打印的内容 -->\r\n    <form id=\"form1\">\r\n      <table border=\"1\">\r\n        <tr>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Month</th>\r\n          <th>Savings</th>\r\n          <th>Savings</th>\r\n          <th>Savings</th>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n        <tr>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n          <td>January</td>\r\n          <td>$100</td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n\r\n    <div id=\"form2\">\r\n      <table\r\n        border=\"1\"\r\n        width=\"100%\"\r\n        id=\"tb01\"\r\n        bgcolor=\"#CCFFCC\"\r\n        style=\"border:solid 1px black;border-collapse:collapse\"\r\n      >\r\n        <tr>\r\n          <td width=\"133\" id=\"mtb001\">\r\n            <font face=\"黑体\" color=\"#FF0000\" size=\"3\">《表单二》&copy;</font>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table\r\n        border=\"1\"\r\n        width=\"100%\"\r\n        height=\"106\"\r\n        cellspacing=\"0\"\r\n        bgcolor=\"#CCFFFF\"\r\n        style=\"border:solid 1px black;border-collapse:collapse\"\r\n      >\r\n        <tr>\r\n          <td width=\"66\" height=\"16\" style=\"border:solid 1px black\">\r\n            <font color=\"#0000FF\">X</font><font color=\"#0000FF\">等</font>\r\n          </td>\r\n          <td width=\"51\" height=\"16\" style=\"border:solid 1px black\">\r\n            <font color=\"#0000FF\">Y等</font>\r\n          </td>\r\n          <td width=\"51\" height=\"16\" style=\"border:solid 1px black\">\r\n            <font color=\"#0000FF\">Z等</font>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"66\" height=\"12\" style=\"border:solid 1px black\">\r\n            <span style=\"font-family:Wingdings;font-size:25px;\">&#254;</span\r\n            >X001\r\n          </td>\r\n          <td width=\"51\" height=\"12\" style=\"border:solid 1px black\">\r\n            <strike>Y001</strike>\r\n          </td>\r\n          <td width=\"51\" height=\"44\" rowspan=\"3\" style=\"border:solid 1px black\">\r\n            <ol style=\"list-style-type:upper-alpha;list-style-position:inside;\">\r\n              <li>Z001</li>\r\n              <li>Z002</li>\r\n              <li>Z003</li>\r\n              <li>Z004</li>\r\n              <li>Z005</li>\r\n            </ol>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"30%\" height=\"16\" style=\"border:solid 1px black\">\r\n            <strong>X002</strong>\r\n          </td>\r\n          <td width=\"51\" height=\"16\" style=\"border:solid 1px black\">\r\n            <u>Y002</u><span style=\"visibility: hidden\">hidesome</span>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"30%\" height=\"16\" style=\"border:solid 1px black\">\r\n            <span style=\"text-decoration: overline\">X003</span>\r\n          </td>\r\n          <td width=\"40%\" height=\"16\" style=\"border:solid 1px black\">\r\n            <em>Y003</em><input type=\"radio\" name=\"R1\" /><input\r\n              type=\"radio\"\r\n              name=\"R1\"\r\n              checked\r\n            />\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/assets/plugin/lodop/LodopFuncs.js":
/*!***********************************************!*\
  !*** ./src/assets/plugin/lodop/LodopFuncs.js ***!
  \***********************************************/
/*! exports provided: getLodop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLodop", function() { return getLodop; });
﻿var CreatedOKLodop7766 = null, CLodopIsLocal;

//====判断是否需要 Web打印服务CLodop:===
//===(不支持插件的浏览器版本需要用它)===
function needCLodop() {
    try {
        var ua = navigator.userAgent;
        if (ua.match(/Windows\sPhone/i))
            return true;
        if (ua.match(/iPhone|iPod|iPad/i))
            return true;
        if (ua.match(/Android/i))
            return true;
        if (ua.match(/Edge\D?\d+/i))
            return true;

        var verTrident = ua.match(/Trident\D?\d+/i);
        var verIE = ua.match(/MSIE\D?\d+/i);
        var verOPR = ua.match(/OPR\D?\d+/i);
        var verFF = ua.match(/Firefox\D?\d+/i);
        var x64 = ua.match(/x64/i);
        if ((!verTrident) && (!verIE) && (x64))
            return true;
        else if (verFF) {
            verFF = verFF[0].match(/\d+/);
            if ((verFF[0] >= 41) || (x64))
                return true;
        } else if (verOPR) {
            verOPR = verOPR[0].match(/\d+/);
            if (verOPR[0] >= 32)
                return true;
        } else if ((!verTrident) && (!verIE)) {
            var verChrome = ua.match(/Chrome\D?\d+/i);
            if (verChrome) {
                verChrome = verChrome[0].match(/\d+/);
                if (verChrome[0] >= 41)
                    return true;
            }
        }
        return false;
    } catch (err) {
        return true;
    }
}

//====页面引用CLodop云打印必须的JS文件,用双端口(8000和18000）避免其中某个被占用：====
if (needCLodop()) {
    var src1 = "http://localhost:8000/CLodopfuncs.js?priority=1";
    var src2 = "http://localhost:18000/CLodopfuncs.js?priority=0";

    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    var oscript = document.createElement("script");
    oscript.src = src1;
    head.insertBefore(oscript, head.firstChild);
    oscript = document.createElement("script");
    oscript.src = src2;
    head.insertBefore(oscript, head.firstChild);
    CLodopIsLocal = !!((src1 + src2).match(/\/\/localho|\/\/127.0.0./i));
}

//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
    var strHtmInstall = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtmUpdate = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtm64_Install = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtm64_Update = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtmFireFox = "<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>";
    var strHtmChrome = "<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>";
    var strCLodopInstall_1 = "<br><font color='#FF00FF'>Web打印服务CLodop未安装启动，点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>下载执行安装</a>";
    var strCLodopInstall_2 = "<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_self'>点这里直接再次启动</a>）";
    var strCLodopInstall_3 = "，成功后请刷新本页面。</font>";
    var strCLodopUpdate = "<br><font color='#FF00FF'>Web打印服务CLodop需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</font>";
    var LODOP;
    try {
        var ua = navigator.userAgent;
        var isIE = !!(ua.match(/MSIE/i)) || !!(ua.match(/Trident/i));
        if (needCLodop()) {
            try {
                LODOP = getCLodop();
            } catch (err) {}
            if (!LODOP && document.readyState !== "complete") {
                alert("网页还没下载完毕，请稍等一下再操作.");
                return;
            }
            if (!LODOP) {
                document.body.innerHTML = strCLodopInstall_1 + (CLodopIsLocal ? strCLodopInstall_2 : "") + strCLodopInstall_3 + document.body.innerHTML;                
                return;
            } else {
                if (CLODOP.CVERSION < "3.0.9.2") {
                    document.body.innerHTML = strCLodopUpdate + document.body.innerHTML;
                }
                if (oEMBED && oEMBED.parentNode)
                    oEMBED.parentNode.removeChild(oEMBED);
                if (oOBJECT && oOBJECT.parentNode)
                    oOBJECT.parentNode.removeChild(oOBJECT);
            }
        } else {
            var is64IE = isIE && !!(ua.match(/x64/i));
            //=====如果页面有Lodop就直接使用，没有则新建:==========
            if (oOBJECT || oEMBED) {
                if (isIE)
                    LODOP = oOBJECT;
                else
                    LODOP = oEMBED;
            } else if (!CreatedOKLodop7766) {
                LODOP = document.createElement("object");
                LODOP.setAttribute("width", 0);
                LODOP.setAttribute("height", 0);
                LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
                if (isIE)
                    LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
                else
                    LODOP.setAttribute("type", "application/x-print-lodop");
                document.documentElement.appendChild(LODOP);
                CreatedOKLodop7766 = LODOP;
            } else
                LODOP = CreatedOKLodop7766;
            //=====Lodop插件未安装时提示下载地址:==========
            if ((!LODOP) || (!LODOP.VERSION)) {
                if (ua.indexOf('Chrome') >= 0)
                    document.body.innerHTML = strHtmChrome + document.body.innerHTML;
                if (ua.indexOf('Firefox') >= 0)
                    document.body.innerHTML = strHtmFireFox + document.body.innerHTML;
                document.body.innerHTML = (is64IE ? strHtm64_Install : strHtmInstall) + document.body.innerHTML;
                return LODOP;
            }
        }
        if (LODOP.VERSION < "6.2.2.6") {
            if (!needCLodop())
                document.body.innerHTML = (is64IE ? strHtm64_Update : strHtmUpdate) + document.body.innerHTML;
        }
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):==



        //=======================================================
        return LODOP;
    } catch (err) {
        alert("getLodop出错:" + err);
    }
}


/***/ }),

/***/ "./src/feature/fc/fcdemo/fcprint/fcprint.component.ts":
/*!************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcprint/fcprint.component.ts ***!
  \************************************************************/
/*! exports provided: FcprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcprintComponent", function() { return FcprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_plugin_lodop_LodopFuncs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/plugin/lodop/LodopFuncs.js */ "./src/assets/plugin/lodop/LodopFuncs.js");




var FcprintComponent = /** @class */ (function () {
    function FcprintComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    FcprintComponent.prototype.CreateOneFormPage = function () {
        this.LODOP = Object(_assets_plugin_lodop_LodopFuncs_js__WEBPACK_IMPORTED_MODULE_3__["getLodop"])();
        this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_表单一');
        this.LODOP.SET_PRINT_STYLE('FontSize', 18);
        this.LODOP.SET_PRINT_STYLE('Bold', 1);
        this.LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, '打印页面部分内容');
        this.LODOP.ADD_PRINT_HTM(88, 200, 350, 600, document.getElementById('form1').innerHTML);
    };
    /**
     * 打印预览
     */
    FcprintComponent.prototype.printPreview = function () {
        this.CreateOneFormPage();
        this.LODOP.PREVIEW();
    };
    /**
     * 直接打印
     */
    FcprintComponent.prototype.directPrint = function () {
        this.CreateOneFormPage();
        this.LODOP.PRINT();
    };
    /**
     * 选择打印机
     */
    FcprintComponent.prototype.printerSelect = function () {
        this.CreateOneFormPage();
        this.LODOP.PRINTA();
    };
    FcprintComponent.prototype.CreateTwoFormPage = function () {
        this.LODOP = Object(_assets_plugin_lodop_LodopFuncs_js__WEBPACK_IMPORTED_MODULE_3__["getLodop"])();
        this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_表单二');
        this.LODOP.ADD_PRINT_RECT(70, 27, 634, 242, 0, 1);
        this.LODOP.ADD_PRINT_TEXT(29, 236, 279, 38, '页面内容改变布局打印');
        this.LODOP.SET_PRINT_STYLEA(2, 'FontSize', 18);
        this.LODOP.SET_PRINT_STYLEA(2, 'Bold', 1);
        this.LODOP.ADD_PRINT_HTM(88, 40, 321, 185, document.getElementById('form1').innerHTML);
        this.LODOP.ADD_PRINT_HTM(87, 355, 285, 187, document.getElementById('form2').innerHTML);
        this.LODOP.ADD_PRINT_TEXT(319, 58, 500, 30, '注：其中《表单一》按显示大小，《表单二》在程序控制宽度(285px)内自适应调整');
    };
    /**
     * 《表单一》和《表单二》一起并列输出
     */
    FcprintComponent.prototype.prn2_preview = function () {
        this.CreateTwoFormPage();
        this.LODOP.PREVIEW();
    };
    /**
     * 打印维护
     */
    FcprintComponent.prototype.prn2_manage = function () {
        this.CreateTwoFormPage();
        this.LODOP.PRINT_SETUP();
    };
    /**
     * 打印整个页面 打印预览
     */
    FcprintComponent.prototype.prn3_preview = function () {
        this.LODOP = Object(_assets_plugin_lodop_LodopFuncs_js__WEBPACK_IMPORTED_MODULE_3__["getLodop"])();
        this.LODOP.PRINT_INIT('打印控件功能演示_Lodop功能_全页');
        this.LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', document.documentElement.innerHTML);
        this.LODOP.PREVIEW();
    };
    FcprintComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FcprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'fc-print',
            template: __webpack_require__(/*! raw-loader!./fcprint.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcprint/fcprint.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FcprintComponent);
    return FcprintComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcprint/fcprint.module.ts":
/*!*********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcprint/fcprint.module.ts ***!
  \*********************************************************/
/*! exports provided: FcprintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcprintModule", function() { return FcprintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fcprint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcprint.component */ "./src/feature/fc/fcdemo/fcprint/fcprint.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcprint_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcprint.route */ "./src/feature/fc/fcdemo/fcprint/fcprint.route.ts");







var FcprintModule = /** @class */ (function () {
    function FcprintModule() {
    }
    FcprintModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_fcprint_route__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_4__["FccomponentModule"]
            ],
            declarations: [
                _fcprint_component__WEBPACK_IMPORTED_MODULE_1__["FcprintComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], FcprintModule);
    return FcprintModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcprint/fcprint.route.ts":
/*!********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcprint/fcprint.route.ts ***!
  \********************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcprint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcprint.component */ "./src/feature/fc/fcdemo/fcprint/fcprint.component.ts");

var Routers = [
    {
        path: 'fcprint',
        component: _fcprint_component__WEBPACK_IMPORTED_MODULE_0__["FcprintComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fcprint-fcprint-module-es5.js.map