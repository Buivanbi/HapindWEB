"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_apps_inbox_inbox_module_ts"],{

/***/ 53212:
/*!***************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-compose/inbox-compose.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxComposeComponent: () => (/* binding */ InboxComposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 70945);








const _c0 = function () {
  return {
    height: "100px"
  };
};
class InboxComposeComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function InboxComposeComponent_Factory(t) {
    return new (t || InboxComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxComposeComponent,
    selectors: [["fury-inbox-compose"]],
    decls: 22,
    vars: 3,
    consts: [["mat-dialog-title", ""], ["fxLayout", "column"], ["value", "davidsmith@example.com", "matInput", "", "disabled", ""], ["matInput", "", "required", ""], ["matInput", ""], ["placeholder", "Write your message"], ["align", "end", "fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "24px"], ["type", "button", "mat-icon-button", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function InboxComposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Compose Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-form-field")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "quill-editor", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-dialog-actions", 6)(17, "button", 7)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComposeComponent_Template_button_click_20_listener() {
          return ctx.dialogRef.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " SEND ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillEditorComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 74605:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailConfirmDialogComponent: () => (/* binding */ InboxMailConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 90895);




class InboxMailConfirmDialogComponent {
  constructor(options, dialogRef) {
    this.options = options;
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
    this.content = this.options.content;
  }
  cancel() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function InboxMailConfirmDialogComponent_Factory(t) {
    return new (t || InboxMailConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMailConfirmDialogComponent,
    selectors: [["fury-inbox-mail-confirm-dialog"]],
    decls: 9,
    vars: 1,
    consts: [["matDialogTitle", ""], ["align", "end"], ["type", "button", "mat-button", "", 3, "click"], ["type", "button", "mat-button", "", "color", "warn", 3, "click"]],
    template: function InboxMailConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm your action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1)(5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMailConfirmDialogComponent_Template_button_click_5_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMailConfirmDialogComponent_Template_button_click_7_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, "\n");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 24128:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label-list/inbox-mail-label-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailLabelListComponent: () => (/* binding */ InboxMailLabelListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inbox.service */ 40777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);















function InboxMailLabelListComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", color_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", color_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](color_r4.name);
  }
}
function InboxMailLabelListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InboxMailLabelListComponent_div_22_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Use an Existing Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function InboxMailLabelListComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InboxMailLabelListComponent_button_23_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const label_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.selectLabelButton($event, label_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InboxMailLabelListComponent_button_23_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const label_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.selectLabel($event, label_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.labelSelected(label_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", label_r6.name, " ");
  }
}
class InboxMailLabelListComponent {
  constructor(inboxService, fb) {
    this.inboxService = inboxService;
    this.fb = fb;
    this.icon = 'label';
    this.addLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.removeLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.labelGroup = this.fb.group({
      color: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.colors$ = this.inboxService.getLabelColors();
  }
  selectLabel(selectChange, label) {
    selectChange.value ? this.addLabel.emit(label) : this.removeLabel.emit(label);
  }
  selectLabelButton(clickEvent, label) {
    if (clickEvent) {
      clickEvent.stopPropagation();
    }
    this.labelSelected(label) ? this.removeLabel.emit(label) : this.addLabel.emit(label);
  }
  labelSelected(label) {
    return this.labels.indexOf(label) > -1;
  }
  createLabel() {
    const label = this.labelGroup.value;
    this.addLabel.emit(label);
    setTimeout(() => {
      this.labelGroup.markAsPristine();
      this.labelGroup.markAsUntouched();
      this.form.resetForm();
      this.labelGroup.reset();
    }, 10);
  }
  static #_ = this.ɵfac = function InboxMailLabelListComponent_Factory(t) {
    return new (t || InboxMailLabelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_inbox_service__WEBPACK_IMPORTED_MODULE_0__.InboxService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InboxMailLabelListComponent,
    selectors: [["fury-inbox-mail-label-list"]],
    viewQuery: function InboxMailLabelListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
      }
    },
    inputs: {
      icon: "icon",
      availableLabels: "availableLabels",
      labels: "labels"
    },
    outputs: {
      addLabel: "addLabel",
      removeLabel: "removeLabel"
    },
    decls: 24,
    vars: 9,
    consts: [["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "fury-inbox-mail-label-list-menu"], ["labelMenu", "matMenu"], [1, "fury-inbox-mail-label-list-menu-subheading", 3, "click"], [3, "formGroup", "submit", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 1, "fury-inbox-mail-label-list-create"], ["fxFlex", "30%", 1, "fury-inbox-mail-label-list-color"], ["panelClass", "fury-inbox-mail-label-list-color-select", "formControlName", "color"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "70%", 1, "fury-inbox-mail-label-list-name"], ["matInput", "", "formControlName", "name"], ["type", "submit", "mat-icon-button", "", "color", "primary", 3, "disabled"], ["class", "fury-inbox-mail-label-list-menu-subheading", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "fury-inbox-mail-label-list-color-select-indicator"], ["mat-menu-item", "", 3, "click"], [3, "checked", "change"]],
    template: function InboxMailLabelListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-menu", 1, 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InboxMailLabelListComponent_Template_div_click_5_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function InboxMailLabelListComponent_Template_form_submit_7_listener() {
          return ctx.createLabel();
        })("click", function InboxMailLabelListComponent_Template_form_click_7_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InboxMailLabelListComponent_mat_option_13_Template, 4, 4, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 9)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Label Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, InboxMailLabelListComponent_div_22_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, InboxMailLabelListComponent_button_23_Template, 3, 2, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.labelGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, ctx.colors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.labelGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.availableLabels == null ? null : ctx.availableLabels.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableLabels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 24916:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-label/inbox-mail-label.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailLabelComponent: () => (/* binding */ InboxMailLabelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);


const _c0 = ["*"];
class InboxMailLabelComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function InboxMailLabelComponent_Factory(t) {
    return new (t || InboxMailLabelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMailLabelComponent,
    selectors: [["fury-inbox-mail-label"]],
    inputs: {
      color: "color"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 2,
    consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "6px", 1, "label", "app-bar"], [1, "indicator"], [1, "label-name"]],
    template: function InboxMailLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color);
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.label[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n.label[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LW1haWwtbGFiZWwvaW5ib3gtbWFpbC1sYWJlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFnQkY7QUFkRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFnQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG4ubGFiZWwge1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBwYWRkaW5nOiBtYXRoLmRpdigkc3BhY2luZywgMTIpIG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAuaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 44067:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-list/inbox-mail-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailListComponent: () => (/* binding */ InboxMailListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var _fury_shared_component_destroyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/component-destroyed */ 67327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inbox.service */ 40777);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 47520);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/grid */ 3886);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);
/* harmony import */ var _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox-mail-label/inbox-mail-label.component */ 24916);
/* harmony import */ var _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbox-mail-star/inbox-mail-star.component */ 35760);

















function InboxMailListComponent_div_7_fury_inbox_mail_label_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fury-inbox-mail-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", label_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", label_r5.name, " ");
  }
}
const _c0 = function (a1) {
  return ["../mail", a1];
};
function InboxMailListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InboxMailListComponent_div_7_Template_mat_checkbox_click_2_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "fury-inbox-mail-star", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InboxMailListComponent_div_7_Template_fury_inbox_mail_star_click_3_listener($event) {
      return $event.stopPropagation();
    })("starred", function InboxMailListComponent_div_7_Template_fury_inbox_mail_star_starred_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const mail_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.toggleStarred(mail_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 17)(12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InboxMailListComponent_div_7_fury_inbox_mail_label_13_Template, 2, 2, "fury-inbox-mail-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u00B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 23)(21, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InboxMailListComponent_div_7_Template_button_click_23_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const mail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("background-hover", mail_r3.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, mail_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isStarred", mail_r3.starred);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "assets/img/avatars/", mail_r3.index, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mail_r3.from.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mail_r3.when.fromNow());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", mail_r3.labels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mail_r3.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mail_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mail_r3.when.fromNow());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}
class InboxMailListComponent {
  constructor(route, inboxService) {
    this.route = route;
    this.inboxService = inboxService;
  }
  ngOnInit() {
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,_fury_shared_component_destroyed__WEBPACK_IMPORTED_MODULE_0__.componentDestroyed)(this))).subscribe(paramMap => {
      if (paramMap.get('category') === 'starred') {
        this.mails$ = this.inboxService.getStarred();
      } else {
        this.mails$ = this.inboxService.getGroup(paramMap.get('category'));
      }
    });
  }
  toggleStarred(mail) {
    this.inboxService.toggleStarred(mail);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function InboxMailListComponent_Factory(t) {
    return new (t || InboxMailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_inbox_service__WEBPACK_IMPORTED_MODULE_1__.InboxService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InboxMailListComponent,
    selectors: [["fury-inbox-mail-list"]],
    decls: 35,
    vars: 4,
    consts: [["fxLayout", "column", 1, "mail-list"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "header", "border-bottom"], ["mat-icon-button", "", "type", "button", 1, "icon", 3, "matMenuTriggerFor"], ["fxFlex", "auto", 1, "content"], ["class", "mail border-bottom", "gdColumns", "auto 1fr 140px", "gdColumns.lt-md", "68px 1fr auto", "gdColumns.lt-sm", "auto 1fr auto", "gdGap", "8px", 3, "background-hover", "routerLink", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mailOptions", "matMenu"], ["gdColumns", "auto 1fr 140px", "gdColumns.lt-md", "68px 1fr auto", "gdColumns.lt-sm", "auto 1fr auto", "gdGap", "8px", 1, "mail", "border-bottom", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxHide", "", "fxShow.gt-xs", ""], [1, "checkbox", 3, "click"], [3, "isStarred", "click", "starred"], ["gdColumns.gt-sm", "150px 1fr", "gdRows.lt-md", "auto 1fr", 1, "content-container"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px"], ["fxFlex", "noshrink", "fxHide", "", "fxShow.gt-sm", "", 1, "picture", 3, "src"], ["fxFlex", "grow", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "from", "text"], ["fxHide.gt-sm", "", 1, "when", "secondary-text"], ["fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start center", "fxLayoutGap", "8px", 1, "content-wrapper"], ["fxLayout", "row", "fxLayoutGap", "8px"], [3, "color", 4, "ngFor", "ngForOf"], ["fxFlex", "noshrink", 1, "subject", "text"], ["fxHide", "", "fxShow.gt-sm", "", 1, "middot", "text"], [1, "content", "text"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["fxHide", "", "fxShow.gt-sm", "", 1, "when", "secondary-text"], ["mat-icon-button", "", 1, "icon", 3, "matMenuTriggerFor", "click"], [3, "color"]],
    template: function InboxMailListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "fury-scrollbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InboxMailListComponent_div_7_Template, 26, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-menu", null, 5)(11, "button", 6)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 6)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 6)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-menu", null, 7)(22, "button", 6)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "markunread_mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Mark as unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 6)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Labels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 6)(32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 2, ctx.mails$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultShowHideDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_16__.DefaultGridColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_16__.DefaultGridGapDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_16__.DefaultGridRowsDirective, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.ScrollbarComponent, _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_3__.InboxMailLabelComponent, _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_4__.InboxMailStarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.mail-list[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  height: 54px;\n  min-height: 54px;\n  max-height: 54px;\n  padding-left: 12px;\n  padding-right: 12px;\n  position: relative;\n  transition: all 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  cursor: pointer;\n  outline: none;\n  font: var(--font-body-1);\n}\n@media screen and (max-width: 599px) {\n  .content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: none;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n}\n@media screen and (min-width: 599px) and (max-width: 959px) {\n  .content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: none;\n    padding-top: 12px;\n    padding-bottom: 12px;\n  }\n}\n.content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LW1haWwtbGlzdC9pbmJveC1tYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDdEdBO0VBQ0UsWUR3R29CO0VDdkdwQixnQkR1R29CO0VDdEdwQixnQkRzR29CO0VDckdwQixrQkRXVztFQ1ZYLG1CRFVXO0FDS2I7O0FBWkE7RUFDRSxZQUFBO0FBZUY7O0FBVkU7RUFDRSxZRDZGMEI7RUM1RjFCLGdCRDRGMEI7RUMzRjFCLGdCRDJGMEI7RUMxRjFCLGtCREhTO0VDSVQsbUJESlM7RUNLVCxrQkFBQTtFQUNBLHNEQ01hO0VETGIsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQWFKO0FEcURFO0VDNUVBO0lBYUksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQWNKO0FBQ0Y7QURvREU7RUNuRkE7SUFvQkksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQWVKO0FBQ0Y7QUFYTTtFQUNFLGdCQUFBO0FBYVI7QUFWTTtFQUNFLGdCQUFBO0FBWVI7QUFUTTtFQUNFLGdCQUFBO0FBV1I7QUFSTTtFQUNFLGdCQUFBO0FBVVI7QUFGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJTjtBQUVJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQU47QUFHSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSE47QUFNSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSk4iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6ICRpbmJveC1oZWFkZXItaGVpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaW5ib3gtaGVhZGVyLWhlaWdodDtcbiAgbWF4LWhlaWdodDogJGluYm94LWhlYWRlci1oZWlnaHQ7XG4gIHBhZGRpbmctbGVmdDogJHBhZGRpbmctc207XG4gIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nLXNtO1xufVxuXG4ubWFpbC1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG5cbiAgLm1haWwge1xuICAgIGhlaWdodDogJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDtcbiAgICBtaW4taGVpZ2h0OiAkaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0O1xuICAgIG1heC1oZWlnaHQ6ICRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZy1zbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZy1zbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogJHN3aWZ0LWVhc2Utb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLXhzIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICBwYWRkaW5nLXRvcDogbWF0aC5kaXYoJHNwYWNpbmcsIDIpO1xuICAgICAgcGFkZGluZy1ib3R0b206IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1zbSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgICAgcGFkZGluZy10b3A6IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBtYXRoLmRpdigkc3BhY2luZywgMik7XG4gICAgfVxuXG4gICAgJi5iYWNrZ3JvdW5kLWhvdmVyIHtcblxuICAgICAgLmZyb20ge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAuc3ViamVjdCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cblxuICAgICAgLndoZW4ge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGVja2JveCB7XG5cbiAgICB9XG5cbiAgICAucGljdHVyZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgIH1cblxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5mcm9tIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnN1YmplY3Qge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC53aGVuIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gIH1cbn1cbiIsIi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4keHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1haW4gbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJHRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiR0b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJGxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 35760:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail-star/inbox-mail-star.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailStarComponent: () => (/* binding */ InboxMailStarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);





