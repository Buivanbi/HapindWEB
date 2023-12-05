"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_blank_blank_module_ts"],{

/***/ 38213:
/*!*****************************************************!*\
  !*** ./src/app/pages/blank/blank-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankRoutingModule: () => (/* binding */ BlankRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank.component */ 43970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _blank_component__WEBPACK_IMPORTED_MODULE_0__.BlankComponent
}];
class BlankRoutingModule {
  static #_ = this.ɵfac = function BlankRoutingModule_Factory(t) {
    return new (t || BlankRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BlankRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlankRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 43970:
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankComponent: () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);


class BlankComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BlankComponent_Factory(t) {
    return new (t || BlankComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlankComponent,
    selectors: [["fury-blank"]],
    decls: 2,
    vars: 0,
    consts: [[1, "padding"], ["current", "Blank Page"]],
    template: function BlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 17867:
/*!*********************************************!*\
  !*** ./src/app/pages/blank/blank.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlankModule: () => (/* binding */ BlankModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-routing.module */ 38213);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank.component */ 43970);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);





class BlankModule {
  static #_ = this.ɵfac = function BlankModule_Factory(t) {
    return new (t || BlankModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BlankModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlankModule, {
    declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _blank_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blank_blank_module_ts.js.map