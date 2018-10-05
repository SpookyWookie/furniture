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

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_furniture_list_furniture_list_furniture_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/furniture-list/furniture-list/furniture-list.component */ "./src/app/components/furniture-list/furniture-list/furniture-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_furniture_item_furniture_item_furniture_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/furniture-item/furniture-item/furniture-item.component */ "./src/app/components/furniture-item/furniture-item/furniture-item.component.ts");
/* harmony import */ var _components_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/user-item/user-item.component */ "./src/app/components/user-item/user-item.component.ts");
/* harmony import */ var _components_furniture_edit_furniture_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/furniture-edit/furniture-edit.component */ "./src/app/components/furniture-edit/furniture-edit.component.ts");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/user-edit/user-edit.component */ "./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var _components_furniture_add_furniture_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/furniture-add/furniture-add.component */ "./src/app/components/furniture-add/furniture-add.component.ts");
/* harmony import */ var _components_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/user-add/user-add.component */ "./src/app/components/user-add/user-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"] },
    { path: 'user/:id', component: _components_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_7__["UserItemComponent"] },
    { path: 'user-edit/:id', component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_9__["UserEditComponent"] },
    { path: 'user-add', component: _components_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_11__["UserAddComponent"] },
    { path: 'furniture-item/:id', component: _components_furniture_item_furniture_item_furniture_item_component__WEBPACK_IMPORTED_MODULE_6__["FurnitureItemComponent"] },
    { path: 'furniture-edit/:id', component: _components_furniture_edit_furniture_edit_component__WEBPACK_IMPORTED_MODULE_8__["FurnitureEditComponent"] },
    { path: 'furniture-add', component: _components_furniture_add_furniture_add_component__WEBPACK_IMPORTED_MODULE_10__["FurnitureAddComponent"] },
    { path: 'furniture', component: _components_furniture_list_furniture_list_furniture_list_component__WEBPACK_IMPORTED_MODULE_3__["FurnitureListComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" }),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [],
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

module.exports = "\n<app-jumbotron></app-jumbotron>\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_furniture_item_furniture_item_furniture_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/furniture-item/furniture-item/furniture-item.component */ "./src/app/components/furniture-item/furniture-item/furniture-item.component.ts");
/* harmony import */ var _components_furniture_list_furniture_list_furniture_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/furniture-list/furniture-list/furniture-list.component */ "./src/app/components/furniture-list/furniture-list/furniture-list.component.ts");
/* harmony import */ var _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/furniture-service.service */ "./src/app/services/furniture-service.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-item/user-item.component */ "./src/app/components/user-item/user-item.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_furniture_edit_furniture_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/furniture-edit/furniture-edit.component */ "./src/app/components/furniture-edit/furniture-edit.component.ts");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var _components_furniture_add_furniture_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/furniture-add/furniture-add.component */ "./src/app/components/furniture-add/furniture-add.component.ts");
/* harmony import */ var _components_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-add/user-add.component */ "./src/app/components/user-add/user-add.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_furniture_item_furniture_item_furniture_item_component__WEBPACK_IMPORTED_MODULE_5__["FurnitureItemComponent"],
                _components_furniture_list_furniture_list_furniture_list_component__WEBPACK_IMPORTED_MODULE_6__["FurnitureListComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"],
                _components_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_10__["UserItemComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _components_furniture_edit_furniture_edit_component__WEBPACK_IMPORTED_MODULE_14__["FurnitureEditComponent"],
                _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_15__["UserEditComponent"],
                _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_16__["JumbotronComponent"],
                _components_furniture_add_furniture_add_component__WEBPACK_IMPORTED_MODULE_17__["FurnitureAddComponent"],
                _components_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_18__["UserAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [_services_furniture_service_service__WEBPACK_IMPORTED_MODULE_7__["FurnitureServiceService"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/furniture-add/furniture-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/furniture-add/furniture-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/furniture-add/furniture-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/furniture-add/furniture-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"addFurniture(name.value, code.value, price.value, comment.value, type.value)\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"furniture.name\" id=\"name\" name=\"name\" #name tabindex=\"1\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"code\">Code:</label>\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"furniture.code\" id=\"code\" name=\"code\" #code tabindex=\"2\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"price\">Price:</label>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"furniture.price\"  id=\"price\" name=\"price\" #price tabindex=\"3\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"furniture.comment\" id=\"comment\" name=\"comment\" #comment tabindex=\"4\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"type\">Type:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"furniture.type\" id=\"type\" name=\"type\" #type tabindex=\"5\">\n  </div>\n  <button class=\"btn btn-outline-info\" type=\"submit\"   > Submit</button>\n\n</form>\n\n<button class=\"btn btn-info\" (click)=\"goBack()\"> Back</button>\n"

/***/ }),

