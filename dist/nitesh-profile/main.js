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

/***/ "./src/app/_animations/fade-in.animation.ts":
/*!**************************************************!*\
  !*** ./src/app/_animations/fade-in.animation.ts ***!
  \**************************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/_animations/index.ts":
/*!**************************************!*\
  !*** ./src/app/_animations/index.ts ***!
  \**************************************/
/*! exports provided: fadeInAnimation, slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fade_in_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade-in.animation */ "./src/app/_animations/fade-in.animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return _fade_in_animation__WEBPACK_IMPORTED_MODULE_0__["fadeInAnimation"]; });

/* harmony import */ var _slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-in-out.animation */ "./src/app/_animations/slide-in-out.animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return _slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"]; });





/***/ }),

/***/ "./src/app/_animations/slide-in-out.animation.ts":
/*!*******************************************************!*\
  !*** ./src/app/_animations/slide-in-out.animation.ts ***!
  \*******************************************************/
/*! exports provided: slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


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
/* harmony import */ var _header_skill_set_skill_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/skill-set/skill-set.component */ "./src/app/header/skill-set/skill-set.component.ts");
/* harmony import */ var _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/expr/expr.component */ "./src/app/header/expr/expr.component.ts");
/* harmony import */ var _header_educat_educat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/educat/educat.component */ "./src/app/header/educat/educat.component.ts");
/* harmony import */ var _header_interest_interest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/interest/interest.component */ "./src/app/header/interest/interest.component.ts");
/* harmony import */ var _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/contact/contact.component */ "./src/app/header/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: _header_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'skill-set', component: _header_skill_set_skill_set_component__WEBPACK_IMPORTED_MODULE_3__["SkillSetComponent"] },
    { path: 'exp', component: _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_4__["ExprComponent"] },
    { path: 'edu', component: _header_educat_educat_component__WEBPACK_IMPORTED_MODULE_5__["EducatComponent"] },
    { path: 'intr', component: _header_interest_interest_component__WEBPACK_IMPORTED_MODULE_6__["InterestComponent"] },
    { path: 'contact', component: _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] }
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

