webpackJsonp([2],{

/***/ "../../../../../frontend lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../frontend lazy recursive";

/***/ }),

/***/ "../../../../../frontend/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../frontend/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../frontend/app/app.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../frontend/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../frontend/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__areas_user_services_user_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__areas_user_services_auth_guard_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rxjs_extensions__ = __webpack_require__("../../../../../frontend/app/rxjs-extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__areas_user_index__ = __webpack_require__("../../../../../frontend/app/areas/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__areas_main_index__ = __webpack_require__("../../../../../frontend/app/areas/main/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__areas_pages_magazines_index__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__areas_pages_about_index__ = __webpack_require__("../../../../../frontend/app/areas/pages/about/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Add the RxJS Observable operators we need in this app.






Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var CustomErrorHandler = (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.call = function (error, stackTrace, reason) {
        if (stackTrace === void 0) { stackTrace = null; }
        if (reason === void 0) { reason = null; }
        console.log(error + "\n" + stackTrace);
    };
    CustomErrorHandler.prototype.handleError = function (error) {
        console.log(error);
    };
    return CustomErrorHandler;
}());
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__areas_user_index__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_14__areas_main_index__["MainModule"],
            __WEBPACK_IMPORTED_MODULE_15__areas_pages_magazines_index__["MagazinesModule"],
            __WEBPACK_IMPORTED_MODULE_16__areas_pages_about_index__["b" /* AboutModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["APP_BASE_HREF"], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_10__areas_user_services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__areas_user_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__infrastructure_index__["b" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_12__infrastructure_index__["a" /* CommonService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../frontend/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__areas_user_components_login_login_component__ = __webpack_require__("../../../../../frontend/app/areas/user/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__areas_user_services_auth_guard_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__areas_main_components_main_page_main_page_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__areas_pages_about_index__ = __webpack_require__("../../../../../frontend/app/areas/pages/about/index.ts");





var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__areas_user_components_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__areas_main_components_main_page_main_page_component__["a" /* MainPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__areas_user_services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '', canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__areas_user_services_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    { path: '', redirectTo: 'default', pathMatch: 'full' },
                    { path: 'magazinesroute/:id', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["MagazinesRoutePageComponent"] },
                    {
                        path: 'magazines/:id', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["MagazinesMasterComponent"],
                        children: [
                            {
                                path: '', canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__areas_user_services_auth_guard_service__["a" /* AuthGuard */]],
                                children: [
                                    { path: '', redirectTo: 'default', pathMatch: 'full' },
                                    { path: 'default', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["DefaultPageComponent"] },
                                    { path: '77001', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["Documents77001Component"] },
                                    { path: '77002', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["Documents77002Component"] },
                                    { path: '77003', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["Documents77003Component"] },
                                    { path: '77004', component: __WEBPACK_IMPORTED_MODULE_3__areas_pages_magazines_index__["Documents77004Component"] }
                                ]
                            }
                        ]
                    },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__areas_pages_about_index__["a" /* AboutComponent */] }
                ]
            }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__areas_user_components_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__areas_user_components_login_login_component__["a" /* LoginComponent */] }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <main-menu></main-menu>\n</div>\n<div>\n    <main-page-content></main-page-content>\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-body',
        template: __webpack_require__("../../../../../frontend/app/areas/main/components/body/body.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/main/components/body/body.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BodyComponent);

//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main-body></main-body>"

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-page',
        template: __webpack_require__("../../../../../frontend/app/areas/main/components/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/main/components/main-page/main-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainPageComponent);

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu_controls\" style=\"height:30px\">\n    <ej-menu id=\"menu\" width=\"500px\" \n             height=\"30px\"\n             [fields.dataSource]=\"mainMenu\" \n             [fields]=\"fieldsvalues\"\n             (ejclick)=\"onClick($event)\">\n    </ej-menu>\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(router, mainService) {
        this.router = router;
        this.mainService = mainService;
        this.mainMenu = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.mainMenu = this.mainService.mainMenu;
        this.fieldsvalues = {
            dataSource: this.mainMenu,
            parentId: "ParentID",
            id: "Id",
            text: "MenuCaption"
        };
    };
    MenuComponent.prototype.onClick = function (args) {
        if (args.ID != undefined) {
            this.selectedItem = this.mainMenu.filter(function (p) { return p.Id == args.ID; })[0];
            this.itemTypeInt = this.selectedItem.ItemTypeInt;
            if (this.itemTypeInt == 1) {
                //console.log(this.selectedItem.MenuCaption + ":" + this.selectedItem.PageRoute);
                this.router.navigate(['/' + this.selectedItem.PageRoute]);
            }
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-menu',
        template: __webpack_require__("../../../../../frontend/app/areas/main/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/main/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/page-content/page-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/page-content/page-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-style\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/main/components/page-content/page-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageContentComponent = (function () {
    function PageContentComponent() {
    }
    PageContentComponent.prototype.ngOnInit = function () {
    };
    return PageContentComponent;
}());
PageContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-page-content',
        template: __webpack_require__("../../../../../frontend/app/areas/main/components/page-content/page-content.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/main/components/page-content/page-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageContentComponent);

//# sourceMappingURL=page-content.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_module__ = __webpack_require__("../../../../../frontend/app/areas/main/main.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return __WEBPACK_IMPORTED_MODULE_0__main_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/main.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menu_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/menu.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_main_interface__ = __webpack_require__("../../../../../frontend/app/areas/main/interfaces/main.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_main_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_main_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_menu_interface__ = __webpack_require__("../../../../../frontend/app/areas/main/interfaces/menu.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_menu_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_menu_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_body_body_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/body/body.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_page_main_page_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/main-page/main-page.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_menu_menu_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/menu/menu.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_content_page_content_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/page-content/page-content.component.ts");
/* unused harmony namespace reexport */









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/interfaces/main.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=main.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/interfaces/menu.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=menu.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_main_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_menu_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_body_body_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_page_main_page_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_content_page_content_component__ = __webpack_require__("../../../../../frontend/app/areas/main/components/page-content/page-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_content_page_content_component__["a" /* PageContentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ej_angular2__["EJAngular2Module"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_7__services_menu_service__["a" /* MenuService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__components_body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_content_page_content_component__["a" /* PageContentComponent */]
        ]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = (function () {
    function MainService(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.operations = [];
        this.mainMenu = [];
        this.baseUrl = configService.getApiURI('main');
    }
    MainService.prototype.getOperations = function () {
        var _this = this;
        return this.http.get(this.baseUrl, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    return MainService;
}());
MainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], MainService);

var _a, _b, _c;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/main/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI('mainmenu');
    }
    MenuService.prototype.getMainMenu = function () {
        var _this = this;
        return this.http.get(this.baseUrl, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    return MenuService;
}());
MenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], MenuService);

var _a, _b, _c;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/about/components/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components_about_component__["a" /* AboutComponent */]
        ],
        imports: [],
        providers: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__components_about_component__["a" /* AboutComponent */]
        ]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/about/components/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.info {\r\n\tcolor: navy;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/about/components/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p class='info'>Valentin Bronasco</p>\r\n<p class='info'>Email : v.bronasco@gmail.com</p>\r\n<h4>It is an example of a real world application Angular (4) + Asp Net Core 1.x</h4>\r\n<h4>Thanks to ...</h4>\r\n<p> Mark Zamoyta - Building a Responsive SPA Framework with Angular (Pluralsight)</p>\r\n<p>Valerio De Sanctis - https://github.com/PacktPublishing/ASPdotNET-Core-and-Angular-2</p>\r\n<h4>How to work ...</h4>\r\n<p>-------------New document-----------------</p>\r\n<p>Push button New document, select operation, push Save</p>\r\n<p>-------------Update document-----------------</p>\r\n<p>Push button Update document, select row, push F4 and edit values, push button Save</p>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/about/components/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/about/components/about.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/about/components/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/about/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_module__ = __webpack_require__("../../../../../frontend/app/areas/pages/about/about.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__about_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/about/components/about.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_about_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ej-toolbar #toolControls id=\"toolControls\" [dataSource]=\"toolControlsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\">\r\n\t</ej-toolbar>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultPageComponent = (function () {
    function DefaultPageComponent(magazinesService) {
        this.magazinesService = magazinesService;
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolControlsData = magazinesService.toolControlsData;
    }
    DefaultPageComponent.prototype.ngOnInit = function () {
    };
    DefaultPageComponent.prototype.ngAfterViewInit = function () {
        $("#toolControls").ejToolbar("disableItemByID", "iEmpty");
        $("#toolControls").ejToolbar("disableItemByID", "iUpdate");
        $("#toolControls").ejToolbar("disableItemByID", "iRefresh");
    };
    return DefaultPageComponent;
}());
DefaultPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-default-page',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magazines_service__["a" /* MagazinesService */]) === "function" && _a || Object])
], DefaultPageComponent);