/***/ "./src/app/components/furniture-add/furniture-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/furniture-add/furniture-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: FurnitureAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureAddComponent", function() { return FurnitureAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Furniture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Furniture */ "./src/app/models/Furniture.ts");
/* harmony import */ var _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/furniture-service.service */ "./src/app/services/furniture-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FurnitureAddComponent = /** @class */ (function () {
    function FurnitureAddComponent(furnitureService, route, location, router) {
        this.furnitureService = furnitureService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.furniture = new _models_Furniture__WEBPACK_IMPORTED_MODULE_1__["Furniture"]();
    }
    FurnitureAddComponent.prototype.ngOnInit = function () {
    };
    FurnitureAddComponent.prototype.addFurniture = function (name, code, price, comment, type) {
        var _this = this;
        this.furniture.name = name;
        this.furniture.code = code;
        this.furniture.price = price;
        this.furniture.comment = comment;
        this.furniture.type = type;
        this.furnitureService.addFurniture(this.furniture).subscribe(function (navigate) { return _this.router.navigate(['furniture']); });
    };
    FurnitureAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    FurnitureAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-furniture-add',
            template: __webpack_require__(/*! ./furniture-add.component.html */ "./src/app/components/furniture-add/furniture-add.component.html"),
            styles: [__webpack_require__(/*! ./furniture-add.component.css */ "./src/app/components/furniture-add/furniture-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_furniture_service_service__WEBPACK_IMPORTED_MODULE_2__["FurnitureServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FurnitureAddComponent);
    return FurnitureAddComponent;
}());



/***/ }),

/***/ "./src/app/components/furniture-edit/furniture-edit.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/furniture-edit/furniture-edit.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/furniture-edit/furniture-edit.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/furniture-edit/furniture-edit.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"furniture\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"furniture.name\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"code\">Item code:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"furniture.code\" id=\"code\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"price\">Price:</label>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"furniture.price\" id=\"price\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Comment\">Lessons fund:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"furniture.comment\" id=\"Comment\">\n  </div>\n\n\n\n  <button class=\"btn btn-danger\" (click)=\"save()\"> Submit</button>\n  <button class=\"btn btn-info\" (click)=\"goBack()\"> Back</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/furniture-edit/furniture-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/furniture-edit/furniture-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: FurnitureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureEditComponent", function() { return FurnitureEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/furniture-service.service */ "./src/app/services/furniture-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Furniture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Furniture */ "./src/app/models/Furniture.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FurnitureEditComponent = /** @class */ (function () {
    function FurnitureEditComponent(route, location, furnitureService, router) {
        this.route = route;
        this.location = location;
        this.furnitureService = furnitureService;
        this.router = router;
    }
    FurnitureEditComponent.prototype.ngOnInit = function () {
        this.getFurnitureItem();
    };
    FurnitureEditComponent.prototype.getFurnitureItem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.furnitureService.getOneFurniture(id).subscribe(function (furniture) { return _this.furniture = furniture; });
    };
    FurnitureEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    FurnitureEditComponent.prototype.save = function () {
        var _this = this;
        this.furnitureService.updateFurniture(this.furniture).subscribe(function (navigate) { return _this.router.navigate(['furniture']); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Furniture__WEBPACK_IMPORTED_MODULE_3__["Furniture"])
    ], FurnitureEditComponent.prototype, "furniture", void 0);
    FurnitureEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-furniture-edit',
            template: __webpack_require__(/*! ./furniture-edit.component.html */ "./src/app/components/furniture-edit/furniture-edit.component.html"),
            styles: [__webpack_require__(/*! ./furniture-edit.component.css */ "./src/app/components/furniture-edit/furniture-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_1__["FurnitureServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FurnitureEditComponent);
    return FurnitureEditComponent;
}());



/***/ }),