function InboxMailStarComponent_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function InboxMailStarComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class InboxMailStarComponent {
  constructor() {
    this.starred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  emitClick() {
    this.starred.emit();
  }
  static #_ = this.ɵfac = function InboxMailStarComponent_Factory(t) {
    return new (t || InboxMailStarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InboxMailStarComponent,
    selectors: [["fury-inbox-mail-star"]],
    inputs: {
      isStarred: "isStarred"
    },
    outputs: {
      starred: "starred"
    },
    decls: 3,
    vars: 2,
    consts: [["type", "button", "mat-icon-button", "", 3, "click"], ["class", "icon", 4, "ngIf"], ["class", "icon active", 4, "ngIf"], [1, "icon"], [1, "icon", "active"]],
    template: function InboxMailStarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxMailStarComponent_Template_button_click_0_listener() {
          return ctx.emitClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InboxMailStarComponent_mat_icon_1_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InboxMailStarComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStarred);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStarred);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.icon.active[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LW1haWwtc3Rhci9pbmJveC1tYWlsLXN0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDdkdFO0VBQ0UsY0QyR2U7QUMzRm5CIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uaWNvbiB7XG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogJGluYm94LXN0YXItY29sb3I7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 44073:
/*!*********************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-mail/inbox-mail.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxMailComponent: () => (/* binding */ InboxMailComponent)
/* harmony export */ });
/* harmony import */ var _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component */ 74605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inbox.service */ 40777);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ 47520);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-quill */ 70945);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);
/* harmony import */ var _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox-mail-label/inbox-mail-label.component */ 24916);
/* harmony import */ var _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inbox-mail-star/inbox-mail-star.component */ 35760);
/* harmony import */ var _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inbox-mail-label-list/inbox-mail-label-list.component */ 24128);



















function InboxMailComponent_fury_inbox_mail_label_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fury-inbox-mail-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", label_r4.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", label_r4.name, " ");
  }
}
function InboxMailComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InboxMailComponent_div_62_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.showReply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Click to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 39)(11, "button", 10)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 10)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
const _c0 = function () {
  return {
    height: "100px"
  };
};
function InboxMailComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "quill-editor", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 42)(4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InboxMailComponent_div_63_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.hideReply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "CANCEL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InboxMailComponent_div_63_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.hideReply(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "Reply to ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r2.mail$).from == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r2.mail$).from.name, "");
  }
}
const _c1 = function () {
  return ["../../"];
};
class InboxMailComponent {
  constructor(route, inboxService, dialog, router, snackbar) {
    this.route = route;
    this.inboxService = inboxService;
    this.dialog = dialog;
    this.router = router;
    this.snackbar = snackbar;
  }
  ngOnInit() {
    this.availableLabels = this.inboxService.availableLabels;
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.mail$ = this.inboxService.getMail(this.id);
      this.inboxService.getMail(this.id).subscribe(mail => {
        this._mail = mail;
      });
    });
  }
  toggleStarred() {
    this.inboxService.toggleStarred(this._mail);
  }
  addLabel(label) {
    this.inboxService.addLabel(label, this._mail);
  }
  removeLabel(label) {
    this.inboxService.removeLabel(label, this._mail);
  }
  removeMail() {
    this.dialog.open(_inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.InboxMailConfirmDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this mail?'
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.inboxService.removeMail(this._mail);
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
        this.snackbar.open(`You deleted the mail from: ${this._mail.from.name}`, 'UNDO', {
          duration: 3000
        }).onAction().subscribe(() => {
          const mail = this.inboxService.undoRemove();
          if (mail) {
            this.router.navigate(['/apps/inbox/mail', mail.id]);
            this.snackbar.open(`Restored your mail from: ${mail.from.name}`, null, {
              duration: 3000
            });
          } else {
            this.snackbar.open('Could not UNDO last delete action. Sorry!', null, {
              duration: 3000
            });
          }
        });
      }
    });
  }
  showReply() {
    this.replying = true;
  }
  hideReply(send) {
    this.replying = false;
    if (send) {
      this.snackbar.open(`You replied to ${this._mail.from.name}`, 'UNDO', {
        duration: 3000
      });
    }
  }
  static #_ = this.ɵfac = function InboxMailComponent_Factory(t) {
    return new (t || InboxMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_inbox_service__WEBPACK_IMPORTED_MODULE_1__.InboxService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InboxMailComponent,
    selectors: [["fury-inbox-mail"]],
    decls: 79,
    vars: 42,
    consts: [["fxLayout", "column", "fxFlex", "grow", 1, "inbox-mail"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutAlign.gt-xs", "start center", 1, "header", "border-bottom"], ["type", "button", "mat-icon-button", "", "matTooltip", "Back to Inbox", 3, "routerLink"], ["fxHide", "", "fxShow.gt-xs", ""], ["type", "button", "fxHide", "", "fxShow.gt-xs", "", "mat-icon-button", "", "matTooltip", "Archive"], ["type", "button", "fxHide", "", "fxShow.gt-xs", "", "mat-icon-button", "", "matTooltip", "Mark as Spam"], ["type", "button", "fxHide", "", "fxShow.gt-xs", "", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["fxHide", "", "fxShow.gt-xs", "", 3, "matMenuTriggerFor"], ["icon", "folder", "matTooltip", "Move to", "fxHide", "", "fxShow.gt-xs", "", 1, "button", 3, "availableLabels", "labels", "addLabel", "removeLabel"], ["matTooltip", "Labels", "fxHide", "", "fxShow.gt-xs", "", 1, "button", 3, "availableLabels", "labels", "addLabel", "removeLabel"], ["type", "button", "mat-icon-button", ""], ["fxLayout", "column", 1, "mail-content"], ["fxFlex", "noshrink", "fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "head", "border-bottom"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "subject"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "labels"], [3, "color", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "end center", 1, "actions"], [3, "isStarred", "starred"], [3, "availableLabels", "labels", "addLabel", "removeLabel"], ["fxFlex", "noshrink", "fxLayout", "column", "fxLayoutAlign", "start", "fxLayout.gt-xs", "row", "fxLayoutAlign.gt-xs", "space-between", 1, "info"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px"], [1, "picture", 3, "src"], ["fxLayout", "column"], [1, "from"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "to", "secondary-text"], ["fxFlexAlign.xs", "end", "fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "16px", 1, "extra"], [1, "when", "secondary-text"], ["mat-icon-button", "", 1, "options", "icon", 3, "matMenuTriggerFor"], ["fxFlex", "grow", 1, "content"], ["class", "reply border-top", "fxFlex", "noshrink", "fxLayout", "row", "fxLayoutAlign", "space-between center", 3, "click", 4, "ngIf"], ["class", "replying border-top", 4, "ngIf"], ["mailOptions", "matMenu"], ["mat-menu-item", ""], [3, "color"], ["fxFlex", "noshrink", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "reply", "border-top", 3, "click"], ["src", "assets/img/avatars/noavatar.png", 1, "avatar"], [1, "text"], [1, "semi-bold"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px"], [1, "replying", "border-top"], [1, "editor", 3, "placeholder"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px", 1, "actions"], ["mat-button", "", 3, "click"], ["mat-fab", "", "color", "primary", 3, "click"]],
    template: function InboxMailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 5)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InboxMailComponent_Template_button_click_12_listener() {
          return ctx.removeMail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "fury-inbox-mail-label-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_addLabel_16_listener($event) {
          return ctx.addLabel($event);
        })("removeLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_removeLabel_16_listener($event) {
          return ctx.removeLabel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "fury-inbox-mail-label-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_addLabel_18_listener($event) {
          return ctx.addLabel($event);
        })("removeLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_removeLabel_18_listener($event) {
          return ctx.removeLabel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 10)(22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "fury-scrollbar")(25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, InboxMailComponent_fury_inbox_mail_label_32_Template, 2, 2, "fury-inbox-mail-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 17)(35, "fury-inbox-mail-star", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("starred", function InboxMailComponent_Template_fury_inbox_mail_star_starred_35_listener() {
          return ctx.toggleStarred();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "fury-inbox-mail-label-list", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_addLabel_37_listener($event) {
          return ctx.addLabel($event);
        })("removeLabel", function InboxMailComponent_Template_fury_inbox_mail_label_list_removeLabel_37_listener($event) {
          return ctx.removeLabel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 20)(40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 23)(44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 26)(53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "button", 28)(57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, InboxMailComponent_div_62_Template, 17, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, InboxMailComponent_div_63_Template, 9, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-menu", null, 32)(66, "button", 33)(67, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "markunread_mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " Mark as unread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 33)(71, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, " Labels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "button", 33)(76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65);
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("availableLabels", ctx.availableLabels)("labels", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 19, ctx.mail$).labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("availableLabels", ctx.availableLabels)("labels", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 21, ctx.mail$).labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 23, ctx.mail$).subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 25, ctx.mail$).labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isStarred", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 27, ctx.mail$).starred);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("availableLabels", ctx.availableLabels)("labels", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 29, ctx.mail$).labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "assets/img/avatars/", (tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 31, ctx.mail$)) == null ? null : tmp_11_0.index, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 33, ctx.mail$).from == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 33, ctx.mail$).from.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" to ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 35, ctx.mail$).to == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 35, ctx.mail$).to.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 37, ctx.mail$).when == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 37, ctx.mail$).when.fromNow());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 39, ctx.mail$).content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.replying);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.replying);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__.DefaultShowHideDirective, ngx_quill__WEBPACK_IMPORTED_MODULE_18__.QuillEditorComponent, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.ScrollbarComponent, _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_3__.InboxMailLabelComponent, _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_4__.InboxMailStarComponent, _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_5__.InboxMailLabelListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 64px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%], .inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .vertical-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: calc(100% - 24px);\n  margin: 12px 8px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .mail-content[_ngcontent-%COMP%]     .scroll-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.inbox-mail[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  font: var(--font-subheading-1);\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  font: var(--font-body-1);\n}\n.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n.inbox-mail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  padding: 24px;\n  cursor: pointer;\n}\n.inbox-mail[_ngcontent-%COMP%]   .replying[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.inbox-mail[_ngcontent-%COMP%]   .replying[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LW1haWwvaW5ib3gtbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBZ0JGOztBQVhFO0VBQ0UsWURpR2tCO0VDaEdsQixpQkFBQTtFQUNBLGtCQUFBO0FBY0o7QUFaSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFjTjtBQVhJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFhTjtBQVJJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQVVOO0FBTkU7RUFDRSxhRHpCTTtBQ2lDVjtBQU5JO0VBQ0UsdUJBQUE7QUFRTjtBQUpFO0VBQ0UsYURqQ007QUN1Q1Y7QUFKSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFNTjtBQUhJO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFLTjtBQURJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFHTjtBQUVNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQVI7QUFLRTtFQUNFLG9CQUFBO0FBSEo7QUFNRTtFQUNFLGFEdkVNO0VDd0VOLGVBQUE7QUFKSjtBQU9FO0VBQ0UsYUQ1RU07QUN1RVY7QUFPSTtFQUNFLGdCRC9FSTtBQzBFViIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XG5cbi8qKlxuICBHZW5lcmFsXG4gKi9cblxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xuJGVsZXZhdGlvbjogMjtcblxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XG5cbiRzcGFjaW5nOiAyNHB4O1xuJGJvcmRlci1yYWRpdXM6IDhweDtcblxuJHBhZGRpbmcteGw6IDQ4cHg7XG4kcGFkZGluZy1sZzogMzJweDtcbiRwYWRkaW5nOiAyNHB4O1xuJHBhZGRpbmctbWQ6IDE2cHg7XG4kcGFkZGluZy1zbTogMTJweDtcbiRwYWRkaW5nLXhzOiA4cHg7XG4kcGFkZGluZy14eHM6IDRweDtcbiRwYWRkaW5nLTA6IDBweDtcblxuJHBhZGRpbmdzOiAoXG4gICctMCc6ICRwYWRkaW5nLTAsXG4gIC14eHM6ICRwYWRkaW5nLXh4cyxcbiAgLXhzOiAkcGFkZGluZy14cyxcbiAgLXNtOiAkcGFkZGluZy1zbSxcbiAgLW1kOiAkcGFkZGluZy1tZCxcbiAgJyc6ICRwYWRkaW5nLFxuICAtbGc6ICRwYWRkaW5nLWxnLFxuICAteGw6ICRwYWRkaW5nLXhsLFxuKTtcblxuJGljb24tc2l6ZXM6IChcbiAgLXhzOiAxNHB4LFxuICAtc206IDE4cHgsXG4gIC1tZDogMjBweCxcbiAgJyc6IDI0cHgsXG4gIC1sZzogMjhweCxcbiAgLXhsOiAzMnB4XG4pO1xuXG4vKipcbiAgQ2FyZFxuICovXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuXG4vKipcbiAgVG9vbGJhclxuICovXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9vbGJhci16LWluZGV4OiA1MDA7XG4kdG9vbGJhci1idXR0b24td2lkdGg6IDY0cHg7XG5cbi8qKlxuICBGb290ZXJcbiAqL1xuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7XG4kZm9vdGVyLXotaW5kZXg6IDEwMDtcblxuLy8gU2lkZW5hdlxuJHNpZGVuYXYtd2lkdGg6IDI4MHB4O1xuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xuJHNpZGVuYXYtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLy8gU2lkZW5hdiBJdGVtXG5cbiRzaWRlbmF2LWl0ZW0taWNvbi1zaXplOiAyMnB4O1xuXG4kc2lkZW5hdi1pdGVtLWhlaWdodDogNDRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0OiAyNHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xuJHNpZGVuYXYtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMTogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMzogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWw0OiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDMgKyA4cHg7XG5cbi8vIFNpZGVuYXYgd2lkdGggY2FuIGJlIGNoYW5nZWQgaW4gc3JjL0BmdXJ5L2FuaW1hdGlvbnMvc2lkZW5hdi5hbmltYXRpb24udHNcbiRzaWRlbmF2LXotaW5kZXg6IDcwMDtcblxuJGJsaW5rLXNjcm9sbGJhci13aWR0aDogMTJweDtcblxuLy8gUGFnZSBMYXlvdXRcbiRwYWdlLWxheW91dC1oZWlnaHQ6IDIwMHB4O1xuJHBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8qKlxuICBNaXhpbnNcbiAqL1xuJG1lZGlhLXhzOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknO1xuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuJG1lZGlhLXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSc7XG5AbWl4aW4gbWVkaWEtc20ge1xuICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAgSW5ib3hcbiAqL1xuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kaW5ib3gtc2VhcmNoYmFyLWhlaWdodDogNTRweDtcbiRpbmJveC1zdGFyLWNvbG9yOiAjZmZjMTA3O1xuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XG5AaW1wb3J0IFwidmFyXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cblxuLmluYm94LW1haWwge1xuXG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogJGluYm94LWhlYWRlci1oZWlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiBtYXRoLmRpdigkc3BhY2luZywgMyk7XG4gICAgcGFkZGluZy1yaWdodDogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuXG4gICAgLm1hdC1tZGMtaWNvbi1idXR0b24sIC5idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICAgIG1hcmdpbi1yaWdodDogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbC1kaXZpZGVyIHtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHNwYWNpbmd9KTtcbiAgICAgIG1hcmdpbjogbWF0aC5kaXYoJHNwYWNpbmcsIDIpIG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICB9XG4gIH1cblxuICAubWFpbC1jb250ZW50IHtcbiAgICA6Om5nLWRlZXAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cblxuICAuaGVhZCB7XG4gICAgcGFkZGluZzogJHNwYWNpbmc7XG5cbiAgICAuc3ViamVjdCB7XG4gICAgICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAuaW5mbyB7XG4gICAgcGFkZGluZzogJHNwYWNpbmc7XG5cbiAgICAucGljdHVyZSB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAuZnJvbSB7XG4gICAgICBmb250OiB2YXIoLS1mb250LXN1YmhlYWRpbmctMSk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICB9XG5cbiAgICAudG8ge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udDogdmFyKC0tZm9udC1ib2R5LTEpO1xuICAgIH1cblxuICAgIC5leHRyYSB7XG5cbiAgICAgIC53aGVuIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAkc3BhY2luZyAkc3BhY2luZztcbiAgfVxuXG4gIC5yZXBseSB7XG4gICAgcGFkZGluZzogJHNwYWNpbmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnJlcGx5aW5nIHtcbiAgICBwYWRkaW5nOiAkc3BhY2luZztcblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 93765:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-navigation/inbox-navigation.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxNavigationComponent: () => (/* binding */ InboxNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 13228);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 47520);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);









