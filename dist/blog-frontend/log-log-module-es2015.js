(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-log-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log/log.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>log works!</p>\n"

/***/ }),

/***/ "./src/app/log/log-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/log/log-routing.module.ts ***!
  \*******************************************/
/*! exports provided: LogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRoutingModule", function() { return LogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let LogRoutingModule = class LogRoutingModule {
};
LogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogRoutingModule);



/***/ }),

/***/ "./src/app/log/log.component.sass":
/*!****************************************!*\
  !*** ./src/app/log/log.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy9sb2cuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogComponent = class LogComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'blog-fe-log',
        template: __webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html"),
        styles: [__webpack_require__(/*! ./log.component.sass */ "./src/app/log/log.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogComponent);



/***/ }),

/***/ "./src/app/log/log.module.ts":
/*!***********************************!*\
  !*** ./src/app/log/log.module.ts ***!
  \***********************************/
/*! exports provided: LogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModule", function() { return LogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-routing.module */ "./src/app/log/log-routing.module.ts");
/* harmony import */ var _log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.component */ "./src/app/log/log.component.ts");





let LogModule = class LogModule {
};
LogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_component__WEBPACK_IMPORTED_MODULE_4__["LogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _log_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogRoutingModule"]
        ]
    })
], LogModule);



/***/ })

}]);
//# sourceMappingURL=log-log-module-es2015.js.map