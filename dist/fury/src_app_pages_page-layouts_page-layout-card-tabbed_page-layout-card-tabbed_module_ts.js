"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_page-layouts_page-layout-card-tabbed_page-layout-card-tabbed_module_ts"],{

/***/ 30359:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardTabbedRoutingModule: () => (/* binding */ PageLayoutCardTabbedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ 13101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedComponent
}];
class PageLayoutCardTabbedRoutingModule {
  static #_ = this.ɵfac = function PageLayoutCardTabbedRoutingModule_Factory(t) {
    return new (t || PageLayoutCardTabbedRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PageLayoutCardTabbedRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutCardTabbedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 13101:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardTabbedComponent: () => (/* binding */ PageLayoutCardTabbedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.component */ 94739);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);








const _c0 = function () {
  return ["Page Layouts"];
};
class PageLayoutCardTabbedComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PageLayoutCardTabbedComponent_Factory(t) {
    return new (t || PageLayoutCardTabbedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PageLayoutCardTabbedComponent,
    selectors: [["fury-page-layout-card-tabbed"]],
    decls: 33,
    vars: 2,
    consts: [["mode", "card"], ["current", "Card Tabbed", 3, "crumbs"], ["label", "Main Tab"], [1, "padding-top"], ["label", "Side Tab"], ["label", "Extra Tab"], ["label", "Additional Tab"], ["label", "Another Tab"], ["label", "One More Tab"], ["label", "Definitely the last Tab"], ["label", "Whoops another Tab"], ["label", "And one last Tab"]],
    template: function PageLayoutCardTabbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-card")(5, "mat-tab-group")(6, "mat-tab", 2)(7, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-tab", 4)(10, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-tab", 5)(13, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-tab", 6)(16, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-tab", 7)(19, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-tab", 8)(22, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-tab", 9)(25, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-tab", 10)(28, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-tab", 11)(31, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCardContent, _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoContentComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 59266:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardTabbedModule: () => (/* binding */ PageLayoutCardTabbedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-tabbed-routing.module */ 30359);
/* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ 13101);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.module */ 96096);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








class PageLayoutCardTabbedModule {
  static #_ = this.ɵfac = function PageLayoutCardTabbedModule_Factory(t) {
    return new (t || PageLayoutCardTabbedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PageLayoutCardTabbedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoContentModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PageLayoutCardTabbedModule, {
    declarations: [_page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutCardTabbedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardTabbedRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoContentModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-layouts_page-layout-card-tabbed_page-layout-card-tabbed_module_ts.js.map