/***/ "./src/app/components/furniture-item/furniture-item/furniture-item.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/furniture-item/furniture-item/furniture-item.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/furniture-item/furniture-item/furniture-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/furniture-item/furniture-item/furniture-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\">\n  <div class=\"container-fluid\">\n\n\n    <table class=\"table table-striped table-hover\">\n      <thead><h4>Item</h4>\n      <tr>\n        <th>ID <button class=\"btn btn-link\"> <span class=\"fa fa-sort\"></span> </button> </th>\n        <th>Code <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n        <th>Name <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span> </button> </th>\n        <th>Price <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span> </button> </th>\n        <th>Comment <button class=\"btn btn-link\"><span class=\"fa fa-sort\"></span></button> </th>\n\n\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <!--<th scope=\"row\">{{parent.id}} </th>-->\n        <td>{{item.id}}</td>\n        <td>{{item.code}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.price}}</td>\n        <td>{{item.comment}}</td>\n\n      </tr>\n\n\n\n\n      </tbody>\n    </table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/furniture-item/furniture-item/furniture-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/furniture-item/furniture-item/furniture-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FurnitureItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureItemComponent", function() { return FurnitureItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Furniture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Furniture */ "./src/app/models/Furniture.ts");
/* harmony import */ var _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/furniture-service.service */ "./src/app/services/furniture-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FurnitureItemComponent = /** @class */ (function () {
    function FurnitureItemComponent(route, location, router, furnitureService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.furnitureService = furnitureService;
    }
    FurnitureItemComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    FurnitureItemComponent.prototype.getItem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.furnitureService.getOneFurniture(id).subscribe(function (item) { return _this.item = item; });
    };
    FurnitureItemComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Furniture__WEBPACK_IMPORTED_MODULE_1__["Furniture"])
    ], FurnitureItemComponent.prototype, "item", void 0);
    FurnitureItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-furniture-item',
            template: __webpack_require__(/*! ./furniture-item.component.html */ "./src/app/components/furniture-item/furniture-item/furniture-item.component.html"),
            styles: [__webpack_require__(/*! ./furniture-item.component.css */ "./src/app/components/furniture-item/furniture-item/furniture-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_2__["FurnitureServiceService"]])
    ], FurnitureItemComponent);
    return FurnitureItemComponent;
}());



/***/ }),

/***/ "./src/app/components/furniture-list/furniture-list/furniture-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/furniture-list/furniture-list/furniture-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/furniture-list/furniture-list/furniture-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/furniture-list/furniture-list/furniture-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items$ | async\">\n\n  <div class=\"row\">\n\n    <div [routerLink]=\"'/furniture-item/' + item.id \">\n      <span>\n\n        <div class=\"col-2-lg\">\n          {{item.id}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.name}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.code}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.comment}}\n        </div>\n\n      </span>\n\n\n    </div>\n\n    <div class=\"col-2-lg\">\n      <button class=\"btn btn-link\" (click)=\"onEditFurniture(item.id)\"><span class=\"fa fa-edit\"></span></button>\n    </div>\n\n    <div class=\"col-2-lg\">\n      <button class=\"btn btn-link\" (click)=\"deleteFurniture(item.id)\"><span class=\"fa fa-remove\"></span></button>\n    </div>\n\n\n  </div>\n</div>\n<button class=\"btn btn-info\" (click)=\"addFurniture()\"> Add Furniture item</button>\n"

/***/ }),

