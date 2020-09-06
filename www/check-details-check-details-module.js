(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-details-check-details-module"],{

/***/ "./src/app/check-details/check-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/check-details/check-details.module.ts ***!
  \*******************************************************/
/*! exports provided: CheckDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDetailsPageModule", function() { return CheckDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-details.page */ "./src/app/check-details/check-details.page.ts");







var routes = [
    {
        path: '',
        component: _check_details_page__WEBPACK_IMPORTED_MODULE_6__["CheckDetailsPage"]
    }
];
var CheckDetailsPageModule = /** @class */ (function () {
    function CheckDetailsPageModule() {
    }
    CheckDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_check_details_page__WEBPACK_IMPORTED_MODULE_6__["CheckDetailsPage"]]
        })
    ], CheckDetailsPageModule);
    return CheckDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/check-details/check-details.page.html":
/*!*******************************************************!*\
  !*** ./src/app/check-details/check-details.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n          Items Recognition Result\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n\n    <img src=\"assets/img/cheque1.png\"/>\n\n    <ion-item>\n      <div>\n      <h2>RIB</h2>\n      <br>\n      <p>{{myData.rib}}</p>\n    </div>\n    </ion-item>\n    <ion-item>\n      <div>\n      <h2>Numéro de Cheque</h2>\n      <br>\n      <p>{{myData.num}}</p>\n    </div>\n    </ion-item>\n    <ion-item>\n      <div>\n      <h2>Num de Compte </h2>\n      <br>\n      <p>6789123456</p>\n      </div>\n    </ion-item>\n    <ion-item>\n      <div>\n      <h2>Banque</h2>\n      <br>\n      <p> BIAT</p>\n    </div>\n    </ion-item>\n    <ion-item>\n    <div>\n      <h2>Agence</h2>\n      <br>\n      <p> Menzah5 </p>\n    </div>\n    </ion-item>\n    \n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/check-details/check-details.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/check-details/check-details.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrLWRldGFpbHMvY2hlY2stZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/check-details/check-details.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/check-details/check-details.page.ts ***!
  \*****************************************************/
/*! exports provided: CheckDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDetailsPage", function() { return CheckDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-transfer.service */ "./src/app/data-transfer.service.ts");




var CheckDetailsPage = /** @class */ (function () {
    function CheckDetailsPage(router, sharingService) {
        this.router = router;
        this.sharingService = sharingService;
    }
    CheckDetailsPage.prototype.ngOnInit = function () {
        this.myData = this.sharingService.sharingValue;
        console.log(this.myData);
    };
    CheckDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-details',
            template: __webpack_require__(/*! ./check-details.page.html */ "./src/app/check-details/check-details.page.html"),
            styles: [__webpack_require__(/*! ./check-details.page.scss */ "./src/app/check-details/check-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"]])
    ], CheckDetailsPage);
    return CheckDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=check-details-check-details-module.js.map