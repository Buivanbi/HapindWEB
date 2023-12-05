"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_forms_form-wizard_form-wizard_module_ts"],{

/***/ 75418:
/*!***********************************************************************!*\
  !*** ./src/app/pages/forms/form-wizard/form-wizard-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormWizardRoutingModule: () => (/* binding */ FormWizardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-wizard.component */ 43878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _form_wizard_component__WEBPACK_IMPORTED_MODULE_0__.FormWizardComponent
}];
class FormWizardRoutingModule {
  static #_ = this.ɵfac = function FormWizardRoutingModule_Factory(t) {
    return new (t || FormWizardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FormWizardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormWizardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 43878:
/*!******************************************************************!*\
  !*** ./src/app/pages/forms/form-wizard/form-wizard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormWizardComponent: () => (/* binding */ FormWizardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _fury_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/animations/scale-in.animation */ 58353);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 49409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_title_title_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/title/title.directive */ 13605);
/* harmony import */ var _fury_shared_page_page_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/page/page.directive */ 73857);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 86272);



















function FormWizardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Create Account");
  }
}
function FormWizardComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r18);
  }
}
function FormWizardComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Select a Password");
  }
}
function FormWizardComponent_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_65_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_66_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.hidePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_73_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.hidePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Confirm Creation");
  }
}
function FormWizardComponent_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Create Account");
  }
}
function FormWizardComponent_mat_option_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r27);
  }
}
function FormWizardComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Select a Password");
  }
}
function FormWizardComponent_button_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_155_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_156_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.hidePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_163_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.showPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_button_164_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_button_164_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.hidePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FormWizardComponent_ng_template_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Confirm Creation");
  }
}
class FormWizardComponent {
  constructor(fb, cd, snackbar) {
    this.fb = fb;
    this.cd = cd;
    this.snackbar = snackbar;
    this.phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];
    this.passwordInputType = 'password';
  }
  ngOnInit() {
    /**
     * Horizontal Stepper
     * @type {FormGroup}
     */
    this.accountFormGroup = this.fb.group({
      username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      phonePrefix: [this.phonePrefixOptions[3]],
      phone: []
    });
    this.passwordFormGroup = this.fb.group({
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)])],
      passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.confirmFormGroup = this.fb.group({
      terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue]
    });
    /**
     * Vertical Stepper
     * @type {FormGroup}
     */
    this.verticalAccountFormGroup = this.fb.group({
      username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      phonePrefix: [this.phonePrefixOptions[3]],
      phone: []
    });
    this.verticalPasswordFormGroup = this.fb.group({
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)])],
      passwordConfirm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.verticalConfirmFormGroup = this.fb.group({
      terms: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue]
    });
  }
  showPassword() {
    this.passwordInputType = 'text';
    this.cd.markForCheck();
  }
  hidePassword() {
    this.passwordInputType = 'password';
    this.cd.markForCheck();
  }
  submit() {
    this.snackbar.open('Hooray! You successfully created your account.', null, {
      duration: 5000
    });
  }
  static #_ = this.ɵfac = function FormWizardComponent_Factory(t) {
    return new (t || FormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FormWizardComponent,
    selectors: [["fury-form-wizard"]],
    decls: 187,
    vars: 40,
    consts: [[1, "title"], ["fxLayout", "column", "fxLayoutAlign", "start center"], [1, "card"], [3, "linear"], ["stepper", "matHorizontalStepper"], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "heading"], [1, "subheading"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "content"], ["fxFlex", "auto"], ["formControlName", "username", "matInput", "", "required", ""], ["formControlName", "name", "matInput", "", "required", ""], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["formControlName", "email", "matInput", "", "required", ""], ["align", "end"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutGap", "8px"], ["fxFlex", "1 1 auto"], ["formControlName", "phonePrefix"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "2 1 auto"], ["formControlName", "phone", "matInput", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "8px", 1, "actions"], ["color", "primary", "mat-button", "", "type", "button", 3, "disabled", "click"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click", 4, "ngIf"], ["formControlName", "passwordConfirm", "matInput", "", "required", "", 3, "type"], ["color", "primary", "mat-button", "", "matStepperPrevious", "", "type", "button"], ["formControlName", "terms", 1, "checkbox"], ["color", "primary", "mat-raised-button", "", "matStepperNext", "", 3, "disabled", "click"], ["verticalStepper", "matVerticalStepper"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"]],
    template: function FormWizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fury-page")(1, "fury-title", 0)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "mat-horizontal-stepper", 3, 4)(10, "mat-step", 5)(11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FormWizardComponent_ng_template_12_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Set up your account for testing purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10)(18, "mat-form-field", 11)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Account Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "This will be your unique login name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 11)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "How may we call you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14)(31, "mat-form-field", 11)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "example@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 17)(38, "mat-form-field", 18)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, FormWizardComponent_mat_option_42_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 21)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 22)(47, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 23)(49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "RESET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-step", 5)(54, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, FormWizardComponent_ng_template_55_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Select a Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Enter your password you will use to log in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 10)(61, "mat-form-field", 11)(62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, FormWizardComponent_button_65_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, FormWizardComponent_button_66_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Your password should be atleast 6 characters long.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-form-field", 11)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, FormWizardComponent_button_73_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, FormWizardComponent_button_74_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Please type in your password again.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 23)(78, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-step", 5)(83, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, FormWizardComponent_ng_template_84_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "You're almost there!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "To finish registration, accept our terms of service and click on \"Create Account\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 10)(90, "mat-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, " I agree to the terms of service and the usual stuff. * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 23)(93, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_95_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, " CREATE ACCOUNT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 2)(98, "mat-vertical-stepper", 3, 32)(100, "mat-step", 5)(101, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, FormWizardComponent_ng_template_102_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Set up your account for testing purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 10)(108, "mat-form-field", 11)(109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Account Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "This will be your unique login name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "mat-form-field", 11)(115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](117, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "How may we call you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 14)(121, "mat-form-field", 11)(122, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "example@example.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 17)(128, "mat-form-field", 18)(129, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, FormWizardComponent_mat_option_132_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "mat-form-field", 21)(134, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "input", 22)(137, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "div", 23)(139, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_139_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](99);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r9.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "RESET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "mat-step", 5)(144, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, FormWizardComponent_ng_template_145_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Select a Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "Enter your password you will use to log in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 10)(151, "mat-form-field", 11)(152, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](155, FormWizardComponent_button_155_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, FormWizardComponent_button_156_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Your password should be atleast 6 characters long.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "mat-form-field", 11)(160, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](162, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](163, FormWizardComponent_button_163_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, FormWizardComponent_button_164_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Please type in your password again.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 23)(168, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "mat-step", 5)(173, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](174, FormWizardComponent_ng_template_174_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, "You're almost there!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "To finish registration, accept our terms of service and click on \"Create Account\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 10)(180, "mat-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, " I agree to the terms of service and the usual stuff. * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 23)(183, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "PREVIOUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_185_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](186, " CREATE ACCOUNT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@scaleIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInRight", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.accountFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.accountFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.phonePrefixOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.accountFormGroup.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.accountFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.passwordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.passwordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.passwordFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.confirmFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.confirmFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.confirmFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.verticalAccountFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.verticalAccountFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.phonePrefixOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.verticalAccountFormGroup.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.verticalAccountFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.verticalPasswordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.verticalPasswordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordInputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordInputType === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.verticalPasswordFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.verticalConfirmFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.verticalConfirmFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.verticalConfirmFormGroup.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fury_shared_title_title_directive__WEBPACK_IMPORTED_MODULE_3__.TitleDirective, _fury_shared_page_page_directive__WEBPACK_IMPORTED_MODULE_4__.PageDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperPrevious],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  background: url(\"/assets/img/backgrounds/form-wizard.jpg\");\n  background-size: cover;\n  display: block;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 24px;\n  max-width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.card[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n.card[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  font: var(--font-subheading-1);\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 24px 8px 0;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3JtLXdpemFyZC9mb3JtLXdpemFyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGhlbWUvX2Nzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3RHQTtFQUNFLDBEQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBZUY7O0FBWkE7RUFDRSxZQUFBO0FBZUY7O0FBWkE7RUFDRSxZREhRO0VDSVIsZUFBQTtFQUNBLGtCREpjO0VDS2QsZ0JBQUE7RUM0REUsNEhBQUE7QUQ1Q0o7QUFaRTtFQUNFLHVCQUFBO0FBY0o7QUFYRTtFQUNFLDhCQUFBO0FBYUo7QUFWRTtFQUNFLGNBQUE7QUFZSjtBQVZJO0VBQ0UsZ0JBQUE7QUFZTjtBQVJFO0VBQ0UsZ0JEM0JNO0VDNEJOLG1CQUFBO0FBVUo7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlEbENRO0VDbUNSLFdEbkNRO0VDb0NSLFlBQUE7QUFTRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XG5cbi8qKlxuICBHZW5lcmFsXG4gKi9cblxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xuJGVsZXZhdGlvbjogMjtcblxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XG5cbiRzcGFjaW5nOiAyNHB4O1xuJGJvcmRlci1yYWRpdXM6IDhweDtcblxuJHBhZGRpbmcteGw6IDQ4cHg7XG4kcGFkZGluZy1sZzogMzJweDtcbiRwYWRkaW5nOiAyNHB4O1xuJHBhZGRpbmctbWQ6IDE2cHg7XG4kcGFkZGluZy1zbTogMTJweDtcbiRwYWRkaW5nLXhzOiA4cHg7XG4kcGFkZGluZy14eHM6IDRweDtcbiRwYWRkaW5nLTA6IDBweDtcblxuJHBhZGRpbmdzOiAoXG4gICctMCc6ICRwYWRkaW5nLTAsXG4gIC14eHM6ICRwYWRkaW5nLXh4cyxcbiAgLXhzOiAkcGFkZGluZy14cyxcbiAgLXNtOiAkcGFkZGluZy1zbSxcbiAgLW1kOiAkcGFkZGluZy1tZCxcbiAgJyc6ICRwYWRkaW5nLFxuICAtbGc6ICRwYWRkaW5nLWxnLFxuICAteGw6ICRwYWRkaW5nLXhsLFxuKTtcblxuJGljb24tc2l6ZXM6IChcbiAgLXhzOiAxNHB4LFxuICAtc206IDE4cHgsXG4gIC1tZDogMjBweCxcbiAgJyc6IDI0cHgsXG4gIC1sZzogMjhweCxcbiAgLXhsOiAzMnB4XG4pO1xuXG4vKipcbiAgQ2FyZFxuICovXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuXG4vKipcbiAgVG9vbGJhclxuICovXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9vbGJhci16LWluZGV4OiA1MDA7XG4kdG9vbGJhci1idXR0b24td2lkdGg6IDY0cHg7XG5cbi8qKlxuICBGb290ZXJcbiAqL1xuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7XG4kZm9vdGVyLXotaW5kZXg6IDEwMDtcblxuLy8gU2lkZW5hdlxuJHNpZGVuYXYtd2lkdGg6IDI4MHB4O1xuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xuJHNpZGVuYXYtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLy8gU2lkZW5hdiBJdGVtXG5cbiRzaWRlbmF2LWl0ZW0taWNvbi1zaXplOiAyMnB4O1xuXG4kc2lkZW5hdi1pdGVtLWhlaWdodDogNDRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0OiAyNHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xuJHNpZGVuYXYtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMTogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMzogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWw0OiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDMgKyA4cHg7XG5cbi8vIFNpZGVuYXYgd2lkdGggY2FuIGJlIGNoYW5nZWQgaW4gc3JjL0BmdXJ5L2FuaW1hdGlvbnMvc2lkZW5hdi5hbmltYXRpb24udHNcbiRzaWRlbmF2LXotaW5kZXg6IDcwMDtcblxuJGJsaW5rLXNjcm9sbGJhci13aWR0aDogMTJweDtcblxuLy8gUGFnZSBMYXlvdXRcbiRwYWdlLWxheW91dC1oZWlnaHQ6IDIwMHB4O1xuJHBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8qKlxuICBNaXhpbnNcbiAqL1xuJG1lZGlhLXhzOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknO1xuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuJG1lZGlhLXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSc7XG5AbWl4aW4gbWVkaWEtc20ge1xuICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAgSW5ib3hcbiAqL1xuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kaW5ib3gtc2VhcmNoYmFyLWhlaWdodDogNTRweDtcbiRpbmJveC1zdGFyLWNvbG9yOiAjZmZjMTA3O1xuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XG5AdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuQGltcG9ydCBcInZhclwiO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvZm9ybS13aXphcmQuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAkc3BhY2luZztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDEwKTtcblxuICAuaGVhZGluZyB7XG4gICAgZm9udDogdmFyKC0tZm9udC10aXRsZSk7XG4gIH1cblxuICAuc3ViaGVhZGluZyB7XG4gICAgZm9udDogdmFyKC0tZm9udC1zdWJoZWFkaW5nLTEpO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogbWF0aC5kaXYoJHNwYWNpbmcsIDIpIDA7XG5cbiAgICAuY2hlY2tib3gge1xuICAgICAgbWFyZ2luLXRvcDogbWF0aC5kaXYoJHNwYWNpbmcsIDIpO1xuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAkc3BhY2luZztcbiAgICBwYWRkaW5nOiAkc3BhY2luZyBtYXRoLmRpdigkc3BhY2luZywgMykgMDtcbiAgfVxufVxuXG4uY29weXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206ICRzcGFjaW5nO1xuICByaWdodDogJHNwYWNpbmc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG4vL1xuXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4vZ3NzJztcblxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGRlY2xhcmF0aW9uc1xuLy8vIHRoYXQgdXNlIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucy4gVGhpc1xuLy8vIGFkZHMgZmFsbGJhY2sgc3VwcG9ydCBmb3Igb2xkZXIgYnJvd3NlcnMgc3VjaCBhcyBJRTExIHRoYXQgZG8gbm90IHN1cHBvcnRcbi8vLyB0aGVzZSBmZWF0dXJlcyBhdCB0aGUgY29zdCBvZiBhZGRpdGlvbmFsIENTUy4gU2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2UgdG9cbi8vLyBkaXNhYmxlIGdlbmVyYXRpbmcgZmFsbGJhY2sgZGVjbGFyYXRpb25zLlxuJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBXcml0ZXMgYSBDU1MgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uIFRoaXMgbWl4aW4gaXMgdXNlZCB0aHJvdWdob3V0IHRoZVxuLy8vIHRoZW1lIHBhY2thZ2UgZm9yIGNvbnNpc3RlbmN5IGZvciBkeW5hbWljYWxseSBzZXR0aW5nIENTUyBwcm9wZXJ0eSB2YWx1ZXMuXG4vLy9cbi8vLyBUaGlzIG1peGluIG1heSBvcHRpb25hbGx5IHRha2UgYSBmYWxsYmFjayB2YWx1ZS4gRm9yIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2hcbi8vLyBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zIGxpa2UgbWluIGFuZCBtYXgsIGEgZmFsbGJhY2sgdmFsdWUgaXNcbi8vLyByZWNvbW1lbmRlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzLlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgb2YgdGhlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBDU1MgZGVjbGFyYXRpb24uIFRoZSB2YWx1ZSBzaG91bGQgYmVcbi8vLyAgICAgcmVzb2x2ZWQgYnkgb3RoZXIgdGhlbWUgZnVuY3Rpb25zIGZpcnN0IChpLmUuIGN1c3RvbSBwcm9wZXJ0eSBNYXBzIGFuZFxuLy8vICAgICBNYXRlcmlhbCB0aGVtZSBrZXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgbWl4aW4pLiBJZiB0aGUgdmFsdWUgaXNcbi8vLyAgICAgbnVsbCwgbm8gZGVjbGFyYXRpb25zIHdpbGwgYmUgZW1pdHRlZC5cbi8vLyBAcGFyYW0geyp9ICRmYWxsYmFjayAtIEFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGZvciBvbGRlciBicm93c2Vycy4gSWZcbi8vLyAgICAgcHJvdmlkZWQsIGEgc2Vjb25kIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoZVxuLy8vICAgICBtYWluIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gQW4gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBhZGQuXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gSWYgdHJ1ZSwgYWRkIGAhaW1wb3J0YW50YCB0byB0aGUgZGVjbGFyYXRpb24uXG5AbWl4aW4gZGVjbGFyYXRpb24oXG4gICRwcm9wZXJ0eSxcbiAgJHZhbHVlLFxuICAkZmFsbGJhY2stdmFsdWU6IG51bGwsXG4gICRnc3M6ICgpLFxuICAkaW1wb3J0YW50OiBmYWxzZVxuKSB7XG4gIC8vIE5vcm1hbGx5IHNldHRpbmcgYSBudWxsIHZhbHVlIHRvIGEgcHJvcGVydHkgd2lsbCBub3QgZW1pdCBDU1MsIHNvIG1peGluc1xuICAvLyB3b3VsZG4ndCBuZWVkIHRvIGNoZWNrIHRoaXMuIEhvd2V2ZXIsIFNhc3Mgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAgLy8gaW50ZXJwb2xhdGVkIHByb3BlcnR5IGlzIGEgY3VzdG9tIHByb3BlcnR5LlxuICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyAhaW1wb3J0YW50JywgJycpO1xuXG4gICAgQGlmICRmYWxsYmFjay12YWx1ZSBhbmQgJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFjay12YWx1ZX0gI3skaW1wb3J0YW50LXJ1bGV9O1xuXG4gICAgICAvLyBBZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9ucy5cbiAgICAgICRnc3M6IG1hcC5tZXJnZShcbiAgICAgICAgJGdzcyxcbiAgICAgICAgKFxuICAgICAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX0jeyRpbXBvcnRhbnQtcnVsZX07XG4gIH1cbn1cblxuLy8vIFVucGFja3Mgc2hvcnRoYW5kIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXMgKGkuZS4gbGlzdHMgb2YgMS0zIHZhbHVlcykuXG4vLy8gSWYgYSBsaXN0IG9mIDQgdmFsdWVzIGlzIGdpdmVuLCBpdCBpcyByZXR1cm5lZCBhcy1pcy5cbi8vL1xuLy8vIEV4YW1wbGVzOlxuLy8vXG4vLy8gdW5wYWNrLXZhbHVlKDRweCkgPT4gNHB4IDRweCA0cHggNHB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHgpID0+IDRweCAycHggNHB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDJweCkgPT4gNHB4IDJweCAycHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMCAycHgpID0+IDRweCAycHggMCAycHhcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyIHwgTWFwIHwgTGlzdH0gJHZhbHVlIC0gTGlzdCBvZiAxIHRvIDQgdmFsdWUgbnVtYmVycy5cbi8vLyBAcmV0dXJuIHtMaXN0fSBhIExpc3Qgb2YgNCB2YWx1ZSBudW1iZXJzLlxuQGZ1bmN0aW9uIHVucGFjay12YWx1ZSgkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09ICdtYXAnIG9yIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMSB7XG4gICAgQHJldHVybiAkdmFsdWUgJHZhbHVlICR2YWx1ZSAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSA0IHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDMge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMylcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAyIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDEpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGVycm9yIFwiSW52YWxpZCBDU1MgcHJvcGVydHkgdmFsdWU6ICcjeyR2YWx1ZX0nIGlzIG1vcmUgdGhhbiA0IHZhbHVlc1wiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUpAnimation, _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInRightAnimation, _fury_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_1__.scaleInAnimation]
    }
  });
}


/***/ }),

/***/ 79737:
/*!***************************************************************!*\
  !*** ./src/app/pages/forms/form-wizard/form-wizard.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormWizardModule: () => (/* binding */ FormWizardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-wizard-routing.module */ 75418);
/* harmony import */ var _form_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-wizard.component */ 43878);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class FormWizardModule {
  static #_ = this.ɵfac = function FormWizardModule_Factory(t) {
    return new (t || FormWizardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: FormWizardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormWizardRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FormWizardModule, {
    declarations: [_form_wizard_component__WEBPACK_IMPORTED_MODULE_2__.FormWizardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormWizardRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forms_form-wizard_form-wizard_module_ts.js.map