var _a;
//# sourceMappingURL=default-page.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ej-toolbar #toolControls id=\"toolControls\" [dataSource]=\"toolControlsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolControlsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div>\r\n\t<ej-toolbar #toolEdits id=\"toolEdits\" [dataSource]=\"toolEditsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolEditsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-5\">\r\n\t\t<ej-grid #grid id=\"grid\" cssClass=\"standart\" [dataSource]=\"dsDocuments\" allowSelection=\"true\"\r\n\t\t\t\t\t\t [selectionSettings]=\"selectionMode\" allowTextWrap=\"true\" [textWrapSettings]=\"textWrapSettings\"\r\n\t\t\t\t\t\t [editSettings]=\"editSettings\"\r\n\t\t\t\t\t\t [keySettings]=\"keySettings\"\r\n\t\t\t\t\t\t (actionBegin)=\"onActionBegin($event)\"\r\n\t\t\t\t\t\t (actionComplete)=\"onActionComplete($event)\">\r\n\t\t\t<e-columns>\r\n\t\t\t\t<e-column field=\"Id\" [isPrimaryKey]=\"true\" [visible]=\"false\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Parameter\" headerTextAlign=\"left\" headerText=\"Parameters\" width=\"200\" textAlign=\"left\" cssClass=\"col-params\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Data1\" headerTextAlign=\"left\" headerText=\"Data1\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t\t<e-column field=\"Data2\" headerTextAlign=\"left\" headerText=\"Data2\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t</e-columns>\r\n\t\t</ej-grid>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"col-md-7\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documents77001Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Documents77001Component = (function () {
    function Documents77001Component(magazinesService, documentsDepartment1Service) {
        var _this = this;
        this.magazinesService = magazinesService;
        this.documentsDepartment1Service = documentsDepartment1Service;
        this.dsDocuments = [];
        // subscribe
        this.aliveSubscribe = true;
        this.selectionMode = { selectionMode: ["row"] };
        this.textWrapSettings = { wrapMode: ej.Grid.WrapMode.Header };
        this.editSettings = { allowEditing: true, editMode: "normal" };
        this.keySettings = { saveRequest: "13", editRecord: "115", cancelRequest: "27" };
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolControlsData = magazinesService.toolControlsData;
        this.toolEditsData = magazinesService.toolEditsData;
        // custom events
        this.magazinesService.onSaveMagazines.observers.splice(0);
        this.magazinesService
            .onSaveMagazines
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.saveMagazines(p); });
        this.magazinesService.onCancelEdit.observers.splice(0);
        this.magazinesService
            .onCancelEdit
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.cancelEdit(p); });
    }
    Documents77001Component.prototype.ngOnInit = function () {
        this.getData();
    };
    Documents77001Component.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    Documents77001Component.prototype.ngAfterViewInit = function () {
        $("#toolControls").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar({ hide: true });
        this.magazinesService.toolControls = this.toolControls;
        this.magazinesService.grid = this.grid;
    };
    //
    // 
    //
    Documents77001Component.prototype.onToolControlsClick = function (args) {
        if (args.target.id === "iUpdate") {
            this.grid.widget.element.focus();
            try {
                if (this.grid.widget.getRows().length > 0 &&
                    this.grid.widget.getSelectedRows().length == 0) {
                    this.grid.widget.selectRows([0]);
                }
            }
            catch (e) { }
            $("#toolEdits").ejToolbar({ hide: false });
            $("#toolControls").ejToolbar({ hide: true });
        }
        if (args.target.offsetParent != null) {
            if (args.target.offsetParent.id === "iRefresh") {
                this.getData();
                this.magazinesService.setGridMagazinesFocus();
            }
        }
    };
    Documents77001Component.prototype.onToolEditsClick = function (args) {
        if (args.target.id === "iCancel") {
            this.magazinesService.cancelFunction();
        }
        if (this.grid.widget.model.isEdit == false) {
            if (args.target.id === "iSave") {
                this.promiseSaveData();
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iRefresh") {
                    this.getData();
                    this.grid.widget.element.focus();
                }
            }
        }
    };
    Documents77001Component.prototype.onActionBegin = function (args) {
        try {
            if (args.requestType == "beginedit") {
                if (this.toolEdits.widget.model.hide == true) {
                    args.cancel = true;
                }
                else {
                    args.cancel = false;
                }
            }
        }
        catch (e) { }
    };
    Documents77001Component.prototype.onActionComplete = function (args) {
        try {
            if (args.requestType == "save") {
                var length = this.grid.widget.getRows().length;
                if (args.selectedRow < length - 1) {
                    this.grid.widget.selectRows([args.selectedRow]);
                }
                else {
                    this.grid.widget.selectRows([0]);
                }
                this.grid.widget.element.focus();
            }
            if (args.requestType == "cancel") {
                this.grid.widget.element.focus();
            }
        }
        catch (e) { }
    };
    //
    //
    //
    Documents77001Component.prototype.getData = function () {
        this.getDocuments77001(this.magazinesService.magazinesID);
    };
    Documents77001Component.prototype.getDocuments77001 = function (id) {
        var _this = this;
        this.documentsDepartment1Service
            .getDocumentsDepartment1(id)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.dsDocuments = data; }, function (error) { return _this.errorMessage = error; });
    };
    Documents77001Component.prototype.putDocuments77001 = function (data) {
        var _this = this;
        this.documentsDepartment1Service
            .putDocumentsDepartment1(data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.saveData(data); }, function (error) { return _this.errorMessage = error; });
    };
    //
    // save
    //
    Documents77001Component.prototype.promiseSaveData = function () {
        Promise
            .resolve()
            .then(this.putDocuments77001(this.dsDocuments));
    };
    Documents77001Component.prototype.saveData = function (data) {
        this.dsDocuments = data;
        this.magazinesService.saveFunction();
    };
    Documents77001Component.prototype.saveMagazines = function (mode) {
        try {
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.grid.widget.endEdit();
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    Documents77001Component.prototype.cancelEdit = function (mode) {
        try {
            if (this.magazinesService.getEditMode() == true) {
                this.getData();
                this.grid.widget.endEdit();
            }
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    return Documents77001Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], Documents77001Component.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolControls'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _b || Object)
], Documents77001Component.prototype, "toolControls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolEdits'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _c || Object)
], Documents77001Component.prototype, "toolEdits", void 0);
Documents77001Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-77001',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__["a" /* DocumentsDepartment1Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__["a" /* DocumentsDepartment1Service */]) === "function" && _e || Object])
], Documents77001Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=documents-77001.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ej-toolbar #toolControls id=\"toolControls\" [dataSource]=\"toolControlsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolControlsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div>\r\n\t<ej-toolbar #toolEdits id=\"toolEdits\" [dataSource]=\"toolEditsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolEditsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-5\">\r\n\t\t<ej-grid #grid id=\"grid\" cssClass=\"standart\" [dataSource]=\"dsDocuments\" allowSelection=\"true\"\r\n\t\t\t\t\t\t [selectionSettings]=\"selectionMode\" allowTextWrap=\"true\" [textWrapSettings]=\"textWrapSettings\"\r\n\t\t\t\t\t\t [editSettings]=\"editSettings\"\r\n\t\t\t\t\t\t [keySettings]=\"keySettings\"\r\n\t\t\t\t\t\t (actionBegin)=\"onActionBegin($event)\"\r\n\t\t\t\t\t\t (actionComplete)=\"onActionComplete($event)\">\r\n\t\t\t<e-columns>\r\n\t\t\t\t<e-column field=\"Id\" [isPrimaryKey]=\"true\" [visible]=\"false\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Parameter\" headerTextAlign=\"left\" headerText=\"Parameters\" width=\"200\" textAlign=\"left\" cssClass=\"col-params\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Data1\" headerTextAlign=\"left\" headerText=\"Data1\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t\t<e-column field=\"Data2\" headerTextAlign=\"left\" headerText=\"Data2\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t</e-columns>\r\n\t\t</ej-grid>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"col-md-7\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documents77002Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Documents77002Component = (function () {
    function Documents77002Component(magazinesService, documentsDepartment1Service) {
        var _this = this;
        this.magazinesService = magazinesService;
        this.documentsDepartment1Service = documentsDepartment1Service;
        this.dsDocuments = [];
        // subscribe
        this.aliveSubscribe = true;
        this.selectionMode = { selectionMode: ["row"] };
        this.textWrapSettings = { wrapMode: ej.Grid.WrapMode.Header };
        this.editSettings = { allowEditing: true, editMode: "normal" };
        this.keySettings = { saveRequest: "13", editRecord: "115", cancelRequest: "27" };
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolControlsData = magazinesService.toolControlsData;
        this.toolEditsData = magazinesService.toolEditsData;
        // custom events
        this.magazinesService.onSaveMagazines.observers.splice(0);
        this.magazinesService
            .onSaveMagazines
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.saveMagazines(p); });
        this.magazinesService.onCancelEdit.observers.splice(0);
        this.magazinesService
            .onCancelEdit
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.cancelEdit(p); });
    }
    Documents77002Component.prototype.ngOnInit = function () {
        this.getData();
    };
    Documents77002Component.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    Documents77002Component.prototype.ngAfterViewInit = function () {
        $("#toolControls").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar({ hide: true });
        this.magazinesService.toolControls = this.toolControls;
        this.magazinesService.grid = this.grid;
    };
    //
    // 
    //
    Documents77002Component.prototype.onToolControlsClick = function (args) {
        if (args.target.id === "iUpdate") {
            this.grid.widget.element.focus();
            try {
                if (this.grid.widget.getRows().length > 0 &&
                    this.grid.widget.getSelectedRows().length == 0) {
                    this.grid.widget.selectRows([0]);
                }
            }
            catch (e) { }
            $("#toolEdits").ejToolbar({ hide: false });
            $("#toolControls").ejToolbar({ hide: true });
        }
        if (args.target.offsetParent != null) {
            if (args.target.offsetParent.id === "iRefresh") {
                this.getData();
                this.magazinesService.setGridMagazinesFocus();
            }
        }
    };
    Documents77002Component.prototype.onToolEditsClick = function (args) {
        if (args.target.id === "iCancel") {
            this.magazinesService.cancelFunction();
        }
        if (this.grid.widget.model.isEdit == false) {
            if (args.target.id === "iSave") {
                this.promiseSaveData();
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iRefresh") {
                    this.getData();
                    this.grid.widget.element.focus();
                }
            }
        }
    };
    Documents77002Component.prototype.onActionBegin = function (args) {
        try {
            if (args.requestType == "beginedit") {
                if (this.toolEdits.widget.model.hide == true) {
                    args.cancel = true;
                }
                else {
                    args.cancel = false;
                }
            }
        }
        catch (e) { }
    };
    Documents77002Component.prototype.onActionComplete = function (args) {
        try {
            if (args.requestType == "save") {
                var length = this.grid.widget.getRows().length;
                if (args.selectedRow < length - 1) {
                    this.grid.widget.selectRows([args.selectedRow]);
                }
                else {
                    this.grid.widget.selectRows([0]);
                }
                this.grid.widget.element.focus();
            }
            if (args.requestType == "cancel") {
                this.grid.widget.element.focus();
            }
        }
        catch (e) { }
    };
    //
    //
    //
    Documents77002Component.prototype.getData = function () {
        this.getDocuments77002(this.magazinesService.magazinesID);
    };
    Documents77002Component.prototype.getDocuments77002 = function (id) {
        var _this = this;
        this.documentsDepartment1Service
            .getDocumentsDepartment1(id)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.dsDocuments = data; }, function (error) { return _this.errorMessage = error; });
    };
    Documents77002Component.prototype.putDocuments77002 = function (data) {
        var _this = this;
        this.documentsDepartment1Service
            .putDocumentsDepartment1(data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.saveData(data); }, function (error) { return _this.errorMessage = error; });
    };
    //
    // save
    //
    Documents77002Component.prototype.promiseSaveData = function () {
        Promise
            .resolve()
            .then(this.putDocuments77002(this.dsDocuments));
    };
    Documents77002Component.prototype.saveData = function (data) {
        this.dsDocuments = data;
        this.magazinesService.saveFunction();
    };
    Documents77002Component.prototype.saveMagazines = function (mode) {
        try {
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.grid.widget.endEdit();
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    Documents77002Component.prototype.cancelEdit = function (mode) {
        try {
            if (this.magazinesService.getEditMode() == true) {
                this.getData();
                this.grid.widget.endEdit();
            }
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    return Documents77002Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], Documents77002Component.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolControls'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _b || Object)
], Documents77002Component.prototype, "toolControls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolEdits'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _c || Object)
], Documents77002Component.prototype, "toolEdits", void 0);
Documents77002Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-77002',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__["a" /* DocumentsDepartment1Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_documents_department1_service__["a" /* DocumentsDepartment1Service */]) === "function" && _e || Object])
], Documents77002Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=documents-77002.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ej-toolbar #toolControls id=\"toolControls\" [dataSource]=\"toolControlsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolControlsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div>\r\n\t<ej-toolbar #toolEdits id=\"toolEdits\" [dataSource]=\"toolEditsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolEditsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\t\t<ej-grid #grid id=\"grid\" cssClass=\"standart\" [dataSource]=\"dsDocuments\" allowSelection=\"true\"\r\n\t\t\t\t\t\t [selectionSettings]=\"selectionMode\" allowTextWrap=\"true\" [textWrapSettings]=\"textWrapSettings\"\r\n\t\t\t\t\t\t [editSettings]=\"editSettings\"\r\n\t\t\t\t\t\t [keySettings]=\"keySettings\"\r\n\t\t\t\t\t\t (actionBegin)=\"onActionBegin($event)\"\r\n\t\t\t\t\t\t (actionComplete)=\"onActionComplete($event)\">\r\n\t\t\t<e-columns>\r\n\t\t\t\t<e-column field=\"Id\" [isPrimaryKey]=\"true\" [visible]=\"false\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Parameter\" headerTextAlign=\"left\" headerText=\"Parameters\" width=\"200\" textAlign=\"left\" cssClass=\"col-params\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Data1\" headerTextAlign=\"left\" headerText=\"Data1\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t\t<e-column field=\"Data2\" headerTextAlign=\"left\" headerText=\"Data2\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t\t<e-column field=\"Data3\" headerTextAlign=\"left\" headerText=\"Data3\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t\t<e-column field=\"Data4\" headerTextAlign=\"left\" headerText=\"Data4\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t</e-columns>\r\n\t\t</ej-grid>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"col-md-6\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documents77003Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_documents_department2_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Documents77003Component = (function () {
    function Documents77003Component(magazinesService, documentsDepartment2Service) {
        var _this = this;
        this.magazinesService = magazinesService;
        this.documentsDepartment2Service = documentsDepartment2Service;
        this.dsDocuments = [];
        // subscribe
        this.aliveSubscribe = true;
        this.selectionMode = { selectionMode: ["row"] };
        this.textWrapSettings = { wrapMode: ej.Grid.WrapMode.Header };
        this.editSettings = { allowEditing: true, editMode: "normal" };
        this.keySettings = { saveRequest: "13", editRecord: "115", cancelRequest: "27" };
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolControlsData = magazinesService.toolControlsData;
        this.toolEditsData = magazinesService.toolEditsData;
        // custom events
        this.magazinesService.onSaveMagazines.observers.splice(0);
        this.magazinesService
            .onSaveMagazines
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.saveMagazines(p); });
        this.magazinesService.onCancelEdit.observers.splice(0);
        this.magazinesService
            .onCancelEdit
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.cancelEdit(p); });
    }
    Documents77003Component.prototype.ngOnInit = function () {
        this.getData();
    };
    Documents77003Component.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    Documents77003Component.prototype.ngAfterViewInit = function () {
        $("#toolControls").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar({ hide: true });
        this.magazinesService.toolControls = this.toolControls;
        this.magazinesService.grid = this.grid;
    };
    //
    // 
    //
    Documents77003Component.prototype.onToolControlsClick = function (args) {
        if (args.target.id === "iUpdate") {
            this.grid.widget.element.focus();
            try {
                if (this.grid.widget.getRows().length > 0 &&
                    this.grid.widget.getSelectedRows().length == 0) {
                    this.grid.widget.selectRows([0]);
                }
            }
            catch (e) { }
            $("#toolEdits").ejToolbar({ hide: false });
            $("#toolControls").ejToolbar({ hide: true });
        }
        if (args.target.offsetParent != null) {
            if (args.target.offsetParent.id === "iRefresh") {
                this.getData();
                this.magazinesService.setGridMagazinesFocus();
            }
        }
    };
    Documents77003Component.prototype.onToolEditsClick = function (args) {
        if (args.target.id === "iCancel") {
            this.magazinesService.cancelFunction();
        }
        if (this.grid.widget.model.isEdit == false) {
            if (args.target.id === "iSave") {
                this.promiseSaveData();
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iRefresh") {
                    this.getData();
                    this.grid.widget.element.focus();
                }
            }
        }
    };
    Documents77003Component.prototype.onActionBegin = function (args) {
        try {
            if (args.requestType == "beginedit") {
                if (this.toolEdits.widget.model.hide == true) {
                    args.cancel = true;
                }
                else {
                    args.cancel = false;
                }
            }
        }
        catch (e) { }
    };
    Documents77003Component.prototype.onActionComplete = function (args) {
        try {
            if (args.requestType == "save") {
                var length = this.grid.widget.getRows().length;
                if (args.selectedRow < length - 1) {
                    this.grid.widget.selectRows([args.selectedRow]);
                }
                else {
                    this.grid.widget.selectRows([0]);
                }
                this.grid.widget.element.focus();
            }
            if (args.requestType == "cancel") {
                this.grid.widget.element.focus();
            }
        }
        catch (e) { }
    };
    //
    //
    //
    Documents77003Component.prototype.getData = function () {
        this.getDocuments77003(this.magazinesService.magazinesID);
    };
    Documents77003Component.prototype.getDocuments77003 = function (id) {
        var _this = this;
        this.documentsDepartment2Service
            .getDocumentsDepartment2(id)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.dsDocuments = data; }, function (error) { return _this.errorMessage = error; });
    };
    Documents77003Component.prototype.putDocuments77003 = function (data) {
        var _this = this;
        this.documentsDepartment2Service
            .putDocumentsDepartment2(data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.saveData(data); }, function (error) { return _this.errorMessage = error; });
    };
    //
    // save
    //
    Documents77003Component.prototype.promiseSaveData = function () {
        Promise
            .resolve()
            .then(this.putDocuments77003(this.dsDocuments));
    };
    Documents77003Component.prototype.saveData = function (data) {
        this.dsDocuments = data;
        this.magazinesService.saveFunction();
    };
    Documents77003Component.prototype.saveMagazines = function (mode) {
        try {
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.grid.widget.endEdit();
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    Documents77003Component.prototype.cancelEdit = function (mode) {
        try {
            if (this.magazinesService.getEditMode() == true) {
                this.getData();
                this.grid.widget.endEdit();
            }
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    return Documents77003Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], Documents77003Component.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolControls'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _b || Object)
], Documents77003Component.prototype, "toolControls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolEdits'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _c || Object)
], Documents77003Component.prototype, "toolEdits", void 0);
Documents77003Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-77003',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_documents_department2_service__["a" /* DocumentsDepartment2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_documents_department2_service__["a" /* DocumentsDepartment2Service */]) === "function" && _e || Object])
], Documents77003Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=documents-77003.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<ej-toolbar #toolControls id=\"toolControls\" [dataSource]=\"toolControlsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolControlsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div>\r\n\t<ej-toolbar #toolEdits id=\"toolEdits\" [dataSource]=\"toolEditsData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolEditsClick($event)\"></ej-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-4\">\r\n\t\t<ej-grid #grid id=\"grid\" cssClass=\"standart\" [dataSource]=\"dsDocuments\" allowSelection=\"true\"\r\n\t\t\t\t\t\t [selectionSettings]=\"selectionMode\" allowTextWrap=\"true\" [textWrapSettings]=\"textWrapSettings\"\r\n\t\t\t\t\t\t [editSettings]=\"editSettings\"\r\n\t\t\t\t\t\t [keySettings]=\"keySettings\"\r\n\t\t\t\t\t\t (actionBegin)=\"onActionBegin($event)\"\r\n\t\t\t\t\t\t (actionComplete)=\"onActionComplete($event)\">\r\n\t\t\t<e-columns>\r\n\t\t\t\t<e-column field=\"Id\" [isPrimaryKey]=\"true\" [visible]=\"false\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Parameter\" headerTextAlign=\"left\" headerText=\"Parameters\" width=\"200\" textAlign=\"left\" cssClass=\"col-params\" [allowEditing]=\"false\"></e-column>\r\n\t\t\t\t<e-column field=\"Data1\" headerTextAlign=\"left\" headerText=\"Data1\" width=\"100\" textAlign=\"right\" cssClass=\"col-data\"></e-column>\r\n\t\t\t</e-columns>\r\n\t\t</ej-grid>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"col-md-8\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Documents77004Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_documents_department3_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Documents77004Component = (function () {
    function Documents77004Component(magazinesService, documentsDepartment3Service) {
        var _this = this;
        this.magazinesService = magazinesService;
        this.documentsDepartment3Service = documentsDepartment3Service;
        this.dsDocuments = [];
        // subscribe
        this.aliveSubscribe = true;
        this.selectionMode = { selectionMode: ["row"] };
        this.textWrapSettings = { wrapMode: ej.Grid.WrapMode.Header };
        this.editSettings = { allowEditing: true, editMode: "normal" };
        this.keySettings = { saveRequest: "13", editRecord: "115", cancelRequest: "27" };
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolControlsData = magazinesService.toolControlsData;
        this.toolEditsData = magazinesService.toolEditsData;
        // custom events
        this.magazinesService.onSaveMagazines.observers.splice(0);
        this.magazinesService
            .onSaveMagazines
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.saveMagazines(p); });
        this.magazinesService.onCancelEdit.observers.splice(0);
        this.magazinesService
            .onCancelEdit
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.cancelEdit(p); });
    }
    Documents77004Component.prototype.ngOnInit = function () {
        this.getData();
    };
    Documents77004Component.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    Documents77004Component.prototype.ngAfterViewInit = function () {
        $("#toolControls").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar("disableItemByID", "iEmpty");
        $("#toolEdits").ejToolbar({ hide: true });
        this.magazinesService.toolControls = this.toolControls;
        this.magazinesService.grid = this.grid;
    };
    //
    // 
    //
    Documents77004Component.prototype.onToolControlsClick = function (args) {
        if (args.target.id === "iUpdate") {
            this.grid.widget.element.focus();
            try {
                if (this.grid.widget.getRows().length > 0 &&
                    this.grid.widget.getSelectedRows().length == 0) {
                    this.grid.widget.selectRows([0]);
                }
            }
            catch (e) { }
            $("#toolEdits").ejToolbar({ hide: false });
            $("#toolControls").ejToolbar({ hide: true });
        }
        if (args.target.offsetParent != null) {
            if (args.target.offsetParent.id === "iRefresh") {
                this.getData();
                this.magazinesService.setGridMagazinesFocus();
            }
        }
    };
    Documents77004Component.prototype.onToolEditsClick = function (args) {
        if (args.target.id === "iCancel") {
            this.magazinesService.cancelFunction();
        }
        if (this.grid.widget.model.isEdit == false) {
            if (args.target.id === "iSave") {
                this.promiseSaveData();
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iRefresh") {
                    this.getData();
                    this.grid.widget.element.focus();
                }
            }
        }
    };
    Documents77004Component.prototype.onActionBegin = function (args) {
        try {
            if (args.requestType == "beginedit") {
                if (this.toolEdits.widget.model.hide == true) {
                    args.cancel = true;
                }
                else {
                    args.cancel = false;
                }
            }
        }
        catch (e) { }
    };
    Documents77004Component.prototype.onActionComplete = function (args) {
        try {
            if (args.requestType == "save") {
                var length = this.grid.widget.getRows().length;
                if (args.selectedRow < length - 1) {
                    this.grid.widget.selectRows([args.selectedRow]);
                }
                else {
                    this.grid.widget.selectRows([0]);
                }
                this.grid.widget.element.focus();
            }
            if (args.requestType == "cancel") {
                this.grid.widget.element.focus();
            }
        }
        catch (e) { }
    };
    //
    //
    //
    Documents77004Component.prototype.getData = function () {
        this.getDocuments77004(this.magazinesService.magazinesID);
    };
    Documents77004Component.prototype.getDocuments77004 = function (id) {
        var _this = this;
        this.documentsDepartment3Service
            .getDocumentsDepartment3(id)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.dsDocuments = data; }, function (error) { return _this.errorMessage = error; });
    };
    Documents77004Component.prototype.putDocuments77004 = function (data) {
        var _this = this;
        this.documentsDepartment3Service
            .putDocumentsDepartment3(data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.saveData(data); }, function (error) { return _this.errorMessage = error; });
    };
    //
    // save
    //
    Documents77004Component.prototype.promiseSaveData = function () {
        Promise
            .resolve()
            .then(this.putDocuments77004(this.dsDocuments));
    };
    Documents77004Component.prototype.saveData = function (data) {
        this.dsDocuments = data;
        this.magazinesService.saveFunction();
    };
    Documents77004Component.prototype.saveMagazines = function (mode) {
        try {
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.grid.widget.endEdit();
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    Documents77004Component.prototype.cancelEdit = function (mode) {
        try {
            if (this.magazinesService.getEditMode() == true) {
                this.getData();
                this.grid.widget.endEdit();
            }
            $("#toolControls").ejToolbar({ hide: false });
            $("#toolEdits").ejToolbar({ hide: true });
            this.magazinesService.setGridMagazinesFocus();
        }
        catch (e) { }
    };
    return Documents77004Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], Documents77004Component.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolControls'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _b || Object)
], Documents77004Component.prototype, "toolControls", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolEdits'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _c || Object)
], Documents77004Component.prototype, "toolEdits", void 0);
Documents77004Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-77004',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_documents_department3_service__["a" /* DocumentsDepartment3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_documents_department3_service__["a" /* DocumentsDepartment3Service */]) === "function" && _e || Object])
], Documents77004Component);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=documents-77004.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-style\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinesChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MagazinesChildComponent = (function () {
    function MagazinesChildComponent() {
    }
    MagazinesChildComponent.prototype.ngOnInit = function () {
    };
    return MagazinesChildComponent;
}());
MagazinesChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-magazines-child',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MagazinesChildComponent);