module.exports = "<app-header>\r\n    <router-outlet></router-outlet>\r\n</app-header>\r\n"

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
/* harmony import */ var _bootstrap_custom_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bootstrap.custom-module */ "./src/app/bootstrap.custom-module.ts");
/* harmony import */ var _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/expr/expr.component */ "./src/app/header/expr/expr.component.ts");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/fesm5/angular-mgl-timeline.js");
/* harmony import */ var _header_about_prof_summary_prof_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/about/prof-summary/prof-summary.component */ "./src/app/header/about/prof-summary/prof-summary.component.ts");
/* harmony import */ var _header_skill_set_skill_set_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/skill-set/skill-set.component */ "./src/app/header/skill-set/skill-set.component.ts");
/* harmony import */ var _header_expr_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/expr/timeline/timeline.component */ "./src/app/header/expr/timeline/timeline.component.ts");
/* harmony import */ var _header_educat_educat_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/educat/educat.component */ "./src/app/header/educat/educat.component.ts");
/* harmony import */ var _header_interest_interest_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/interest/interest.component */ "./src/app/header/interest/interest.component.ts");
/* harmony import */ var _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/contact/contact.component */ "./src/app/header/contact/contact.component.ts");
/* harmony import */ var _header_contact_contact_det_contact_det_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/contact/contact-det/contact-det.component */ "./src/app/header/contact/contact-det/contact-det.component.ts");
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
                _header_expr_expr_component__WEBPACK_IMPORTED_MODULE_12__["ExprComponent"],
                _header_about_prof_summary_prof_summary_component__WEBPACK_IMPORTED_MODULE_14__["ProfSummaryComponent"],
                _header_skill_set_skill_set_component__WEBPACK_IMPORTED_MODULE_15__["SkillSetComponent"],
                _header_expr_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_16__["TimelineComponent"],
                _header_educat_educat_component__WEBPACK_IMPORTED_MODULE_17__["EducatComponent"],
                _header_interest_interest_component__WEBPACK_IMPORTED_MODULE_18__["InterestComponent"],
                _header_contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
                _header_contact_contact_det_contact_det_component__WEBPACK_IMPORTED_MODULE_20__["ContactDetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_custom_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _bootstrap_custom_module__WEBPACK_IMPORTED_MODULE_11__["AppBootstrapModule"],
                angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_13__["MglTimelineModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bootstrap.custom-module.ts":
/*!********************************************!*\
  !*** ./src/app/bootstrap.custom-module.ts ***!
  \********************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/header/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/header/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\na,\na:link,\na:visited,\na:hover,\na:active{\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/header/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/header/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\r\n    <mat-card-title>\r\n        <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>perm_identity</mat-icon> {{ matHeader }}</h1>\r\n        <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n        <button mat-menu-item>\r\n            <mat-icon>get_app</mat-icon><a style=\"color: #51456d\" href=\"https://files.fm/down.php?i=rs6rsbkx&n=NiteshKumar_Exp_With_1.7Yr.pdf\">Download CV</a>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>mail</mat-icon><a style=\"color: #51456d\" [href]=\"mailText\">Mail Me</a>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>call</mat-icon><a style=\"color: #51456d\" href=\"tel:8658269089\">Call Me</a>\r\n        </button>\r\n        </mat-menu>\r\n    </mat-card-title>\r\n</mat-card-header>\r\n<mat-card-content class=\"dashboard-card-content\">\r\n    <app-prof-summary></app-prof-summary>\r\n</mat-card-content>"

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
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations/index */ "./src/app/_animations/index.ts");
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
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/header/about/about.component.css")],
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
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

module.exports = "mgl-timeline-entry-dot{\r\n    background: #51456d !important;\r\n    cursor: pointer;\r\n    color: #fff !important;\r\n  }\r\n\r\n  mgl-timeline-entry-dot {\r\n    padding-top: 5px;\r\n  }\r\n\r\n  mgl-timeline-entry-header{\r\n      cursor: pointer;\r\n      font-weight: 200;\r\n  }\r\n\r\n  mgl-timeline-entry-content{\r\n      font-weight: 500;\r\n      text-align: justify;\r\n  }\r\n\r\n  .icons8-angularjs {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojZDM1NDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM3ZTRhY2IiPjwvcGF0aD48ZyBpZD0iTGF5ZXJfMSI+PHBhdGggZD0iTTEyNS43MTg2LDMzLjZsLTg3LjkxODYsMzAuNTk3bDEzLjg5MzYsMTEzLjkxNjZsNzQuMTE3NCw0MC4yODY0bDc0LjQ5OTYsLTQwLjgzMjRsMTMuODg5NCwtMTEzLjkxMjR6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTIwNS4wMzU2LDY5LjQxMzRsLTc5LjAzNTYsLTI2Ljg0NjR2MTY2LjE1Mmw2Ni40OTQ0LC0zNi40NDc2eiIgZmlsbD0iI2I3MWMxYyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjUuNzUyMiw0Mi40ODNsLTc4Ljc5MiwyNy40MjE4bDEyLjU0NTQsMTAyLjg5NThsNjYuMjg4NiwzNi4wMjc2bDAuMjA1OCwtMC4xMDkydi0xNjYuMTUyeiIgZmlsbD0iI2RkMmMwMCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNTAuMzgzMnYzOS45MzM2bDM2LjAyNzYsNzcuNjgzMmgxOC41MTc4eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik03MS40NTQ2LDE2OGgxOC41MTc4bDM2LjAyNzYsLTc3LjY4MzJ2LTM5LjkzMzZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHJlY3QgeD0iMzAiIHk9IjMwIiB0cmFuc2Zvcm09InNjYWxlKDQuMiw0LjIpIiB3aWR0aD0iNiIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHJlY3QgeD0iMjQiIHk9IjMwIiB0cmFuc2Zvcm09InNjYWxlKDQuMiw0LjIpIiB3aWR0aD0iNiIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PC9nPjwvZz48L3N2Zz4=') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }\r\n\r\n  .icons8-bootstrap {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojZDM1NDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM3ZTRhY2IiPjwvcGF0aD48ZyBpZD0iTGF5ZXJfMSI+PHBhdGggZD0iTTIwMS42LDE4MC42YzAsMTEuNjAwNCAtOS4zOTk2LDIxIC0yMSwyMWgtMTA5LjJjLTExLjU5NjIsMCAtMjEsLTkuMzk5NiAtMjEsLTIxdi0xMDkuMmMwLC0xMS42MDA0IDkuNDAzOCwtMjEgMjEsLTIxaDEwOS4yYzExLjYwMDQsMCAyMSw5LjM5OTYgMjEsMjF6IiBmaWxsPSIjNjczYWI3Ij48L3BhdGg+PHBhdGggZD0iTTE2My45MjYsMTMyLjcyYy0yLjczLC0zLjc4IC02LjY3OCwtNi4zODQgLTExLjc2LC03Ljc3YzAsMCA0LjI4NCwtMS41NTQgOC4xNDgsLTcuMzVjMi4zMSwtMy42OTYgMy40ODYsLTguMTQ4IDMuNDg2LC0xMy4zNTZjMCwtOS4wMyAtMy4yNzYsLTE1Ljk2IC05LjgyOCwtMjAuNzA2Yy02LjU1MiwtNC43NDYgLTEzLjk0NCwtNy45MzggLTI2LjUwMiwtNy45MzhoLTM5LjI3djEwMC44aDQzLjgwNmMxMS44ODYsLTAuMDg0IDIwLjgzMiwtMi42NDYgMjYuOTIyLC03LjU2YzYuMDQ4LC00Ljk5OCA5LjA3MiwtMTIuMzkgOS4wNzIsLTIyLjI2YzAsLTUuNDYgLTEuMzQ0LC0xMC4wOCAtNC4wNzQsLTEzLjg2ek0xMTMuNCw5Mi40YzAsMCAxNy41MTQsMCAxNy44NSwwYzYuMzg0LDAgMTEuNTUsNS4xNjYgMTEuNTUsMTEuNTVjMCw2LjM4NCAtNS4xNjYsMTEuNTUgLTExLjU1LDExLjU1Yy0wLjMzNiwwIC0xNy44NSwwIC0xNy44NSwwek0xMzQuNCwxNTkuNmgtMjF2LTI1LjJoMjFjNi45NzIsMCAxMi42LDUuNjI4IDEyLjYsMTIuNmMwLDYuOTcyIC01LjYyOCwxMi42IC0xMi42LDEyLjZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }\r\n\r\n  .icons8-css3 {\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzdHlsZT0iZmlsbDojOGU0NGFkOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUydi0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48cGF0aCBkPSJNMTI2LDI1MmMtNjkuNTg3ODgsMCAtMTI2LC01Ni40MTIxMiAtMTI2LC0xMjZ2MGMwLC02OS41ODc4OCA1Ni40MTIxMiwtMTI2IDEyNiwtMTI2djBjNjkuNTg3ODgsMCAxMjYsNTYuNDEyMTIgMTI2LDEyNnYwYzAsNjkuNTg3ODggLTU2LjQxMjEyLDEyNiAtMTI2LDEyNnoiIGZpbGw9IiM1MTQ1NmQiPjwvcGF0aD48Zz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIGQ9Ik0xOTcuNCw0Ni4yaC0xNDIuOGwxMi42LDE0Mi44bDU4LjgsMTYuOGw1OC44LC0xNi44eiIgZmlsbD0iIzAyNzdiZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNTguOHYxMzMuOTczNDRsNDcuMDM2NzIsLTEzLjQzNjcybDEwLjUsLTEyMC41MzY3MnoiIGZpbGw9IiMwMzliZTUiPjwvcGF0aD48cGF0aCBkPSJNMTY0LjIyNjU2LDc5LjhoLTM4LjIyNjU2djE2LjhoMjAuNTczNDRsLTEuMjQ2ODcsMTYuOGgtMTkuMzI2NTZ2MTYuOGgxOC40NzM0NGwtMS4yNDY4OCwxOC45bC0xNy4yMjY1Niw1Ljg3MzQ0djE3LjY1MzEybDMzLjE3MzQ0LC0xMC45MjY1NmwyLjk1MzEzLC00OC4zeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjYsNzkuOHYxNi44aC0zNy4zNzM0NGwtMS4yNjMyOCwtMTYuOHpNMTA2LjY3MzQ0LDExMy40bDAuODUzMTIsMTYuOGgxOC40NzM0NHYtMTYuOHpNMTA4LjM2MzI4LDEzOC42aC0xNi44bDEuMjYzMjgsMjMuMWwzMy4xNzM0NCwxMC45MjY1NnYtMTcuNjUzMTJsLTE3LjIyNjU2LC01Ljg3MzQ0eiIgZmlsbD0iI2VlZWVlZSI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }"

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
                header: 'Total Experience',
                content: 'Continuing with Software AG From April 5th 2017 having 1.6+ yr of experience till now.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.8+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
            },
            {
                header: 'Front End Developer',
                content: 'Creative Front-end Developer with 1.6+ years of experience leveraging Angular 2/4/5/6 and JavaScript to build responsive websites with dynamic components and interactive features that drive business growth and improve UX. Extensively Worked on HTML5, CSS3, JQuery, Bootstrap, Angular Material in development of webmethods UI.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.6+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
            },
            /*{
              header: 'Back End Developer',
              content: 'Experiencing 1.0+ yr in designing, developing, and managing complex rest full web services by using Spring Boot, Core Java and MySQL.Building projects with maven.Very good understanding of mongoDB and it\'s usability.',
              entrydot: '<p>&nbsp;&nbsp;&nbsp;1.0+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr</p>'
            },*/
            {
                header: 'WebMethods Developer',
                content: 'Having 1.3+ yr of experience in this product and creating multiple services for integration flow, testing, debugging, unit testing, ui development.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;1.3+<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr'
            },
            {
                header: 'Agile Test Automation',
                content: 'With 0.3+ yr of experience in agile automation with jenkins,junit,cnl.Well experience in writing junit tests for webMethods product, creating jenkins jobs and promoting builds.Very good knowledge in product build suitint promotions.',
                entrydot: '<p>&nbsp;&nbsp;&nbsp;0.3+<br>&nbsp;&nbsp;&nbsp;&nbsp;Yr'
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

/***/ "./src/app/header/contact/contact-det/contact-det.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/header/contact/contact-det/contact-det.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card-profile {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.card {\r\n    border: 0;\r\n    margin-bottom: 30px;\r\n    margin-top: 30px;\r\n    border-radius: 6px;\r\n    color: #333333;\r\n    background: #fff;\r\n    width: 100%;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid #eeeeee;\r\n    border-radius: 0.25rem;\r\n}\r\n\r\n.card {\r\n    font-size: .875rem;\r\n}\r\n\r\n.card-profile .card-avatar {\r\n    max-width: 130px;\r\n    max-height: 130px;\r\n}\r\n\r\n.card-profile .card-avatar {\r\n    margin: -50px auto 0;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-profile .card-avatar + .card-body {\r\n    margin-top: 15px;\r\n}\r\n\r\n.card .card-body {\r\n    padding: 0.9375rem 20px;\r\n    position: relative;\r\n}\r\n\r\n.card .card-body, .card .card-footer {\r\n    padding: 0.9375rem 1.875rem;\r\n}\r\n\r\n.card-body {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem;\r\n}\r\n\r\n.card [class*=\"card-header-\"]:not(.card-header-icon):not(.card-header-text):not(.card-header-image) {\r\n    border-radius: 3px;\r\n    margin-top: -20px;\r\n    padding: 15px;\r\n}\r\n\r\n.card .card-header-danger .card-icon, .card .card-header-danger:not(.card-header-icon):not(.card-header-text), .card .card-header-danger .card-text {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\r\n}\r\n\r\n.card .card-header-danger .card-icon, .card .card-header-danger .card-text, .card .card-header-danger:not(.card-header-icon):not(.card-header-text), .card.bg-danger, .card.card-rotate.bg-danger .front, .card.card-rotate.bg-danger .back {\r\n    /* background: linear-gradient(60deg, #ef5350, #e53935); */\r\n    background:  #51456d;\r\n}\r\n\r\n.card [class*=\"card-header-\"] {\r\n    margin: 0px 15px 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.card .card-header {\r\n    z-index: 3 !important;\r\n}\r\n\r\n.card [class*=\"card-header-\"], .card[class*=\"bg-\"] {\r\n    color: #fff;\r\n}\r\n\r\n.card .card-header {\r\n    border-bottom: none;\r\n    background: transparent;\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n\r\n.card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #eeeeee;\r\n}\r\n\r\n.card-title{\r\n    font-weight: 250;\r\n}\r\n\r\n.card-body .row{\r\n    background: #cfd8dc;\r\n}\r\n\r\n@media (min-width: 768px){\r\n.col-md-4 {\r\n    flex: 0 0 33.33333333%;\r\n    max-width: 30.33333333%;\r\n }\r\n}\r\n\r\n@media (min-width: 768px){\r\n.col-md-8 {\r\n    flex: 0 0 66.66666667%;\r\n    max-width: 66.66666667%;\r\n }\r\n}\r\n\r\n.icons8-webhook {\r\n    display: inline-block;\r\n    width: 120px;\r\n    height: 120px;\r\n    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIKICAgICB2aWV3Qm94PSIwIDAgNDggNDgiCiAgICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7O2ZpbGw6IzhlNDRhZDsiPjxnIGlkPSJzdXJmYWNlMSI+CTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMzUsMzdjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzM3LjIsMzcsMzUsMzd6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMzUsNDNjLTMsMC01LjktMS40LTcuOC0zLjdsMy4xLTIuNWMxLjEsMS40LDIuOSwyLjMsNC43LDIuM2MzLjMsMCw2LTIuNyw2LTZzLTIuNy02LTYtNiAgIGMtMSwwLTIsMC4zLTIuOSwwLjdsLTEuNywxTDIzLjMsMTZsMy41LTEuOWw1LjMsOS40YzEtMC4zLDItMC41LDMtMC41YzUuNSwwLDEwLDQuNSwxMCwxMFM0MC41LDQzLDM1LDQzeiI+PC9wYXRoPgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTE0LDQzQzguNSw0Myw0LDM4LjUsNCwzM2MwLTQuNiwzLjEtOC41LDcuNS05LjdsMSwzLjlDOS45LDI3LjksOCwzMC4zLDgsMzNjMCwzLjMsMi43LDYsNiw2ICAgczYtMi43LDYtNnYtMmgxNXY0SDIzLjhDMjIuOSwzOS42LDE4LjgsNDMsMTQsNDN6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiNFOTFFNjM7IiBkPSJNMTQsMzdjLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzE2LjIsMzcsMTQsMzd6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMjUsMTljLTIuMiwwLTQtMS44LTQtNHMxLjgtNCw0LTRzNCwxLjgsNCw0UzI3LjIsMTksMjUsMTl6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiNFOTFFNjM7IiBkPSJNMTUuNywzNEwxMi4zLDMybDUuOS05LjdjLTItMS45LTMuMi00LjUtMy4yLTcuM2MwLTUuNSw0LjUtMTAsMTAtMTBjNS41LDAsMTAsNC41LDEwLDEwICAgYzAsMC45LTAuMSwxLjctMC4zLDIuNWwtMy45LTFjMC4xLTAuNSwwLjItMSwwLjItMS41YzAtMy4zLTIuNy02LTYtNnMtNiwyLjctNiw2YzAsMi4xLDEuMSw0LDIuOSw1LjFsMS43LDFMMTUuNywzNHoiPjwvcGF0aD48L2c+PC9zdmc+') 50% 50% no-repeat;\r\n    background-size: 100%;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/header/contact/contact-det/contact-det.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/header/contact/contact-det/contact-det.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-md-4\">\n    <div class=\"card card-profile\">\n      <div class=\"card-avatar\">\n          <a>\n              <!-- <img class=\"img\" src=\"https://i.postimg.cc/0bhMjx45/nit.jpg\" /> -->\n              <div class=\"icons8-webhook\"></div>\n          </a>\n      </div>\n      <div class=\"card-body\">\n        <h6 class=\"card-category text-gray\">Full Stack Web Developer</h6>\n        <h4 class=\"card-title\">Nitesh Kumar Sharma</h4>\n        <p class=\"card-description\">\n            Always Ready To Grab The Opportunity.\n        </p>\n        <!-- <a href=\"\" class=\"btn btn-danger btn-round\">Follow</a> -->\n        <a *ngFor=\"let item of starList; let i=index \" (click)=\"setStar(i)\">  \n            <i class=\"fa\" [ngClass]=\"{'fa-star-o':item,'fa-star':!item}\"></i>\n        </a>\n        <br>  \n        <!-- Rating :- {{rating}} stars   -->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n      <div class=\"card\" style=\"background:#fff\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Contact Details</h4>\n              <p class=\"card-category\">Fill Free To Contact Me</p>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                  <img src=\"https://png.icons8.com/cotton/60/8e44ad/marker.png\">\n              </div>\n              <div class=\"col-md-8\">\n                  <h4 class=\"card-title\">LOCATION</h4>\n                  <p class=\"card-category\">SGR Dental College,Marathalli,Bangalore-560037</p>\n              </div>\n            </div>\n            <div class=\"row\" style=\"background:#dedfe6\">\n              <div class=\"col-md-4\">\n                  <img src=\"https://png.icons8.com/color/60/8e44ad/secured-letter.png\">\n              </div>\n              <div class=\"col-md-8\">\n                  <h4 class=\"card-title\">E-MAIL</h4>\n                  <p class=\"card-category\">niteshsharma663@gmail.com</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                  <img src=\"https://png.icons8.com/cotton/60/8e44ad/clock.png\">\n              </div>\n              <div class=\"col-md-8\">\n                  <h4 class=\"card-title\">WORK HOURS</h4>\n                  <p class=\"card-category\">Mon. - frie. 9AM - 21PM</p>\n              </div>\n            </div>\n            <div class=\"row\" style=\"background:#dedfe6\">\n              <div class=\"col-md-4\">\n                  <img src=\"https://png.icons8.com/cotton/60/8e44ad/phonelink-ring.png\">\n              </div>\n              <div class=\"col-md-8\">\n                  <h4 class=\"card-title\">PHONE</h4>\n                  <p class=\"card-category\">+91 8658269089</p>\n              </div>\n            </div>\n          </div>\n      </div>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/header/contact/contact-det/contact-det.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/header/contact/contact-det/contact-det.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetComponent", function() { return ContactDetComponent; });
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