const _c0 = function () {
  return ["/apps/inbox/primary"];
};
const _c1 = function () {
  return ["/apps/inbox/social"];
};
const _c2 = function () {
  return ["/apps/inbox/promotions"];
};
const _c3 = function () {
  return ["/apps/inbox/starred"];
};
const _c4 = function () {
  return ["/apps/inbox/sent"];
};
const _c5 = function () {
  return ["/apps/inbox/drafts"];
};
const _c6 = function () {
  return ["/apps/inbox/spam"];
};
const _c7 = function () {
  return ["/apps/inbox/trash"];
};
class InboxNavigationComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function InboxNavigationComponent_Factory(t) {
    return new (t || InboxNavigationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InboxNavigationComponent,
    selectors: [["fury-inbox-navigation"]],
    inputs: {
      responsive: "responsive"
    },
    decls: 46,
    vars: 32,
    consts: [["fxFlex", "grow"], [1, "navigation"], ["matSubheader", ""], ["matRipple", "", "routerLinkActive", "active", 1, "secondary-text", 3, "routerLink"], ["matListItemIcon", ""], ["matListItemTitle", "", 3, "fxHide", "fxShow.gt-sm"]],
    template: function InboxNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fury-scrollbar", 0)(1, "mat-list", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-list-item", 3)(5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 3)(10, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-list-item", 3)(15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Promotions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-list-item", 3)(21, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Starred ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-list-item", 3)(26, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sent Mails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-list-item", 3)(31, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "drafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Drafts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-list-item", 3)(37, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Spam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-list-item", 3)(42, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Trash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxHide", ctx.responsive)("fxShow.gt-sm", ctx.responsive);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItemTitle, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_0__.ScrollbarComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.navigation[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.navigation[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  position: relative;\n  outline: none;\n  border-radius: 8px;\n}\n.navigation[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.navigation[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   .mat-mdc-list-item-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.navigation[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]   .mat-mdc-list-item-title[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.navigation[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LW5hdmlnYXRpb24vaW5ib3gtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSxnQkRRUTtBQ1FWO0FBZEU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JEQ1k7QUNlaEI7QUFkSTtFQUNFLGtCQUFBO0FBZ0JOO0FBYkk7RUFDRSxnQkFBQTtBQWVOO0FBWkk7RUFDRSxjQUFBO0FBY047QUFWRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVlKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQHVzZSAnc2FzczptYXRoJztcbkBpbXBvcnQgXCJ2YXJcIjtcblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAkc3BhY2luZztcblxuICAubWF0LW1kYy1saXN0LWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiBtYXRoLmRpdigkc3BhY2luZywgMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogbWF0aC5kaXYoJHNwYWNpbmcsIDEuNSk7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtbGlzdC1pdGVtLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLm1hdC1pY29uLCAubWF0LW1kYy1saXN0LWl0ZW0tdGl0bGUge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiBtYXRoLmRpdigkc3BhY2luZywgMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 33336:
/*!**********************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxRoutingModule: () => (/* binding */ InboxRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-mail-list/inbox-mail-list.component */ 44067);
/* harmony import */ var _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-mail/inbox-mail.component */ 44073);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.component */ 65326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






const routes = [{
  path: '',
  component: _inbox_component__WEBPACK_IMPORTED_MODULE_2__.InboxComponent,
  children: [{
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full',
    data: {
      scrollDisabled: true
    }
  }, {
    path: ':category',
    component: _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_0__.InboxMailListComponent,
    data: {
      scrollDisabled: true
    }
  }, {
    path: 'mail/:id',
    component: _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_1__.InboxMailComponent,
    data: {
      scrollDisabled: true
    }
  }],
  data: {
    scrollDisabled: true
  }
}];
class InboxRoutingModule {
  static #_ = this.ɵfac = function InboxRoutingModule_Factory(t) {
    return new (t || InboxRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: InboxRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InboxRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 65326:
/*!*****************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxComponent: () => (/* binding */ InboxComponent)
/* harmony export */ });
/* harmony import */ var _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-compose/inbox-compose.component */ 53212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 47520);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/grid */ 3886);
/* harmony import */ var _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-navigation/inbox-navigation.component */ 93765);











