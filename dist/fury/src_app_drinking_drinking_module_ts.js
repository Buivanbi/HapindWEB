"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_drinking_drinking_module_ts"],{

/***/ 26195:
/*!*****************************************************!*\
  !*** ./src/app/drinking/drinking-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrinkingRoutingModule: () => (/* binding */ DrinkingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _drinking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drinking.component */ 15819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _drinking_component__WEBPACK_IMPORTED_MODULE_0__.DrinkingComponent
}];
class DrinkingRoutingModule {
  static #_ = this.ɵfac = function DrinkingRoutingModule_Factory(t) {
    return new (t || DrinkingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DrinkingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DrinkingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 15819:
/*!************************************************!*\
  !*** ./src/app/drinking/drinking.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrinkingComponent: () => (/* binding */ DrinkingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _family_family_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../family/family.component */ 96419);


class DrinkingComponent {
  static #_ = this.ɵfac = function DrinkingComponent_Factory(t) {
    return new (t || DrinkingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DrinkingComponent,
    selectors: [["fury-drinking"]],
    decls: 1,
    vars: 1,
    consts: [[3, "modelName"]],
    template: function DrinkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fury-family", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modelName", "drinking");
      }
    },
    dependencies: [_family_family_component__WEBPACK_IMPORTED_MODULE_0__.FamilyComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 25769:
/*!*********************************************!*\
  !*** ./src/app/drinking/drinking.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrinkingModule: () => (/* binding */ DrinkingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _drinking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drinking-routing.module */ 26195);
/* harmony import */ var _family_family_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../family/family.module */ 71711);
/* harmony import */ var _drinking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinking.component */ 15819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);





class DrinkingModule {
  static #_ = this.ɵfac = function DrinkingModule_Factory(t) {
    return new (t || DrinkingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: DrinkingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _drinking_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrinkingRoutingModule, _family_family_module__WEBPACK_IMPORTED_MODULE_1__.FamilyModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DrinkingModule, {
    declarations: [_drinking_component__WEBPACK_IMPORTED_MODULE_2__.DrinkingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _drinking_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrinkingRoutingModule, _family_family_module__WEBPACK_IMPORTED_MODULE_1__.FamilyModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_drinking_drinking_module_ts.js.map