//# sourceMappingURL=magazines-child.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-align-right {\r\n\ttext-align: right;\r\n}\r\n\r\n.text-align-left {\r\n\ttext-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-modal\">\r\n\t<ej-toolbar #toolMagazines id=\"toolMagazines\" [dataSource]=\"toolMagazinesData\" [fields]=\"toolFields\" [enableSeparator]=\"toolSeparator\" [height]=\"34\"\r\n\t\t\t\t\t\t\t(click)=\"onToolMagazinesClick($event)\"></ej-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-9\">\r\n\t\t<ag-grid-angular #grid style=\"width: 100%; height: 166px;\"\r\n\t\t\t\t\t\t\t\t\t\t class=\"ag-blue\"\r\n\t\t\t\t\t\t\t\t\t\t [rowData]=\"dsMagazines\"\r\n\t\t\t\t\t\t\t\t\t\t [columnDefs]=\"columnDefs\"\r\n\t\t\t\t\t\t\t\t\t\t [gridOptions]=\"gridOptions\"\r\n\t\t\t\t\t\t\t\t\t\t (gridReady)=\"onGridReady($event)\"\r\n\t\t\t\t\t\t\t\t\t\t (rowDataChanged)=\"onRowDataChanged($event)\"\r\n\t\t\t\t\t\t\t\t\t\t (selectionChanged)=\"onSelectionChanged($event)\"\r\n\t\t\t\t\t\t\t\t\t\t (cellFocused)=\"onCellFocused($event)\">\r\n\t\t</ag-grid-angular>\r\n\t</div>\r\n\t<div class=\"col-md-3\"></div>\r\n</div>\r\n<div>\r\n\t<app-new-document #newDocument id=\"newDocument\" (clickOk)=\"onClickOk($event)\"></app-new-document>\r\n</div>\r\n<div>\r\n\t<app-show-message #showMessage id=\"showMessage\" (clickOk)=\"onShowMessageOk($event)\"></app-show-message>\r\n</div>\r\n<div>\r\n\t<app-show-info #showInfo id=\"showInfo\"></app-show-info>\r\n</div>\r\n<div>\r\n\t<app-magazines-child></app-magazines-child>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinesMasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_document_new_document_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_message_show_message_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__show_info_show_info_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MagazinesMasterComponent = (function () {
    function MagazinesMasterComponent(router, activatedRoute, magazinesService, mainService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.magazinesService = magazinesService;
        this.mainService = mainService;
        this.dsMagazines = [];
        this.prevRowIndex = 0;
        // route
        this.menuId = 0;
        // subscribe
        this.aliveSubscribe = true;
        this.gridOptions = {
            rowHeight: 20,
            enableColResize: true,
            localeText: {
                noRowsToShow: 'loading data ...'
            },
            rowSelection: 'single',
            navigateToNextCell: function (params) {
                var previousCell = params.previousCellDef;
                var suggestedNextCell = params.nextCellDef;
                var KEY_UP = 38;
                var KEY_DOWN = 40;
                var KEY_LEFT = 37;
                var KEY_RIGHT = 39;
                switch (params.key) {
                    case KEY_DOWN:
                        previousCell = params.previousCellDef;
                        // set selected cell on current cell + 1
                        _this.gridOptions.api.forEachNode(function (node) {
                            if (previousCell.rowIndex + 1 === node.rowIndex) {
                                node.setSelected(true);
                            }
                        });
                        return suggestedNextCell;
                    case KEY_UP:
                        previousCell = params.previousCellDef;
                        // set selected cell on current cell - 1
                        _this.gridOptions.api.forEachNode(function (node) {
                            if (previousCell.rowIndex - 1 === node.rowIndex) {
                                node.setSelected(true);
                            }
                        });
                        return suggestedNextCell;
                    case KEY_LEFT:
                    case KEY_RIGHT:
                        return suggestedNextCell;
                    default:
                        throw "this will never happen, navigation is always on of the 4 keys above";
                }
            }
        };
        this.gridOptions.rowStyle = { 'font-size': '12px' };
        this.columnDefs = [
            { headerName: "ID", field: "Id", width: 40, editable: false, cellClass: 'text-align-left' },
            { headerName: "Document", field: "OperationsName", width: 140, cellClass: 'text-align-left' },
            { headerName: "Document number", field: "NumberDocument", width: 100, cellClass: 'text-align-left' },
            { headerName: "Document date", field: "DateDocument", width: 70, cellClass: 'text-align-right', valueFormatter: dateFormatter },
            { headerName: "Operation code", field: "OperationsCode", width: 80, editable: false, cellClass: 'text-align-right' },
            { headerName: "User", field: "UserName", width: 60, editable: false, cellClass: 'text-align-right' },
            {
                headerName: "Recording date", field: "DateRecord", width: 100, editable: false, cellClass: 'text-align-left', valueFormatter: function (data) {
                    return __WEBPACK_IMPORTED_MODULE_3_moment_moment__(data.value).format('DD.MM.YYYY HH:mm:ss');
                }
            }
        ];
        function dateFormatter(params) {
            return __WEBPACK_IMPORTED_MODULE_3_moment_moment__(params.value).format('DD.MM.YYYY');
        }
        // toolbar
        this.toolFields = magazinesService.toolFields;
        this.toolSeparator = magazinesService.toolSeparator;
        this.toolMagazinesData = magazinesService.toolMagazinesData;
        // custom events
        this.magazinesService.onSaveFunction.observers.splice(0);
        this.magazinesService
            .onSaveFunction
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.saveMagazines(p); });
        this.magazinesService.onCancelFunction.observers.splice(0);
        this.magazinesService
            .onCancelFunction
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (p) { return _this.cancelMagazines(p); });
    }
    MagazinesMasterComponent.prototype.ngOnInit = function () {
        this.menuId = this.activatedRoute.snapshot.params['id'];
        this.getData();
    };
    MagazinesMasterComponent.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    MagazinesMasterComponent.prototype.ngAfterViewInit = function () {
        $("#toolMagazines").ejToolbar("disableItemByID", "iEmpty");
        this.magazinesService.gridOptions = this.gridOptions;
        this.magazinesService.gridMagazines = this.grid;
    };
    MagazinesMasterComponent.prototype.onToolMagazinesClick = function (args) {
        if (this.magazinesService.getEditMode() == false) {
            if (args.target.id === "iInsert") {
                this.newDocument.showDialog();
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iDelete") {
                    console.log('Delete');
                }
            }
            if (args.target.offsetParent != null) {
                if (args.target.offsetParent.id === "iRefresh") {
                    this.getData();
                    this.magazinesService.setGridMagazinesFocus();
                }
            }
        }
    };
    MagazinesMasterComponent.prototype.onGridReady = function (params) {
        params.api.sizeColumnsToFit();
        this.gridOptions.columnApi.setColumnWidth("DateRecord", 140, true);
    };
    MagazinesMasterComponent.prototype.onRowDataChanged = function (arg) {
        var rowCount = this.gridOptions.api.getDisplayedRowCount() - 1;
        if (rowCount > 0) {
            this.gridOptions.api.ensureIndexVisible(rowCount);
            this.gridOptions.api.setFocusedCell(rowCount, 'Id', null);
        }
    };
    MagazinesMasterComponent.prototype.onSelectionChanged = function (args) {
        var gridIsEdit = false;
        var toolControlsHidden = false;
        try {
            gridIsEdit = this.magazinesService.grid.widget.model.isEdit;
            toolControlsHidden = this.magazinesService.toolControls.widget.model.hide;
        }
        catch (e) {
            var gridIsEdit_1 = false;
            var toolControlsHidden_1 = false;
        }
        var prevRowIndex = this.prevRowIndex;
        if (gridIsEdit == true || toolControlsHidden == true) {
            this.gridOptions.api.forEachNode(function (node) {
                if (node.rowIndex === prevRowIndex) {
                    node.setSelected(true);
                }
            });
        }
    };
    MagazinesMasterComponent.prototype.onCellFocused = function (args) {
        var gridIsEdit = false;
        var toolControlsHidden = false;
        try {
            gridIsEdit = this.magazinesService.grid.widget.model.isEdit;
            toolControlsHidden = this.magazinesService.toolControls.widget.model.hide;
        }
        catch (e) {
            var gridIsEdit_2 = false;
            var toolControlsHidden_2 = false;
        }
        var row = this.gridOptions.api.getRowNode(args.rowIndex);
        if (row != undefined) {
            if (gridIsEdit == true || toolControlsHidden == true) {
                if (args.rowIndex != this.prevRowIndex) {
                    this.gridOptions.api.ensureIndexVisible(this.prevRowIndex);
                    this.gridOptions.api.setFocusedCell(this.prevRowIndex, args.column.colId, null);
                }
            }
            else {
                if (args.rowIndex != this.prevRowIndex) {
                    this.prevRowIndex = args.rowIndex;
                    this.magazinesService.magazinesID = row.data["Id"];
                    this.magazinesService.codeOperation = row.data["OperationsCode"];
                    this.router.navigate(['/main/magazines/' + this.menuId + '/default']);
                    //console.log(this.magazinesService.codeOperation);
                    if (this.sub != undefined) {
                        this.sub.unsubscribe();
                    }
                    this.sub = this.routeDelay(row.data["OperationsCode"]);
                }
            }
            this.gridOptions.api.forEachNode(function (node) {
                if (node.rowIndex === args.rowIndex) {
                    node.setSelected(true);
                }
            });
        }
    };
    MagazinesMasterComponent.prototype.timeDelay = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({}).delay(500);
    };
    MagazinesMasterComponent.prototype.routeDelay = function (codeOperation) {
        var _this = this;
        return this.timeDelay()
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) {
            _this.router.navigate(['/main/magazines/' + _this.menuId + '/' + codeOperation]);
        });
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.saveMagazines = function (id) {
        var _this = this;
        var magazines = this.dsMagazines.filter(function (p) { return p.Id == _this.magazinesService.magazinesID; });
        if (magazines.length > 0) {
            this.promisePutMagazines(this.menuId, magazines);
        }
    };
    MagazinesMasterComponent.prototype.promisePutMagazines = function (menuId, magazines) {
        Promise
            .resolve()
            .then(this.putMagazines(this.menuId, magazines));
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.cancelMagazines = function (id) {
        try {
            this.showMessage.btnCancelVisible = true;
            this.showMessage.message = "The changes will not be saved! \nAre you sure?";
            this.showMessage.showDialog();
        }
        catch (e) { }
    };
    //
    // newDocument
    //
    MagazinesMasterComponent.prototype.onClickOk = function (args) {
        //console.log(args.operationsID);
        //console.log(args.dateDocument);
        var operations = this.mainService.operations.filter(function (p) { return p.Id == args.operationsID; });
        var operationsCode = operations[0]['OperationsCode'];
        var data = [
            {
                Id: 0,
                UserID: '',
                OperationsID: args.operationsID,
                NumberDocument: args.dateDocumentStr + '/' + operationsCode,
                DateDocument: args.dateDocument,
                UserName: '',
                Note: '',
                DateRecord: new Date(),
                OperationsName: '',
                OperationsCode: operationsCode
            }
        ];
        if (data.length > 0) {
            this.postMagazines(data);
        }
    };
    //
    // showMessage
    //
    MagazinesMasterComponent.prototype.onShowMessageOk = function (args) {
        this.magazinesService.cancelEdit();
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.getData = function () {
        this.getMagazines(this.menuId);
        this.magazinesService.menuOperations = this.setMenuOperations(this.menuId);
    };
    MagazinesMasterComponent.prototype.getMagazines = function (id) {
        var _this = this;
        this.magazinesService
            .getMagazines(id)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.dsMagazines = data; }, function (error) { return _this.errorMessage = error; });
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.postMagazines = function (data) {
        var _this = this;
        this.magazinesService
            .postMagazines(data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.postResult(data); }, function (error) { return _this.errorMessage = error; });
    };
    MagazinesMasterComponent.prototype.postResult = function (data) {
        var result = data[0];
        if (result.Id == -2) {
            this.showInfo.message = result.Note;
            this.showInfo.showDialog();
            return;
        }
        if (result.Id <= 0) {
            return;
        }
        this.dsMagazines.push(result);
        this.gridOptions.api.setRowData(this.dsMagazines);
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.putMagazines = function (id, data) {
        var _this = this;
        this.magazinesService
            .putMagazines(id, data)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.putResult(data); }, function (error) { return _this.errorMessage = error; });
    };
    MagazinesMasterComponent.prototype.putResult = function (data) {
        var _this = this;
        var result = data[0];
        if (result.Id <= 0) {
            return;
        }
        var magazinesRow = this.dsMagazines.filter(function (p) { return p.Id == _this.magazinesService.magazinesID; })[0];
        magazinesRow.Id = result.Id;
        magazinesRow.UserID = result.UserID;
        magazinesRow.OperationsID = result.OperationsID;
        magazinesRow.NumberDocument = result.NumberDocument;
        magazinesRow.DateDocument = result.DateDocument;
        magazinesRow.UserName = result.UserName;
        magazinesRow.Note = result.Note;
        magazinesRow.DateRecord = result.DateRecord;
        magazinesRow.OperationsName = result.OperationsName;
        magazinesRow.OperationsCode = result.OperationsCode;
        var rowIndex = this.gridOptions.api.getFocusedCell().rowIndex;
        var rowNode = this.gridOptions.api.getDisplayedRowAtIndex(rowIndex)[0];
        var params = {
            rowNodes: rowNode
        };
        this.gridOptions.api.refreshCells(params);
        this.magazinesService.saveMagazines();
    };
    //
    //
    //
    MagazinesMasterComponent.prototype.setMenuOperations = function (id) {
        var _this = this;
        var operations = this.mainService.operations;
        var mainMenu = this.mainService.mainMenu.filter(function (p) { return p.Id == _this.menuId; });
        var operationsList = mainMenu[0].OperationsIDStr.split(';');
        var menuOperations = [];
        var _loop_1 = function (id_1) {
            var idOperations = operations.filter(function (p) { return p.Id.toString() === id_1; });
            for (var _i = 0, idOperations_1 = idOperations; _i < idOperations_1.length; _i++) {
                var row = idOperations_1[_i];
                menuOperations.push(row);
            }
        };
        for (var _i = 0, operationsList_1 = operationsList; _i < operationsList_1.length; _i++) {
            var id_1 = operationsList_1[_i];
            _loop_1(id_1);
        }
        return menuOperations;
    };
    return MagazinesMasterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grid', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], MagazinesMasterComponent.prototype, "grid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('toolMagazines'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], MagazinesMasterComponent.prototype, "toolMagazines", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newDocument'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__new_document_new_document_component__["a" /* NewDocumentComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__new_document_new_document_component__["a" /* NewDocumentComponent */]) === "function" && _b || Object)
], MagazinesMasterComponent.prototype, "newDocument", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('showMessage'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__show_message_show_message_component__["a" /* ShowMessageComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__show_message_show_message_component__["a" /* ShowMessageComponent */]) === "function" && _c || Object)
], MagazinesMasterComponent.prototype, "showMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('showInfo'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__show_info_show_info_component__["a" /* ShowInfoComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__show_info_show_info_component__["a" /* ShowInfoComponent */]) === "function" && _d || Object)
], MagazinesMasterComponent.prototype, "showInfo", void 0);
MagazinesMasterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-magazines-master',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_magazines_service__["a" /* MagazinesService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__["a" /* MainService */]) === "function" && _h || Object])
], MagazinesMasterComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=magazines-master.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  magazines-route-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinesRoutePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MagazinesRoutePageComponent = (function () {
    function MagazinesRoutePageComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    MagazinesRoutePageComponent.prototype.ngOnInit = function () {
        var menuId = this.activatedRoute.snapshot.params['id'];
        this.router.navigate(['/main/magazines/' + menuId]);
    };
    return MagazinesRoutePageComponent;
}());
MagazinesRoutePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-magazines-route-page',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MagazinesRoutePageComponent);