var ContactDetComponent = /** @class */ (function () {
    function ContactDetComponent() {
        this.starList = [true, true, true, true, true]; // create a list which contains status of 5 stars
    }
    //Create a function which receives the value counting of stars click, 
    //and according to that value we do change the value of that star in list.
    ContactDetComponent.prototype.setStar = function (data) {
        this.rating = data + 1;
        for (var i = 0; i <= 4; i++) {
            if (i <= data) {
                this.starList[i] = false;
            }
            else {
                this.starList[i] = true;
            }
        }
    };
    ContactDetComponent.prototype.ngOnInit = function () {
    };
    ContactDetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-det',
            template: __webpack_require__(/*! ./contact-det.component.html */ "./src/app/header/contact/contact-det/contact-det.component.html"),
            styles: [__webpack_require__(/*! ./contact-det.component.css */ "./src/app/header/contact/contact-det/contact-det.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetComponent);
    return ContactDetComponent;
}());



/***/ }),

/***/ "./src/app/header/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./src/app/header/contact/contact.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-card-content{\r\n    margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/header/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/app/header/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n  <mat-card-title>\n      <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>contacts</mat-icon> {{ matHeader }}</h1>\n  </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"dashboard-card-content\">\n  <app-contact-det></app-contact-det>  \n</mat-card-content>\n  "

