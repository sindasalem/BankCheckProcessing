(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["barcode-result-list-barcode-result-list-module"],{

/***/ "./src/app/barcode-result-list/barcode-result-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/barcode-result-list/barcode-result-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: BarcodeResultListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeResultListPageModule", function() { return BarcodeResultListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _barcode_result_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-result-list.page */ "./src/app/barcode-result-list/barcode-result-list.page.ts");







var BarcodeResultListPageModule = /** @class */ (function () {
    function BarcodeResultListPageModule() {
    }
    BarcodeResultListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _barcode_result_list_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeResultListPage"]
                    }
                ])
            ],
            declarations: [_barcode_result_list_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeResultListPage"]]
        })
    ], BarcodeResultListPageModule);
    return BarcodeResultListPageModule;
}());



/***/ }),

/***/ "./src/app/barcode-result-list/barcode-result-list.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/barcode-result-list/barcode-result-list.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Detected Barcodes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf=\"imageSourceUri\" style=\"margin: 1%; width: 98%; height: 50%; text-align: center; background-color: rgb(245, 245, 245)\">\n        <img style=\"max-width:100%; max-height:100%; vertical-align: middle;\" [src]=\"imageSourceUri\"/>\n    </div>\n\n    <li *ngFor=\"let barcode of barcodes\" style=\"list-style: none;\">\n        <ion-item style=\"flex: 1; flex-direction: column\">\n            <div style=\"flex: 1; flex-direction: row\">\n                <ion-label\n                        style=\"margin-left: 0.5em; font-size: 0.8em; font-weight: 600;\">\n                    {{barcode.type}}\n                </ion-label>\n                <ion-label\n                        style=\"margin-left: 0.5em; font-size: 0.8em; font-weight: 400; white-space: pre-wrap\">\n                    {{barcode.text ? barcode.text.trim() : \"\" }}\n                </ion-label>\n            </div>\n        </ion-item>\n    </li>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/barcode-result-list/barcode-result-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/barcode-result-list/barcode-result-list.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcmNvZGUtcmVzdWx0LWxpc3QvYmFyY29kZS1yZXN1bHQtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/barcode-result-list/barcode-result-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/barcode-result-list/barcode-result-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: BarcodeResultListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeResultListPage", function() { return BarcodeResultListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_barcode_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/barcode-list.service */ "./src/app/services/barcode-list.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var BarcodeResultListPage = /** @class */ (function () {
    function BarcodeResultListPage(sanitizer) {
        this.sanitizer = sanitizer;
        this.barcodes = [];
        if (_services_barcode_list_service__WEBPACK_IMPORTED_MODULE_2__["BarcodeListService"].snappedImage) {
            this.imageSourceUri = this.sanitizeFileUri(_services_barcode_list_service__WEBPACK_IMPORTED_MODULE_2__["BarcodeListService"].snappedImage);
        }
        this.barcodes = _services_barcode_list_service__WEBPACK_IMPORTED_MODULE_2__["BarcodeListService"].detectedBarcodes;
    }
    BarcodeResultListPage.prototype.sanitizeFileUri = function (fileUri) {
        // see https://ionicframework.com/docs/building/webview/#file-protocol
        var convertedUri = window.Ionic.WebView.convertFileSrc(fileUri);
        // see https://angular.io/guide/security#bypass-security-apis
        return this.sanitizer.bypassSecurityTrustUrl(convertedUri);
    };
    BarcodeResultListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barcode-result-list',
            template: __webpack_require__(/*! ./barcode-result-list.page.html */ "./src/app/barcode-result-list/barcode-result-list.page.html"),
            styles: [__webpack_require__(/*! ./barcode-result-list.page.scss */ "./src/app/barcode-result-list/barcode-result-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], BarcodeResultListPage);
    return BarcodeResultListPage;
}());



/***/ })

}]);
//# sourceMappingURL=barcode-result-list-barcode-result-list-module.js.map