var _a, _b;
//# sourceMappingURL=magazines-route-page.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.btn-ok {\r\n\tfloat: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-modal\">\r\n\t<ej-dialog #newDocument\r\n\t\t\t\t\t\t id=\"newDocument\"\r\n\t\t\t\t\t\t title=\"New Document\"\r\n\t\t\t\t\t\t [target]=\"target\"\r\n\t\t\t\t\t\t [showOnInit]=\"showOnInit\"\r\n\t\t\t\t\t\t [(enableResize)]=\"resize\"\r\n\t\t\t\t\t\t [isResponsive]=\"responsive\"\r\n\t\t\t\t\t\t [enableModal]=\"enablemodal\"\r\n\t\t\t\t\t\t (close)=\"onClose($event)\">\r\n\r\n\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"inputError\"><strong>Warning:</strong> All fields are required</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<app-oper-drop-down-box #popupOperations\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"popupOperations\">\r\n\t\t\t\t\t</app-oper-drop-down-box>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t ej-datepicker\r\n\t\t\t\t\t\t\t\t #dateDocument\r\n\t\t\t\t\t\t\t\t id=\"dateDocument\"\r\n\t\t\t\t\t\t\t\t [locale]='locale'\r\n\t\t\t\t\t\t\t\t [height]=30\r\n\t\t\t\t\t\t\t\t [(ngModel)]=\"initDate\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<button class=\"btn btn-primary btn-ok\" type=\"submit\" (click)=\"onOK($event)\">Save</button>\r\n\t\t\t<button class=\"btn btn-default\" type=\"submit\" (click)=\"onCancel($event)\">Cancel</button>\r\n\t\t</div>\r\n\t</ej-dialog>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDocumentComponent; });
/* unused harmony export EventArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oper_drop_down_box_oper_drop_down_box_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewDocumentComponent = (function () {
    function NewDocumentComponent() {
        this.clickOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showOnInit = false;
        this.enablemodal = true;
        this.resize = false;
        this.responsive = false;
        this.target = ".area-modal";
        //
        // ej-datepicker
        //
        this.locale = 'de-DE';
        this.initDate = new Date();
        this.initDate.setDate(this.initDate.getDate() - 1);
    }
    NewDocumentComponent.prototype.ngOnInit = function () {
    };
    NewDocumentComponent.prototype.ngAfterViewInit = function () {
    };
    NewDocumentComponent.prototype.showDialog = function () {
        this.newDocument.widget.element.ejDialog('open');
    };
    NewDocumentComponent.prototype.onClose = function (args) {
        this.inputError = false;
    };
    NewDocumentComponent.prototype.onOK = function (args) {
        if (this.popupOperations.dropDownBox.text == '' ||
            this.dateDocument.widget.element[0].value.toString().length < 10) {
            this.inputError = true;
            return;
        }
        var dateValue = this.dateDocument.widget.element[0].value.split('.');
        var dd = dateValue[0];
        var mm = dateValue[1];
        var year = dateValue[2];
        var eventArgs = new EventArgs();
        eventArgs.operationsID = this.popupOperations.dropDownBox.value;
        eventArgs.dateDocument = mm + '.' + dd + '.' + year;
        eventArgs.dateDocumentStr = this.dateDocument.widget.element[0].value;
        this.clickOk.emit(eventArgs);
        this.inputError = false;
        this.newDocument.widget.element.ejDialog('close');
    };
    NewDocumentComponent.prototype.onCancel = function (args) {
        this.inputError = false;
        this.newDocument.widget.element.ejDialog('close');
    };
    return NewDocumentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newDocument'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], NewDocumentComponent.prototype, "newDocument", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("popupOperations"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__oper_drop_down_box_oper_drop_down_box_component__["a" /* AppOperDropDownBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__oper_drop_down_box_oper_drop_down_box_component__["a" /* AppOperDropDownBoxComponent */]) === "function" && _b || Object)
], NewDocumentComponent.prototype, "popupOperations", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dateDocument'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _c || Object)
], NewDocumentComponent.prototype, "dateDocument", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewDocumentComponent.prototype, "clickOk", void 0);
NewDocumentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-document',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], NewDocumentComponent);

