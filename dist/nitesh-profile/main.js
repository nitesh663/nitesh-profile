(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/about/about.component */ "./src/app/header/about/about.component.ts");
/* harmony import */ var _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/expr/expr.component */ "./src/app/header/expr/expr.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: _header_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'exp', component: _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_3__["ExprComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n        <router-outlet></router-outlet>\r\n</app-header>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_custom_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.custom-module */ "./src/app/material.custom-module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _header_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/about/about.component */ "./src/app/header/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/expr/expr.component */ "./src/app/header/expr/expr.component.ts");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/fesm5/angular-mgl-timeline.js");
/* harmony import */ var _header_about_prof_summary_prof_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/about/prof-summary/prof-summary.component */ "./src/app/header/about/prof-summary/prof-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _header_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_11__["ExprComponent"],
                _header_about_prof_summary_prof_summary_component__WEBPACK_IMPORTED_MODULE_13__["ProfSummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_custom_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_12__["MglTimelineModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/header/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/header/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/header/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\r\n    <mat-card-title>\r\n        <h2 style=\"color:#51456d\"><mat-icon>perm_identity</mat-icon> {{ matHeader }}</h2>\r\n        <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n        <button mat-menu-item>\r\n            <mat-icon>get_app</mat-icon>Download CV\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>mail</mat-icon><a [href]=\"mailText\">Mail Me</a>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>call</mat-icon>Call Me\r\n        </button>\r\n        </mat-menu>\r\n    </mat-card-title>\r\n</mat-card-header>\r\n<mat-card-content class=\"dashboard-card-content\">\r\n    <app-prof-summary></app-prof-summary>\r\n</mat-card-content>"

/***/ }),

