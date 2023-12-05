"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_page-layouts_page-layouts_module_ts"],{

/***/ 58598:
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layouts-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutsRoutingModule: () => (/* binding */ PageLayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



const routes = [{
  path: 'simple',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page-layouts_page-layout-simple_page-layout-simple_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page-layout-simple/page-layout-simple.module */ 83307)).then(m => m.PageLayoutSimpleModule)
}, {
  path: 'simple-tabbed',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page-layouts_page-layout-simple-tabbed_page-layout-simple-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page-layout-simple-tabbed/page-layout-simple-tabbed.module */ 89900)).then(m => m.PageLayoutSimpleTabbedModule)
}, {
  path: 'card',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page-layouts_page-layout-card_page-layout-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page-layout-card/page-layout-card.module */ 94907)).then(m => m.PageLayoutCardModule)
}, {
  path: 'card-tabbed',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page-layouts_page-layout-card-tabbed_page-layout-card-tabbed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page-layout-card-tabbed/page-layout-card-tabbed.module */ 59266)).then(m => m.PageLayoutCardTabbedModule)
}];
class PageLayoutsRoutingModule {
  static #_ = this.ɵfac = function PageLayoutsRoutingModule_Factory(t) {
    return new (t || PageLayoutsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: PageLayoutsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 10615:
/*!***********************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layouts.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLayoutsModule: () => (/* binding */ PageLayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layouts-routing.module */ 58598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class PageLayoutsModule {
  static #_ = this.ɵfac = function PageLayoutsModule_Factory(t) {
    return new (t || PageLayoutsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: PageLayoutsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageLayoutsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageLayoutsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-layouts_page-layouts_module_ts.js.map