var EventArgs = (function () {
    function EventArgs() {
    }
    return EventArgs;
}());

var _a, _b, _c;
//# sourceMappingURL=new-document.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<dx-drop-down-box #dropDownBox\r\n\t\t\t\t\t\t\t\t\t\tid=\"dropDownBox\"\r\n\t\t\t\t\t\t\t\t\t\t[(value)]=\"gridBoxValue\"\r\n\t\t\t\t\t\t\t\t\t\tvalueExpr=\"Id\"\r\n\t\t\t\t\t\t\t\t\t\t[displayExpr]=\"gridBox_displayExpr\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"SELECT OPERATION\"\r\n\t\t\t\t\t\t\t\t\t\t[showClearButton]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t[dataSource]=\"dsOperations\"\r\n\t\t\t\t\t\t\t\t\t\t[width]=300\r\n\t\t\t\t\t\t\t\t\t\t[height]=30\r\n\t\t\t\t\t\t\t\t\t\t(onOpened)=\"onOpened($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onClosed)=\"onClosed($event)\">\r\n\t\t<div *dxTemplate=\"let data of 'content'\">\r\n\t\t\t<dx-data-grid #dataGrid\r\n\t\t\t\t\t\t\t\t\t\tid=\"dataGrid\"\r\n\t\t\t\t\t\t\t\t\t\t[dataSource]=\"dsOperations\"\r\n\t\t\t\t\t\t\t\t\t\t[showRowLines]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\t[wordWrapEnabled]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\t[width]=auto\r\n\t\t\t\t\t\t\t\t\t\t[height]=auto\r\n\t\t\t\t\t\t\t\t\t\t(onRowPrepared)=\"onRowPrepared($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onCellPrepared)=\"onCellPrepared($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onCellClick)=\"onCellClick($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onKeyDown)=\"onKeyDown($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onContentReady)=\"onContentReady($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onSelectionChanged)=\"onSelectionChanged($event)\"\r\n\t\t\t\t\t\t\t\t\t\t(onRowClick)=\"onRowClick($event)\">\r\n\t\t\t\t<dxo-selection mode=\"single\"></dxo-selection>\r\n\t\t\t\t<dxi-column dataField=\"OperationsCaption\" caption=\"Operation\" [width]=\"250\"></dxi-column>\r\n\t\t\t\t<dxi-column dataField=\"OperationsCode\" caption=\"Code\" [width]=\"70\" [allowEditing]=\"false\"></dxi-column>\r\n\t\t\t</dx-data-grid>\r\n\t\t</div>\r\n\t</dx-drop-down-box>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppOperDropDownBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppOperDropDownBoxComponent = (function () {
    function AppOperDropDownBoxComponent(magazinesService) {
        this.magazinesService = magazinesService;
        this.dsOperations = [];
        this.focusCellIndex = 0;
    }
    AppOperDropDownBoxComponent.prototype.ngOnInit = function () {
        this.getOperations();
    };
    AppOperDropDownBoxComponent.prototype.ngAfterViewInit = function () {
        this.dropDownBox.instance.option("dropDownOptions.width", 0);
        this.dropDownBox.instance.option("dropDownOptions.height", 0);
        this.dropDownBox.instance.open();
        this.dropDownBox.instance.close();
        this.dropDownBox.instance.option("dropDownOptions.width", 330);
        this.dropDownBox.instance.option("dropDownOptions.height", "auto");
        var DevExpress = __webpack_require__("../../../../devextreme/bundles/modules/core.js");
        var ui = DevExpress.ui = __webpack_require__("../../../../devextreme/bundles/modules/ui.js");
        ui.dxOverlay = __webpack_require__("../../../../devextreme/ui/popup.js");
        ui.dxOverlay.baseZIndex(3000000000);
    };
    //
    //
    //
    AppOperDropDownBoxComponent.prototype.onOpened = function (e) {
        //console.log('onOpened');
        try {
            this.dataGrid.instance.selectRowsByIndexes([0]);
            this._gridBoxValue = this.dataGrid.instance.getSelectedRowsData()[0]["Id"];
        }
        catch (e) { }
    };
    AppOperDropDownBoxComponent.prototype.onClosed = function (e) {
    };
    Object.defineProperty(AppOperDropDownBoxComponent.prototype, "gridBoxValue", {
        get: function () {
            return this._gridBoxValue;
        },
        set: function (value) {
            this._gridBoxValue = value;
        },
        enumerable: true,
        configurable: true
    });
    AppOperDropDownBoxComponent.prototype.gridBox_displayExpr = function (item) {
        return item && item.OperationsCaption + " : " + item.OperationsCode;
    };
    //
    // dataGrid
    //
    AppOperDropDownBoxComponent.prototype.onContentReady = function (e) {
    };
    AppOperDropDownBoxComponent.prototype.onSelectionChanged = function (e) {
        this._gridBoxValue = e.selectedRowsData[0]["Id"];
    };
    AppOperDropDownBoxComponent.prototype.onRowPrepared = function (e) {
    };
    AppOperDropDownBoxComponent.prototype.onRowClick = function (e) {
        var component = e.component;
        var prevClickTime = component.lastClickTime;
        component.lastClickTime = new Date();
        if (prevClickTime && (component.lastClickTime - prevClickTime < 300)) {
            this.dropDownBox.instance.close();
        }
        else {
        }
        e.jQueryEvent.stopPropagation();
    };
    AppOperDropDownBoxComponent.prototype.onCellPrepared = function (e) {
        if (e.rowType == 'data' && e.column.dataField === 'OperationsCode') {
            e.cellElement.css('background-color', '#FFF8DC');
        }
    };
    AppOperDropDownBoxComponent.prototype.onCellClick = function (e) {
        var rowIndex = e.rowIndex;
        var colIndex = e.columnIndex;
        e.component.focus(e.component.getCellElement(rowIndex, colIndex));
        this.focusCellIndex = e.columnIndex;
    };
    AppOperDropDownBoxComponent.prototype.onKeyDown = function (e) {
        var selKey = e.component.getSelectedRowKeys();
        if (selKey.length) {
            var currentKey = selKey[0];
            var index = e.component.getRowIndexByKey(currentKey);
            var countRows = e.component.totalCount();
            if (e.jQueryEvent.keyCode == 38) {
                index--;
                if (index < 0) {
                    index = 0;
                }
                if (index >= 0) {
                    e.component.selectRowsByIndexes([index]);
                    e.jQueryEvent.stopPropagation();
                }
            }
            else if (e.jQueryEvent.keyCode == 40) {
                index++;
                if (index < countRows) {
                    e.component.selectRowsByIndexes([index]);
                    e.jQueryEvent.stopPropagation();
                }
            }
            if (e.jQueryEvent.keyCode == 13) {
                this.dropDownBox.instance.close();
            }
        }
    };
    AppOperDropDownBoxComponent.prototype.getOperations = function () {
        this.dsOperations = this.magazinesService.menuOperations;
    };
    return AppOperDropDownBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("dropDownBox"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_devextreme_angular__["DxDropDownBoxComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_devextreme_angular__["DxDropDownBoxComponent"]) === "function" && _a || Object)
], AppOperDropDownBoxComponent.prototype, "dropDownBox", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataGrid'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_devextreme_angular__["DxDataGridComponent"]) === "function" && _b || Object)
], AppOperDropDownBoxComponent.prototype, "dataGrid", void 0);
AppOperDropDownBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-oper-drop-down-box',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_magazines_service__["a" /* MagazinesService */]) === "function" && _c || Object])
], AppOperDropDownBoxComponent);