class InboxComponent {
  constructor(dialog) {
    this.dialog = dialog;
  }
  ngOnInit() {}
  openCompose() {
    this.dialog.open(_inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_0__.InboxComposeComponent);
  }
  static #_ = this.ɵfac = function InboxComponent_Factory(t) {
    return new (t || InboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InboxComponent,
    selectors: [["fury-inbox"]],
    decls: 32,
    vars: 1,
    consts: [[1, "drawer-container"], ["mode", "over"], ["drawer", ""], [1, "drawer-navigation"], ["gdRows", "auto 1fr", 1, "drawer-content"], ["gdColumns", "250px 1fr", "gdColumns.lt-md", "116px 1fr", "gdColumns.lt-sm", "1fr", 1, "header", "elevation"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.lt-md", "center center", "fxLayoutAlign.lt-sm", "start center", 1, "logo"], ["fxHide.gt-xs", "", "mat-icon-button", "", "type", "button", 3, "click"], ["fxHide", "", "fxShow.gt-xs", ""], ["fxHide.sm", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "search-bar", "card", "elevation"], [1, "icon"], ["fxFlex", "", "placeholder", "Search...", "type", "search", 1, "search", "card", "text"], ["gdColumns", "250px 1fr", "gdColumns.lt-md", "116px 1fr", "gdColumns.lt-sm", "1fr", 1, "page-container"], ["fxHide", "", "fxLayout", "column", "fxShow.gt-xs", "", 1, "navigation-container"], ["fxFlex", "0 0 auto", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "compose"], ["color", "primary", "fxFlex", "", "fxHide", "", "fxShow.gt-sm", "", "mat-raised-button", "", "type", "button", 3, "click"], ["color", "primary", "fxHide.gt-sm", "", "mat-mini-fab", "", "type", "button"], [3, "responsive"], [1, "content", "card", "elevation"]],
    template: function InboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fury-inbox-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_22_listener() {
          return ctx.openCompose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 17)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "fury-inbox-navigation", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("responsive", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatMiniFabButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatDrawerContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__.DefaultGridColumnsDirective, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_10__.DefaultGridRowsDirective, _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_1__.InboxNavigationComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.drawer-navigation[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  overflow: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 48px 24px 112px 0;\n  background-size: cover;\n  z-index: 10;\n}\n@media screen and (max-width: 599px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 8px 8px 72px;\n  }\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: 24px;\n  font: var(--font-display-1);\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n@media screen and (min-width: 599px) and (max-width: 959px) {\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n@media screen and (max-width: 599px) {\n  .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-bottom: 8px;\n  }\n}\n.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 14px;\n  margin-left: 16px;\n}\n.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  border: 0;\n  height: 54px;\n  outline: none;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  margin-top: -64px;\n  overflow: hidden;\n}\n\n.navigation-container[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  z-index: 20;\n}\n.navigation-container[_ngcontent-%COMP%]   .compose[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.navigation-container[_ngcontent-%COMP%]   .compose[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: -24px;\n  padding-right: 8px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-right: 24px;\n  margin-bottom: 24px;\n  border-radius: 8px;\n  z-index: 20;\n  overflow: hidden;\n}\n@media screen and (max-width: 599px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 0 8px 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ25HQTtFQUNFLFlBQUE7QUFZRjs7QUFUQTtFQUNFLGdCQUFBO0FBWUY7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFZRjs7QUFUQTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBWUY7QUQyREU7RUMxRUY7SUFNSSxxQkFBQTtFQWFGO0FBQ0Y7QUFYRTtFQUNFLFlBQUE7RUFDQSxrQkRuQk07RUNvQk4sMkJBQUE7QUFhSjtBQVhJO0VBQ0UsbUJBQUE7QUFhTjtBRHFERTtFQ3hFQTtJQVVJLGVBQUE7RUFhSjtFQVhJO0lBQ0UsZ0JBQUE7RUFhTjtBQUNGO0FEc0NFO0VDakVBO0lBa0JJLGVBQUE7SUFDQSxrQkFBQTtFQWFKO0FBQ0Y7QUFWRTtFQUNFLGtCRHhDWTtFQ3lDWixnQkFBQTtBQVlKO0FBVkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFZTjtBQVRJO0VBQ0UsU0FBQTtFQUNBLFlEOENtQjtFQzdDbkIsYUFBQTtBQVdOOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FBU0Y7QUFQRTtFQUNFLFlENkJrQjtBQ3BCdEI7QUFQSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFTTjs7QUFKQTtFQUNFLGtCRDlFUTtFQytFUixtQkQvRVE7RUNnRlIsa0JEL0VjO0VDZ0ZkLFdBQUE7RUFDQSxnQkFBQTtBQU9GO0FEUEU7RUNMRjtJQVFJLGlCQUFBO0VBUUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XG5cbi8qKlxuICBHZW5lcmFsXG4gKi9cblxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xuJGVsZXZhdGlvbjogMjtcblxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XG5cbiRzcGFjaW5nOiAyNHB4O1xuJGJvcmRlci1yYWRpdXM6IDhweDtcblxuJHBhZGRpbmcteGw6IDQ4cHg7XG4kcGFkZGluZy1sZzogMzJweDtcbiRwYWRkaW5nOiAyNHB4O1xuJHBhZGRpbmctbWQ6IDE2cHg7XG4kcGFkZGluZy1zbTogMTJweDtcbiRwYWRkaW5nLXhzOiA4cHg7XG4kcGFkZGluZy14eHM6IDRweDtcbiRwYWRkaW5nLTA6IDBweDtcblxuJHBhZGRpbmdzOiAoXG4gICctMCc6ICRwYWRkaW5nLTAsXG4gIC14eHM6ICRwYWRkaW5nLXh4cyxcbiAgLXhzOiAkcGFkZGluZy14cyxcbiAgLXNtOiAkcGFkZGluZy1zbSxcbiAgLW1kOiAkcGFkZGluZy1tZCxcbiAgJyc6ICRwYWRkaW5nLFxuICAtbGc6ICRwYWRkaW5nLWxnLFxuICAteGw6ICRwYWRkaW5nLXhsLFxuKTtcblxuJGljb24tc2l6ZXM6IChcbiAgLXhzOiAxNHB4LFxuICAtc206IDE4cHgsXG4gIC1tZDogMjBweCxcbiAgJyc6IDI0cHgsXG4gIC1sZzogMjhweCxcbiAgLXhsOiAzMnB4XG4pO1xuXG4vKipcbiAgQ2FyZFxuICovXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuXG4vKipcbiAgVG9vbGJhclxuICovXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9vbGJhci16LWluZGV4OiA1MDA7XG4kdG9vbGJhci1idXR0b24td2lkdGg6IDY0cHg7XG5cbi8qKlxuICBGb290ZXJcbiAqL1xuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7XG4kZm9vdGVyLXotaW5kZXg6IDEwMDtcblxuLy8gU2lkZW5hdlxuJHNpZGVuYXYtd2lkdGg6IDI4MHB4O1xuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xuJHNpZGVuYXYtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLy8gU2lkZW5hdiBJdGVtXG5cbiRzaWRlbmF2LWl0ZW0taWNvbi1zaXplOiAyMnB4O1xuXG4kc2lkZW5hdi1pdGVtLWhlaWdodDogNDRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0OiAyNHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xuJHNpZGVuYXYtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMTogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMzogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWw0OiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDMgKyA4cHg7XG5cbi8vIFNpZGVuYXYgd2lkdGggY2FuIGJlIGNoYW5nZWQgaW4gc3JjL0BmdXJ5L2FuaW1hdGlvbnMvc2lkZW5hdi5hbmltYXRpb24udHNcbiRzaWRlbmF2LXotaW5kZXg6IDcwMDtcblxuJGJsaW5rLXNjcm9sbGJhci13aWR0aDogMTJweDtcblxuLy8gUGFnZSBMYXlvdXRcbiRwYWdlLWxheW91dC1oZWlnaHQ6IDIwMHB4O1xuJHBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8qKlxuICBNaXhpbnNcbiAqL1xuJG1lZGlhLXhzOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknO1xuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuJG1lZGlhLXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSc7XG5AbWl4aW4gbWVkaWEtc20ge1xuICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAgSW5ib3hcbiAqL1xuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kaW5ib3gtc2VhcmNoYmFyLWhlaWdodDogNTRweDtcbiRpbmJveC1zdGFyLWNvbG9yOiAjZmZjMTA3O1xuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XG5AaW1wb3J0IFwidmFyXCI7XG5cbiRpbmJveC1uYXZpZ2F0aW9uLXdpZHRoLWNvbGxhcHNlZDogMTE2cHg7XG4kaW5ib3gtbmF2aWdhdGlvbi13aWR0aDogMjUwcHg7XG5cblxuLmRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcmF3ZXItbmF2aWdhdGlvbiB7XG4gIHBhZGRpbmc6IDAgJHNwYWNpbmc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAkc3BhY2luZyoyICRzcGFjaW5nICgkc3BhY2luZyoyKSskaW5ib3gtaGVhZGVyLWhlaWdodCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB6LWluZGV4OiAxMDtcblxuICBAaW5jbHVkZSBtZWRpYS14cyB7XG4gICAgcGFkZGluZzogbWF0aC5kaXYoJHNwYWNpbmcsIDMpIG1hdGguZGl2KCRzcGFjaW5nLCAzKSBtYXRoLmRpdigkc3BhY2luZywgMykrJGluYm94LWhlYWRlci1oZWlnaHQ7XG4gIH1cblxuICAubG9nbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogJHNwYWNpbmc7XG4gICAgZm9udDogdmFyKC0tZm9udC1kaXNwbGF5LTEpO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1zbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWVkaWEteHMge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGhlaWdodDogJGluYm94LXNlYXJjaGJhci1oZWlnaHQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtJGluYm94LWhlYWRlci1oZWlnaHQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgJHNwYWNpbmcgJHNwYWNpbmc7XG4gIHotaW5kZXg6IDIwO1xuXG4gIC5jb21wb3NlIHtcbiAgICBoZWlnaHQ6ICRpbmJveC1oZWFkZXItaGVpZ2h0O1xuXG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0kc3BhY2luZztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tcmlnaHQ6ICRzcGFjaW5nO1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIHotaW5kZXg6IDIwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBpbmNsdWRlIG1lZGlhLXhzIHtcbiAgICBtYXJnaW46IDAgbWF0aC5kaXYoJHNwYWNpbmcsIDMpIG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 88597:
/*!**************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxModule: () => (/* binding */ InboxModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-quill */ 70945);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/scrollbar/scrollbar.module */ 31907);
/* harmony import */ var _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-compose/inbox-compose.component */ 53212);
/* harmony import */ var _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component */ 74605);
/* harmony import */ var _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox-mail-label-list/inbox-mail-label-list.component */ 24128);
/* harmony import */ var _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox-mail-label/inbox-mail-label.component */ 24916);
/* harmony import */ var _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox-mail-list/inbox-mail-list.component */ 44067);
/* harmony import */ var _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-mail-star/inbox-mail-star.component */ 35760);
/* harmony import */ var _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox-mail/inbox-mail.component */ 44073);
/* harmony import */ var _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inbox-navigation/inbox-navigation.component */ 93765);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbox-routing.module */ 33336);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbox.component */ 65326);
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inbox.service */ 40777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);



















class InboxModule {
  static #_ = this.ɵfac = function InboxModule_Factory(t) {
    return new (t || InboxModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: InboxModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    providers: [_inbox_service__WEBPACK_IMPORTED_MODULE_12__.InboxService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _inbox_routing_module__WEBPACK_IMPORTED_MODULE_10__.InboxRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule.forRoot(), _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__.ScrollbarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ScrollingModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](InboxModule, {
    declarations: [_inbox_component__WEBPACK_IMPORTED_MODULE_11__.InboxComponent, _inbox_navigation_inbox_navigation_component__WEBPACK_IMPORTED_MODULE_9__.InboxNavigationComponent, _inbox_mail_list_inbox_mail_list_component__WEBPACK_IMPORTED_MODULE_6__.InboxMailListComponent, _inbox_mail_inbox_mail_component__WEBPACK_IMPORTED_MODULE_8__.InboxMailComponent, _inbox_mail_label_inbox_mail_label_component__WEBPACK_IMPORTED_MODULE_5__.InboxMailLabelComponent, _inbox_mail_star_inbox_mail_star_component__WEBPACK_IMPORTED_MODULE_7__.InboxMailStarComponent, _inbox_mail_label_list_inbox_mail_label_list_component__WEBPACK_IMPORTED_MODULE_4__.InboxMailLabelListComponent, _inbox_mail_confirm_dialog_inbox_mail_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.InboxMailConfirmDialogComponent, _inbox_compose_inbox_compose_component__WEBPACK_IMPORTED_MODULE_2__.InboxComposeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _inbox_routing_module__WEBPACK_IMPORTED_MODULE_10__.InboxRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_16__.QuillModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__.ScrollbarModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ScrollingModule]
  });
})();