/***/ }),

/***/ "./src/app/header/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/header/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations/index */ "./src/app/_animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.matHeader = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/header/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/header/contact/contact.component.css")],
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/educat/educat.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/educat/educat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n}\r\n\r\n.card [class*=\"card-header-\"]:not(.card-header-icon):not(.card-header-text):not(.card-header-image) {\r\n    border-radius: 3px;\r\n    margin-top: -40px;\r\n    padding: 15px;\r\n}\r\n\r\n.card .card-header-warning .card-icon, .card .card-header-warning:not(.card-header-icon):not(.card-header-text), .card .card-header-warning .card-text {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\r\n}\r\n\r\n.card .card-header-warning .card-icon, .card .card-header-warning .card-text, .card .card-header-warning:not(.card-header-icon):not(.card-header-text), .card.bg-warning, .card.card-rotate.bg-warning .front, .card.card-rotate.bg-warning .back {\r\n    /* background: linear-gradient(60deg, #ffa726, #fb8c00); */\r\n    background: #51456d;\r\n}\r\n\r\n.card [class*=\"card-header-\"] {\r\n    margin: 0px 15px 0;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.card .card-header {\r\n    z-index: 3 !important;\r\n}\r\n\r\n.card [class*=\"card-header-\"], .card[class*=\"bg-\"] {\r\n    color: #fff;\r\n}\r\n\r\n.card .card-header {\r\n    border-bottom: none;\r\n    background: transparent;\r\n}\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n\r\n.edu-card-content{\r\n    margin-top:50px !important;\r\n}"

/***/ }),

