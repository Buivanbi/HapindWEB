"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_pages_editor_editor_module_ts"],{

/***/ 89771:
/*!*******************************************************!*\
  !*** ./src/app/pages/editor/editor-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorRoutingModule: () => (/* binding */ EditorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.component */ 19506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
  data: {
    scrollDisabled: true
  }
}];
class EditorRoutingModule {
  static #_ = this.ɵfac = function EditorRoutingModule_Factory(t) {
    return new (t || EditorRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EditorRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 19506:
/*!**************************************************!*\
  !*** ./src/app/pages/editor/editor.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorComponent: () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _fury_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/animations/scale-in.animation */ 58353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ 70945);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);












const _c0 = function () {
  return {
    flex: "1 1 auto"
  };
};
class EditorComponent {
  constructor() {
    this.text = `<h1 class="ql-align-center">Quill Rich Text Editor</h1><p><br></p><p>Quill is a free, <a href="https://github.com/quilljs/quill/" target="_blank">open source</a> WYSIWYG editor built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive <a href="https://quilljs.com/docs/api/" target="_blank">API</a>, it is completely customizable to fit any need.</p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://player.vimeo.com/video/253905163" height="280" width="500"></iframe><p><br></p><h2 class="ql-align-center">Getting Started is Easy</h2><pre class="ql-syntax" spellcheck="false"><span class="hljs-comment">// &lt;link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet"&gt;</span>
<span class="hljs-comment">// &lt;script src="https://cdn.quilljs.com/1.2.6/quill.min.js"&gt;&lt;/script&gt;</span>

<span class="hljs-keyword">var</span> quill = <span class="hljs-keyword">new</span> Quill(<span class="hljs-string">'#editor'</span>, {
  modules: {
    toolbar: <span class="hljs-string">'#toolbar'</span>
  },
  theme: <span class="hljs-string">'snow'</span>
});
</pre>`;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.text);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function EditorComponent_Factory(t) {
    return new (t || EditorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: EditorComponent,
    selectors: [["fury-editor"]],
    decls: 5,
    vars: 4,
    consts: [["fxLayout", "column", "mode", "card", 1, "editor"], ["current", "WYSIWYG Editor"], ["fxFlex", "auto", "fxLayout", "column"], ["fxFlex", "auto", "fxLayout", "column", 1, "quill", "card", "mat-elevation-z16", 3, "formControl", "styles"]],
    template: function EditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "fury-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "quill-editor", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@fadeInUp", undefined)("formControl", ctx.form)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0));
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, ngx_quill__WEBPACK_IMPORTED_MODULE_10__.QuillEditorComponent, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_4__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_5__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_6__.PageLayoutContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective],
    styles: ["/**\n  General\n */\n/**\n  Card\n */\n/**\n  Toolbar\n */\n/**\n  Footer\n */\n/**\n  Mixins\n */\n/**\n  Inbox\n */\n.editor {\n  height: 100%;\n  width: 100%;\n}\n\n.quill {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaUJGOztBQWRBO0VBQ0UsOEJES2M7RUNKZCwrQkRJYztFQ0hkLGdCQUFBO0FBaUJGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uZWRpdG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnF1aWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    data: {
      animation: [_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUpAnimation, _fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInRightAnimation, _fury_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_2__.scaleInAnimation]
    }
  });
}


/***/ }),

/***/ 79462:
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorModule: () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ 70945);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-routing.module */ 89771);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.component */ 19506);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);









class EditorModule {
  static #_ = this.ɵfac = function EditorModule_Factory(t) {
    return new (t || EditorModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: EditorModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditorRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule.forRoot(), _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EditorModule, {
    declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_2__.EditorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_1__.EditorRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editor_editor_module_ts.js.map