(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["budget_report-bgreport-module-ngfactory"],{

/***/ "./src/feature/budget/budget_report/bgreport.module.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/feature/budget/budget_report/bgreport.module.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: BgreportModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgreportModuleNgFactory", function() { return BgreportModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bgreport_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bgreport.module */ "./src/feature/budget/budget_report/bgreport.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_dropdown_ng_zorro_antd_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/dropdown/ng-zorro-antd-dropdown.ngfactory */ "./node_modules/ng-zorro-antd/dropdown/ng-zorro-antd-dropdown.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_tooltip_ng_zorro_antd_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/tooltip/ng-zorro-antd-tooltip.ngfactory */ "./node_modules/ng-zorro-antd/tooltip/ng-zorro-antd-tooltip.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_drawer_ng_zorro_antd_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/drawer/ng-zorro-antd-drawer.ngfactory */ "./node_modules/ng-zorro-antd/drawer/ng-zorro-antd-drawer.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_message_ng_zorro_antd_message_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/message/ng-zorro-antd-message.ngfactory */ "./node_modules/ng-zorro-antd/message/ng-zorro-antd-message.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_notification_ng_zorro_antd_notification_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/notification/ng-zorro-antd-notification.ngfactory */ "./node_modules/ng-zorro-antd/notification/ng-zorro-antd-notification.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_popover_ng_zorro_antd_popover_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/popover/ng-zorro-antd-popover.ngfactory */ "./node_modules/ng-zorro-antd/popover/ng-zorro-antd-popover.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_popconfirm_ng_zorro_antd_popconfirm_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/popconfirm/ng-zorro-antd-popconfirm.ngfactory */ "./node_modules/ng-zorro-antd/popconfirm/ng-zorro-antd-popconfirm.ngfactory.js");
/* harmony import */ var _node_modules_ng_zorro_antd_modal_ng_zorro_antd_modal_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/ng-zorro-antd/modal/ng-zorro-antd-modal.ngfactory */ "./node_modules/ng-zorro-antd/modal/ng-zorro-antd-modal.ngfactory.js");
/* harmony import */ var _components_bgrptask_bgrptask_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bgrptask/bgrptask.component.ngfactory */ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-drawer.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _business_bgrptask_business__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./business/bgrptask.business */ "./src/feature/budget/budget_report/business/bgrptask.business.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-empty.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/calendar */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-calendar.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/switch */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-switch.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/mention */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-mention.js");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-breadcrumb.js");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-pagination.js");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-zorro-antd/steps */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-steps.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input-number.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/slider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-slider.js");
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/rate */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-rate.js");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/badge */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-badge.js");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ng-zorro-antd/alert */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-alert.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-page-header.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-timeline.js");
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng-zorro-antd/transfer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-transfer.js");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-carousel.js");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-collapse.js");
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ng-zorro-antd/comment */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-comment.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-time-picker.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-auto-complete.js");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tag.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ng-zorro-antd/popover */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-popover.js");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-popconfirm.js");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-back-top.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js");
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree-select.js");
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-skeleton.js");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-statistic.js");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-descriptions.js");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ng-zorro-antd/typography */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-typography.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_bgrptask_bgrptask_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/bgrptask/bgrptask.component */ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ts");
/* harmony import */ var _bgreport_route__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./bgreport.route */ "./src/feature/budget/budget_report/bgreport.route.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























































































var BgreportModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_bgreport_module__WEBPACK_IMPORTED_MODULE_1__["BgreportModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_zorro_antd_dropdown_ng_zorro_antd_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NzDropdownContextComponentNgFactory"], _node_modules_ng_zorro_antd_dropdown_ng_zorro_antd_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NzDropdownMenuComponentNgFactory"], _node_modules_ng_zorro_antd_tooltip_ng_zorro_antd_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NzToolTipComponentNgFactory"], _node_modules_ng_zorro_antd_drawer_ng_zorro_antd_drawer_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NzDrawerComponentNgFactory"], _node_modules_ng_zorro_antd_message_ng_zorro_antd_message_ngfactory__WEBPACK_IMPORTED_MODULE_6__["NzMessageContainerComponentNgFactory"], _node_modules_ng_zorro_antd_notification_ng_zorro_antd_notification_ngfactory__WEBPACK_IMPORTED_MODULE_7__["NzNotificationContainerComponentNgFactory"], _node_modules_ng_zorro_antd_popover_ng_zorro_antd_popover_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NzPopoverComponentNgFactory"], _node_modules_ng_zorro_antd_popconfirm_ng_zorro_antd_popconfirm_ngfactory__WEBPACK_IMPORTED_MODULE_9__["NzPopconfirmComponentNgFactory"], _node_modules_ng_zorro_antd_modal_ng_zorro_antd_modal_ngfactory__WEBPACK_IMPORTED_MODULE_10__["NzModalComponentNgFactory"], _components_bgrptask_bgrptask_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["BgrptaskComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzScrollService"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["SCROLL_SERVICE_PROVIDER_FACTORY"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], [3, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzScrollService"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownService"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzContextMenuService"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzContextMenuService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_19__["NzDrawerService"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_19__["NzDrawerService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationService"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalControlService"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalControlService"], [[3, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalControlService"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalService"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["Overlay"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalControlService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _business_bgrptask_business__WEBPACK_IMPORTED_MODULE_22__["BgrptaskBusiness"], _business_bgrptask_business__WEBPACK_IMPORTED_MODULE_22__["BgrptaskBusiness"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_24__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzWaveModule"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzWaveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__["NzIconModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__["NzIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__["NzButtonModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__["NzButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__["NzRadioModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__["NzRadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_29__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzAddOnModule"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzAddOnModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_31__["NzEmptyModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_31__["NzEmptyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_32__["NzSelectModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_32__["NzSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_33__["NzCalendarModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_33__["NzCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_34__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_34__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_35__["NzGridModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_35__["NzGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_36__["NzSwitchModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_36__["NzSwitchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_38__["NzMentionModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_38__["NzMentionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_39__["NzAffixModule"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_39__["NzAffixModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_40__["NzAnchorModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_40__["NzAnchorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_41__["NzLayoutModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_41__["NzLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_42__["NzBreadCrumbModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_42__["NzBreadCrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_43__["NzPaginationModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_43__["NzPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_44__["NzStepsModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_44__["NzStepsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_45__["NzInputModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_45__["NzInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_46__["NzCheckboxModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_46__["NzCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_47__["NzInputNumberModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_47__["NzInputNumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_48__["NzToolTipModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_48__["NzToolTipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_50__["NzRateModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_50__["NzRateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_51__["NzBadgeModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_51__["NzBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_52__["NzAlertModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_52__["NzAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_53__["NzSpinModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_53__["NzSpinModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_54__["NzDividerModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_54__["NzDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_55__["NzPageHeaderModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_55__["NzPageHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_56__["NzProgressModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_56__["NzProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_58__["NzCardModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_58__["NzCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_59__["NzAvatarModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_59__["NzAvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"], ng_zorro_antd_core__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__["NzTransferModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__["NzTransferModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_62__["NzCarouselModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_62__["NzCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_63__["NzCollapseModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_63__["NzCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_64__["NzCommentModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_64__["NzCommentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_65__["NzTableModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_65__["NzTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_66__["NzTimePickerModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_66__["NzTimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_67__["ɵa"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_67__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_67__["NzDatePickerModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_67__["NzDatePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_19__["NzDrawerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_19__["NzDrawerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_68__["NzFormModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_68__["NzFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_69__["NzListModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_69__["NzListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_70__["NzUploadModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_70__["NzUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_71__["NzAutocompleteModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_71__["NzAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_72__["NzTagModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_72__["NzTagModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_73__["NzMessageModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_73__["NzMessageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_74__["NzPopoverModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_74__["NzPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_75__["NzPopconfirmModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_75__["NzPopconfirmModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__["NzModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_76__["NzBackTopModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_76__["NzBackTopModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_77__["NzCascaderModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_77__["NzCascaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_78__["NzTreeModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_78__["NzTreeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_79__["NzTreeSelectModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_79__["NzTreeSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_80__["NzSkeletonModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_80__["NzSkeletonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_81__["NzStatisticModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_81__["NzStatisticModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_82__["NzDescriptionsModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_82__["NzDescriptionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_83__["NzTypographyModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_83__["NzTypographyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd__WEBPACK_IMPORTED_MODULE_84__["NgZorroAntdModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_84__["NgZorroAntdModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_85__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_85__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _bgreport_module__WEBPACK_IMPORTED_MODULE_1__["BgreportModule"], _bgreport_module__WEBPACK_IMPORTED_MODULE_1__["BgreportModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_73__["NZ_MESSAGE_DEFAULT_CONFIG"], { nzAnimate: true, nzDuration: 3000, nzMaxStack: 7, nzPauseOnHover: true, nzTop: 24 }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NZ_NOTIFICATION_DEFAULT_CONFIG"], { nzTop: "24px", nzBottom: "24px", nzPlacement: "topRight", nzDuration: 4500, nzMaxStack: 7, nzPauseOnHover: true, nzAnimate: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () { return [[{ path: "bgrptaskList", component: _components_bgrptask_bgrptask_component__WEBPACK_IMPORTED_MODULE_86__["BgrptaskComponent"], data: _bgreport_route__WEBPACK_IMPORTED_MODULE_87__["ɵ0"] }]]; }, [])]); });



/***/ }),

/***/ "./src/feature/budget/budget_report/bgreport.module.ts":
/*!*************************************************************!*\
  !*** ./src/feature/budget/budget_report/bgreport.module.ts ***!
  \*************************************************************/
/*! exports provided: BgreportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgreportModule", function() { return BgreportModule; });
class BgreportModule {
}


/***/ }),

/***/ "./src/feature/budget/budget_report/bgreport.route.ts":
/*!************************************************************!*\
  !*** ./src/feature/budget/budget_report/bgreport.route.ts ***!
  \************************************************************/
/*! exports provided: Routers, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _components_bgrptask_bgrptask_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bgrptask/bgrptask.component */ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ts");

const ɵ0 = { keepAlive: false } // 允许路由复用策略
;
const Routers = [
    {
        path: 'bgrptaskList',
        component: _components_bgrptask_bgrptask_component__WEBPACK_IMPORTED_MODULE_0__["BgrptaskComponent"],
        data: ɵ0 // 允许路由复用策略
    }
];



/***/ }),

/***/ "./src/feature/budget/budget_report/business/bgrptask.business.ts":
/*!************************************************************************!*\
  !*** ./src/feature/budget/budget_report/business/bgrptask.business.ts ***!
  \************************************************************************/
/*! exports provided: BgrptaskBusiness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgrptaskBusiness", function() { return BgrptaskBusiness; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class BgrptaskBusiness {
    constructor() { }
}
BgrptaskBusiness.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function BgrptaskBusiness_Factory() { return new BgrptaskBusiness(); }, token: BgrptaskBusiness, providedIn: "root" });


/***/ }),

/***/ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: RenderType_BgrptaskComponent, View_BgrptaskComponent_0, View_BgrptaskComponent_Host_0, BgrptaskComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BgrptaskComponent", function() { return RenderType_BgrptaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BgrptaskComponent_0", function() { return View_BgrptaskComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BgrptaskComponent_Host_0", function() { return View_BgrptaskComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgrptaskComponentNgFactory", function() { return BgrptaskComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _bgrptask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bgrptask.component */ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BgrptaskComponent = [""];
var RenderType_BgrptaskComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_BgrptaskComponent, data: {} });

function View_BgrptaskComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "input", [["nz-input", ""], ["placeholder", "\u62A5\u8868\u4EFB\u52A1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.itemName = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__["NzInputDirective"], [[6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.itemName; _ck(_v, 3, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ngClassPending; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).disabled; var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).nzSize === "large"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).nzSize === "small"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_BgrptaskComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "bgrptask", [], null, null, null, View_BgrptaskComponent_0, RenderType_BgrptaskComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _bgrptask_component__WEBPACK_IMPORTED_MODULE_3__["BgrptaskComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], null, null)], null, null); }
var BgrptaskComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("bgrptask", _bgrptask_component__WEBPACK_IMPORTED_MODULE_3__["BgrptaskComponent"], View_BgrptaskComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ts":
/*!************************************************************************************!*\
  !*** ./src/feature/budget/budget_report/components/bgrptask/bgrptask.component.ts ***!
  \************************************************************************************/
/*! exports provided: BgrptaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgrptaskComponent", function() { return BgrptaskComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

class BgrptaskComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.itemName = '';
    }
}


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
class SharedModule {
}


/***/ })

}]);
//# sourceMappingURL=budget_report-bgreport-module-ngfactory-es2015.js.map