/***/ "./src/app/components/furniture-list/furniture-list/furniture-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/furniture-list/furniture-list/furniture-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FurnitureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureListComponent", function() { return FurnitureListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_furniture_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/furniture-service.service */ "./src/app/services/furniture-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FurnitureListComponent = /** @class */ (function () {
    function FurnitureListComponent(furnitureService, router) {
        this.furnitureService = furnitureService;
        this.router = router;
    }
    FurnitureListComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    FurnitureListComponent.prototype.updateList = function () {
        this.items$ = this.furnitureService.getFurniture();
    };
    FurnitureListComponent.prototype.onEditFurniture = function (id) {
        this.router.navigate(['/furniture-edit/', id]);
    };
    FurnitureListComponent.prototype.addFurniture = function () {
        this.router.navigate(['/furniture-add']);
    };
    FurnitureListComponent.prototype.deleteFurniture = function (id) {
        var _this = this;
        console.log("deleting furniture item " + id);
        this.furnitureService.deleteFurniture(id).subscribe(function (navigate) { return _this.updateList(); });
        // this.router.navigate(['/furniture']);
    };
    FurnitureListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-furniture-list',
            template: __webpack_require__(/*! ./furniture-list.component.html */ "./src/app/components/furniture-list/furniture-list/furniture-list.component.html"),
            styles: [__webpack_require__(/*! ./furniture-list.component.css */ "./src/app/components/furniture-list/furniture-list/furniture-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_furniture_service_service__WEBPACK_IMPORTED_MODULE_1__["FurnitureServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FurnitureListComponent);
    return FurnitureListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-add/user-add.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/user-add/user-add.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-add/user-add.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/user-add/user-add.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"addUser(name.value, surname.value, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"user.name\" id=\"name\" name=\"name\" #name tabindex=\"1\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"surname\">Surname:</label>\n    <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"user.surname\" id=\"surname\" name=\"surname\" #surname tabindex=\"2\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\"  id=\"username\" name=\"username\" #username tabindex=\"3\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password:</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"password\" name=\"password\" #password tabindex=\"4\">\n  </div>\n\n\n  <button class=\"btn btn-outline-info\" type=\"submit\"   > Submit</button>\n\n</form>\n\n<button class=\"btn btn-info\" (click)=\"goBack()\"> Back</button>\n"

/***/ }),

/***/ "./src/app/components/user-add/user-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-add/user-add.component.ts ***!
  \***********************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(userService, route, location, router) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    UserAddComponent.prototype.ngOnInit = function () {
    };
    UserAddComponent.prototype.addUser = function (name, surname, username, password) {
        var _this = this;
        this.user.name = name;
        this.user.surname = surname;
        this.user.username = username;
        this.user.password = password;
        this.userService.addUser(this.user).subscribe(function (navigate) { return _this.router.navigate(['users']); });
    };
    UserAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/components/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/components/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"surname\">Item code:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.surname\" id=\"surname\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Price:</label>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"id\">Lessons fund:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.id\" id=\"id\">\n  </div>\n\n\n\n  <button class=\"btn btn-danger\" (click)=\"save()\"> Submit</button>\n  <button class=\"btn btn-info\" (click)=\"goBack()\"> Back</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(userService, route, location, router) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserEditComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getOneUser(id).subscribe(function (user) { return _this.user = user; });
    };
    UserEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserEditComponent.prototype.save = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function (navigate) { return _this.router.navigate(['users']); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserEditComponent.prototype, "user", void 0);
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/components/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user-item/user-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-item/user-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-item/user-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-item/user-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> {{user.id}}, {{user.name}}, {{user.username}}</h4>\n"

/***/ }),