/***/ "./src/app/header/educat/educat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/header/educat/educat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header [ngStyle]=\"{'text-align': 'center'}\">\n  <mat-card-title>\n      <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>school</mat-icon> {{ matHeader }}</h1>\n  </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"edu-card-content\">\n  <div class=\"row\">  \n    <div class=\"col-lg-12 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header card-header-warning\">\n          <h4 class=\"card-title\">Computer Science And Engineering (B.Tech)</h4>\n          <p class=\"card-category\">2012 - 2016</p>\n        </div>\n        <div class=\"card-body table-responsive\">\n            <table class=\"table table-hover\">\n                <thead class=\"text-default\">\n                    <th>ID</th>\n                    <th>Examination Passed</th>\n                    <th>Board</th>\n                    <th>Institution</th>\n                    <th>Year of Passing</th>\n                    <th>Percentage (%)</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let edu of educat\">\n                        <td>{{ edu.id }}</td>\n                        <td [innerHtml]=\"edu.examName\"></td>\n                        <td>{{ edu.board }}</td>\n                        <td>{{ edu.instName }}</td>\n                        <td>{{ edu.yop }}</td>\n                        <td>{{ edu.percentage }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/header/educat/educat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/educat/educat.component.ts ***!
  \***************************************************/
/*! exports provided: EducatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducatComponent", function() { return EducatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations/index */ "./src/app/_animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducatComponent = /** @class */ (function () {
    function EducatComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.matHeader = 'Academic Profile';
        this.educat = [
            {
                id: '1',
                examName: 'B.Tech <br/>(Computer Sceinece And Engineering)',
                board: 'Biju Patnaik University Of Technology',
                instName: 'Govt. College Of Engineering, Bhawanipatna',
                yop: 2016,
                percentage: 74.98
            },
            {
                id: '2',
                examName: 'Intermediate (12th)',
                board: 'Council Of Higher Secondary Education',
                instName: 'Christ College',
                yop: 2011,
                percentage: 60.16
            },
            {
                id: '3',
                examName: 'Metriculation',
                board: 'Board Of Secondary Education',
                instName: 'Sivananda Centenary Boy\'s High School',
                yop: 2009,
                percentage: 75.16
            }
        ];
    }
    EducatComponent.prototype.ngOnInit = function () {
    };
    EducatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-educat',
            template: __webpack_require__(/*! ./educat.component.html */ "./src/app/header/educat/educat.component.html"),
            styles: [__webpack_require__(/*! ./educat.component.css */ "./src/app/header/educat/educat.component.css")],
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], EducatComponent);
    return EducatComponent;
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