var _a, _b, _c;
//# sourceMappingURL=oper-drop-down-box.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.btn-ok {\r\n\tfloat: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-modal\">\r\n\t<ej-dialog #showInfo\r\n\t\t\t\t\t\t id=\"showInfo\"\r\n\t\t\t\t\t\t title=\"Warning\"\r\n\t\t\t\t\t\t [target]=\"target\"\r\n\t\t\t\t\t\t [showOnInit]=\"showOnInit\"\r\n\t\t\t\t\t\t [(enableResize)]=\"resize\"\r\n\t\t\t\t\t\t [isResponsive]=\"responsive\"\r\n\t\t\t\t\t\t [enableModal]=\"enablemodal\"\r\n\t\t\t\t\t\t (close)=\"onClose($event)\">\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t{{message}}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<button id=\"ok\" class=\"btn btn-primary btn-ok\" (click)=\"onOK($event)\">OK</button>\r\n\t\t</div>\r\n\t</ej-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowInfoComponent; });
/* unused harmony export ShowInfoEventArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowInfoComponent = (function () {
    function ShowInfoComponent() {
        this.clickOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showOnInit = false;
        this.enablemodal = true;
        this.resize = false;
        this.responsive = false;
        this.target = ".area-modal";
    }
    ShowInfoComponent.prototype.ngOnInit = function () {
    };
    ShowInfoComponent.prototype.ngAfterViewInit = function () {
    };
    ShowInfoComponent.prototype.showDialog = function () {
        this.showInfo.widget.element.ejDialog('open');
    };
    ShowInfoComponent.prototype.onClose = function (args) {
    };
    ShowInfoComponent.prototype.onOK = function (args) {
        var eventArgs = new ShowInfoEventArgs();
        this.clickOk.emit(eventArgs);
        this.showInfo.widget.element.ejDialog('close');
    };
    return ShowInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('showInfo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], ShowInfoComponent.prototype, "showInfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ShowInfoComponent.prototype, "clickOk", void 0);
ShowInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-info',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ShowInfoComponent);

var ShowInfoEventArgs = (function () {
    function ShowInfoEventArgs() {
    }
    return ShowInfoEventArgs;
}());

var _a;
//# sourceMappingURL=show-info.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.btn-ok {\r\n\tfloat: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-modal\">\r\n\t<ej-dialog #showMessage\r\n\t\t\t\t\t\t id=\"showMessage\"\r\n\t\t\t\t\t\t title=\"Warning\"\r\n\t\t\t\t\t\t [target]=\"target\"\r\n\t\t\t\t\t\t [showOnInit]=\"showOnInit\"\r\n\t\t\t\t\t\t [(enableResize)]=\"resize\"\r\n\t\t\t\t\t\t [isResponsive]=\"responsive\"\r\n\t\t\t\t\t\t [enableModal]=\"enablemodal\"\r\n\t\t\t\t\t\t (close)=\"onClose($event)\">\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t{{message}}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<button id=\"ok\" class=\"btn btn-primary btn-ok\" (click)=\"onOK($event)\">OK</button>\r\n\t\t\t<button id=\"cancel\" class=\"btn btn-default\" (click)=\"onCancel($event)\">Cancel</button>\r\n\t\t</div>\r\n\t</ej-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowMessageComponent; });
/* unused harmony export ShowMessageEventArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ej_angular2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowMessageComponent = (function () {
    function ShowMessageComponent() {
        this.clickOk = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showOnInit = false;
        this.enablemodal = true;
        this.resize = false;
        this.responsive = false;
        this.target = ".area-modal";
    }
    ShowMessageComponent.prototype.ngOnInit = function () {
    };
    ShowMessageComponent.prototype.ngAfterViewInit = function () {
    };
    ShowMessageComponent.prototype.showDialog = function () {
        if (this.btnCancelVisible == false) {
            {
                document.getElementById("cancel").style.display = "none";
            }
        }
        else {
            {
                document.getElementById("cancel").style.display = "block";
            }
        }
        this.showMessage.widget.element.ejDialog('open');
    };
    ShowMessageComponent.prototype.onClose = function (args) {
    };
    ShowMessageComponent.prototype.onOK = function (args) {
        var eventArgs = new ShowMessageEventArgs();
        this.clickOk.emit(eventArgs);
        this.showMessage.widget.element.ejDialog('close');
    };
    ShowMessageComponent.prototype.onCancel = function (args) {
        var eventArgs = new ShowMessageEventArgs();
        this.clickCancel.emit(eventArgs);
        this.showMessage.widget.element.ejDialog('close');
    };
    return ShowMessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('showMessage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ej_angular2__["EJComponents"]) === "function" && _a || Object)
], ShowMessageComponent.prototype, "showMessage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ShowMessageComponent.prototype, "clickOk", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ShowMessageComponent.prototype, "clickCancel", void 0);
ShowMessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-message',
        template: __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ShowMessageComponent);

var ShowMessageEventArgs = (function () {
    function ShowMessageEventArgs() {
    }
    return ShowMessageEventArgs;
}());

var _a;
//# sourceMappingURL=show-message.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__magazines_module__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/magazines.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MagazinesModule", function() { return __WEBPACK_IMPORTED_MODULE_0__magazines_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/interfaces/magazines.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "DefaultPageComponent")) __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["DefaultPageComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "Documents77001Component")) __webpack_require__.d(__webpack_exports__, "Documents77001Component", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["Documents77001Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "Documents77002Component")) __webpack_require__.d(__webpack_exports__, "Documents77002Component", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["Documents77002Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "Documents77003Component")) __webpack_require__.d(__webpack_exports__, "Documents77003Component", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["Documents77003Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "Documents77004Component")) __webpack_require__.d(__webpack_exports__, "Documents77004Component", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["Documents77004Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "MagazinesMasterComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesMasterComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["MagazinesMasterComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__, "MagazinesRoutePageComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesRoutePageComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__interfaces_magazines_interface__["MagazinesRoutePageComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department1.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "DefaultPageComponent")) __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["DefaultPageComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "Documents77001Component")) __webpack_require__.d(__webpack_exports__, "Documents77001Component", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["Documents77001Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "Documents77002Component")) __webpack_require__.d(__webpack_exports__, "Documents77002Component", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["Documents77002Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "Documents77003Component")) __webpack_require__.d(__webpack_exports__, "Documents77003Component", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["Documents77003Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "Documents77004Component")) __webpack_require__.d(__webpack_exports__, "Documents77004Component", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["Documents77004Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "MagazinesMasterComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesMasterComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["MagazinesMasterComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__, "MagazinesRoutePageComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesRoutePageComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__interfaces_documents_department1_interface__["MagazinesRoutePageComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department2.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "DefaultPageComponent")) __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["DefaultPageComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "Documents77001Component")) __webpack_require__.d(__webpack_exports__, "Documents77001Component", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["Documents77001Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "Documents77002Component")) __webpack_require__.d(__webpack_exports__, "Documents77002Component", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["Documents77002Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "Documents77003Component")) __webpack_require__.d(__webpack_exports__, "Documents77003Component", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["Documents77003Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "Documents77004Component")) __webpack_require__.d(__webpack_exports__, "Documents77004Component", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["Documents77004Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "MagazinesMasterComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesMasterComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["MagazinesMasterComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__, "MagazinesRoutePageComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesRoutePageComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces_documents_department2_interface__["MagazinesRoutePageComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department3.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "DefaultPageComponent")) __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["DefaultPageComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "Documents77001Component")) __webpack_require__.d(__webpack_exports__, "Documents77001Component", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["Documents77001Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "Documents77002Component")) __webpack_require__.d(__webpack_exports__, "Documents77002Component", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["Documents77002Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "Documents77003Component")) __webpack_require__.d(__webpack_exports__, "Documents77003Component", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["Documents77003Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "Documents77004Component")) __webpack_require__.d(__webpack_exports__, "Documents77004Component", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["Documents77004Component"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "MagazinesMasterComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesMasterComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["MagazinesMasterComponent"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__, "MagazinesRoutePageComponent")) __webpack_require__.d(__webpack_exports__, "MagazinesRoutePageComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_documents_department3_interface__["MagazinesRoutePageComponent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_documents_department1_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department1.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_documents_department2_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department2.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_documents_department3_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department3.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_magazines_route_page_magazines_route_page_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MagazinesRoutePageComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__components_magazines_route_page_magazines_route_page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_magazines_master_magazines_master_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MagazinesMasterComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__components_magazines_master_magazines_master_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_magazines_child_magazines_child_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_default_page_default_page_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__components_default_page_default_page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_oper_drop_down_box_oper_drop_down_box_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_new_document_new_document_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_show_message_show_message_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_show_info_show_info_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_documents_77001_documents_77001_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Documents77001Component", function() { return __WEBPACK_IMPORTED_MODULE_17__components_documents_77001_documents_77001_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_documents_77002_documents_77002_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Documents77002Component", function() { return __WEBPACK_IMPORTED_MODULE_18__components_documents_77002_documents_77002_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_documents_77003_documents_77003_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Documents77003Component", function() { return __WEBPACK_IMPORTED_MODULE_19__components_documents_77003_documents_77003_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_documents_77004_documents_77004_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Documents77004Component", function() { return __WEBPACK_IMPORTED_MODULE_20__components_documents_77004_documents_77004_component__["a"]; });





















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department1.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=documents-department1.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department2.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=documents-department2.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/interfaces/documents-department3.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=documents-department3.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/interfaces/magazines.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=magazines.interface.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/magazines.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main__ = __webpack_require__("../../../../ag-grid-angular/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ej_angular2__ = __webpack_require__("../../../../ej-angular2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ej_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ej_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_syncfusion_ej_global_all_i18n_ej_culture_ru_RU_min_js__ = __webpack_require__("../../../../syncfusion-ej-global-all/i18n/ej.culture.ru-RU.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_syncfusion_ej_global_all_i18n_ej_culture_ru_RU_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_syncfusion_ej_global_all_i18n_ej_culture_ru_RU_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_syncfusion_ej_global_all_l10n_ej_localetexts_ru_RU_min_js__ = __webpack_require__("../../../../syncfusion-ej-global-all/l10n/ej.localetexts.ru-RU.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_syncfusion_ej_global_all_l10n_ej_localetexts_ru_RU_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_syncfusion_ej_global_all_l10n_ej_localetexts_ru_RU_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_syncfusion_ej_global_all_i18n_ej_culture_de_DE_min_js__ = __webpack_require__("../../../../syncfusion-ej-global-all/i18n/ej.culture.de-DE.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_syncfusion_ej_global_all_i18n_ej_culture_de_DE_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_syncfusion_ej_global_all_i18n_ej_culture_de_DE_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_syncfusion_ej_global_all_l10n_ej_localetexts_de_DE_min_js__ = __webpack_require__("../../../../syncfusion-ej-global-all/l10n/ej.localetexts.de-DE.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_syncfusion_ej_global_all_l10n_ej_localetexts_de_DE_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_syncfusion_ej_global_all_l10n_ej_localetexts_de_DE_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_magazines_route_page_magazines_route_page_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-route-page/magazines-route-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_magazines_master_magazines_master_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-master/magazines-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_magazines_child_magazines_child_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/magazines-child/magazines-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_default_page_default_page_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/default-page/default-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_magazines_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_documents_department1_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_documents_department2_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_documents_department3_service__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/services/documents-department3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_oper_drop_down_box_oper_drop_down_box_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/oper-drop-down-box/oper-drop-down-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_new_document_new_document_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/new-document/new-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_show_message_show_message_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-message/show-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_show_info_show_info_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/show-info/show-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_documents_77001_documents_77001_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77001/documents-77001.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_documents_77002_documents_77002_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77002/documents-77002.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_documents_77003_documents_77003_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77003/documents-77003.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_documents_77004_documents_77004_component__ = __webpack_require__("../../../../../frontend/app/areas/pages/magazines/components/documents-77004/documents-77004.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var MagazinesModule = (function () {
    function MagazinesModule() {
    }
    return MagazinesModule;
}());
MagazinesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__components_magazines_route_page_magazines_route_page_component__["a" /* MagazinesRoutePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_magazines_master_magazines_master_component__["a" /* MagazinesMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_magazines_child_magazines_child_component__["a" /* MagazinesChildComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_default_page_default_page_component__["a" /* DefaultPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_oper_drop_down_box_oper_drop_down_box_component__["a" /* AppOperDropDownBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_new_document_new_document_component__["a" /* NewDocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_show_message_show_message_component__["a" /* ShowMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_show_info_show_info_component__["a" /* ShowInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_documents_77001_documents_77001_component__["a" /* Documents77001Component */],
            __WEBPACK_IMPORTED_MODULE_24__components_documents_77002_documents_77002_component__["a" /* Documents77002Component */],
            __WEBPACK_IMPORTED_MODULE_25__components_documents_77003_documents_77003_component__["a" /* Documents77003Component */],
            __WEBPACK_IMPORTED_MODULE_26__components_documents_77004_documents_77004_component__["a" /* Documents77004Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4_ag_grid_angular_main__["AgGridModule"].withComponents([]),
            __WEBPACK_IMPORTED_MODULE_5_ej_angular2__["EJAngular2Module"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDataGridModule"],
            __WEBPACK_IMPORTED_MODULE_6_devextreme_angular__["DxDropDownBoxModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_magazines_service__["a" /* MagazinesService */],
            __WEBPACK_IMPORTED_MODULE_16__services_documents_department1_service__["a" /* DocumentsDepartment1Service */],
            __WEBPACK_IMPORTED_MODULE_17__services_documents_department2_service__["a" /* DocumentsDepartment2Service */],
            __WEBPACK_IMPORTED_MODULE_18__services_documents_department3_service__["a" /* DocumentsDepartment3Service */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__components_magazines_route_page_magazines_route_page_component__["a" /* MagazinesRoutePageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_magazines_master_magazines_master_component__["a" /* MagazinesMasterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_default_page_default_page_component__["a" /* DefaultPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_oper_drop_down_box_oper_drop_down_box_component__["a" /* AppOperDropDownBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_new_document_new_document_component__["a" /* NewDocumentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_show_message_show_message_component__["a" /* ShowMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_show_info_show_info_component__["a" /* ShowInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_documents_77001_documents_77001_component__["a" /* Documents77001Component */],
            __WEBPACK_IMPORTED_MODULE_24__components_documents_77002_documents_77002_component__["a" /* Documents77002Component */],
            __WEBPACK_IMPORTED_MODULE_25__components_documents_77003_documents_77003_component__["a" /* Documents77003Component */],
            __WEBPACK_IMPORTED_MODULE_26__components_documents_77004_documents_77004_component__["a" /* Documents77004Component */]
        ]
    })
], MagazinesModule);

