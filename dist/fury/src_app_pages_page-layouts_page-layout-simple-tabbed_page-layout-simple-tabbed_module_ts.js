"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_page-layouts_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts"],{

/***/ 93076:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleTabbedRoutingModule: () => (/* binding */ PageLayoutSimpleTabbedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-tabbed.component */ 63127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedComponent
}];
class PageLayoutSimpleTabbedRoutingModule {
  static #_ = this.ɵfac = function PageLayoutSimpleTabbedRoutingModule_Factory(t) {
    return new (t || PageLayoutSimpleTabbedRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PageLayoutSimpleTabbedRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 63127:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleTabbedComponent: () => (/* binding */ PageLayoutSimpleTabbedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.component */ 94739);







const _c0 = function () {
  return ["Page Layouts"];
};
class PageLayoutSimpleTabbedComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PageLayoutSimpleTabbedComponent_Factory(t) {
    return new (t || PageLayoutSimpleTabbedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PageLayoutSimpleTabbedComponent,
    selectors: [["fury-page-layout-simple-tabbed"]],
    decls: 14,
    vars: 2,
    consts: [["current", "Simple Tabbed", 3, "crumbs"], [1, "padding-0"], ["label", "Main Tab"], [1, "padding"], ["label", "Side Tab"], ["label", "Extra Tab"]],
    template: function PageLayoutSimpleTabbedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fury-page-layout")(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fury-breadcrumbs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "fury-page-layout-content", 1)(4, "mat-tab-group")(5, "mat-tab", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-tab", 4)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-tab", 5)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_3__.PageLayoutContentDirective, _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDemoContentComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 89900:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutSimpleTabbedModule: () => (/* binding */ PageLayoutSimpleTabbedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout-simple-tabbed-routing.module */ 93076);
/* harmony import */ var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout-simple-tabbed.component */ 63127);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.module */ 96096);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class PageLayoutSimpleTabbedModule {
  static #_ = this.ɵfac = function PageLayoutSimpleTabbedModule_Factory(t) {
    return new (t || PageLayoutSimpleTabbedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PageLayoutSimpleTabbedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutDemoContentModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedModule, {
    declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutSimpleTabbedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutSimpleTabbedRoutingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_2__.PageLayoutDemoContentModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-layouts_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts.js.map