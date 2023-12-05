"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_tables_all-in-one-table_all-in-one-table_module_ts"],{

/***/ 87291:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/all-in-one-table-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllInOneTableRoutingModule: () => (/* binding */ AllInOneTableRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _all_in_one_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-in-one-table.component */ 33128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _all_in_one_table_component__WEBPACK_IMPORTED_MODULE_0__.AllInOneTableComponent
}];
class AllInOneTableRoutingModule {
  static #_ = this.ɵfac = function AllInOneTableRoutingModule_Factory(t) {
    return new (t || AllInOneTableRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AllInOneTableRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllInOneTableRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33128:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/all-in-one-table.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllInOneTableComponent: () => (/* binding */ AllInOneTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _all_in_one_table_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-in-one-table.demo */ 23070);
/* harmony import */ var _customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-create-update/customer-create-update.component */ 98605);
/* harmony import */ var _customer_create_update_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-create-update/customer.model */ 11415);
/* harmony import */ var _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@fury/shared/list/list.component */ 32283);

























function AllInOneTableComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 18)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_th_11_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AllInOneTableComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 20)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_td_12_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function AllInOneTableComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 21);
  }
}
function AllInOneTableComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("src", "assets/img/avatars/", ctx_r3.getAvatarName(row_r12), ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function AllInOneTableComponent_ng_container_16_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", column_r13.name, "");
  }
}
function AllInOneTableComponent_ng_container_16_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", row_r18[column_r13.property], " ");
  }
}
function AllInOneTableComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AllInOneTableComponent_ng_container_16_ng_container_1_th_1_Template, 2, 1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AllInOneTableComponent_ng_container_16_ng_container_1_td_2_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matColumnDef", column_r13.property);
  }
}
function AllInOneTableComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AllInOneTableComponent_ng_container_16_ng_container_1_Template, 3, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", column_r13.isModelProperty);
  }
}
function AllInOneTableComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "th", 30);
  }
}
function AllInOneTableComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 20)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_td_19_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-menu", 32, 33)(6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_td_19_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.updateCustomer(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_td_19_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.deleteCustomer(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r22);
  }
}
function AllInOneTableComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 35);
  }
}
function AllInOneTableComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_tr_21_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.updateCustomer(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Tables"];
};
class AllInOneTableComponent {
  constructor(dialog) {
    this.dialog = dialog;
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      name: 'Checkbox',
      property: 'checkbox',
      visible: false
    }, {
      name: 'Image',
      property: 'image',
      visible: true
    }, {
      name: 'Name',
      property: 'name',
      visible: true,
      isModelProperty: true
    }, {
      name: 'First Name',
      property: 'firstName',
      visible: false,
      isModelProperty: true
    }, {
      name: 'Last Name',
      property: 'lastName',
      visible: false,
      isModelProperty: true
    }, {
      name: 'Street',
      property: 'street',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Zipcode',
      property: 'zipcode',
      visible: true,
      isModelProperty: true
    }, {
      name: 'City',
      property: 'city',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Phone',
      property: 'phoneNumber',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
    this.pageSize = 10;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(_all_in_one_table_demo__WEBPACK_IMPORTED_MODULE_0__.ALL_IN_ONE_TABLE_DEMO_DATA.map(customer => new _customer_create_update_customer_model__WEBPACK_IMPORTED_MODULE_2__.Customer(customer)));
  }
  ngOnInit() {
    this.getData().subscribe(customers => {
      this.subject$.next(customers);
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(data => !!data)).subscribe(customers => {
      this.customers = customers;
      this.dataSource.data = customers;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createCustomer() {
    this.dialog.open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_1__.CustomerCreateUpdateComponent).afterClosed().subscribe(customer => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new _customer_create_update_customer_model__WEBPACK_IMPORTED_MODULE_2__.Customer(customer));
        this.subject$.next(this.customers);
      }
    });
  }
  updateCustomer(customer) {
    this.dialog.open(_customer_create_update_customer_create_update_component__WEBPACK_IMPORTED_MODULE_1__.CustomerCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe(customer => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        const index = this.customers.findIndex(existingCustomer => existingCustomer.id === customer.id);
        this.customers[index] = new _customer_create_update_customer_model__WEBPACK_IMPORTED_MODULE_2__.Customer(customer);
        this.subject$.next(this.customers);
      }
    });
  }
  deleteCustomer(customer) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(this.customers.findIndex(existingCustomer => existingCustomer.id === customer.id), 1);
    this.subject$.next(this.customers);
  }
  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  getAvatarName(row) {
    return String(row.id + 1 > 20 ? row.id + 1 - Math.floor(row.id / 10) * 10 : row.id + 1);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function AllInOneTableComponent_Factory(t) {
    return new (t || AllInOneTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AllInOneTableComponent,
    selectors: [["fury-all-in-one-table"]],
    viewQuery: function AllInOneTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    decls: 23,
    vars: 10,
    consts: [["mode", "card"], ["current", "All-In-One Table", 3, "crumbs"], ["name", "Customers", 3, "columns", "filterChange"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "image-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "image-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], ["mat-header-cell", "", 1, "image-cell"], ["mat-cell", "", 1, "image-cell"], [3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
    template: function AllInOneTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("filterChange", function AllInOneTableComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AllInOneTableComponent_Template_button_click_6_listener() {
          return ctx.createCustomer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, AllInOneTableComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, AllInOneTableComponent_td_12_Template, 2, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AllInOneTableComponent_th_14_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, AllInOneTableComponent_td_15_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, AllInOneTableComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, AllInOneTableComponent_th_18_Template, 1, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, AllInOneTableComponent_td_19_Template, 12, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AllInOneTableComponent_tr_20_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, AllInOneTableComponent_tr_21_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pageSize", ctx.pageSize);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_6__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy90YWJsZXMvYWxsLWluLW9uZS10YWJsZS9hbGwtaW4tb25lLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAaW1wb3J0IFwidmFyXCI7XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInRightAnimation, _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 23070:
/*!************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/all-in-one-table.demo.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_IN_ONE_TABLE_DEMO_DATA: () => (/* binding */ ALL_IN_ONE_TABLE_DEMO_DATA)
/* harmony export */ });
const ALL_IN_ONE_TABLE_DEMO_DATA = [{
  'id': 0,
  'firstName': 'Dejesus',
  'lastName': 'Chang',
  'street': '899 Raleigh Place',
  'zipcode': 8057,
  'city': 'Munjor',
  'phoneNumber': '+32 (818) 580-3557',
  'mail': 'dejesus.chang@yourcompany.biz'
}, {
  'id': 1,
  'firstName': 'Short',
  'lastName': 'Lowe',
  'street': '548 Cypress Avenue',
  'zipcode': 5943,
  'city': 'Temperanceville',
  'phoneNumber': '+11 (977) 574-3636',
  'mail': 'short.lowe@yourcompany.ca'
}, {
  'id': 2,
  'firstName': 'Antoinette',
  'lastName': 'Carson',
  'street': '299 Roder Avenue',
  'zipcode': 7894,
  'city': 'Crayne',
  'phoneNumber': '+49 (969) 505-3323',
  'mail': 'antoinette.carson@yourcompany.net'
}, {
  'id': 3,
  'firstName': 'Lynnette',
  'lastName': 'Adkins',
  'street': '158 Cyrus Avenue',
  'zipcode': 4831,
  'city': 'Coyote',
  'phoneNumber': '+48 (836) 545-3237',
  'mail': 'lynnette.adkins@yourcompany.info'
}, {
  'id': 4,
  'firstName': 'Patrica',
  'lastName': 'Good',
  'street': '995 Kansas Place',
  'zipcode': 4679,
  'city': 'Whitmer',
  'phoneNumber': '+36 (955) 485-3652',
  'mail': 'patrica.good@yourcompany.me'
}, {
  'id': 5,
  'firstName': 'Kane',
  'lastName': 'Koch',
  'street': '779 Lynch Street',
  'zipcode': 6178,
  'city': 'Newcastle',
  'phoneNumber': '+35 (983) 587-3423',
  'mail': 'kane.koch@yourcompany.org'
}, {
  'id': 6,
  'firstName': 'Donovan',
  'lastName': 'Gonzalez',
  'street': '781 Knickerbocker Avenue',
  'zipcode': 532,
  'city': 'Frizzleburg',
  'phoneNumber': '+47 (914) 469-3270',
  'mail': 'donovan.gonzalez@yourcompany.tv'
}, {
  'id': 7,
  'firstName': 'Sabrina',
  'lastName': 'Logan',
  'street': '112 Glen Street',
  'zipcode': 4763,
  'city': 'Frystown',
  'phoneNumber': '+37 (896) 474-3143',
  'mail': 'sabrina.logan@yourcompany.co.uk'
}, {
  'id': 8,
  'firstName': 'Estela',
  'lastName': 'Jordan',
  'street': '626 Stryker Court',
  'zipcode': 9966,
  'city': 'Blende',
  'phoneNumber': '+2 (993) 445-3626',
  'mail': 'estela.jordan@yourcompany.name'
}, {
  'id': 9,
  'firstName': 'Rosanna',
  'lastName': 'Cross',
  'street': '540 Fiske Place',
  'zipcode': 4204,
  'city': 'Bellfountain',
  'phoneNumber': '+12 (877) 563-2737',
  'mail': 'rosanna.cross@yourcompany.biz'
}, {
  'id': 10,
  'firstName': 'Mary',
  'lastName': 'Jane',
  'street': '233 Glen Place',
  'zipcode': 4221,
  'city': 'Louisville',
  'phoneNumber': '+15 (877) 334-2231',
  'mail': 'Mary.jane@yourcompany.biz'
}, {
  'id': 11,
  'firstName': 'Lane',
  'lastName': 'Delaney',
  'street': 'Langham Street',
  'zipcode': 6411,
  'city': 'Avoca',
  'phoneNumber': '+1 (969) 570-2843',
  'mail': 'lane.delaney@yourcompany.ca'
}, {
  'id': 12,
  'firstName': 'Cooper',
  'lastName': 'Odom',
  'street': 'Shale Street',
  'zipcode': 5286,
  'city': 'Joes',
  'phoneNumber': '+1 (812) 535-2368',
  'mail': 'cooper.odom@yourcompany.info'
}, {
  'id': 13,
  'firstName': 'Kirby',
  'lastName': 'Hardin',
  'street': 'Rodney Street',
  'zipcode': 4864,
  'city': 'Finzel',
  'phoneNumber': '+1 (838) 519-3416',
  'mail': 'kirby.hardin@yourcompany.us'
}, {
  'id': 14,
  'firstName': 'Marquita',
  'lastName': 'Haynes',
  'street': 'Townsend Street',
  'zipcode': 9000,
  'city': 'Walland',
  'phoneNumber': '+1 (965) 482-2100',
  'mail': 'marquita.haynes@yourcompany.me'
}, {
  'id': 15,
  'firstName': 'Horton',
  'lastName': 'Townsend',
  'street': 'Gunnison Court',
  'zipcode': 9519,
  'city': 'Nettie',
  'phoneNumber': '+1 (941) 434-2481',
  'mail': 'horton.townsend@yourcompany.biz'
}, {
  'id': 16,
  'firstName': 'Carrie',
  'lastName': 'Bond',
  'street': 'Bushwick Court',
  'zipcode': 4345,
  'city': 'Colton',
  'phoneNumber': '+1 (854) 556-2844',
  'mail': 'carrie.bond@yourcompany.biz'
}, {
  'id': 17,
  'firstName': 'Carroll',
  'lastName': 'Pugh',
  'street': 'Baltic Street',
  'zipcode': 8174,
  'city': 'Innsbrook',
  'phoneNumber': '+1 (989) 561-2440',
  'mail': 'carroll.pugh@yourcompany.tv'
}, {
  'id': 18,
  'firstName': 'Fuller',
  'lastName': 'Espinoza',
  'street': 'Dooley Street',
  'zipcode': 9034,
  'city': 'Maybell',
  'phoneNumber': '+1 (807) 417-3508',
  'mail': 'fuller.espinoza@yourcompany.name'
}, {
  'id': 19,
  'firstName': 'Lamb',
  'lastName': 'Herring',
  'street': 'Exeter Street',
  'zipcode': 2246,
  'city': 'Fowlerville',
  'phoneNumber': '+1 (950) 429-3240',
  'mail': 'lamb.herring@yourcompany.com'
}, {
  'id': 20,
  'firstName': 'Liza',
  'lastName': 'Price',
  'street': 'Homecrest Avenue',
  'zipcode': 8843,
  'city': 'Idledale',
  'phoneNumber': '+1 (989) 483-2305',
  'mail': 'liza.price@yourcompany.net'
}, {
  'id': 21,
  'firstName': 'Monroe',
  'lastName': 'Head',
  'street': 'Arlington Avenue',
  'zipcode': 2792,
  'city': 'Garberville',
  'phoneNumber': '+1 (921) 598-2475',
  'mail': 'monroe.head@yourcompany.io'
}, {
  'id': 22,
  'firstName': 'Lucile',
  'lastName': 'Harding',
  'street': 'Division Place',
  'zipcode': 8572,
  'city': 'Celeryville',
  'phoneNumber': '+1 (823) 429-3500',
  'mail': 'lucile.harding@yourcompany.org'
}, {
  'id': 23,
  'firstName': 'Edna',
  'lastName': 'Richard',
  'street': 'Harbor Lane',
  'zipcode': 8323,
  'city': 'Lindisfarne',
  'phoneNumber': '+1 (970) 580-3162',
  'mail': 'edna.richard@yourcompany.ca'
}, {
  'id': 24,
  'firstName': 'Avila',
  'lastName': 'Lancaster',
  'street': 'Kay Court',
  'zipcode': 9294,
  'city': 'Welch',
  'phoneNumber': '+1 (817) 412-3752',
  'mail': 'avila.lancaster@yourcompany.info'
}, {
  'id': 25,
  'firstName': 'Carlene',
  'lastName': 'Newman',
  'street': 'Atlantic Avenue',
  'zipcode': 2230,
  'city': 'Eagleville',
  'phoneNumber': '+1 (953) 483-3110',
  'mail': 'carlene.newman@yourcompany.us'
}, {
  'id': 26,
  'firstName': 'Griffith',
  'lastName': 'Wise',
  'street': 'Perry Terrace',
  'zipcode': 9564,
  'city': 'Iola',
  'phoneNumber': '+1 (992) 447-3392',
  'mail': 'griffith.wise@yourcompany.me'
}, {
  'id': 27,
  'firstName': 'Schwartz',
  'lastName': 'Dodson',
  'street': 'Dorset Street',
  'zipcode': 4425,
  'city': 'Dexter',
  'phoneNumber': '+1 (923) 504-2799',
  'mail': 'schwartz.dodson@yourcompany.biz'
}, {
  'id': 28,
  'firstName': 'Susanna',
  'lastName': 'Kidd',
  'street': 'Loring Avenue',
  'zipcode': 6432,
  'city': 'Cascades',
  'phoneNumber': '+1 (854) 456-2734',
  'mail': 'susanna.kidd@yourcompany.biz'
}, {
  'id': 29,
  'firstName': 'Deborah',
  'lastName': 'Weiss',
  'street': 'Haring Street',
  'zipcode': 2989,
  'city': 'Barstow',
  'phoneNumber': '+1 (833) 465-3036',
  'mail': 'deborah.weiss@yourcompany.tv'
}];

/***/ }),

/***/ 34460:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/all-in-one-table.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllInOneTableModule: () => (/* binding */ AllInOneTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/list/list.module */ 55429);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _all_in_one_table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-in-one-table-routing.module */ 87291);
/* harmony import */ var _all_in_one_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-in-one-table.component */ 33128);
/* harmony import */ var _customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-create-update/customer-create-update.module */ 62261);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);










