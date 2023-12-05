"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_page-layouts_page-layout-card_page-layout-card_module_ts"],{

/***/ 25894:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card/page-layout-card-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardRoutingModule: () => (/* binding */ PageLayoutCardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card.component */ 41268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _page_layout_card_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardComponent
}];
class PageLayoutCardRoutingModule {
  static #_ = this.ɵfac = function PageLayoutCardRoutingModule_Factory(t) {
    return new (t || PageLayoutCardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PageLayoutCardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutCardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 41268:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card/page-layout-card.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardComponent: () => (/* binding */ PageLayoutCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.component */ 94739);







const _c0 = function () {
  return ["Page Layouts"];
};
class PageLayoutCardComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PageLayoutCardComponent_Factory(t) {
    return new (t || PageLayoutCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PageLayoutCardComponent,
    selectors: [["fury-page-layout-card"]],
    decls: 10,
    vars: 2,
    consts: [["mode", "card"], ["current", "Card", 3, "crumbs"]],
    template: function PageLayoutCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-card")(5, "fury-card-header")(6, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "fury-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_4__.FuryCardContent, _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__.PageLayoutDemoContentComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 94907:
/*!********************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card/page-layout-card.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutCardModule: () => (/* binding */ PageLayoutCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-card-routing.module */ 25894);
/* harmony import */ var _page_layout_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-card.component */ 41268);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.module */ 96096);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);







class PageLayoutCardModule {
  static #_ = this.ɵfac = function PageLayoutCardModule_Factory(t) {
    return new (t || PageLayoutCardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PageLayoutCardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_4__.FuryCardModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoContentModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PageLayoutCardModule, {
    declarations: [_page_layout_card_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _page_layout_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutCardRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_4__.FuryCardModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoContentModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-layouts_page-layout-card_page-layout-card_module_ts.js.map