module.exports = "<mat-card-header>\n    <mat-card-title>\n        <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>work</mat-icon> {{ matHeader }}</h1>\n    </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"dashboard-card-content\">\n    <app-timeline></app-timeline>\n</mat-card-content>"

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
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_animations/index */ "./src/app/_animations/index.ts");
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
            styles: [__webpack_require__(/*! ./expr.component.css */ "./src/app/header/expr/expr.component.css")],
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ExprComponent);
    return ExprComponent;
}());



/***/ }),

/***/ "./src/app/header/expr/timeline/timeline.component.css":
/*!*************************************************************!*\
  !*** ./src/app/header/expr/timeline/timeline.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* The actual timeline (the vertical ruler) */\r\n\r\n.cust-timeline {\r\n    position: relative;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* The actual timeline (the vertical ruler) */\r\n\r\n.cust-timeline::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: #51456d;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n}\r\n\r\n/* Container around content */\r\n\r\n.exp-container {\r\n    padding: 10px 40px;\r\n    position: relative;\r\n    background-color: inherit;\r\n    width: 50%;\r\n}\r\n\r\n/* The circles on the timeline */\r\n\r\n.exp-container::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -14px;\r\n    background-color: white;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n/* Place the container to the left */\r\n\r\n.exp-left {\r\n    left: 0;\r\n}\r\n\r\n/* Place the container to the right */\r\n\r\n.exp-right {\r\n    left: 50%;\r\n}\r\n\r\n/* Add arrows to the left container (pointing right) */\r\n\r\n.exp-left::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent #51456d;\r\n}\r\n\r\n/* Add arrows to the right container (pointing left) */\r\n\r\n.exp-right::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 22px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 30px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #51456d transparent transparent;\r\n}\r\n\r\n/* Fix the circle for containers on the right side */\r\n\r\n.exp-right::after {\r\n    left: -16px;\r\n}\r\n\r\n/* The actual content */\r\n\r\n.exp-content {\r\n    padding: 20px 30px;\r\n    background-color: white;\r\n    position: relative;\r\n    \r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n/* Media queries - Responsive timeline on screens less than 600px wide */\r\n\r\n@media screen and (max-width: 600px) {\r\n  /* Place the timelime to the left */\r\n  .cust-timeline::after {\r\n    left: 31px;\r\n  }\r\n  \r\n  /* Full-width containers */\r\n  .exp-container {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  /* Make sure that all arrows are pointing leftwards */\r\n  .exp-container::before {\r\n    left: 60px;\r\n    border: medium solid white;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #51456d transparent transparent;\r\n  }\r\n\r\n  /* Make sure all circles are at the same spot */\r\n  .exp-left::after, .exp-right::after {\r\n    left: 18px;\r\n  }\r\n  \r\n  /* Make all right containers behave like the left ones */\r\n  .exp-right {\r\n    left: 0%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/header/expr/timeline/timeline.component.html":
/*!**************************************************************!*\
  !*** ./src/app/header/expr/timeline/timeline.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cust-timeline\" *ngFor=\"let exper of experiences\">\n    <div class=\"exp-container\" [ngClass]=\"exper.alignItem\">\n      <div class=\"exp-content\">\n        <h2 style=\"font-weight: 400\">{{ exper.desig }}</h2>\n        <p><b>{{ exper.yrs }}</b></p>\n        <p style=\"color: purple\"><b>Company:</b> Software AG</p>\n        <p style=\"text-align: justify; width: 100%\">{{ exper.prof_desc }}</p>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/header/expr/timeline/timeline.component.ts":
/*!************************************************************!*\
  !*** ./src/app/header/expr/timeline/timeline.component.ts ***!
  \************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.experiences = [
            { alignItem: 'exp-left', desig: 'Angular Developer', yrs: 'June 2017 - Nov 2018', prof_desc: 'Developing API for WebMethods Integration Platform so that users can dragAndDrop different services.It will keep tracking of tree like structure folder within packages.Used Angular 2-6, Html5, CSS3, Javascript.' },
            /*    {alignItem: 'exp-right', desig: 'Spring Boot Developer', yrs: 'Oct 2017 - Oct 2018', prof_desc: 'Designing, developing, and managing complex rest full web services using Spring Boot, Core Java and MySQL.Worked on WebMethods Integration Platform to provide access to rest full web services.'},*/
            { alignItem: 'exp-right', desig: 'WebMethods Developer', yrs: 'Aug 2017 - Oct 2018', prof_desc: 'Designing, Developing, Implementation and troubleshooting of applications. Managing large and complex projects or multiple components with smooth implementation and testing of application. Creating packages for product flow using existing services for functional use.' },
            { alignItem: 'exp-left', desig: 'Testing', yrs: 'Apr 2017 - Jul 2018', prof_desc: 'Creating jenkins jobs for product CNl, written test set for WebMethods Service Development in Junits. Testing products in environment like Linux(susse,redhat)/ Mac/ Windows. Correcting existing QFT test suite. Excellence in worked with agile methodology.' },
        ];
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/header/expr/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/header/expr/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*****************************\n  sidenav content goes below\n******************************/\n.sidenav-container {\n  height: 100%;\n}\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(9, 9, 29, 0.2);\n}\nmat-sidenav{\n  background: #51456d;\n}\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.spacer{\n  flex: 1 1 auto;\n}\nmat-toolbar{\n  background: #51456d !important;\n  cursor: pointer;\n}\nmat-toolbar a{\n  display: inline-block;\n  margin: 1px 10px;\n  color: white;\n  text-decoration: none;\n  font-size: 0.8em !important;\n}\nmat-nav-list a{\n  color: #fff !important;\n  border-top: 0.4px solid #535158;\n}\nmat-nav-list a mat-icon{\n  font-size: 16px;\n}\nimg{\n  margin: 0% 10%;\n  max-width: 10rem;\n  max-height: 10rem;\n  border: .5rem solid rgba(231,233,239,.2);\n  border-radius:70%;\n  cursor: pointer;\n}\n@media (max-width: 768px){\n  mat-toolbar a{\n    display:none;\n  }\n}\nmat-sidenav i {\n  margin-left: 1.2em;\n  display: inline-block; \n  color: #abb0c7;\n}\nmat-sidenav i:hover{\n  color: #fff;\n  cursor: pointer;\n}\nmat-sidenav i .custom-tooltip-black{\n  background: #000 !important;\n}\n.social-icon{\n  margin: 20px;\n}\nmat-card{\n  box-shadow: none !important;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Nitesh Kumar Sharma</mat-toolbar>\n    \n    <img src=\"https://i.postimg.cc/0bhMjx45/nit.jpg\"><br/>\n    <div class=\"social-icon\">\n      <a href=\"https://www.linkedin.com/in/nitesh-sharma-7194195b/\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" matTooltip=\"linkedin\" matTooltipClass=\"custom-tooltip-black\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://github.com/nitesh663/DAILY/\" target=\"_blank\"><i class=\"fa fa-github fa-lg\" matTooltip=\"github\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://www.facebook.com/niteshdsuperboy\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" matTooltip=\"facebook\" aria-hidden=\"true\"></i></a>\n      <a href=\"https://twitter.com/nitesh663\" target=\"_blank\"><i class=\"fa fa-twitter fa-lg\" matTooltip=\"twitter\" aria-hidden=\"true\"></i></a>\n    </div>\n    <!--<p style=\"color: #bfab43; text-align: center\">Nitesh Kumar Sharma</p>-->\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/\"><mat-icon>border_color</mat-icon>About</a>\n      <a mat-list-item routerLink=\"/skill-set\"><mat-icon>restaurant_menu</mat-icon>Skills</a>\n      <a mat-list-item routerLink=\"/exp\"><mat-icon>work</mat-icon>Experience</a>\n      <a mat-list-item routerLink=\"/edu\"><mat-icon>school</mat-icon>Education</a>\n      <!-- <a mat-list-item routerLink=\"/intr\"><mat-icon>style</mat-icon>Interests</a>\n      <a mat-list-item><mat-icon>beenhere</mat-icon>Certification</a> -->\n      <a mat-list-item routerLink=\"/contact\"><mat-icon>contacts</mat-icon>Contact</a>\n    </mat-nav-list>\n    <footer style=\"padding-top: 3em; text-align:center; color: #e1f5ee;\">\n        <h5 style=\"font-weight: 20\">© 2018 Angular Developer</h5>\n    </footer>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span style=\"cursor: pointer\" routerLink=\"/\"><mat-icon>home</mat-icon></span>\n      <span class=\"spacer\"></span>\n      <a routerLink=\"/\">About</a>\n      <a routerLink=\"/skill-set\">Skills</a>\n      <a routerLink=\"/exp\">Experience</a>\n      <a routerLink=\"/edu\">Education</a>\n      <!-- <a routerLink=\"/intr\">Interests</a>\n      <a >Certification</a> -->\n      <a routerLink=\"/contact\">Contact</a>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <mat-card>\n        <router-outlet>\n          \n        </router-outlet>\n    </mat-card>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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

/***/ "./src/app/header/interest/interest.component.css":
/*!********************************************************!*\
  !*** ./src/app/header/interest/interest.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/interest/interest.component.html":
/*!*********************************************************!*\
  !*** ./src/app/header/interest/interest.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n    <mat-card-title>\n        <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>style</mat-icon> {{ matHeader }}</h1>\n    </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"dashboard-card-content\">\n    \n</mat-card-content>"

/***/ }),