class AllInOneTableModule {
  static #_ = this.ɵfac = function AllInOneTableModule_Factory(t) {
    return new (t || AllInOneTableModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AllInOneTableModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _all_in_one_table_routing_module__WEBPACK_IMPORTED_MODULE_3__.AllInOneTableRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__.FurySharedModule,
    // Core
    _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, _customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_5__.CustomerCreateUpdateModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AllInOneTableModule, {
    declarations: [_all_in_one_table_component__WEBPACK_IMPORTED_MODULE_4__.AllInOneTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _all_in_one_table_routing_module__WEBPACK_IMPORTED_MODULE_3__.AllInOneTableRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__.FurySharedModule,
    // Core
    _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, _customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_5__.CustomerCreateUpdateModule, _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule],
    exports: [_all_in_one_table_component__WEBPACK_IMPORTED_MODULE_4__.AllInOneTableComponent]
  });
})();

/***/ }),

/***/ 98605:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/customer-create-update/customer-create-update.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerCreateUpdateComponent: () => (/* binding */ CustomerCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);









function CustomerCreateUpdateComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CREATE CUSTOMER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
  }
}
function CustomerCreateUpdateComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UPDATE CUSTOMER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
  }
}
class CustomerCreateUpdateComponent {
  static #_ = this.id = 100;
  constructor(defaults, dialogRef, fb) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.mode = 'create';
  }
  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form = this.fb.group({
      id: [CustomerCreateUpdateComponent.id++],
      firstName: [this.defaults.firstName || ''],
      lastName: [this.defaults.lastName || ''],
      street: this.defaults.street || '',
      city: this.defaults.city || '',
      zipcode: this.defaults.zipcode || '',
      phoneNumber: this.defaults.phoneNumber || ''
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }
  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }
  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  static #_2 = this.ɵfac = function CustomerCreateUpdateComponent_Factory(t) {
    return new (t || CustomerCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomerCreateUpdateComponent,
    selectors: [["fury-customer-create-update"]],
    decls: 36,
    vars: 4,
    consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "person"], ["fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutGap.gt-sm", "24px"], ["fxFlex", ""], ["type", "text", "formControlName", "firstName", "matInput", ""], ["type", "text", "formControlName", "lastName", "matInput", ""], ["type", "text", "formControlName", "street", "matInput", ""], ["type", "text", "formControlName", "zipcode", "matInput", ""], ["type", "text", "formControlName", "city", "matInput", ""], ["type", "text", "formControlName", "phoneNumber", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-flat-button", "", "color", "primary", 3, "disabled", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "disabled"]],
    template: function CustomerCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerCreateUpdateComponent_Template_form_ngSubmit_2_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2)(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "mat-form-field", 4)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "mat-form-field", 4)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Zipcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3)(29, "mat-form-field", 4)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-dialog-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CustomerCreateUpdateComponent_button_34_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CustomerCreateUpdateComponent_button_35_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isCreateMode() ? "Create" : "Update", " Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdateMode());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 62261:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/customer-create-update/customer-create-update.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerCreateUpdateModule: () => (/* binding */ CustomerCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 95249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-create-update.component */ 98605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);











class CustomerCreateUpdateModule {
  static #_ = this.ɵfac = function CustomerCreateUpdateModule_Factory(t) {
    return new (t || CustomerCreateUpdateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CustomerCreateUpdateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerCreateUpdateModule, {
    declarations: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule],
    exports: [_customer_create_update_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCreateUpdateComponent]
  });
})();

/***/ }),

/***/ 11415:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tables/all-in-one-table/customer-create-update/customer.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Customer: () => (/* binding */ Customer)
/* harmony export */ });
class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.street = customer.street;
    this.zipcode = customer.zipcode;
    this.city = customer.city;
    this.phoneNumber = customer.phoneNumber;
    this.mail = customer.mail;
  }
  get name() {
    let name = '';
    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }
    return name;
  }
  set name(value) {}
  get address() {
    return `${this.street}, ${this.zipcode} ${this.city}`;
  }
  set address(value) {}
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tables_all-in-one-table_all-in-one-table_module_ts.js.map