//# sourceMappingURL=magazines.module.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/services/documents-department1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsDepartment1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentsDepartment1Service = (function () {
    function DocumentsDepartment1Service(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI('documentsdepartment1');
    }
    DocumentsDepartment1Service.prototype.getDocumentsDepartment1 = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    DocumentsDepartment1Service.prototype.putDocumentsDepartment1 = function (data) {
        var _this = this;
        return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    return DocumentsDepartment1Service;
}());
DocumentsDepartment1Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], DocumentsDepartment1Service);

var _a, _b, _c;
//# sourceMappingURL=documents-department1.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/services/documents-department2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsDepartment2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentsDepartment2Service = (function () {
    function DocumentsDepartment2Service(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI('documentsdepartment2');
    }
    DocumentsDepartment2Service.prototype.getDocumentsDepartment2 = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    DocumentsDepartment2Service.prototype.putDocumentsDepartment2 = function (data) {
        var _this = this;
        return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    return DocumentsDepartment2Service;
}());
DocumentsDepartment2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], DocumentsDepartment2Service);

var _a, _b, _c;
//# sourceMappingURL=documents-department2.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/services/documents-department3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsDepartment3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentsDepartment3Service = (function () {
    function DocumentsDepartment3Service(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI('documentsdepartment3');
    }
    DocumentsDepartment3Service.prototype.getDocumentsDepartment3 = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    DocumentsDepartment3Service.prototype.putDocumentsDepartment3 = function (data) {
        var _this = this;
        return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    return DocumentsDepartment3Service;
}());
DocumentsDepartment3Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], DocumentsDepartment3Service);

