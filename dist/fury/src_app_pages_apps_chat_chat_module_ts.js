"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_apps_chat_chat_module_ts"],{

/***/ 63655:
/*!********************************************************!*\
  !*** ./src/app/pages/apps/chat/chat-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatRoutingModule: () => (/* binding */ ChatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component */ 91738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
  data: {
    scrollDisabled: true
  }
}];
class ChatRoutingModule {
  static #_ = this.ɵfac = function ChatRoutingModule_Factory(t) {
    return new (t || ChatRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ChatRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 91738:
/*!***************************************************!*\
  !*** ./src/app/pages/apps/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/sortBy */ 83233);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);
/* harmony import */ var _chat_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.demo */ 97235);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var _fury_shared_component_destroyed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/component-destroyed */ 67327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 40153);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 13228);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 31465);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ 47520);























const _c0 = ["messagesScroll"];
function ChatComponent_mat_list_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_mat_list_item_14_Template_mat_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const chat_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.setActiveChat(chat_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", chat_r6.picture, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](chat_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", chat_r6.lastMessage, "");
  }
}
function ChatComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r10.activeChat.picture, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r9.message);
  }
}
function ChatComponent_div_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r9.message);
  }
}
function ChatComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChatComponent_div_37_div_1_Template, 4, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChatComponent_div_37_div_2_Template, 4, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", message_r9.who);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "partner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "me");
  }
}
class ChatComponent {
  constructor(cd, mediaObserver) {
    this.cd = cd;
    this.mediaObserver = mediaObserver;
    this.drawerOpen = true;
    this.drawerMode = 'side';
  }
  ngOnInit() {
    this.replyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl();
    this.chats = (0,lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_6__["default"])(_chat_demo__WEBPACK_IMPORTED_MODULE_2__.chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];
    this.mediaObserver.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.mediaObserver.isActive('lt-md')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)((0,_fury_shared_component_destroyed__WEBPACK_IMPORTED_MODULE_3__.componentDestroyed)(this))).subscribe(isLowerThanMedium => isLowerThanMedium ? this.hideDrawer() : this.showDrawer());
  }
  showDrawer() {
    this.drawerOpen = true;
    this.drawerMode = 'side';
  }
  hideDrawer() {
    this.drawerOpen = false;
    this.drawerMode = 'over';
  }
  setActiveChat(chat) {
    this.activeChat = chat;
    if (this.drawerMode === 'over') {
      this.drawerOpen = false;
    }
  }
  send() {
    if (this.replyCtrl.value) {
      this.chats[0].messages.push({
        message: this.replyCtrl.value,
        when: moment__WEBPACK_IMPORTED_MODULE_0__(),
        who: 'me'
      });
      this.replyCtrl.reset();
      this.cd.markForCheck();
      setTimeout(() => {
        this.messagesScroll.scrollbarRef.getScrollElement().scrollTo(0, this.messagesScroll.scrollbarRef.getScrollElement().scrollHeight);
      }, 10);
    }
  }
  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function ChatComponent_Factory(t) {
    return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.MediaObserver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ChatComponent,
    selectors: [["fury-chat"]],
    viewQuery: function ChatComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__.ScrollbarComponent);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messagesScroll = _t.first);
      }
    },
    decls: 87,
    vars: 10,
    consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "chat"], [1, "header", "elevation"], ["fxFlex", "auto", 1, "chat-drawer-container", "elevation", "route-animations-elements"], [1, "chat-drawer", 3, "opened", "mode"], ["drawer", ""], ["fxLayout", "column", 2, "height", "100%"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "toolbar", "app-bar", "border-bottom"], ["src", "assets/img/avatars/1.jpg", 1, "avatar"], ["fxFlex", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["fxFlex", "auto"], [1, "contacts"], ["class", "contact", "matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "chat-drawer-content"], ["fxLayout", "row", "fxFlex", "none", "fxLayoutAlign", "space-between center", 1, "toolbar", "app-bar", "border-bottom"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "12px", 1, "current-contact"], ["type", "button", "mat-icon-button", "", "fxHide.gt-sm", "", 3, "click"], [1, "avatar", 3, "src"], ["fxLayout", "column"], [1, "name"], [1, "status", "secondary-text"], ["fxLayout", "row", "fxLayoutAlign", "end center", 1, "actions"], ["mat-icon-button", ""], ["fxFlex", "", 1, "messages-container", "background"], ["messagesScroll", ""], [1, "messages"], ["class", "chat-message", "fxLayout", "column", "fxLayoutAlign", "end start", 3, "ngSwitch", 4, "ngFor", "ngForOf"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "24px", 1, "reply", "fury-form-field", "fury-form-field-remove-hint-bar"], ["appearance", "fill", "fxFlex", "", 1, "reply-field"], ["matInput", "", 3, "formControl", "keyup.enter"], ["matSuffix", "", "mat-icon-button", "", "color", "primary", 3, "disabled", "click"], ["xPosition", "before"], ["userMenu", "matMenu"], ["mat-menu-item", ""], ["chatMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["matRipple", "", 1, "contact", 3, "click"], ["matListItemAvatar", "", 3, "src"], ["matListItemTitle", "", 1, "name"], ["matListItemLine", "", 1, "message", "secondary-text"], ["fxLayout", "column", "fxLayoutAlign", "end start", 1, "chat-message", 3, "ngSwitch"], ["class", "partner", "fxFlexAlign", "start", "fxLayout", "row", "fxLayoutAlign", "start start", 4, "ngSwitchCase"], ["class", "me", "fxFlexAlign", "end", "fxLayout", "row", "fxLayoutAlign", "end start", 4, "ngSwitchCase"], ["fxFlexAlign", "start", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "partner"], [1, "message", "card"], ["fxFlexAlign", "end", "fxLayout", "row", "fxLayoutAlign", "end start", 1, "me"], [1, "message", "background-primary", "color-primary-contrast"]],
    template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-drawer-container", 2)(3, "mat-drawer", 3, 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 9)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "mat-nav-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ChatComponent_mat_list_item_14_Template, 6, 3, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-drawer-content", 13)(16, "div", 14)(17, "div", 15)(18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.open());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18)(23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21)(28, "button", 22)(29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 9)(32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "fury-scrollbar", 23, 24)(36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ChatComponent_div_37_Template, 3, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 27)(39, "mat-form-field", 28)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Write your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function ChatComponent_Template_input_keyup_enter_42_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_43_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-menu", 31, 32)(48, "button", 33)(49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 33)(54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 33)(59, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 33)(65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-menu", null, 34)(71, "button", 33)(72, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 33)(77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "volume_mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Mute Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_82_listener() {
          return ctx.clearMessages(ctx.activeChat);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "clear_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Clear Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("opened", ctx.drawerOpen)("mode", ctx.drawerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.activeChat.picture, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.activeChat.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chats[0].messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.replyCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.replyCtrl.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemAvatar, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListItemTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatDrawerContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultFlexAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__.DefaultShowHideDirective, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__.ScrollbarComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.chat[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.chat[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 35%;\n  max-height: 35%;\n  background: #fff url(\"/assets/img/backgrounds/chat.png\");\n  background-size: cover;\n  position: absolute;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  max-width: 80%;\n  margin-top: 5.8333333333%;\n  max-height: calc(100% - 17.5%);\n  border-radius: 8px;\n}\n@media screen and (max-width: 599px) {\n  .chat[_ngcontent-%COMP%]   .chat-drawer-container[_ngcontent-%COMP%] {\n    max-width: 95%;\n  }\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 280px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n@media screen and (max-width: 599px) {\n  .chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font: var(--font-subheading-1);\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font: var(--font-body-1);\n  line-height: 1.25;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%] {\n  min-height: 0;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  padding: 8px;\n  position: relative;\n  box-shadow: 0 0 0 -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n@media screen and (max-width: 599px) {\n  .chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   .reply-field[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9hcHBzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUNwR0E7RUFDRSxZQUFBO0FBYUY7QUFYRTtFQUNFLFdBQUE7RUFDQSxlQVJpQjtFQVNqQixlQVRpQjtFQVVqQix3REFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCRFhZO0FDdUJoQjtBRDBERTtFQzVFQTtJQVNJLGNBQUE7RUFhSjtBQUNGO0FBVkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFZSjtBQVZJO0VBQ0UsWUFoQ2dCO0VBaUNoQixnQkFqQ2dCO0VBa0NoQixnQkFsQ2dCO0VBbUNoQixrQkRyQk87RUNzQlAsbUJEdEJPO0FDa0NiO0FBUk07RUFDRSxrQkFBQTtBQVVSO0FBTEU7RUFDRSxnQkFBQTtBQU9KO0FBTEk7RUFDRSxZQWxEZ0I7RUFtRGhCLGdCQW5EZ0I7RUFvRGhCLGdCQXBEZ0I7RUFxRGhCLGtCRDdDSTtFQzhDSixtQkQ5Q0k7QUNxRFY7QUQ2QkU7RUN6Q0U7SUFRSSxpQkFBQTtJQUNBLGtCQUFBO0VBUU47QUFDRjtBQU5NO0VBQ0UsOEJBQUE7QUFRUjtBQUxNO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQU9SO0FBSEk7RUFDRSxhQUFBO0FBS047QUFGTTtFQUNFLGFEcEVFO0FDd0VWO0FBRlE7RUFDRSxjQUFBO0FBSVY7QUFGVTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJHQUFBO0VBQ0Esa0JENUVJO0FDZ0ZoQjtBQUFZO0VBQ0UsaUJBQUE7QUFFZDtBQUdZO0VBQ0Usa0JBQUE7QUFEZDtBQVFJO0VBQ0Usa0JEaEdJO0VDaUdKLG1CRGpHSTtBQzJGVjtBRFRFO0VDYUU7SUFLSSxpQkFBQTtJQUNBLGtCQUFBO0VBTE47QUFDRjtBQU9NO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUxSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQHVzZSAnc2FzczptYXRoJztcbkBpbXBvcnQgXCJ2YXJcIjtcblxuJGNoYXQtaGVhZGVyLWhlaWdodDogMzUlO1xuJGNoYXQtdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG5cbi5jaGF0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6ICRjaGF0LWhlYWRlci1oZWlnaHQ7XG4gICAgbWF4LWhlaWdodDogJGNoYXQtaGVhZGVyLWhlaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvY2hhdC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5jaGF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiBtYXRoLmRpdigkY2hhdC1oZWFkZXItaGVpZ2h0LCA2KTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAje21hdGguZGl2KCRjaGF0LWhlYWRlci1oZWlnaHQsIDIpfSk7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS14cyB7XG4gICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICB9XG4gIH1cblxuICAuY2hhdC1kcmF3ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjgwcHg7XG5cbiAgICAudG9vbGJhciB7XG4gICAgICBoZWlnaHQ6ICRjaGF0LXRvb2xiYXItaGVpZ2h0O1xuICAgICAgbWluLWhlaWdodDogJGNoYXQtdG9vbGJhci1oZWlnaHQ7XG4gICAgICBtYXgtaGVpZ2h0OiAkY2hhdC10b29sYmFyLWhlaWdodDtcbiAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmctbWQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZy1tZDtcbiAgICB9XG5cbiAgICAuY29udGFjdHMge1xuICAgICAgLmNvbnRhY3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNoYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudG9vbGJhciB7XG4gICAgICBoZWlnaHQ6ICRjaGF0LXRvb2xiYXItaGVpZ2h0O1xuICAgICAgbWluLWhlaWdodDogJGNoYXQtdG9vbGJhci1oZWlnaHQ7XG4gICAgICBtYXgtaGVpZ2h0OiAkY2hhdC10b29sYmFyLWhlaWdodDtcbiAgICAgIHBhZGRpbmctbGVmdDogJHNwYWNpbmc7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2luZztcblxuICAgICAgQGluY2x1ZGUgbWVkaWEteHMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICAgICAgfVxuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQ6IHZhcigtLWZvbnQtc3ViaGVhZGluZy0xKTtcbiAgICAgIH1cblxuICAgICAgLnN0YXR1cyB7XG4gICAgICAgIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgLy8gYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSByZXBlYXQ7XG5cbiAgICAgIC5tZXNzYWdlcyB7XG4gICAgICAgIHBhZGRpbmc6ICRzcGFjaW5nO1xuXG4gICAgICAgIC5jaGF0LW1lc3NhZ2Uge1xuICAgICAgICAgIG1hcmdpbjogbWF0aC5kaXYoJHNwYWNpbmcsIDIpIDA7XG5cbiAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYXJ0bmVyIHtcbiAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lIHtcbiAgICAgICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXBseSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICRzcGFjaW5nO1xuICAgICAgcGFkZGluZy1yaWdodDogJHNwYWNpbmc7XG5cbiAgICAgIEBpbmNsdWRlIG1lZGlhLXhzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBtYXRoLmRpdigkc3BhY2luZywgMyk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICAgIH1cblxuICAgICAgLnJlcGx5LWZpZWxkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuJGhlaWdodF9fY2hhdC1oZWFkZXI6IDE1MHB4O1xuJGhlaWdodF9fY2hhdC10b29sYmFyOiA2NHB4O1xuJGhlaWdodF9fY2hhdC1jb250YWluZXI6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fY2hhdC1oZWFkZXIgLSAkaGVpZ2h0X19jaGF0LXRvb2xiYXJ9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 97235:
/*!**********************************************!*\
  !*** ./src/app/pages/apps/chat/chat.demo.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatDemoData: () => (/* binding */ chatDemoData)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const messages = [{
  message: 'Hey David! How\'s it going?',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(35, 'minutes'),
  who: 'partner'
}, {
  message: 'You wanted to go golfing you remember? What about this weekend?',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(34, 'minutes'),
  who: 'partner'
}, {
  message: 'Hey! I\'m good. Sure, let\'s meet on Saturday at the golf club, okay?',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(28, 'minutes'),
  who: 'me'
}, {
  message: 'Sure thing! I hope we can finally beat our record this time. :)',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(26, 'minutes'),
  who: 'partner'
}, {
  message: 'Awesome! We surely will. ;)',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(22, 'minutes'),
  who: 'me'
}, {
  message: 'See you on Saturday!',
  when: moment__WEBPACK_IMPORTED_MODULE_0__().subtract(21, 'minutes'),
  who: 'me'
}];
let chatDemoData = [{
  'picture': 'assets/img/avatars/13.jpg',
  'name': 'Lawrence Larson',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(170, 'minutes'),
  'lastMessage': 'commodo deserunt enim'
}, {
  'picture': 'assets/img/avatars/10.jpg',
  'name': 'Therese Alvarez',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(371, 'minutes'),
  'lastMessage': 'sunt duis dolor'
}, {
  'picture': 'assets/img/avatars/3.jpg',
  'name': 'Roseann Dejesus',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(410, 'minutes'),
  'lastMessage': 'et duis ex'
}, {
  'picture': 'assets/img/avatars/15.jpg',
  'name': 'Lorena Aguirre',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(239, 'minutes'),
  'lastMessage': 'consectetur dolor ea'
}, {
  'picture': 'assets/img/avatars/18.jpg',
  'name': 'Ayala Martinez',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(534, 'minutes'),
  'lastMessage': 'velit reprehenderit in'
}, {
  'picture': 'assets/img/avatars/10.jpg',
  'name': 'Helene Curtis',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(215, 'minutes'),
  'lastMessage': 'enim aute dolore'
}, {
  'picture': 'assets/img/avatars/20.jpg',
  'name': 'Donovan Vega',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(539, 'minutes'),
  'lastMessage': 'eiusmod aute et'
}, {
  'picture': 'assets/img/avatars/4.jpg',
  'name': 'Frieda Robbins',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(187, 'minutes'),
  'lastMessage': 'officia excepteur elit'
}, {
  'picture': 'assets/img/avatars/20.jpg',
  'name': 'Dolores Rojas',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(30, 'minutes'),
  'lastMessage': 'ad duis ex'
}, {
  'picture': 'assets/img/avatars/16.jpg',
  'name': 'Lila Wade',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(158, 'minutes'),
  'lastMessage': 'in nostrud anim'
}, {
  'picture': 'assets/img/avatars/19.jpg',
  'name': 'Toni Knapp',
  'messages': messages,
  'lastMessageTime': moment__WEBPACK_IMPORTED_MODULE_0__().subtract(288, 'minutes'),
  'lastMessage': 'consectetur id tempor'
}];

/***/ }),

/***/ 31539:
/*!************************************************!*\
  !*** ./src/app/pages/apps/chat/chat.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatModule: () => (/* binding */ ChatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/scrollbar/scrollbar.module */ 31907);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ 63655);
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ 91738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class ChatModule {
  static #_ = this.ɵfac = function ChatModule_Factory(t) {
    return new (t || ChatModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ChatModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChatRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    // Core
    _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__.ScrollbarModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChatModule, {
    declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChatRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    // Core
    _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_1__.ScrollbarModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_chat_chat_module_ts.js.map