/***/ "./src/app/header/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/header/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.matHeader = 'Profile Summary';
        this.mailText = "";
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.mailText = "mailto:niteshsharma663@gmail.com";
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header/about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/header/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/header/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/header/about/prof-summary/prof-summary.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/header/about/prof-summary/prof-summary.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mgl-timeline-entry-dot{\r\n    background: #51456d !important;\r\n    cursor: pointer;\r\n    color: #fff !important;\r\n  }\r\n\r\n  mgl-timeline-entry-header{\r\n      cursor: pointer;\r\n      font-weight: 200;\r\n  }\r\n\r\n  mgl-timeline-entry-content{\r\n      font-weight: 500;\r\n      text-align: justify;\r\n  }\r\n\r\n  .icons8-angularjs {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojZDM1NDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM3ZTRhY2IiPjwvcGF0aD48ZyBpZD0iTGF5ZXJfMSI+PHBhdGggZD0iTTEyNS43MTg2LDMzLjZsLTg3LjkxODYsMzAuNTk3bDEzLjg5MzYsMTEzLjkxNjZsNzQuMTE3NCw0MC4yODY0bDc0LjQ5OTYsLTQwLjgzMjRsMTMuODg5NCwtMTEzLjkxMjR6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIwNS4wMzU2LDY5LjQxMzRsLTc5LjAzNTYsLTI2Ljg0NjR2MTY2LjE1Mmw2Ni40OTQ0LC0zNi40NDc2eiIgZmlsbD0iI2I3MWMxYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjUuNzUyMiw0Mi40ODNsLTc4Ljc5MiwyNy40MjE4bDEyLjU0NTQsMTAyLjg5NThsNjYuMjg4NiwzNi4wMjc2bDAuMjA1OCwtMC4xMDkydi0xNjYuMTUyeiIgZmlsbD0iI2RkMmMwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNTAuMzgzMnYzOS45MzM2bDM2LjAyNzYsNzcuNjgzMmgxOC41MTc4eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik03MS40NTQ2LDE2OGgxOC41MTc4bDM2LjAyNzYsLTc3LjY4MzJ2LTM5LjkzMzZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHJlY3QgeD0iMzAiIHk9IjMwIiB0cmFuc2Zvcm09InNjYWxlKDQuMiw0LjIpIiB3aWR0aD0iNiIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHJlY3QgeD0iMjQiIHk9IjMwIiB0cmFuc2Zvcm09InNjYWxlKDQuMiw0LjIpIiB3aWR0aD0iNiIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PC9nPjwvZz48L3N2Zz4=') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }\r\n\r\n  .icons8-bootstrap {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojZDM1NDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM3ZTRhY2IiPjwvcGF0aD48ZyBpZD0iTGF5ZXJfMSI+PHBhdGggZD0iTTIwMS42LDE4MC42YzAsMTEuNjAwNCAtOS4zOTk2LDIxIC0yMSwyMWgtMTA5LjJjLTExLjU5NjIsMCAtMjEsLTkuMzk5NiAtMjEsLTIxdi0xMDkuMmMwLC0xMS42MDA0IDkuNDAzOCwtMjEgMjEsLTIxaDEwOS4yYzExLjYwMDQsMCAyMSw5LjM5OTYgMjEsMjF6IiBmaWxsPSIjNjczYWI3Ij48L3BhdGg+PHBhdGggZD0iTTE2My45MjYsMTMyLjcyYy0yLjczLC0zLjc4IC02LjY3OCwtNi4zODQgLTExLjc2LC03Ljc3YzAsMCA0LjI4NCwtMS41NTQgOC4xNDgsLTcuMzVjMi4zMSwtMy42OTYgMy40ODYsLTguMTQ4IDMuNDg2LC0xMy4zNTZjMCwtOS4wMyAtMy4yNzYsLTE1Ljk2IC05LjgyOCwtMjAuNzA2Yy02LjU1MiwtNC43NDYgLTEzLjk0NCwtNy45MzggLTI2LjUwMiwtNy45MzhoLTM5LjI3djEwMC44aDQzLjgwNmMxMS44ODYsLTAuMDg0IDIwLjgzMiwtMi42NDYgMjYuOTIyLC03LjU2YzYuMDQ4LC00Ljk5OCA5LjA3MiwtMTIuMzkgOS4wNzIsLTIyLjI2YzAsLTUuNDYgLTEuMzQ0LC0xMC4wOCAtNC4wNzQsLTEzLjg2ek0xMTMuNCw5Mi40YzAsMCAxNy41MTQsMCAxNy44NSwwYzYuMzg0LDAgMTEuNTUsNS4xNjYgMTEuNTUsMTEuNTVjMCw2LjM4NCAtNS4xNjYsMTEuNTUgLTExLjU1LDExLjU1Yy0wLjMzNiwwIC0xNy44NSwwIC0xNy44NSwwek0xMzQuNCwxNTkuNmgtMjF2LTI1LjJoMjFjNi45NzIsMCAxMi42LDUuNjI4IDEyLjYsMTIuNmMwLDYuOTcyIC01LjYyOCwxMi42IC0xMi42LDEyLjZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }\r\n\r\n  .icons8-css3 {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojOGU0NGFkOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM1MTQ1NmQiPjwvcGF0aD48Zz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIGQ9Ik0xOTcuNCw0Ni4yaC0xNDIuOGwxMi42LDE0Mi44bDU4LjgsMTYuOGw1OC44LC0xNi44eiIgZmlsbD0iIzAyNzdiZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNTguOHYxMzMuOTczNDRsNDcuMDM2NzIsLTEzLjQzNjcybDEwLjUsLTEyMC41MzY3MnoiIGZpbGw9IiMwMzliZTUiPjwvcGF0aD48cGF0aCBkPSJNMTY0LjIyNjU2LDc5LjhoLTM4LjIyNjU2djE2LjhoMjAuNTczNDRsLTEuMjQ2ODcsMTYuOGgtMTkuMzI2NTZ2MTYuOGgxOC40NzM0NGwtMS4yNDY4OCwxOC45bC0xNy4yMjY1Niw1Ljg3MzQ0djE3LjY1MzEybDMzLjE3MzQ0LC0xMC45MjY1NmwyLjk1MzEzLC00OC4zeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNzkuOHYxNi44aC0zNy4zNzM0NGwtMS4yNjMyOCwtMTYuOHpNMTA2LjY3MzQ0LDExMy40bDAuODUzMTIsMTYuOGgxOC40NzM0NHYtMTYuOHpNMTA4LjM2MzI4LDEzOC42aC0xNi44bDEuMjYzMjgsMjMuMWwzMy4xNzM0NCwxMC45MjY1NnYtMTcuNjUzMTJsLTE3LjIyNjU2LC01Ljg3MzQ0eiIgZmlsbD0iI2VlZWVlZSI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/header/about/prof-summary/prof-summary.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/header/about/prof-summary/prof-summary.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mgl-timeline>\n  <mgl-timeline-entry *ngFor=\"let entry of entries; let i = index;\">\n      <mgl-timeline-entry-header>\n          {{ entry.header }}\n      </mgl-timeline-entry-header>\n      <mgl-timeline-entry-content>\n        <ul type=\"square\">\n          <li>\n              {{ entry.content }}\n          </li>\n          <!--<li>\n              <div class=\"icons8-angularjs\"></div>\n              <div class=\"icons8-bootstrap\"></div>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\"\n                  viewBox=\"0 0 252 252\" style=\"fill:#8e44ad;\">\n                  <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" \n                  stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" \n                  stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" \n                  font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n                    <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\n                    <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\" fill=\"#7e4acb\"></path><g><g id=\"Layer_1\"><g><path d=\"M57.624,185.052c-5.14063,0 -9.324,-4.18337 -9.324,-9.324v-99.456c0,-5.14063 4.18337,-9.324 9.324,-9.324h136.752c5.14063,0 9.324,4.18337 9.324,9.324v99.456c0,5.14063 -4.18337,9.324 -9.324,9.324z\" fill=\"#8e44ad\"></path><g fill=\"#ffffff\"><path d=\"M194.376,70.056c3.42502,0 6.216,2.79098 6.216,6.216v99.456c0,3.42502 -2.79098,6.216 -6.216,6.216h-136.752c-3.42502,0 -6.216,-2.79098 -6.216,-6.216v-99.456c0,-3.42502 2.79098,-6.216 6.216,-6.216h136.752M194.376,63.84h-136.752c-6.86868,0 -12.432,5.56332 -12.432,12.432v99.456c0,6.86868 5.56332,12.432 12.432,12.432h136.752c6.86868,0 12.432,-5.56332 12.432,-12.432v-99.456c0,-6.86868 -5.56332,-12.432 -12.432,-12.432z\"></path></g></g><path d=\"M110.75215,106.00934h8.14296v28.51901c0,12.04661 -5.83682,13.85546 -11.74202,13.85546c-1.68454,0 -3.23854,-0.24864 -4.10256,-0.6216l0.68376,-6.8376c0.74592,0.24864 1.61616,0.3108 2.67288,0.3108c2.36208,0 4.34498,-0.9324 4.34498,-6.34032z\" fill=\"#ffffff\"></path><path d=\"M125.91919,139.56331c1.68454,0.92618 4.59984,1.61616 6.89354,1.61616c3.79176,0 5.71872,-1.98912 5.71872,-4.72416c0,-3.04584 -1.8648,-4.53146 -5.4017,-6.8376c-5.71872,-3.48096 -7.89432,-7.89432 -7.89432,-11.67986c0,-6.70706 4.47552,-12.30146 13.16549,-12.30146c2.7972,0 5.40792,0.7397 6.58896,1.48562l-1.30536,7.02408c-1.17482,-0.74592 -2.97746,-1.42968 -5.2836,-1.42968c-3.48096,0 -5.15306,2.11344 -5.15306,4.3512c0,2.48018 1.2432,3.78554 5.71872,6.52058c5.58818,3.35664 7.5773,7.58352 7.5773,11.99688c0,7.63946 -5.65034,12.66821 -13.7933,12.66821c-3.35664,0 -6.58896,-0.87024 -8.01242,-1.67832z\" fill=\"#ffffff\"></path></g><g id=\"Layer_2\" fill=\"#000000\" font-family=\"-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, HelveticaNeue-Light, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Roboto, Oxygen, Ubuntu, &quot;Droid Sans&quot;, Arial, sans-serif\" font-weight=\"300\" font-size=\"16\" text-anchor=\"start\"></g></g></g>\n              </svg>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\"\n                  viewBox=\"0 0 252 252\" style=\"fill:#8e44ad;\">\n                    <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" \n                    stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" \n                    stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" \n                    font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n                      <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\n                      <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\" fill=\"#7e4acb\"></path><g id=\"Layer_1\"><g><g fill=\"#8a2920\"><path d=\"M176.41969,212.625h-100.8c-8.6625,0 -15.75,-7.0875 -15.75,-15.75v-141.75c0,-8.6625 7.0875,-15.75 15.75,-15.75h85.05c17.325,0 31.5,14.175 31.5,31.5v126c0,8.6625 -7.0875,15.75 -15.75,15.75z\"></path></g><g fill=\"#ffffff\"><path d=\"M110.26969,177.975c-7.875,0 -14.175,-6.3 -14.175,-14.175v-14.175c0,-1.7325 -1.4175,-3.15 -3.15,-3.15c-2.6775,0 -4.725,-2.0475 -4.725,-4.725c0,-2.6775 2.0475,-4.725 4.725,-4.725c1.7325,0 3.15,-1.4175 3.15,-3.15v-14.175c0,-7.875 6.3,-14.175 14.175,-14.175c2.6775,0 4.725,2.0475 4.725,4.725c0,2.6775 -2.0475,4.725 -4.725,4.725c-2.6775,0 -4.725,2.0475 -4.725,4.725v14.175c0,2.9925 -1.1025,5.67 -2.835,7.875c1.7325,2.205 2.835,4.8825 2.835,7.875v14.175c0,2.6775 2.0475,4.725 4.725,4.725c2.6775,0 4.725,2.0475 4.725,4.725c0,2.6775 -2.0475,4.725 -4.725,4.725z\"></path></g><g fill=\"#ffffff\"><path d=\"M141.76969,177.975c-2.6775,0 -4.725,-2.0475 -4.725,-4.725c0,-2.6775 2.0475,-4.725 4.725,-4.725c2.6775,0 4.725,-2.0475 4.725,-4.725v-14.175c0,-2.9925 1.1025,-5.67 2.835,-7.875c-1.7325,-2.205 -2.835,-4.8825 -2.835,-7.875v-14.175c0,-2.6775 -2.0475,-4.725 -4.725,-4.725c-2.6775,0 -4.725,-2.0475 -4.725,-4.725c0,-2.6775 2.0475,-4.725 4.725,-4.725c7.875,0 14.175,6.3 14.175,14.175v14.175c0,1.7325 1.4175,3.15 3.15,3.15c2.6775,0 4.725,2.0475 4.725,4.725c0,2.6775 -2.0475,4.725 -4.725,4.725c-1.7325,0 -3.15,1.4175 -3.15,3.15v14.175c0,7.875 -6.3,14.175 -14.175,14.175z\"></path></g></g><g fill=\"#3e2779\"><g><path d=\"M72.46969,217.35h100.485c13.7025,0 23.625,-8.6625 23.625,-20.475l0.1575,-105.525c0,-2.6775 -2.0475,-4.725 -4.725,-4.725v0c-2.6775,0 -4.725,2.0475 -4.725,4.725l-0.1575,105.525c0,6.615 -5.67,11.025 -14.175,11.025h-100.485c-2.6775,0 -7.875,-4.725 -7.875,-11.025v-141.75c0,-6.1425 4.8825,-11.025 11.025,-11.025h80.325v11.025c0,11.34 9.135,20.475 20.475,20.475h15.12c0.1575,0 0.315,0 0.63,0v0c1.89,0 3.6225,-1.26 4.41,-2.835c0.315,-0.63 0.4725,-1.26 0.4725,-1.89c0,-0.1575 0,-0.4725 0,-0.63c-0.1575,-9.45 -3.9375,-18.27 -10.5525,-25.0425c-7.0875,-6.7725 -16.065,-10.5525 -25.83,-10.5525v0h-85.05c-11.34,0 -20.475,9.135 -20.475,20.475v141.75c0,11.4975 9.2925,20.475 17.325,20.475zM186.97219,66.15h-10.5525c-6.1425,0 -11.025,-4.8825 -11.025,-11.025v-10.5525c5.355,0.945 10.2375,3.465 14.175,7.4025c3.9375,3.9375 6.4575,8.82 7.4025,14.175z\"></path></g></g></g></g>\n              </svg>\n              <div class=\"icons8-css3\"></div>\n              \n            </li>-->\n        </ul>\n      </mgl-timeline-entry-content>\n      <mgl-timeline-entry-dot  \n        [innerHtml]=\"entry.entrydot\">\n      </mgl-timeline-entry-dot>\n  </mgl-timeline-entry>\n</mgl-timeline>"

/***/ }),