/***/ "./src/app/components/user-item/user-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-item/user-item.component.ts ***!
  \*************************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserItemComponent = /** @class */ (function () {
    function UserItemComponent(route, location, router, userService) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.userService = userService;
    }
    UserItemComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserItemComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getOneUser(id).subscribe(function (user) { return _this.user = user; });
    };
    UserItemComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/components/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/components/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of users$ | async\">\n\n  <div class=\"row\">\n\n    <div [routerLink]=\"'/furniture-item/' + item.id \">\n      <span>\n\n        <div class=\"col-2-lg\">\n          {{item.id}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.name}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.surname}}\n        </div>\n\n        <div class=\"col-2-lg\">\n          {{item.username}}\n        </div>\n\n      </span>\n\n\n    </div>\n\n    <div class=\"col-2-lg\">\n      <button class=\"btn btn-link\" (click)=\"onEditUser(item.id)\"><span class=\"fa fa-edit\"></span></button>\n    </div>\n\n    <div class=\"col-2-lg\">\n      <button class=\"btn btn-link\" (click)=\"deleteUser(item.id)\"><span class=\"fa fa-remove\"></span></button>\n    </div>\n\n\n  </div>\n</div>\n\n<button class=\"btn btn-info\" (click)=\"addUser()\"> Add User</button>\n\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    UserListComponent.prototype.updateList = function () {
        this.users$ = this.userService.getUsers();
    };
    UserListComponent.prototype.addUser = function () {
        this.router.navigate(['/user-add']);
    };
    UserListComponent.prototype.onEditUser = function (id) {
        this.router.navigate(['/user-edit/', id]);
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log("deleting furniture item " + id);
        this.userService.deleteUser(id).subscribe(function (navigate) { return _this.updateList(); });
        // this.router.navigate(['/furniture']);
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/*!***************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.html":
/*!****************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Just some random store</h1>\n    <p>Your basic bland ordinary store for all the furniture requirements your not so sweet home would ever need.</p>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.ts ***!
  \**************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
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

var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jumbotron',
            template: __webpack_require__(/*! ./jumbotron.component.html */ "./src/app/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__(/*! ./jumbotron.component.css */ "./src/app/jumbotron/jumbotron.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "./src/app/models/Furniture.ts":
/*!*************************************!*\
  !*** ./src/app/models/Furniture.ts ***!
  \*************************************/
/*! exports provided: Furniture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Furniture", function() { return Furniture; });
var Furniture = /** @class */ (function () {
    function Furniture() {
    }
    return Furniture;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n\n  <a class=\"navbar-brand\">Furniture menu</a>\n\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['furniture']\">Furniture</a>\n    </li>\n\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['users']\">Users</a>\n    </li>\n\n\n  </ul>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/furniture-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/furniture-service.service.ts ***!
  \*******************************************************/
/*! exports provided: FurnitureServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureServiceService", function() { return FurnitureServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FurnitureServiceService = /** @class */ (function () {
    function FurnitureServiceService(httpClient) {
        this.httpClient = httpClient;
    }
    //NAPRAVITI FURNITURE CONTROLLER
    FurnitureServiceService.prototype.getOneFurniture = function (id) {
        var _this = this;
        return this.httpClient
            .get('/api/furniture/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Loaded subject with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFurniture')));
    };
    FurnitureServiceService.prototype.getFurniture = function () {
        var _this = this;
        return this.httpClient.get('/api/furniture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Furniture loaded"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFurniture')));
    };
    FurnitureServiceService.prototype.addFurniture = function (furniture) {
        var _this = this;
        return this.httpClient
            .post('/api/furniture', furniture /*, httpOptions*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Added furniture item with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addFurniture')));
    };
    FurnitureServiceService.prototype.updateFurniture = function (furniture) {
        var _this = this;
        return this.httpClient
            .put('/api/furniture/' + furniture.id, furniture)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Updated furniture with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateFurniture')));
    };
    FurnitureServiceService.prototype.deleteFurniture = function (id) {
        var _this = this;
        return this.httpClient.delete('/api/furniture/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Furniture item Deleted!"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteFurniture')));
    };
    FurnitureServiceService.prototype.log = function (message) {
        // this.messageService.add('SubjectService: ' + message);
        alert('FurnitureService: ' + message);
    };
    FurnitureServiceService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    FurnitureServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FurnitureServiceService);
    return FurnitureServiceService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getOneUser = function (id) {
        var _this = this;
        return this.httpClient
            .get('/api/users/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Loaded user with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getOneUser')));
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.httpClient.get('/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("Users loaded"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers')));
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return this.httpClient
            .post('/api/users', user /*, httpOptions*/)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Added user item with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser')));
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        return this.httpClient
            .put('/api/users/' + user.id, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (a) { return _this.log("Updated user with id \"" + a.id + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUser')));
    };
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return this.httpClient.delete('/api/users/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("User Deleted!"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    UserService.prototype.log = function (message) {
        // this.messageService.add('SubjectService: ' + message);
        alert('UserService: ' + message);
    };
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            _this.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! E:\ITobuka\Go4Code\update 12.9\Furniture_client\furniture\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map