var _a, _b, _c;
//# sourceMappingURL=documents-department3.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/pages/magazines/services/magazines.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazinesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infrastructure_index__ = __webpack_require__("../../../../../frontend/app/infrastructure/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MagazinesService = (function () {
    function MagazinesService(http, configService, commonService) {
        this.http = http;
        this.configService = configService;
        this.commonService = commonService;
        this.baseUrl = '';
        this.menuOperations = [];
        // toolbar
        this.toolFields = { tooltipText: "tooltiptext", spriteCssClass: "spriteCss" };
        this.toolSeparator = false;
        // toolMagazines
        this.toolMagazinesData = [
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            },
            {
                id: "iInsert",
                text: "  New document  ",
                tooltiptext: "New document",
                imageUrl: "../../assets/images/DBInsert.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_2"
            },
            {
                id: "iRefresh",
                tooltiptext: "Refresh",
                imageUrl: "../../assets/images/refresh.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            }
        ];
        // toolControls
        this.toolControlsData = [
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            },
            {
                id: "iUpdate",
                text: "  Update document  ",
                tooltiptext: "Update document",
                imageUrl: "../../assets/images/ToolsPencil.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_2"
            },
            {
                id: "iRefresh",
                tooltiptext: "Refresh",
                imageUrl: "../../assets/images/refresh.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            }
        ];
        // toolEdits
        this.toolEditsData = [
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            },
            {
                id: "iSave",
                text: "  Save  ",
                tooltiptext: "Save",
                imageUrl: "../../assets/images/diskette.png"
            },
            {
                id: "iCancel",
                text: "  Cancel  ",
                tooltiptext: "Cancel",
                imageUrl: "../../assets/images/error.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_2"
            },
            {
                id: "iRefresh",
                tooltiptext: "Refresh",
                imageUrl: "../../assets/images/refresh.ico"
            },
            {
                id: "iEmpty",
                spriteCss: "itemEmpty_1"
            }
        ];
        this.baseUrl = configService.getApiURI('magazines');
        this.onSaveFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.onCancelFunction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.onSaveMagazines = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.onCancelEdit = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    MagazinesService.prototype.setGridMagazinesFocus = function () {
        var focusedCell = this.gridOptions.api.getFocusedCell();
        this.gridOptions.api.ensureIndexVisible(focusedCell.rowIndex);
        this.gridOptions.api.setFocusedCell(focusedCell.rowIndex, focusedCell.column.getColId(), null);
    };
    MagazinesService.prototype.getMagazines = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    MagazinesService.prototype.putMagazines = function (id, data) {
        var _this = this;
        return this.http.put(this.baseUrl + '/' + id, JSON.stringify(data[0]), this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    MagazinesService.prototype.postMagazines = function (data) {
        var _this = this;
        return this.http.post(this.baseUrl, JSON.stringify(data[0]), this.commonService.getRequestOptions())
            .map(function (response) {
            return _this.commonService.extractArray(response);
        })
            .catch(this.commonService.handleError);
    };
    MagazinesService.prototype.getEditMode = function () {
        var gridIsEdit = false;
        var toolControlsHidden = false;
        try {
            gridIsEdit = this.grid.widget.model.isEdit;
            toolControlsHidden = this.toolControls.widget.model.hide;
        }
        catch (e) {
            var gridIsEdit_1 = false;
            var toolControlsHidden_1 = false;
        }
        if (gridIsEdit == true || toolControlsHidden == true) {
            return true;
        }
        else {
            return false;
        }
    };
    MagazinesService.prototype.saveFunction = function () {
        this.onSaveFunction.next(this.magazinesID);
    };
    MagazinesService.prototype.cancelFunction = function () {
        this.onCancelFunction.next(this.magazinesID);
    };
    MagazinesService.prototype.saveMagazines = function () {
        this.onSaveMagazines.next(true);
    };
    MagazinesService.prototype.cancelEdit = function () {
        this.onCancelEdit.next(true);
    };
    return MagazinesService;
}());
MagazinesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_services_auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_services_auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__infrastructure_index__["b" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__infrastructure_index__["b" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__infrastructure_index__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__infrastructure_index__["a" /* CommonService */]) === "function" && _c || Object])
], MagazinesService);

var _a, _b, _c;
//# sourceMappingURL=magazines.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tbackground-image: url('/assets/images/mountains.jpg');\r\n\tbackground-position: center center;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.sign-in-form {\r\n    min-width: 300px;\r\n    background-color: white;\r\n    opacity: .93;\r\n    padding: 20px;\r\n}\r\n\r\na {\r\n    line-height: 32px;\r\n}\r\n\r\nbutton {\r\n    float: right;\r\n}\r\n\r\n.message {\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../frontend/app/areas/user/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-form\">\r\n\t<div class=\"login-container\">\r\n\t\t<img src=\"./assets/images/logo.png\" width=\"320\" />\r\n\t\t<h4 class=\"form-login-heading\">Authentication</h4>\r\n\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginError\"><strong>Warning:</strong> Username or Password mismatch</div>\r\n\t\t<form class=\"form-login\" [formGroup]=\"loginForm\" (submit)=\"performLogin($event)\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input #username formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"LOGIN\" required autofocus />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"PASSWORD\" required />\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-md btn-primary\" type=\"submit\">Sign In</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../frontend/app/areas/user/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_services_menu_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__ = __webpack_require__("../../../../../frontend/app/areas/main/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(mainService, menuService, userService, authService, router, fb) {
        this.mainService = mainService;
        this.menuService = menuService;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.title = "Login";
        this.loginForm = null;
        this.loginError = false;
        this.isAuthenticated = false;
        // subscribe
        this.aliveSubscribe = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.loginForm.valueChanges
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) {
            _this.loginError = false;
        });
        this.username.nativeElement.focus();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.aliveSubscribe = false;
    };
    LoginComponent.prototype.performLogin = function (e) {
        var _this = this;
        e.preventDefault();
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.authService.login(username, password)
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) {
            // login successful
            _this.loginError = false;
            _this.userService.isAuthenticated = true;
            var auth = _this.authService.getAuth();
            //alert("Our Token is: " + auth.access_token);
            _this.promiseGetOperations();
        }, function (err) {
            console.log(err);
            // login failure
            _this.loginError = true;
            _this.userService.isAuthenticated = false;
            _this.authService.logout();
        });
        this.username.nativeElement.focus();
    };
    //
    //
    //
    LoginComponent.prototype.promiseGetOperations = function () {
        Promise
            .resolve()
            .then(this.getOperations());
    };
    LoginComponent.prototype.getOperations = function () {
        var _this = this;
        this.mainService
            .getOperations()
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.initOperations(data); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.initOperations = function (data) {
        this.mainService.operations = data;
        this.promiseGetMainMenu();
        //console.log('operations: ' + JSON.stringify(this.mainService.operations));
    };
    //
    //
    //
    LoginComponent.prototype.promiseGetMainMenu = function () {
        Promise
            .resolve()
            .then(this.getMainMenu());
    };
    LoginComponent.prototype.getMainMenu = function () {
        var _this = this;
        this.menuService
            .getMainMenu()
            .takeWhile(function () { return _this.aliveSubscribe; })
            .subscribe(function (data) { return _this.initMainMenu(data); }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.initMainMenu = function (data) {
        this.mainService.mainMenu = data;
        this.router.navigate(['/main']);
        //console.log('mainService.mainMenu: ' + JSON.stringify(this.mainService.mainMenu));
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('username'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "username", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../frontend/app/areas/user/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../frontend/app/areas/user/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__main_services_main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__main_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__main_services_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_module__ = __webpack_require__("../../../../../frontend/app/areas/user/user.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-guard.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/user.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../frontend/app/areas/user/components/login/login.component.ts");
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        //console.log('AuthGuard#canActivate called ' + this.userService.isAuthenticated);
        if (!this.userService.isAuthenticated) {
            console.log('not auth');
            this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn();
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/services/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthHttp = (function () {
    function AuthHttp(http) {
        this.http = null;
        this.authKey = "auth@test";
        this.http = http;
    }
    AuthHttp.prototype.get = function (url, opts) {
        if (opts === void 0) { opts = {}; }
        this.configureAuth(opts);
        return this.http.get(url, opts);
    };
    AuthHttp.prototype.post = function (url, data, opts) {
        if (opts === void 0) { opts = {}; }
        this.configureAuth(opts);
        return this.http.post(url, data, opts);
    };
    AuthHttp.prototype.put = function (url, data, opts) {
        if (opts === void 0) { opts = {}; }
        this.configureAuth(opts);
        return this.http.put(url, data, opts);
    };
    AuthHttp.prototype.delete = function (url, opts) {
        if (opts === void 0) { opts = {}; }
        this.configureAuth(opts);
        return this.http.delete(url, opts);
    };
    AuthHttp.prototype.configureAuth = function (opts) {
        var i = localStorage.getItem(this.authKey);
        if (i != null) {
            var auth = JSON.parse(i);
            console.log(auth);
            if (auth.access_token != null) {
                if (opts.headers == null) {
                    opts.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                }
                opts.headers.set("Authorization", "Bearer " + auth.access_token);
            }
        }
    };
    return AuthHttp;
}());
AuthHttp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthHttp);

var _a;
//# sourceMappingURL=auth-http.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authKey = "auth@test";
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var url = "api/connect/token"; // JwtProvider's LoginPath
        var data = {
            username: username,
            password: password,
            client_id: "ngnetcore",
            // required when signing up with username/password
            grant_type: "password",
            // space-separated list of scopes for which the token is issued
            scope: "offline_access profile email"
        };
        return this.http.post(url, this.toUrlEncodedString(data), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        }))
            .map(function (response) {
            var auth = response.json();
            console.log("The following auth JSON object has been received:");
            console.log(auth);
            _this.setAuth(auth);
            return auth;
        });
    };
    AuthService.prototype.logout = function () {
        this.setAuth(null);
        return true;
    };
    // Converts a Json object to urlencoded format
    AuthService.prototype.toUrlEncodedString = function (data) {
        var body = "";
        for (var key in data) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(data[key]);
        }
        return body;
    };
    // Persist auth into localStorage or removes it if a NULL argument is given
    AuthService.prototype.setAuth = function (auth) {
        if (auth) {
            localStorage.setItem(this.authKey, JSON.stringify(auth));
        }
        else {
            localStorage.removeItem(this.authKey);
        }
        return true;
    };
    // Retrieves the auth JSON object (or NULL if none)
    AuthService.prototype.getAuth = function () {
        var i = localStorage.getItem(this.authKey);
        if (i) {
            return JSON.parse(i);
        }
        else {
            return null;
        }
    };
    // Returns TRUE if the user is logged in, FALSE otherwise.
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem(this.authKey) != null;
    };
    AuthService.prototype.add = function (user) {
        return this.http.post("api/accounts", JSON.stringify(user), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        }))
            .map(function (response) { return response.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_http_service__["a" /* AuthHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_http_service__["a" /* AuthHttp */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    UserService.prototype.signOut = function () {
        this.isAuthenticated = false;
        this.authService.logout();
        this.router.navigate(['/login']);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of({});
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/areas/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../frontend/app/areas/user/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_http_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../frontend/app/areas/user/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_http_service__["a" /* AuthHttp */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../frontend/app/infrastructure/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(applicationError || modelStateErrors || 'Server error');
    };
    CommonService.prototype.extractArray = function (response, showprogress) {
        if (showprogress === void 0) { showprogress = true; }
        var data = response.json();
        return data || [];
    };
    // returns a viable RequestOptions object to handle Json requests
    CommonService.prototype.getRequestOptions = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                "Content-Type": "application/json"
            })
        });
    };
    return CommonService;
}());
CommonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/infrastructure/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this.apiURI = 'api/';
    }
    ConfigService.prototype.getApiURI = function (controller) {
        return this.apiURI + controller;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../frontend/app/infrastructure/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_service__ = __webpack_require__("../../../../../frontend/app/infrastructure/config.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__config_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../frontend/app/infrastructure/common.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__common_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../frontend/app/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__);
// Observable class extensions


// Observable operators









//# sourceMappingURL=rxjs-extensions.js.map

/***/ }),

/***/ "../../../../../frontend/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../frontend/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../frontend/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../frontend/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../frontend/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map