/***/ "./src/app/header/about/prof-summary/prof-summary.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/header/about/prof-summary/prof-summary.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfSummaryComponent", function() { return ProfSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfSummaryComponent = /** @class */ (function () {
    function ProfSummaryComponent() {
        this.dotActive = false;
        this.expandEnabled = true;
        this.entries = [
            {
                header: 'Front End Development',
                content: 'Creative Front-end Developer with 1.6+ years of experience leveraging Angular 2/4/5/6 and JavaScript to build responsive websites with dynamic components and interactive features that drive business growth and improve UX. Extensively Worked on HTML5, CSS3, JQuery, Bootstrap, Angular Material in development of webmethods UI.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.6+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
            },
            {
                header: 'Back End Development',
                content: 'Experiencing 1.3+ yr in designing, developing, and managing complex rest full web services by using Spring Boot, Core Java and MySQL.Building projects with maven.Some amount of work done on mongoDB.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.3+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
            },
            {
                header: 'WebMethods Development',
                content: 'Having 1.6+ yr of experience in this product and creating dynamic web apps in angular for it.It\'s a pure java based multiplatform enterprise integration product which is bascially used by developer to build and test enterprise service flow.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.6+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr'
            },
            {
                header: 'Agile Test Automation',
                content: 'With 0.6+ yr of experience in agile automation with jenkins,junit,cnl.Well experience in writing junit tests for webMethods product, creating jenkins jobs and promoting builds.Very good knowledge in product build suitint promotions.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;0.6+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr'
            },
        ];
    }
    ProfSummaryComponent.prototype.ngOnInit = function () {
    };
    ProfSummaryComponent.prototype.clickEntryDot = function (index) {
        this.myindex = index;
    };
    ProfSummaryComponent.prototype.onExpandEntry = function (expanded, index) {
    };
    ProfSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prof-summary',
            template: __webpack_require__(/*! ./prof-summary.component.html */ "./src/app/header/about/prof-summary/prof-summary.component.html"),
            styles: [__webpack_require__(/*! ./prof-summary.component.css */ "./src/app/header/about/prof-summary/prof-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfSummaryComponent);
    return ProfSummaryComponent;
}());



/***/ }),

/***/ "./src/app/header/expr/expr.component.css":
/*!************************************************!*\
  !*** ./src/app/header/expr/expr.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/header/expr/expr.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/expr/expr.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n    <mat-card-title>\n        <h2 style=\"color:#51456d\"><mat-icon>perm_identity</mat-icon> {{ matHeader }}</h2>\n        <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n        <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item>\n            <mat-icon>get_app</mat-icon>Download CV\n        </button>\n        <button mat-menu-item>\n            <mat-icon>mail</mat-icon><a [href]=\"mailText\">Mail Me</a>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>call</mat-icon>Call Me\n        </button>\n        </mat-menu>\n    </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"dashboard-card-content\">\n    <p>Hi I am Exper</p>\n</mat-card-content>\n    "

/***/ }),