/***/ "./src/app/header/interest/interest.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/header/interest/interest.component.ts ***!
  \*******************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
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


var InterestComponent = /** @class */ (function () {
    function InterestComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.matHeader = 'Interests & Hobbies';
    }
    InterestComponent.prototype.ngOnInit = function () {
    };
    InterestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interest',
            template: __webpack_require__(/*! ./interest.component.html */ "./src/app/header/interest/interest.component.html"),
            styles: [__webpack_require__(/*! ./interest.component.css */ "./src/app/header/interest/interest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], InterestComponent);
    return InterestComponent;
}());



/***/ }),

/***/ "./src/app/header/skill-set/skill-set.component.css":
/*!**********************************************************!*\
  !*** ./src/app/header/skill-set/skill-set.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-start{/*!*/}@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}.custom-slider{\r\n     margin-top: 8%;\r\n}mat-grid-tile {\r\n    background: rgb(81, 69, 109);\r\n}.mat-slider-horizontal{\r\n    min-width: 80%;\r\n}"

/***/ }),

/***/ "./src/app/header/skill-set/skill-set.component.html":
/*!***********************************************************!*\
  !*** ./src/app/header/skill-set/skill-set.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header [ngStyle]=\"{'text-align': 'center'}\">\n    <mat-card-title>\n        <h1 style=\"color:#51456d;font-weight: 350\"><mat-icon>restaurant_menu</mat-icon> {{ matHeader }}</h1>\n    </mat-card-title>\n</mat-card-header>\n<mat-card-content class=\"dashboard-card-content\">\n    <!--<h2 class=\"example-h2\">Angular</h2>-->\n    <mat-grid-list cols=\"4\" rowHeight=\"90px\">\n        <mat-grid-tile\n            *ngFor=\"let tile of tiles\"\n            [colspan]=\"tile.cols\"\n            [rowspan]=\"tile.rows\"\n            [style.background]=\"tile.color\">\n            <h5 style=\"color: #fff;font-weight: 200\">{{tile.value}}%</h5>\n            <mat-slider class=\"custom-slider\" [thumbLabel]=\"true\" [(ngModel)]=\"tile.value\"></mat-slider>\n            <mat-grid-tile-header>\n              {{tile.text}}\n            </mat-grid-tile-header>\n        </mat-grid-tile>\n      </mat-grid-list>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/header/skill-set/skill-set.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/skill-set/skill-set.component.ts ***!
  \*********************************************************/