/***/ }),

/***/ 40777:
/*!***************************************************!*\
  !*** ./src/app/pages/apps/inbox/inbox.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InboxService: () => (/* binding */ InboxService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../demo-data/inbox-demo-data */ 52707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




class InboxService {
  constructor() {
    this.mails = _demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_0__.inboxMails;
    this.availableLabels = [];
    this.mails.forEach(mail => {
      mail.labels.forEach(label => {
        if (!this.availableLabels.find(l => l.name === label.name)) {
          this.availableLabels.push(label);
        }
      });
    });
  }
  getStarred() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.mails).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(mails => mails.filter(mail => mail.starred)));
  }
  getGroup(group) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.mails).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(mails => mails.filter(mail => mail.group === group)));
  }
  getMail(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.mails).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(mails => mails.find(mail => mail.id === id)));
  }
  toggleStarred(mail) {
    const foundMail = this.find(mail);
    if (foundMail) {
      foundMail.starred = !mail.starred;
    }
  }
  addLabel(label, mail) {
    const foundMail = this.find(mail);
    if (foundMail) {
      const foundLabel = foundMail.labels.find(l => l === label);
      if (!foundLabel) {
        foundMail.labels.push(label);
        this.addToAvailableIfNotExists(label);
      }
    }
  }
  addToAvailableIfNotExists(label) {
    if (this.availableLabels.indexOf(label) === -1) {
      this.availableLabels.push(label);
    }
  }
  removeLabel(label, mail) {
    const foundMail = this.find(mail);
    if (foundMail) {
      const foundLabelIndex = foundMail.labels.findIndex(l => l === label);
      if (foundLabelIndex > -1) {
        foundMail.labels.splice(foundLabelIndex, 1);
      }
    }
  }
  removeMail(mail) {
    const foundMailIndex = this.mails.findIndex(m => m === mail);
    if (foundMailIndex > -1) {
      this.mails.splice(foundMailIndex, 1);
      this.lastRemovedMail = mail;
      this.lastRemovedMailIndex = foundMailIndex;
    }
  }
  undoRemove() {
    if (this.lastRemovedMail && this.lastRemovedMailIndex) {
      this.mails.splice(this.lastRemovedMailIndex, 0, this.lastRemovedMail);
      return this.lastRemovedMail;
    }
    return false;
  }
  find(mail) {
    return this.mails.find(existingMail => existingMail.id === mail.id);
  }
  getLabelColors() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_demo_data_inbox_demo_data__WEBPACK_IMPORTED_MODULE_0__.labelColors);
  }
  static #_ = this.ɵfac = function InboxService_Factory(t) {
    return new (t || InboxService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InboxService,
    factory: InboxService.ɵfac
  });
}


/***/ }),

/***/ 52707:
/*!****************************************************!*\
  !*** ./src/app/pages/demo-data/inbox-demo-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxMails: () => (/* binding */ inboxMails),