/***/ "./src/app/header/expr/expr.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/expr/expr.component.ts ***!
  \***********************************************/
/*! exports provided: ExprComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExprComponent", function() { return ExprComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExprComponent = /** @class */ (function () {
    function ExprComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        /** Based on the screen size, switch from standard to one column per row */
        this.matHeader = 'Experience';
        this.mailText = "";
    }
    ExprComponent.prototype.ngOnInit = function () {
        this.mailText = "mailto:niteshsharma663@gmail.com";
    };
    ExprComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header/expr',
            template: __webpack_require__(/*! ./expr.component.html */ "./src/app/header/expr/expr.component.html"),
            styles: [__webpack_require__(/*! ./expr.component.css */ "./src/app/header/expr/expr.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ExprComponent);
    return ExprComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************\n  sidenav content goes below\n******************************/\n.sidenav-container {\n  height: 100%;\n}\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(9, 9, 29, 0.2);\n}\nmat-sidenav{\n  background: #51456d;\n}\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.spacer{\n  flex: 1 1 auto;\n}\nmat-toolbar{\n  background: #51456d !important;\n  cursor: pointer;\n}\nmat-toolbar a{\n  display: inline-block;\n  margin: 1px 10px;\n  color: white;\n  text-decoration: none;\n  font-size: 0.8em !important;\n}\nmat-nav-list a{\n  color: #fff !important;\n  border-top: 0.4px solid #535158;\n}\nmat-nav-list a mat-icon{\n  font-size: 16px;\n}\nimg{\n  margin: 0% 10%;\n  max-width: 10rem;\n  max-height: 10rem;\n  border: .5rem solid rgba(231,233,239,.2);\n  border-radius:70%;\n  cursor: pointer;\n}\n@media (max-width: 768px){\n  mat-toolbar a{\n    display:none;\n  }\n}\nmat-sidenav i {\n  margin-left: 1.2em;\n  display: inline-block; \n  color: #abb0c7;\n}\nmat-sidenav i:hover{\n  color: #fff;\n  cursor: pointer;\n}\nmat-sidenav i .custom-tooltip-black{\n  background: #000 !important;\n}\n.social-icon{\n  margin: 20px;\n}\nmat-card{\n  min-height: 655px !important;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Nitesh Kumar Sharma</mat-toolbar>\n    \n    <img src=\"https://i.postimg.cc/0bhMjx45/nit.jpg\"><br/>\n    <div class=\"social-icon\">\n      <a href=\"https://www.linkedin.com/in/nitesh-sharma-7194195b/\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" matTooltip=\"linkedin\" matTooltipClass=\"custom-tooltip-black\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://github.com/nitesh663/DAILY/\" target=\"_blank\"><i class=\"fa fa-github fa-lg\" matTooltip=\"github\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://www.facebook.com/niteshdsuperboy\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" matTooltip=\"facebook\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://twitter.com/nitesh663\" target=\"_blank\"><i class=\"fa fa-twitter fa-lg\" matTooltip=\"twitter\" aria-hidden=\"true\"></i></a>\n    </div>\n    <!--<p style=\"color: #bfab43; text-align: center\">Nitesh Kumar Sharma</p>-->\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/\"><mat-icon>border_color</mat-icon>About</a>\n      <a mat-list-item routerLink=\"/exp\"><mat-icon>work</mat-icon>Experience</a>\n      <a mat-list-item routerLink=\"/edu\"><mat-icon>school</mat-icon>Education</a>\n      <a mat-list-item><mat-icon>restaurant_menu</mat-icon>Skills</a>\n      <a mat-list-item><mat-icon>style</mat-icon>Interests</a>\n      <a mat-list-item><mat-icon>beenhere</mat-icon>Certification</a>\n    </mat-nav-list>\n    <footer style=\"padding-top: 6em; text-align:center; color: #e1f5ee;\">\n        <h5 style=\"font-weight: 4\">© 2018 Angular Developer</h5>\n    </footer>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span style=\"cursor: pointer\" routerLink=\"/\"><mat-icon>home</mat-icon></span>\n      <span class=\"spacer\"></span>\n      <a routerLink=\"/\">About</a>\n      <a routerLink=\"/exp\">Experience</a>\n      <a >Education</a>\n      <a >Skills</a>\n      <a >Interests</a>\n      <a >Certification</a>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <mat-card>\n        <router-outlet>\n          \n        </router-outlet>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/material.custom-module.ts":
/*!*******************************************!*\
  !*** ./src/app/material.custom-module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My_Daily_GuideLines\Angular_Workspace\my-scratch-projects\nit-resume\nitesh-profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map