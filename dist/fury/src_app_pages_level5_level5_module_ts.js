"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_level5_level5_module_ts"],{

/***/ 53814:
/*!*******************************************************!*\
  !*** ./src/app/pages/level5/level5-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level5RoutingModule: () => (/* binding */ Level5RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level5.component */ 47967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _level5_component__WEBPACK_IMPORTED_MODULE_0__.Level5Component
}];
class Level5RoutingModule {
  static #_ = this.ɵfac = function Level5RoutingModule_Factory(t) {
    return new (t || Level5RoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: Level5RoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Level5RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 47967:
/*!**************************************************!*\
  !*** ./src/app/pages/level5/level5.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level5Component: () => (/* binding */ Level5Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);





const _c0 = function () {
  return ["Level 1", "Level 2", "Level 3", "Level 4"];
};
const _c1 = function () {
  return ["/apps/inbox"];
};
class Level5Component {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function Level5Component_Factory(t) {
    return new (t || Level5Component)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Level5Component,
    selectors: [["fury-level5"]],
    decls: 18,
    vars: 4,
    consts: [["fxLayout", "column", "fxLayoutGap", "24px", 1, "padding"], ["current", "Level 5 - Wow such deep!", 3, "crumbs"], [1, "text", 3, "routerLink"]],
    template: function Level5Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "fury-card")(3, "fury-card-header")(4, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Level 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "fury-card-header-subheading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Not as deep as you can go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "fury-card-content")(9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Fury supports unlimited levels deep navigation. You can go as deep as you want. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br")(12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Now go ahead and explore the other great pages of Fury. Have you seen the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong")(15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "extensive Inbox Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_0__.FuryCardContent, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 19368:
/*!***********************************************!*\
  !*** ./src/app/pages/level5/level5.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level5Module: () => (/* binding */ Level5Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _level5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level5-routing.module */ 53814);
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level5.component */ 47967);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);







class Level5Module {
  static #_ = this.ɵfac = function Level5Module_Factory(t) {
    return new (t || Level5Module)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: Level5Module
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _level5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Level5RoutingModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__.FuryCardModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__.FurySharedModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Level5Module, {
    declarations: [_level5_component__WEBPACK_IMPORTED_MODULE_3__.Level5Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _level5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Level5RoutingModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_1__.FuryCardModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__.FurySharedModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_level5_level5_module_ts.js.map