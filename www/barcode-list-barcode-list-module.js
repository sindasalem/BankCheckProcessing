(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["barcode-list-barcode-list-module"],{

/***/ "./src/app/barcode-list/barcode-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/barcode-list/barcode-list.module.ts ***!
  \*****************************************************/
/*! exports provided: BarcodeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeListModule", function() { return BarcodeListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _barcode_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-list.page */ "./src/app/barcode-list/barcode-list.page.ts");







var BarcodeListModule = /** @class */ (function () {
    function BarcodeListModule() {
    }
    BarcodeListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _barcode_list_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeListPage"]
                    }
                ])
            ],
            declarations: [_barcode_list_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeListPage"]]
        })
    ], BarcodeListModule);
    return BarcodeListModule;
}());



/***/ }),

/***/ "./src/app/barcode-list/barcode-list.page.html":
/*!*****************************************************!*\
  !*** ./src/app/barcode-list/barcode-list.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Accepted Barcode Formats\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <li *ngFor=\"let barcode of barcodes\" style=\"list-style: none;\">\n        <ion-item style=\"display: block;\">\n            <ion-label>{{barcode.key}}</ion-label>\n            <ion-toggle value=\"{{barcode.key}}\" checked=\"{{barcode.value}}\" (ionChange)=\"onChange($event)\"></ion-toggle>\n        </ion-item>\n    </li>\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/barcode-list/barcode-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/barcode-list/barcode-list.page.ts ***!
  \***************************************************/
/*! exports provided: BarcodeListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeListPage", function() { return BarcodeListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scanbot_sdk_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scanbot-sdk-demo.service */ "./src/app/services/scanbot-sdk-demo.service.ts");
/* harmony import */ var _services_dialogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dialogs.service */ "./src/app/services/dialogs.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_barcode_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/barcode-list.service */ "./src/app/services/barcode-list.service.ts");
/* harmony import */ var _services_image_results_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/image-results.repository */ "./src/app/services/image-results.repository.ts");








var BarcodeListPage = /** @class */ (function () {
    function BarcodeListPage(scanbotService, imageResultsRepository, dialogsService, router, route, actionSheetController) {
        this.scanbotService = scanbotService;
        this.imageResultsRepository = imageResultsRepository;
        this.dialogsService = dialogsService;
        this.router = router;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.barcodes = [];
        this.barcodes = _services_barcode_list_service__WEBPACK_IMPORTED_MODULE_6__["BarcodeListService"].items;
    }
    BarcodeListPage.prototype.onChange = function ($event) {
        var format = $event.detail.value;
        var isChecked = $event.detail.checked;
        _services_barcode_list_service__WEBPACK_IMPORTED_MODULE_6__["BarcodeListService"].update(format, isChecked);
    };
    BarcodeListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barcode-list',
            template: __webpack_require__(/*! ./barcode-list.page.html */ "./src/app/barcode-list/barcode-list.page.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scanbot_sdk_demo_service__WEBPACK_IMPORTED_MODULE_2__["ScanbotSdkDemoService"],
            _services_image_results_repository__WEBPACK_IMPORTED_MODULE_7__["ImageResultsRepository"],
            _services_dialogs_service__WEBPACK_IMPORTED_MODULE_3__["DialogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], BarcodeListPage);
    return BarcodeListPage;
}());



/***/ })

}]);
//# sourceMappingURL=barcode-list-barcode-list-module.js.map