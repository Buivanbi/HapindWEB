"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_page-layouts_page-layout-simple_page-layout-simple_module_ts"],{

/***/ 79804:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleRoutingModule: () => (/* binding */ PageLayoutSimpleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple.component */ 62907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleComponent
}];
class PageLayoutSimpleRoutingModule {
  static #_ = this.ɵfac = function PageLayoutSimpleRoutingModule_Factory(t) {
    return new (t || PageLayoutSimpleRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PageLayoutSimpleRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutSimpleRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 62907:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleComponent: () => (/* binding */ PageLayoutSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.component */ 94739);






const _c0 = function () {
  return ["Page Layouts"];
};
class PageLayoutSimpleComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PageLayoutSimpleComponent_Factory(t) {
    return new (t || PageLayoutSimpleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PageLayoutSimpleComponent,
    selectors: [["fury-page-layout-simple"]],
    decls: 5,
    vars: 2,
    consts: [["current", "Simple", 3, "crumbs"]],
    template: function PageLayoutSimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fury-page-layout")(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fury-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "fury-page-layout-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoContentComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 83307:
/*!************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleModule: () => (/* binding */ PageLayoutSimpleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-routing.module */ 79804);
/* harmony import */ var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-simple.component */ 62907);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.module */ 96096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






class PageLayoutSimpleModule {
  static #_ = this.ɵfac = function PageLayoutSimpleModule_Factory(t) {
    return new (t || PageLayoutSimpleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PageLayoutSimpleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoContentModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageLayoutSimpleModule, {
    declarations: [_page_layout_simple_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_3__.PageLayoutDemoContentModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-layouts_page-layout-simple_page-layout-simple_module_ts.js.map