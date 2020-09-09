(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["image-view-image-view-module"],{

/***/ "./src/app/image-view/image-view.module.ts":
/*!*************************************************!*\
  !*** ./src/app/image-view/image-view.module.ts ***!
  \*************************************************/
/*! exports provided: ImageViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewPageModule", function() { return ImageViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-view.page */ "./src/app/image-view/image-view.page.ts");







var ImageViewPageModule = /** @class */ (function () {
    function ImageViewPageModule() {
    }
    ImageViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _image_view_page__WEBPACK_IMPORTED_MODULE_6__["ImageViewPage"]
                    }
                ])
            ],
            declarations: [_image_view_page__WEBPACK_IMPORTED_MODULE_6__["ImageViewPage"]]
        })
    ], ImageViewPageModule);
    return ImageViewPageModule;
}());



/***/ }),

/***/ "./src/app/image-view/image-view.page.html":
/*!*************************************************!*\
  !*** ./src/app/image-view/image-view.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"image-results\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Image View\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <img [src]='page.sanitizedDocumentPreviewImage' />\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"startCroppingScreen()\">\n                <ion-icon slot=\"start\" name=\"crop\"></ion-icon>\n                Crop / Rotate\n            </ion-button>\n            <ion-button (click)=\"upload()\">\n                <ion-icon slot=\"start\" name=\"contrast\"></ion-icon>\n                Process Cheque\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"deletePage()\">\n                <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n                Delete\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/image-view/image-view.page.ts":
/*!***********************************************!*\
  !*** ./src/app/image-view/image-view.page.ts ***!
  \***********************************************/
/*! exports provided: ImageViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewPage", function() { return ImageViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_dialogs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dialogs.service */ "./src/app/services/dialogs.service.ts");
/* harmony import */ var _services_scanbot_sdk_demo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/scanbot-sdk-demo.service */ "./src/app/services/scanbot-sdk-demo.service.ts");
/* harmony import */ var _services_image_results_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/image-results.repository */ "./src/app/services/image-results.repository.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _data_transfer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data-transfer.service */ "./src/app/data-transfer.service.ts");













var ImageViewPage = /** @class */ (function () {
    function ImageViewPage(scanbotService, imageResultsRepository, dialogsService, router, route, actionSheetController, http, base64, dataTransferService, loadingCtrl) {
        this.scanbotService = scanbotService;
        this.imageResultsRepository = imageResultsRepository;
        this.dialogsService = dialogsService;
        this.router = router;
        this.route = route;
        this.actionSheetController = actionSheetController;
        this.http = http;
        this.base64 = base64;
        this.dataTransferService = dataTransferService;
        this.loadingCtrl = loadingCtrl;
        this.imageFilterList = [
            'NONE',
            'COLOR_ENHANCED',
            'GRAYSCALE',
            'BINARIZED',
            'COLOR_DOCUMENT',
            'PURE_BINARIZED',
            'BACKGROUND_CLEAN',
            'BLACK_AND_WHITE',
            'OTSU_BINARIZATION',
            'DEEP_BINARIZATION',
            'EDGE_HIGHLIGHT',
            'LOW_LIGHT_BINARIZATION',
            'LOW_LIGHT_BINARIZATION_2',
        ];
    }
    ImageViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(params.get('pageId')); })).subscribe(function (pageId) {
            _this.page = _this.imageResultsRepository.getPageById(pageId);
        });
    };
    ImageViewPage.prototype.startCroppingScreen = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scanbotService.checkLicense()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.scanbotService.SDK.UI.startCroppingScreen({
                                page: this.page,
                                uiConfigs: {
                                    // Customize colors, text resources, behavior, etc..
                                    doneButtonTitle: 'Save',
                                    orientationLockMode: 'PORTRAIT'
                                    // ...
                                }
                            })];
                    case 2:
                        result = _a.sent();
                        if (result.status === 'CANCELED') {
                            return [2 /*return*/];
                        }
                        this.updatePage(result.page);
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageViewPage.prototype.deletePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scanbotService.SDK.removePage({ page: this.page })];
                    case 1:
                        _a.sent();
                        this.imageResultsRepository.removePage(this.page);
                        return [4 /*yield*/, this.router.navigate(['/image-results'])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageViewPage.prototype.updatePage = function (page) {
        this.page = this.imageResultsRepository.updatePage(page);
    };
    ImageViewPage.prototype.showFilterSelection = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var buttons, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [];
                        this.imageFilterList.forEach(function (f) {
                            buttons.push({
                                text: f,
                                handler: function () { _this.applyImageFilter(f); }
                            });
                        });
                        buttons.push({
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () { }
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Select an Image Filter',
                                buttons: buttons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageViewPage.prototype.applyImageFilter = function (filter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scanbotService.checkLicense()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.dialogsService.createLoading('Applying image filter ...')];
                    case 2:
                        loading = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, , 5, 7]);
                        loading.present();
                        return [4 /*yield*/, this.scanbotService.SDK.applyImageFilterOnPage({ page: this.page, imageFilter: filter })];
                    case 4:
                        result = _a.sent();
                        this.updatePage(result.page);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, loading.dismiss()];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ImageViewPage.prototype.upload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, date, imageName;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            message: 'Please wait...',
                        });
                        return [4 /*yield*/, loading];
                    case 1:
                        (_a.sent()).present();
                        url = 'http://10.0.2.2:5000/upload';
                        date = new Date().valueOf();
                        imageName = date + '.jpeg';
                        // call method that creates a blob from dataUri
                        //console.log(this.page.documentImageFileUri)
                        this.base64.encodeFile(this.page.documentImageFileUri).then(function (base64File) {
                            //console.log(base64File);
                            var imageBlob = _this.dataURItoBlob(base64File);
                            var imageFile = new File([imageBlob], imageName, { type: 'image/jpg' });
                            var postData = new FormData();
                            var blob = new Blob([imageBlob], { type: 'image/jpg' });
                            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]();
                            headers.append('Content-Type', 'multipart/form-data');
                            postData.append('file', blob, imageName);
                            _this.http.post(url, postData, { headers: headers })
                                .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log(data);
                                            this.dataTransferService.sharingValue = data;
                                            this.dataTransferService.sharingImage = this.page;
                                            return [4 /*yield*/, loading];
                                        case 1:
                                            (_a.sent()).dismiss();
                                            this.router.navigate(['/check-details']);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, loading];
                                        case 1:
                                            (_a.sent()).dismiss();
                                            console.log(error);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(err);
                                        return [4 /*yield*/, loading];
                                    case 1:
                                        (_a.sent()).dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageViewPage.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    };
    ImageViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-view',
            template: __webpack_require__(/*! ./image-view.page.html */ "./src/app/image-view/image-view.page.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scanbot_sdk_demo_service__WEBPACK_IMPORTED_MODULE_7__["ScanbotSdkDemoService"],
            _services_image_results_repository__WEBPACK_IMPORTED_MODULE_8__["ImageResultsRepository"],
            _services_dialogs_service__WEBPACK_IMPORTED_MODULE_6__["DialogsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__["Base64"],
            _data_transfer_service__WEBPACK_IMPORTED_MODULE_11__["DataTransferService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ImageViewPage);
    return ImageViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=image-view-image-view-module.js.map