/* harmony export */   labelColors: () => (/* binding */ labelColors)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const labelColors = [{
  name: 'Indigo',
  code: '#3F51B5'
}, {
  name: 'Teal',
  code: '#009688'
}, {
  name: 'Light Blue',
  code: '#03A9F4'
}, {
  name: 'Deep Purple',
  code: '#673AB7'
}, {
  name: 'Purple',
  code: '#9C27B0'
}, {
  name: 'Green',
  code: '#4CAF50'
}, {
  name: 'Deep Orange',
  code: '#FF5722'
}, {
  name: 'Red',
  code: '#f44336'
}, {
  name: 'Yellow',
  code: '#FFEB3B'
}];
const inboxMails = [{
  'id': '5aaa797a5416f2348280d365',
  'from': {
    'name': 'Nichols Obrien',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Nulla ut est fugiat sint sit ut id aliqua reprehenderit duis aliquip culpa nostrud.',
  'content': 'Mollit labore consequat adipisicing adipisicing. Ullamco est laboris quis minim consectetur consectetur tempor anim adipisicing est dolore cillum excepteur. Cupidatat ut aliqua nisi reprehenderit Lorem.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(66, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797a42552b86e1fa2d3f',
  'from': {
    'name': 'Dona Kirk',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Aliquip laboris reprehenderit adipisicing culpa.',
  'content': 'Laboris aute nostrud labore dolore laborum sint occaecat in exercitation dolore qui. Irure velit amet nostrud pariatur et amet incididunt laborum aute. Fugiat voluptate reprehenderit laboris laboris magna consequat ex magna elit fugiat magna dolore aliquip.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'sent',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797a405e7a894676e6c5',
  'from': {
    'name': 'Valenzuela Atkinson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Esse laboris nulla in pariatur mollit id dolor velit cillum dolor cillum.',
  'content': 'Voluptate irure enim est anim non commodo ad reprehenderit ea quis incididunt et aliquip. Reprehenderit deserunt cupidatat reprehenderit enim quis id tempor ipsum est dolor exercitation consectetur. Tempor nulla do aute veniam qui laboris ullamco voluptate enim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(94, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797a7eac0b92ec5ea57a',
  'from': {
    'name': 'Jimenez Dalton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Minim minim sit labore nostrud cillum labore.',
  'content': 'Voluptate ut enim adipisicing reprehenderit voluptate velit officia dolore quis pariatur adipisicing. Eu occaecat officia in proident do exercitation esse cillum commodo voluptate enim. Laboris est nisi dolore ullamco quis cupidatat aliquip enim occaecat labore laborum elit non.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'hours'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'primary',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797a7470a5a6e66bd638',
  'from': {
    'name': 'Mccray Chandler',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Mollit labore nisi nostrud non incididunt do ullamco in consequat consequat occaecat adipisicing anim.',
  'content': 'Elit nisi cupidatat voluptate non velit et qui dolore voluptate aute eiusmod officia nulla Lorem. Aliqua ex et do veniam commodo enim. Lorem reprehenderit sunt fugiat cupidatat laborum enim esse pariatur quis eu exercitation dolore incididunt.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'hours'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797a6f110373f5d7afcf',
  'from': {
    'name': 'Chen Fields',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Culpa duis laborum sit minim et ipsum et reprehenderit ut reprehenderit.',
  'content': 'Adipisicing dolor elit excepteur aute aute sit occaecat qui duis Lorem veniam. Culpa sit duis consequat officia dolore tempor cillum ipsum laborum. Pariatur officia laborum nulla dolore amet fugiat commodo mollit amet cupidatat in et.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(38, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797a7e3c9c1a9fbb37df',
  'from': {
    'name': 'Bernice Guy',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ullamco dolore amet reprehenderit consequat cillum ad eiusmod reprehenderit.',
  'content': 'Lorem ad ut nulla labore commodo excepteur dolore est sint. Pariatur adipisicing duis tempor dolor exercitation culpa laboris nulla quis amet irure eu. Deserunt cillum voluptate ut velit et eiusmod labore aute amet.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(39, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797a74af67b35a55bdfc',
  'from': {
    'name': 'Allen Walton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sunt ea laboris enim in sunt aliquip et fugiat occaecat adipisicing irure ea.',
  'content': 'Labore culpa in qui sunt anim ipsum labore reprehenderit ipsum minim sunt voluptate. Commodo fugiat mollit nulla aliquip ullamco pariatur et ipsum sit nulla. Aute commodo magna eiusmod officia do est magna minim sit cillum eu.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(20, 'hours'),
  'read': false,
  'starred': true,
  'labels': [],
  'group': 'sent',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797af301d85874b38301',
  'from': {
    'name': 'Keisha Prince',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Irure voluptate mollit voluptate ut elit Lorem aliquip reprehenderit ut minim adipisicing esse exercitation elit.',
  'content': 'Sit duis eu enim elit consectetur deserunt voluptate id esse consectetur voluptate consequat deserunt in. Voluptate proident excepteur excepteur elit pariatur id labore. Consequat aute deserunt consequat sunt enim aliqua excepteur elit aute nisi.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(11, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797af9d59b1b2e78f566',
  'from': {
    'name': 'Hines Chaney',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Pariatur reprehenderit labore consectetur id laboris ipsum Lorem commodo ea minim mollit magna mollit.',
  'content': 'Nulla irure ea voluptate ut laborum dolore proident esse qui eu. Anim dolore magna do velit laboris aliqua nostrud minim ipsum. Qui tempor do est et non amet nostrud anim cupidatat ex aliquip et nisi.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'days'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797a22bb3083a62fec12',
  'from': {
    'name': 'Paige Morris',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Consequat aute ea qui exercitation consequat labore sint anim.',
  'content': 'Est voluptate labore dolore sunt consectetur cillum adipisicing excepteur quis ullamco ex veniam. Fugiat voluptate Lorem incididunt dolor eu aute. Labore esse eiusmod cupidatat ad ullamco laboris ullamco deserunt aliqua sunt eu.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(46, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'sent',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797a8e9a5de30fcd9317',
  'from': {
    'name': 'Vaughan Acevedo',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sit minim enim dolore eiusmod nulla nostrud deserunt laborum enim eiusmod laborum eiusmod.',
  'content': 'Ipsum consequat enim pariatur et nulla magna dolor ex dolore consequat fugiat occaecat. Elit duis sit est voluptate amet exercitation enim consectetur nisi. Esse eu nisi reprehenderit non.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(27, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'social',
  'attachments': []
}, {
  'id': '5aaa797a758be20e9d7fb18a',
  'from': {
    'name': 'Jackson Solis',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Enim cillum qui nulla ex do do enim aliqua nostrud consequat enim.',
  'content': 'Et esse fugiat nulla sunt ut sint fugiat. Non duis cillum irure nisi pariatur magna dolore proident. Laboris magna adipisicing consectetur mollit consectetur dolore.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(49, 'hours'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797a5ba62821cc52db49',
  'from': {
    'name': 'Pauline Sherman',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Voluptate voluptate ad irure ipsum sint deserunt dolor nulla ipsum esse.',
  'content': 'Nostrud magna nisi reprehenderit non adipisicing laboris est tempor consectetur veniam veniam. Ad excepteur tempor in ut labore nulla sint minim exercitation et culpa dolor. Anim reprehenderit occaecat tempor ex cupidatat minim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(49, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797a55d2fc99f3e1a4bf',
  'from': {
    'name': 'Olson Gould',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Laborum proident exercitation labore commodo amet irure id quis ea officia sit elit.',
  'content': 'Irure aliqua consectetur ad reprehenderit cillum ullamco commodo excepteur non pariatur. Aliqua excepteur et irure voluptate et do velit dolore ut in enim laborum laboris amet. Esse occaecat cupidatat velit culpa irure.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797a20d0690dc7676ccc',
  'from': {
    'name': 'Mercedes Mcbride',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Irure cillum labore nostrud irure do commodo officia consectetur cillum laboris quis amet dolore.',
  'content': 'Ex occaecat Lorem adipisicing esse eu non cupidatat cupidatat. Laborum exercitation officia laborum excepteur non proident sint velit dolor duis minim. Cillum officia dolore consequat minim esse labore.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, 'hours'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'social',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797ade2766fa8226bdb9',
  'from': {
    'name': 'Alexander Watts',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Minim exercitation ipsum dolore sint do.',
  'content': 'Lorem quis est tempor nulla magna consectetur ex voluptate consequat sint ad enim. Amet magna esse do ut laboris. Laborum enim proident ut velit consectetur aute ea irure et minim fugiat ea.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797a6aa19a3008aeefe0',
  'from': {
    'name': 'Elsie Rosa',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Et fugiat anim sunt voluptate veniam ea anim.',
  'content': 'Amet et dolore in proident tempor fugiat magna veniam laborum in esse quis quis eiusmod. Eu elit culpa irure non do ullamco ea tempor. Officia do deserunt in velit sunt ullamco anim duis eiusmod consequat in.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(69, 'days'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'sent',
  'attachments': []
}, {
  'id': '5aaa797aaddf87549c1bb19f',
  'from': {
    'name': 'Carol Holland',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Incididunt reprehenderit fugiat deserunt laborum in ad tempor deserunt irure esse fugiat.',
  'content': 'Sint elit magna laboris laboris. Aliqua sit officia reprehenderit proident in minim enim fugiat do consequat adipisicing enim. Cillum non duis occaecat irure laborum ipsum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'hours'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797afdf0257e8c98b506',
  'from': {
    'name': 'Wendi Robertson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Velit culpa qui qui culpa laboris fugiat quis labore velit cillum exercitation velit occaecat.',
  'content': 'Eiusmod aliqua duis mollit culpa aliqua excepteur. In velit commodo fugiat aute minim. Deserunt ea fugiat non culpa adipisicing adipisicing cupidatat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(71, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797ac063963d7bb431b2',
  'from': {
    'name': 'Thelma Norton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Commodo quis commodo nostrud eiusmod sunt mollit non anim excepteur.',
  'content': 'Esse non culpa culpa occaecat dolor sint. Qui veniam aute dolore labore dolore excepteur. Est Lorem sint incididunt sint ex.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(82, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797a81639a7ba27eec2f',
  'from': {
    'name': 'Sellers Hamilton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Anim aliqua officia cillum non nisi quis Lorem duis labore do consectetur anim.',
  'content': 'Enim nulla officia non anim duis exercitation ut eu laborum Lorem excepteur commodo duis reprehenderit. Cupidatat deserunt non exercitation labore eu pariatur labore ut id aliqua voluptate sunt. Exercitation dolore deserunt pariatur exercitation occaecat deserunt exercitation nostrud quis incididunt sunt Lorem ut.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(30, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'trash',
  'attachments': []
}, {
  'id': '5aaa797a1032b6a0ed355030',
  'from': {
    'name': 'Franks Howell',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Occaecat non quis ut sint magna aliquip esse sit incididunt irure exercitation.',
  'content': 'Aliqua ex aliqua quis tempor id. Officia reprehenderit occaecat voluptate consectetur duis minim Lorem cillum minim ea aute aliquip. Amet voluptate aute ea id.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'hours'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797af5014ca11ba340b1',
  'from': {
    'name': 'Tania Bolton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sit eiusmod sit consectetur nisi enim.',
  'content': 'Consectetur adipisicing eu tempor sunt est laborum irure qui. Lorem labore velit duis sit anim dolore et elit excepteur cupidatat in cillum pariatur esse. Nulla esse duis proident culpa sit eu sint.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797aa1e4b09dce5cfb05',
  'from': {
    'name': 'Shepard Hart',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Non ea officia voluptate do aute ea elit minim.',
  'content': 'Velit magna nostrud laboris consequat ut. Nisi esse non sunt dolore culpa ullamco. Ad non eiusmod esse adipisicing aute labore do reprehenderit culpa in eu occaecat qui.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'trash',
  'attachments': []
}, {
  'id': '5aaa797a20ae69f0c031707d',
  'from': {
    'name': 'Solis Cummings',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Incididunt reprehenderit fugiat ad ullamco nulla minim consequat sunt.',
  'content': 'Tempor exercitation minim reprehenderit culpa nostrud minim. Nulla irure incididunt officia anim Lorem. Cupidatat consectetur velit velit esse id veniam excepteur.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(33, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'spam',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797aebeabe6c4ba22dc8',
  'from': {
    'name': 'Salazar Reed',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Qui duis id exercitation sint duis dolor excepteur qui tempor irure et minim culpa ad.',
  'content': 'Dolor est veniam ullamco esse eu ad deserunt fugiat reprehenderit officia id. Consectetur est minim incididunt consectetur Lorem deserunt deserunt. In do reprehenderit cillum dolor ea et quis aliqua labore dolore veniam et eu culpa.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'hours'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797a5e6ad95e0d2cf06a',
  'from': {
    'name': 'Dudley Richards',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Mollit do in laboris quis cillum mollit nulla non.',
  'content': 'Fugiat ut amet veniam irure ea esse eiusmod occaecat dolore aute magna dolor. Mollit elit sint ullamco aliqua deserunt qui amet ipsum ex qui. Officia tempor in consectetur eiusmod esse.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(30, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'sent',
  'attachments': ['assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797a9270b42e1631ce7e',
  'from': {
    'name': 'Stuart Velez',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Minim proident ex id tempor veniam pariatur.',
  'content': 'Ullamco pariatur veniam aliqua amet proident proident fugiat velit esse. Amet in exercitation officia tempor do officia dolor aliquip. Non sunt adipisicing cillum est incididunt est velit dolore laborum enim nulla.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(31, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797ad2b38cdbd2865a4b',
  'from': {
    'name': 'Jo Meyers',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Anim ut id qui ipsum incididunt in minim veniam incididunt quis.',
  'content': 'Ad ullamco cillum cupidatat proident dolor qui eu. Sit amet reprehenderit irure sit eiusmod pariatur pariatur magna deserunt fugiat mollit ut. Et laborum fugiat mollit amet.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(98, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797b5f2fe71db8cd9feb',
  'from': {
    'name': 'Williamson Bonner',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Id aute in et veniam.',
  'content': 'Quis sunt ad est qui occaecat incididunt minim ex eiusmod pariatur proident Lorem laborum sint. Pariatur quis eu Lorem nulla sit enim. Dolor aute veniam eiusmod sunt ullamco officia dolore ad sint nulla labore.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(63, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797b090aa6894d6506e7',
  'from': {
    'name': 'Mccormick Roy',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Esse est nisi anim elit quis laboris ea eiusmod do voluptate velit.',
  'content': 'Sit ad veniam sint amet excepteur adipisicing ea aliqua tempor reprehenderit adipisicing minim ad nulla. Sunt Lorem pariatur est reprehenderit sit consequat aliquip amet duis laborum mollit adipisicing esse. Sint velit et elit nulla laborum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797b293f1c38175a4bce',
  'from': {
    'name': 'Gilbert Hurst',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Qui nulla occaecat do fugiat.',
  'content': 'Ullamco culpa Lorem adipisicing in exercitation dolor fugiat quis nulla. Veniam in cupidatat ea proident consectetur sunt anim elit consequat minim ex. Cillum veniam reprehenderit cillum labore elit irure cillum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(91, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }, {
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b78cecb2170ce2900',
  'from': {
    'name': 'Moody Moses',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Veniam ut voluptate laborum nisi id ea Lorem qui quis adipisicing excepteur et.',
  'content': 'Magna tempor labore consequat occaecat eiusmod occaecat anim sint ad cupidatat est sint labore est. Reprehenderit cupidatat minim ullamco dolor cupidatat commodo consectetur id est commodo minim consectetur reprehenderit. Sint amet esse mollit voluptate proident cupidatat id nulla nostrud ad adipisicing minim laboris.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(2, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'spam',
  'attachments': ['assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797bee6a8903eb58d310',
  'from': {
    'name': 'Ericka Alford',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Dolore aliquip velit consequat incididunt culpa ipsum fugiat magna exercitation ut consectetur ea.',
  'content': 'Elit eiusmod dolore est ex anim dolor culpa sint consequat. Deserunt nisi mollit anim anim esse exercitation magna aliqua. Sint laboris labore esse nostrud est esse minim id nulla ad nostrud ad irure.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'social',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b14299482420d2130',
  'from': {
    'name': 'Best Pruitt',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Irure fugiat ea ipsum eiusmod culpa deserunt proident esse.',
  'content': 'Consectetur amet sint aliquip sit labore do laborum officia duis Lorem qui sint adipisicing commodo. Proident non consequat do consectetur mollit consequat est fugiat. Duis dolor dolor sit et in consequat consequat quis deserunt Lorem nisi ullamco.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797bad58caabb50533bc',
  'from': {
    'name': 'Crosby Camacho',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Incididunt laboris reprehenderit ut exercitation exercitation aliquip consequat.',
  'content': 'Est fugiat aute dolor anim laboris ut consequat nulla cupidatat duis laborum cupidatat ullamco. Minim cupidatat ad aute pariatur labore irure cupidatat sunt anim nisi. Amet esse labore voluptate mollit consectetur proident adipisicing sit excepteur cillum ad.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b6be95c1f6af630f6',
  'from': {
    'name': 'Davenport Jennings',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Non non dolor laboris sit aliquip est pariatur ad in do duis Lorem.',
  'content': 'Anim qui incididunt ex deserunt occaecat laborum proident in deserunt. Anim ipsum qui aliquip laborum in ut elit quis labore et. Pariatur proident consequat fugiat nisi ullamco enim culpa nisi nisi adipisicing veniam.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(8, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797b8d06bbf8e950fa16',
  'from': {
    'name': 'Laurel Mathews',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Aute proident id id ad ad cupidatat.',
  'content': 'Do ad duis sunt dolor fugiat reprehenderit mollit adipisicing deserunt sunt minim. Id proident ullamco Lorem amet culpa velit eu officia excepteur. Laborum exercitation fugiat aute dolor magna non dolore ut.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(86, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797b759345ba3f5fcd2c',
  'from': {
    'name': 'Foster Giles',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Laboris anim excepteur consectetur occaecat ut non.',
  'content': 'Lorem nostrud et est Lorem irure veniam Lorem deserunt tempor nostrud culpa. Ut nulla amet irure magna reprehenderit culpa pariatur est ut sint ullamco nostrud. Pariatur dolor elit nulla cillum nostrud id.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(63, 'hours'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b8cfb86416e1acf49',
  'from': {
    'name': 'Juliet Erickson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Pariatur cillum pariatur dolore esse incididunt ut quis enim culpa.',
  'content': 'Commodo aliquip labore cillum esse in aute aliqua. Proident adipisicing Lorem deserunt dolore est do non magna Lorem officia laborum dolore dolor dolor. Ipsum aliqua velit incididunt dolor eu laborum pariatur ipsum duis duis sit incididunt velit.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(11, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797b93866411512a6026',
  'from': {
    'name': 'Johns Strickland',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Incididunt deserunt sint laboris commodo ea et ullamco voluptate cupidatat esse eiusmod qui.',
  'content': 'In dolore voluptate ullamco eu duis minim eiusmod duis anim minim. Dolore labore ipsum officia ipsum dolore commodo mollit. Esse fugiat commodo nulla dolor non commodo culpa laboris et id eiusmod laboris cupidatat velit.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(51, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'drafts',
  'attachments': []
}, {
  'id': '5aaa797b89f432a6a38811e1',
  'from': {
    'name': 'Sharlene Conley',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Lorem proident aliqua mollit aliquip sint velit.',
  'content': 'Aliqua commodo consectetur aute ut. Ipsum excepteur fugiat mollit adipisicing incididunt anim eiusmod non cupidatat. Commodo deserunt proident aute minim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(48, 'hours'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797ba0bafdf084a1c2b9',
  'from': {
    'name': 'Mallory Mcleod',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Non ex excepteur amet consequat est deserunt.',
  'content': 'Voluptate in pariatur Lorem pariatur eu et eu eiusmod aute esse. Est sint dolor Lorem do esse laboris minim excepteur sunt irure ex. Officia exercitation Lorem reprehenderit ut ut sunt qui aute.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b5f42c84c212a8e22',
  'from': {
    'name': 'Noemi Wooten',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Incididunt duis consequat irure qui velit deserunt velit consequat do eiusmod non sint sint tempor.',
  'content': 'Aliquip aliquip occaecat enim aliquip minim ea aliquip consectetur labore eiusmod adipisicing nostrud. Incididunt laboris tempor minim ipsum sint aliquip dolore anim in. Reprehenderit esse labore irure id cupidatat nostrud cupidatat Lorem fugiat est eu consectetur.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(24, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b13dbf07966dfbbc4',
  'from': {
    'name': 'Melendez Campbell',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Exercitation pariatur in culpa eiusmod aliqua et aute.',
  'content': 'Ut occaecat pariatur enim commodo ad dolor incididunt laboris occaecat nulla nulla. Velit voluptate veniam amet labore aliqua eiusmod adipisicing. Mollit minim consectetur labore ipsum adipisicing nisi enim officia.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b2f3b8ad312951b23',
  'from': {
    'name': 'Dale Munoz',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Anim ex irure culpa mollit ut anim laborum.',
  'content': 'Dolore dolore nisi quis pariatur sunt in commodo aute. Nisi adipisicing aliqua officia adipisicing dolor deserunt reprehenderit consectetur qui elit elit. Cillum incididunt nisi reprehenderit aliquip ullamco et.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(46, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b45d2c6b4dbeadb6d',
  'from': {
    'name': 'Monroe Jensen',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Do aliquip pariatur cupidatat dolor voluptate incididunt elit.',
  'content': 'Id adipisicing ullamco et est ullamco est. Sint laborum id veniam deserunt sunt tempor ut in sint reprehenderit reprehenderit. Nisi sit aliqua laboris veniam sunt.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(60, 'hours'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797be1df17814206c960',
  'from': {
    'name': 'Spence Henderson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Cillum ipsum nulla deserunt cupidatat officia nulla ex tempor enim labore.',
  'content': 'Enim occaecat ipsum dolore irure deserunt nostrud ipsum nulla adipisicing. Sunt occaecat et culpa adipisicing aliquip. Nostrud ut id deserunt voluptate mollit eiusmod qui id culpa.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(7, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797bb8c4f2416c15ead5',
  'from': {
    'name': 'Schneider Mcmahon',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Velit sunt deserunt tempor consectetur proident tempor ut laborum id anim consequat ullamco qui.',
  'content': 'Adipisicing consectetur adipisicing incididunt deserunt id nisi nulla eu excepteur. Sint ullamco nostrud minim esse do. Excepteur eu ut proident elit esse ex dolor consequat veniam mollit do excepteur.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'days'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'primary',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b6c0c971c013c99ce',
  'from': {
    'name': 'Logan Hooper',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ex irure laborum eiusmod amet dolore.',
  'content': 'Sint in consequat in nisi cupidatat fugiat mollit in. Enim aliquip laboris sint aute nulla commodo sunt. Proident consequat occaecat pariatur ullamco Lorem ut tempor nisi in fugiat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(76, 'hours'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'promotions',
  'attachments': []
}, {
  'id': '5aaa797b7e978c829ad4a090',
  'from': {
    'name': 'Theresa Wallace',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Amet eu adipisicing qui aute ut tempor elit do eu tempor culpa voluptate.',
  'content': 'Adipisicing aliquip adipisicing ipsum reprehenderit excepteur anim laboris ex laboris labore non incididunt nulla. Anim et minim veniam duis laboris exercitation aliquip. Enim sit fugiat deserunt deserunt anim Lorem in enim fugiat duis Lorem.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'sent',
  'attachments': []
}, {
  'id': '5aaa797bc2c9cfc3272ec0df',
  'from': {
    'name': 'Carmella Noble',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ea anim eu ut consequat adipisicing tempor cillum deserunt velit incididunt tempor sunt incididunt.',
  'content': 'Lorem labore do deserunt magna. Deserunt aute ea consectetur nostrud aliqua minim sint labore laboris magna magna culpa. Ea ea consectetur excepteur occaecat ea consequat ea sint.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(76, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797bf62773bccbe26c28',
  'from': {
    'name': 'Mitchell Gilmore',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Cillum fugiat sit duis et aute.',
  'content': 'Id sint nulla nostrud id consequat occaecat aute ullamco Lorem velit ut deserunt. Ad cupidatat sunt velit fugiat anim laboris irure proident ipsum reprehenderit aliquip qui. In minim commodo nisi laborum aliqua duis.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'sent',
  'attachments': []
}, {
  'id': '5aaa797b2e3d4d3838668543',
  'from': {
    'name': 'Underwood Gregory',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Exercitation officia excepteur sit labore.',
  'content': 'Velit commodo laborum aliqua cillum dolor aliquip voluptate fugiat deserunt tempor. Reprehenderit magna nulla deserunt sunt aliquip consequat velit. Labore incididunt eiusmod ex consectetur ad dolor.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'sent',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b216d4dae2587b111',
  'from': {
    'name': 'Kathy Hudson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Exercitation duis aliqua nulla aliqua consequat nisi qui Lorem in duis.',
  'content': 'Dolor sunt deserunt culpa ut dolor amet enim irure incididunt quis laborum. Anim duis veniam velit dolor incididunt proident occaecat adipisicing dolore enim duis irure. Enim sint ad nostrud est.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(13, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797bdee66ceacbc84395',
  'from': {
    'name': 'Francine Carney',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Exercitation eu do nulla occaecat veniam magna veniam ut ad.',
  'content': 'Est deserunt est minim duis anim pariatur velit veniam consectetur duis ipsum tempor dolore. Excepteur tempor tempor esse ut aliquip nulla nulla nulla. Pariatur officia velit dolore officia qui quis non.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'spam',
  'attachments': ['assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797ba53602f8abb16015',
  'from': {
    'name': 'Hood Peterson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Pariatur fugiat eiusmod fugiat quis consectetur laboris ipsum cillum non aliqua laboris.',
  'content': 'Duis amet Lorem mollit adipisicing exercitation elit laboris sint exercitation ad occaecat esse quis nostrud. Cillum esse aliquip voluptate ullamco dolore est duis anim ipsum duis ex dolor. Labore aliqua pariatur proident ad mollit duis duis non nulla dolore cupidatat quis cupidatat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'spam',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b7cb106a8cb336dd3',
  'from': {
    'name': 'Henderson Cantu',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Consequat laboris quis exercitation sunt adipisicing cupidatat labore aliqua.',
  'content': 'Excepteur elit incididunt excepteur officia ex anim ut irure Lorem laborum cupidatat nisi dolor. Ut incididunt enim ut quis. Reprehenderit excepteur quis laborum cillum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(65, 'hours'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797bde9ab55ba5acae3b',
  'from': {
    'name': 'Erika Vasquez',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Lorem ullamco dolore quis pariatur ullamco esse.',
  'content': 'Veniam dolore Lorem aliqua cupidatat. Ut cupidatat officia occaecat exercitation enim Lorem aliquip. Nulla quis exercitation dolor excepteur eu in id incididunt irure fugiat ea sit eu.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(99, 'minutes'),
  'read': false,
  'starred': true,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'spam',
  'attachments': []
}, {
  'id': '5aaa797bbb553fecfd85fd40',
  'from': {
    'name': 'Bradley Pollard',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Mollit eu velit nostrud adipisicing incididunt qui anim nisi pariatur eiusmod irure incididunt.',
  'content': 'Sit quis est do culpa laboris. Excepteur consequat occaecat pariatur magna veniam. Fugiat ipsum velit consectetur exercitation eiusmod duis consectetur minim culpa do.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(82, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'trash',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b5e86204599424bde',
  'from': {
    'name': 'Strong Cooper',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Quis anim minim velit ea.',
  'content': 'Aute aute sint reprehenderit et tempor anim consequat velit sit anim. Aute deserunt labore cupidatat ullamco. Consectetur nostrud consectetur fugiat tempor occaecat consectetur nulla voluptate.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(4, 'days'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'social',
  'attachments': []
}, {
  'id': '5aaa797b82e12dc2e0463b74',
  'from': {
    'name': 'Howe Maldonado',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Irure exercitation quis nulla irure ea minim nostrud anim id.',
  'content': 'Anim et aute voluptate fugiat laborum non culpa. Voluptate cupidatat commodo mollit et non nisi cillum duis sint mollit. Lorem officia ea ad consectetur excepteur laboris officia labore pariatur fugiat ad magna labore labore.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(66, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'sent',
  'attachments': []
}, {
  'id': '5aaa797b190799b146731084',
  'from': {
    'name': 'Lena Smith',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ad eiusmod ex velit dolore eu.',
  'content': 'Occaecat ipsum nulla reprehenderit tempor nulla culpa quis ex ad. Amet amet non aute non fugiat Lorem elit qui esse duis proident sit. Ex incididunt aliqua irure ea consectetur velit.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(39, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'spam',
  'attachments': ['assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b6045321b043b9462',
  'from': {
    'name': 'Elisabeth Mcmillan',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sit anim sunt aute do enim occaecat et eiusmod.',
  'content': 'Minim non non quis esse Lorem aute. Laboris nisi ea do occaecat exercitation qui eiusmod ut magna dolor ea do dolore. Dolore pariatur esse non excepteur ad voluptate ullamco magna laborum quis.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(25, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'social',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b22aedcb21db59b25',
  'from': {
    'name': 'Mueller Dotson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Proident velit consequat proident elit ex nostrud eu cupidatat cupidatat anim ex dolor.',
  'content': 'Id minim ut ut labore officia. Id enim do eu duis nulla exercitation. Consectetur minim excepteur ipsum quis deserunt pariatur exercitation aliquip in.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(69, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }, {
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797b4bdd8647076d0ee7',
  'from': {
    'name': 'Joseph Saunders',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Consequat duis eiusmod nulla anim aliqua ipsum.',
  'content': 'Sint dolor id do ullamco cupidatat mollit aliquip ullamco velit. Occaecat eu esse ut culpa. Laborum ea proident ut non excepteur.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(42, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b7722a587d02ab501',
  'from': {
    'name': 'Hilda Mcguire',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Cillum laborum amet dolor in magna cupidatat et consectetur sit sunt laborum ullamco.',
  'content': 'Ad quis commodo laboris dolor magna et incididunt excepteur incididunt ipsum consectetur. Dolor ullamco minim anim deserunt et minim culpa commodo qui occaecat. Aliqua incididunt in aliquip aliquip occaecat pariatur enim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(56, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'spam',
  'attachments': ['assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797b6a715195941d5fca',
  'from': {
    'name': 'Rosella Barry',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Anim ullamco ex esse non amet commodo elit dolore proident commodo sint laborum.',
  'content': 'Officia voluptate eu ipsum tempor consequat sint proident nulla officia. Irure duis in esse laborum tempor irure aliqua velit voluptate eu amet ipsum exercitation. Dolor in ex et anim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(14, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797ba6f559e5520d469b',
  'from': {
    'name': 'Moore Hicks',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Consectetur sint nulla laboris exercitation minim eu dolore nisi deserunt dolore minim est qui ad.',
  'content': 'Id enim ea deserunt nostrud eiusmod. Duis veniam enim occaecat duis sint est. Voluptate id enim exercitation culpa commodo cillum ut nisi.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(83, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'social',
  'attachments': []
}, {
  'id': '5aaa797b3dbe1cc198446c67',
  'from': {
    'name': 'Sherry Watkins',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ipsum esse proident sunt nisi.',
  'content': 'Nisi minim consequat deserunt ut exercitation dolore est tempor et. Elit est pariatur id dolor non elit eu veniam quis quis ut est cupidatat. Ut consectetur magna anim ex duis do incididunt voluptate exercitation consequat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(97, 'hours'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797be72ef474ae3c1c2e',
  'from': {
    'name': 'Deleon Hood',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Nostrud dolore culpa esse ut consequat Lorem sit fugiat nulla elit pariatur duis nulla occaecat.',
  'content': 'Fugiat qui laborum Lorem deserunt enim ipsum non ea deserunt ut enim cillum proident eiusmod. Eu eu dolore eu nostrud laborum nulla. Ut sint nostrud excepteur adipisicing nulla sit.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(92, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797bc4e9863760eec156',
  'from': {
    'name': 'Brooke Ballard',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Pariatur proident minim amet deserunt consectetur voluptate esse sunt ea anim sit.',
  'content': 'Eiusmod ullamco adipisicing et dolore et labore anim consectetur sint do ipsum. Occaecat dolor do amet id magna ullamco nulla ipsum tempor. Magna laborum duis id laborum adipisicing sit officia aute elit.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(47, 'hours'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'drafts',
  'attachments': []
}, {
  'id': '5aaa797bddcddb4f5be9406f',
  'from': {
    'name': 'Kayla Yang',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ullamco culpa cupidatat ex ipsum magna cupidatat tempor pariatur consectetur Lorem amet ad est.',
  'content': 'Proident sunt est nisi id do veniam. Enim fugiat in aliquip adipisicing elit. Do adipisicing et ut do non eiusmod sint velit tempor veniam exercitation qui cupidatat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(9, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'trash',
  'attachments': []
}, {
  'id': '5aaa797bdd258edec01d1209',
  'from': {
    'name': 'Margret Harrison',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Esse irure aliquip officia excepteur commodo adipisicing duis elit eiusmod mollit in.',
  'content': 'Eiusmod labore aliquip laboris sint fugiat anim veniam ex. Mollit ipsum commodo in officia velit Lorem elit. Excepteur culpa Lorem aliquip ea.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(89, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797b5ac560fa1c716af0',
  'from': {
    'name': 'Henrietta Ruiz',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Irure consectetur labore laboris reprehenderit ex.',
  'content': 'Est aute incididunt dolore ex est adipisicing sint sit sint non laboris. Sit in ut nostrud est deserunt. Eiusmod pariatur veniam cillum sit quis occaecat irure exercitation officia.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(52, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b33a34a237301a3be',
  'from': {
    'name': 'Augusta Durham',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Culpa nostrud officia occaecat cillum est sint veniam laborum voluptate velit do eu.',
  'content': 'Anim dolor est commodo quis laborum aute velit mollit duis nostrud deserunt et consequat. Eu nostrud est enim adipisicing laboris proident cillum ex. Laborum est consequat veniam laborum sint aute.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(13, 'days'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b3b0f9219343435d7',
  'from': {
    'name': 'Mona Lane',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Dolor esse ea voluptate nulla cupidatat nostrud consectetur laboris nostrud tempor mollit tempor officia excepteur.',
  'content': 'Ut consequat amet exercitation officia elit laboris tempor excepteur. Reprehenderit quis sunt sit elit est mollit in exercitation est excepteur pariatur consectetur elit minim. Consequat aute deserunt officia nostrud irure esse aliqua exercitation ea non.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'days'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b4e446972ae0883c6',
  'from': {
    'name': 'Mann Silva',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sint sint enim adipisicing est.',
  'content': 'Cupidatat dolore nulla ex proident magna cupidatat aliquip amet quis ut minim consectetur reprehenderit. Occaecat proident exercitation sit officia deserunt et. Adipisicing laborum mollit quis enim nostrud duis magna ea nostrud aliquip ipsum irure.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'drafts',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797bb8945e71fccd04ad',
  'from': {
    'name': 'Mills Sutton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Occaecat eiusmod magna aute ipsum tempor voluptate enim sunt.',
  'content': 'Occaecat mollit veniam aute magna dolor excepteur culpa. Elit commodo ipsum incididunt non officia sit reprehenderit non in sit. Mollit irure cupidatat esse ex ex.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(28, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'promotions',
  'attachments': []
}, {
  'id': '5aaa797bd679c024d769ba85',
  'from': {
    'name': 'Helena Thornton',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ullamco magna sunt ad consectetur duis nostrud do ex cupidatat dolore culpa labore.',
  'content': 'Deserunt est fugiat elit eiusmod adipisicing officia. Ad exercitation occaecat consectetur labore reprehenderit commodo. Dolore irure ad do commodo anim.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(78, 'hours'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797b2c6a1d9da11159b2',
  'from': {
    'name': 'Ashley Salas',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Et ex commodo enim aliqua non nisi esse sunt ipsum in incididunt do.',
  'content': 'Commodo sint irure fugiat laboris eu deserunt anim occaecat aute commodo pariatur. Amet voluptate ex mollit incididunt duis consequat cupidatat cupidatat laborum officia nisi culpa sit. Aliqua non commodo consectetur adipisicing.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'social',
  'attachments': []
}, {
  'id': '5aaa797b9631e2dd8502088d',
  'from': {
    'name': 'Alana Pope',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Officia mollit irure id sint voluptate et enim esse sint minim in fugiat.',
  'content': 'Ipsum incididunt quis nisi aliqua eiusmod quis tempor. Consectetur reprehenderit dolor excepteur irure mollit consectetur cupidatat. Laboris reprehenderit Lorem irure anim cillum et.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(12, 'minutes'),
  'read': true,
  'starred': true,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'trash',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797bcba2d81d66e65b57',
  'from': {
    'name': 'Dollie Bridges',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Ipsum minim elit duis officia aute anim magna mollit duis quis.',
  'content': 'Ex deserunt ut officia do. Lorem ullamco aute consectetur minim culpa. Ea incididunt dolore nulla excepteur nulla qui exercitation sit laborum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(95, 'days'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Business',
    color: '#3F51B5'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797bae3fd8e713e90f4f',
  'from': {
    'name': 'Dillon Bright',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Consectetur ipsum dolor ullamco ut exercitation aliqua labore do ea ea dolore irure.',
  'content': 'Sunt nisi consequat reprehenderit ullamco ut consequat laboris laborum laboris magna irure culpa. Nisi nisi velit ut pariatur eiusmod velit consequat elit mollit laborum exercitation sunt. Excepteur magna et est enim deserunt nostrud consequat nisi quis ad Lorem officia eu cupidatat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'minutes'),
  'read': false,
  'starred': true,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b444d88ea82d91a29',
  'from': {
    'name': 'Emilia Robles',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Elit est qui laborum exercitation labore pariatur dolore commodo enim laboris enim ea.',
  'content': 'Laboris non est veniam incididunt. Culpa excepteur est aliquip amet duis occaecat amet aute aliqua. Amet ad cillum fugiat adipisicing consequat elit aliqua.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(5, 'weeks'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'social',
  'attachments': ['assets/img/attachments/3.jpg', 'assets/img/attachments/3.jpg']
}, {
  'id': '5aaa797b5c321eb72721a6e0',
  'from': {
    'name': 'Ashley Mcdonald',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Do mollit consequat adipisicing sunt laborum proident labore.',
  'content': 'Laborum incididunt quis ullamco est ut. Elit proident dolor id voluptate sit. Ad Lorem dolor et amet deserunt eiusmod sunt ut in.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(74, 'days'),
  'read': false,
  'starred': true,
  'labels': [],
  'group': 'promotions',
  'attachments': ['assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797baab617ae8261db15',
  'from': {
    'name': 'Sims Donovan',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Laboris exercitation ea do culpa aute non id nostrud dolor laborum duis eiusmod.',
  'content': 'Fugiat non eu sunt do et velit ipsum enim excepteur aute adipisicing pariatur pariatur. Cupidatat irure veniam enim eiusmod. Fugiat laborum culpa labore in culpa exercitation reprehenderit laborum cupidatat reprehenderit ad laborum.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(36, 'minutes'),
  'read': true,
  'starred': false,
  'labels': [{
    name: 'Fun',
    color: '#9C27B0'
  }],
  'group': 'primary',
  'attachments': []
}, {
  'id': '5aaa797b003df0c30819f2d9',
  'from': {
    'name': 'Lolita Pearson',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Occaecat consectetur voluptate exercitation ullamco fugiat exercitation id sit in eu voluptate.',
  'content': 'Ut dolore mollit nulla nulla sint. Enim proident quis cillum cupidatat reprehenderit minim sunt voluptate. Fugiat ex dolore ullamco anim in aliqua est labore irure eiusmod sunt sint.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(68, 'days'),
  'read': true,
  'starred': true,
  'labels': [],
  'group': 'social',
  'attachments': []
}, {
  'id': '5aaa797b208c2ea735ab7793',
  'from': {
    'name': 'Patel Herman',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Sunt quis excepteur magna voluptate cupidatat nostrud ad do ut reprehenderit est.',
  'content': 'Anim quis sint labore in ad amet magna sit et. Adipisicing amet proident occaecat et adipisicing consectetur ullamco est tempor. Voluptate irure tempor pariatur magna nostrud officia mollit amet sint est.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(50, 'hours'),
  'read': true,
  'starred': true,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/5.jpg']
}, {
  'id': '5aaa797b03b5b5476d8d1ea5',
  'from': {
    'name': 'Montoya Franks',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Nulla aute excepteur labore nostrud dolor.',
  'content': 'Ex sint incididunt excepteur irure nisi in aute. Lorem do id ut et cillum laborum eu occaecat cillum nisi laboris. Enim consectetur anim mollit minim nulla minim mollit laborum labore enim adipisicing enim eiusmod aliqua.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(70, 'minutes'),
  'read': false,
  'starred': true,
  'labels': [],
  'group': 'spam',
  'attachments': ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797b59fafe52cc3e672b',
  'from': {
    'name': 'Leona Cruz',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Voluptate dolore minim eiusmod Lorem aliquip consequat consequat id non minim nisi aliqua commodo esse.',
  'content': 'Aliquip exercitation qui id elit esse voluptate eu laborum ullamco laboris nulla mollit laboris. Duis veniam excepteur sit nostrud sint nulla. Do tempor ea fugiat eu dolor est tempor dolore id ad laborum officia.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(41, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/4.jpg']
}, {
  'id': '5aaa797b7d66917b33161398',
  'from': {
    'name': 'Lakeisha Hawkins',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Elit aute nostrud culpa nisi esse aliquip.',
  'content': 'Laboris ut dolore exercitation ipsum est cillum duis non commodo reprehenderit aute nisi. Ut laborum dolore ex nulla officia ullamco quis ex ipsum. Do exercitation cillum nulla laborum cupidatat officia fugiat exercitation occaecat cupidatat proident esse incididunt consequat.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(25, 'weeks'),
  'read': true,
  'starred': true,
  'labels': [],
  'group': 'promotions',
  'attachments': []
}, {
  'id': '5aaa797b3f628c5735462b01',
  'from': {
    'name': 'Trevino Castaneda',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Anim pariatur amet qui tempor aliquip dolore ut nostrud mollit deserunt esse.',
  'content': 'Consequat aliqua aliquip quis Lorem magna ea occaecat amet consectetur sunt ut incididunt nostrud. Ipsum id nostrud sint officia et in. Lorem proident incididunt pariatur pariatur aliqua dolor velit qui.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(73, 'hours'),
  'read': true,
  'starred': true,
  'labels': [],
  'group': 'primary',
  'attachments': ['assets/img/attachments/1.jpg']
}, {
  'id': '5aaa797badf3a933c5b770cf',
  'from': {
    'name': 'Gabrielle Goodwin',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Est voluptate quis sint nulla cupidatat voluptate irure.',
  'content': 'Pariatur ipsum irure officia anim non irure aliqua cillum aute excepteur ullamco. Voluptate dolor id nostrud dolore reprehenderit fugiat ipsum mollit culpa ex. Minim commodo nulla sunt elit id do eiusmod.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'weeks'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'primary',
  'attachments': []
}, {
  'id': '5aaa797befb33e435c8becfc',
  'from': {
    'name': 'Reese Guthrie',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Cupidatat nostrud dolore tempor sunt nisi consequat duis quis minim fugiat officia sunt eiusmod consequat.',
  'content': 'Anim esse excepteur mollit irure laboris mollit non ipsum dolor elit. Cupidatat adipisicing ad laborum ea est laborum id do quis. Elit minim exercitation commodo non consectetur.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(55, 'minutes'),
  'read': false,
  'starred': false,
  'labels': [{
    name: 'Project X',
    color: '#03A9F4'
  }, {
    name: 'Priority',
    color: '#f44336'
  }],
  'group': 'primary',
  'attachments': ['assets/img/attachments/2.jpg']
}, {
  'id': '5aaa797bb363ee213dde3ad0',
  'from': {
    'name': 'Albert Irwin',
    'mail': 'demo@demomail.com'
  },
  'to': {
    'name': 'David Smith',
    'mail': 'davidsmith@demomail.com'
  },
  'subject': 'Laboris do mollit deserunt et laborum et enim.',
  'content': 'Aute enim et incididunt irure consequat fugiat laborum. Aute magna qui do voluptate cillum. Nostrud deserunt cupidatat reprehenderit non duis tempor laboris occaecat nulla aliqua deserunt.',
  'when': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(52, 'hours'),
  'read': true,
  'starred': false,
  'labels': [],
  'group': 'social',
  'attachments': ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg']
}].map((email, index) => ({
  ...email,
  index: index + 1 > 20 ? index + 1 - Math.floor(index / 10) * 10 : index + 1
})).sort((a, b) => b.when - a.when);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_inbox_inbox_module_ts.js.map