/*! exports provided: SkillSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSetComponent", function() { return SkillSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_animations/index */ "./src/app/_animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillSetComponent = /** @class */ (function () {
    function SkillSetComponent() {
        this.matHeader = 'My Skills';
        this.red = 'red';
        this.custColor = 'red';
        this.tiles = [
            { text: 'Angular', cols: 2, rows: 2, color: '#4c4069', value: 80 },
            { text: 'Javascript', cols: 2, rows: 2, color: '#4c4069', value: 70 },
            { text: 'Spring Boot', cols: 2, rows: 2, color: '#4c4069', value: 60 },
            { text: 'Java', cols: 2, rows: 2, color: '#4c4069', value: 90 },
            { text: 'Html5', cols: 2, rows: 2, color: '#4c4069', value: 90 },
            { text: 'CSS3', cols: 2, rows: 2, color: '#4c4069', value: 80 }
        ];
    }
    SkillSetComponent.prototype.ngOnInit = function () {
    };
    SkillSetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill-set',
            template: __webpack_require__(/*! ./skill-set.component.html */ "./src/app/header/skill-set/skill-set.component.html"),
            styles: [__webpack_require__(/*! ./skill-set.component.css */ "./src/app/header/skill-set/skill-set.component.css")],
            animations: [_animations_index__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], SkillSetComponent);
    return SkillSetComponent;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"]
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