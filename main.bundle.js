webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img (click)=\"postApi()\" width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <router-outlet></router-outlet> -->\n<!--\n<div class=\"wrapper\">\n  <p><a routerLink=\"/home\">Today's Date is : {{myDate  | amUtc | amDateFormat: 'YYYY-MM-DD HH:mm'}}</a></p>-->\n  <!--  <div *ngIf=\"showSignUpScreen\" class=\"container\">\n      <h1>Welcome</h1>\n      \n      <form  class=\"form\">\n        <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n        <input type=\"text\" placeholder=\"Mobile No.\" [(ngModel)]=\"mobilno\" name=\"mobilno\">\n        <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" >\n        <button type=\"submit\" (click)=\"register()\" id=\"login-button\">Sign Up</button>\n      </form>\n    </div>\n\n    <div *ngIf=\"!showSignUpScreen\" class=\"container\">\n      <h1>Welcome {{username}}</h1>\n      <h3>Please Enter the Otp</h3>\n      <form class=\"form\">\n        <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"otp\" name=\"otp\">\n        <button type=\"submit\" (click)=\"confirmRegistration()\" id=\"login-button\">Confirm Otp</button>\n      </form><p></p>\n      <div style=\"position: relative;\" (click)=\"resendCode()\">Resend Code</div>\n    </div>\n    \n    <ul class=\"bg-bubbles\" >\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n       <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>\n \n-->\n\n<!--<ul>\n    <li><a routerLink=\"/\">Home</a></li>\n    <li><a routerLink=\"/login\">Login</a></li>\n </ul> -->\n <div class=\"wrapper\">\n <router-outlet ></router-outlet>\n <ul class=\"bg-bubbles\" >\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n   <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // use "npm install moment "
var AppComponent = /** @class */ (function () {
    // constructor Defined Below
    function AppComponent(_demoService) {
        this._demoService = _demoService;
        // variables Defined Below
        this.title = 'app';
        this.now = '';
        this.showSignUpScreen = true;
        this.username = 'Binod';
        this.mobilno = '9864903840';
        this.email = 'investorsindiatechnologies@gmail.com';
        this.otp = '';
        this.usern = '';
        this.user = {};
        this.myDate = new Date();
        this.now = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-DD-MM'); // this is example for using moment
        console.log(this.now); // moment format example
    }
    // get Api through service Defined Below
    AppComponent.prototype.getFoods = function () {
        var _this = this;
        this._demoService.getFoods({ 'clientId': '97' }).subscribe(function (data) { _this.foods = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading foods ' + JSON.stringify(_this.foods)); });
    };
    // post Api through service Defined Below
    AppComponent.prototype.postApi = function () {
        var _this = this;
        this._demoService.postApi({ 'clientId': '97' }).subscribe(function (data) { _this.foods = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading foods ' + JSON.stringify(_this.foods)); });
    };
    // Dummy Sanchits api defined below
    AppComponent.prototype.addUser = function () {
        var _this = this;
        alert(this.username + this.mobilno + this.email);
        this.showSignUpScreen = false;
        this._demoService.addUser({
            "mobile": "+91" + this.mobilno,
            "name": this.username,
            "email": this.email
        }).subscribe(function (data) {
            _this.foods = data;
            _this.onSuccess(data);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading foods ' + JSON.stringify(_this.foods)); });
    };
    // on Success method defined below
    AppComponent.prototype.onSuccess = function (data) {
        if (data.status == 1) {
            alert("Status is 1" + "ok");
        }
        else {
            alert("Status is 0" + "not ok");
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__otp_otp_component__ = __webpack_require__("../../../../../src/app/otp/otp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_globals__ = __webpack_require__("../../../../../src/app/common/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AppRoutingModule } from './app-routing.module';









var appRoutes = [
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_11__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'forgotPass', component: __WEBPACK_IMPORTED_MODULE_12__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'otp', component: __WEBPACK_IMPORTED_MODULE_13__otp_otp_component__["a" /* OtpComponent */] },
    { path: '**', redirectTo: '/signUp', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_12__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13__otp_otp_component__["a" /* OtpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__demo_service__["a" /* DemoService */], __WEBPACK_IMPORTED_MODULE_7__services_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_14__common_globals__["a" /* Globals */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// globals.ts

var Globals = /** @class */ (function () {
    function Globals() {
        this.role = 'test';
        this.defaultLoader = false; // for Loader
        this.cognitoUserName = '';
        this.loginUserName = '';
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
//let params = { 'clientId': '97' };
var DemoService = /** @class */ (function () {
    function DemoService(http) {
        this.http = http;
    }
    // Uses http.get() to load data from a single API endpoint
    DemoService.prototype.getFoods = function (myparam) {
        var params = myparam;
        return this.http.get('http://54.169.114.10:3001/client/ext/getExternalFund', { params: params });
    };
    DemoService.prototype.postApi = function (myparam) {
        var params = myparam;
        return this.http.post('http://54.169.114.10:3001/client/ext/getExternalFund', params);
    };
    DemoService.prototype.addUser = function (myparam) {
        var params = myparam;
        return this.http.post('https://6eq3iod6j0.execute-api.us-east-1.amazonaws.com/dev/addcustomer', params);
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DemoService);
    return DemoService;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Welcome</h1>\n  <h3>Please Enter the Otp</h3>\n  <form class=\"form\">\n    <input type=\"text\" placeholder=\"Enter the Otp\">\n    <button type=\"submit\" id=\"login-button\">Confirm</button>\n  </form><p></p>\n  <div>Resend Code</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.spinner{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1003;background: #000000;overflow:hidden}  .spinner div:first-child{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;box-shadow:0 3px 3px 0 rgba(255,56,106,1);transform:translate3d(0,0,0);animation:spin 2s linear infinite}  .spinner div:first-child:after,.spinner div:first-child:before{content:'';position:absolute;border-radius:50%}  .spinner div:first-child:before{top:5px;left:5px;right:5px;bottom:5px;box-shadow:0 3px 3px 0 rgb(255, 228, 32);-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}  .spinner div:first-child:after{top:15px;left:15px;right:15px;bottom:15px;box-shadow:0 3px 3px 0 rgba(61, 175, 255,1);animation:spin 1.5s linear infinite}</style>\n<div id=\"nb-global-spinner\" class=\"spinner\">\n  <div class=\"blob blob-0\"></div>\n  <div class=\"blob blob-1\"></div>\n  <div class=\"blob blob-2\"></div>\n  <div class=\"blob blob-3\"></div>\n  <div class=\"blob blob-4\"></div>\n  <div class=\"blob blob-5\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        alert("ok Home ");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n        <h1>Welcome</h1>\n        <form  class=\"form\">\n          \n          <input type=\"text\"  id=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\">\n          <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required\n           minlength=\"4\" forbiddenName=\"bob\" #name=\"ngModel\" >\n\n<div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n     class=\"alert alert-danger\">\n\n  <div *ngIf=\"name.errors.required\">\n    Name is required.\n  </div>\n  <div *ngIf=\"name.errors.minlength\">\n    Name must be at least 4 characters long.\n  </div>\n  <div *ngIf=\"name.errors.forbiddenName\">\n    Name cannot be Bob.\n  </div>\n\n</div>\n          <button type=\"submit\" (click)=\"validateLogin()\" id=\"login-button\">Login</button>\n          <div style=\"position: relative;margin-top: 20px;\"  (click)=\"switchToSignUp()\">Not Registered Yet: Sign Up Now</div>\n        \n        </form>\n\n        \n      </div>\n      \n  \n      \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_globals__ = __webpack_require__("../../../../../src/app/common/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = /** @class */ (function () {
    // constructor
    function LoginComponent(cognitoUtil, router, globals) {
        this.cognitoUtil = cognitoUtil;
        this.router = router;
        this.globals = globals;
        // variables Declarations
        this.showLoginScreen = true;
        this.username = 'Binod';
        this.password = '9864903840';
        this.otp = '';
        this.usern = '';
        this.user = {};
    }
    LoginComponent.prototype.validateLogin = function () {
        if (this.username == 'Binod' && this.password == '9864903840') {
            this.globals.loginUserName = this.username;
            console.log(this.globals.loginUserName);
            this.router.navigate(['/otp']); // for Making The Routes Changes
        }
        else {
            alert("Invalid Username or Password");
        }
    };
    LoginComponent.prototype.switchToSignUp = function () {
        this.router.navigate(['/signUp']); // for Making The Routes Changes
    };
    //-------------------------------------------Aws config---------------------------------------
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            alert(message);
            console.log("result: " + message);
        }
        else {
            //move to the next step
            console.log("redirecting");
            this.showLoginScreen = false;
            alert(result.user.username);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["a" /* CognitoUtil */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__common_globals__["a" /* Globals */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Welcome {{username}}</h1>\n  <h3>Please Enter the Otp</h3>\n  <form class=\"form\">\n    <input type=\"text\" placeholder=\"Enter the Otp\" [(ngModel)]=\"otp\" name=\"otp\">\n    <button type=\"submit\" (click)=\"confirmRegistration()\" id=\"login-button\">Confirm</button>\n    \n    <div style=\"position: relative;margin-top: 20px;\"  (click)=\"resendCode()\">Resend Code</div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/otp/otp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__ = __webpack_require__("../../../../amazon-cognito-identity-js/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_globals__ = __webpack_require__("../../../../../src/app/common/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




 // this for Gobal Values 
var OtpComponent = /** @class */ (function () {
    function OtpComponent(cognitoUtil, globals) {
        this.cognitoUtil = cognitoUtil;
        this.globals = globals;
        this.otp = '';
        this.username = '';
        this.username = globals.loginUserName; // assigning the value to the global variables
        console.log("-->" + globals.loginUserName + "<--"); // getting the global values
    }
    OtpComponent.prototype.ngOnInit = function () {
        this.globals.defaultLoader = false;
    };
    OtpComponent.prototype.confirmRegistration = function () {
        var userData = {
            Username: this.globals.cognitoUserName,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["a" /* CognitoUser */](userData);
        //"https://mrTester112/binsAng5demo/"
        cognitoUser.confirmRegistration(this.otp, true, function (err, result) {
            if (err) {
                alert("ERROR : " + JSON.stringify(err));
            }
            else {
                alert("SUCCESS : " + JSON.stringify(result));
            }
        });
    };
    OtpComponent.prototype.resendCode = function () {
        this.resendCodes();
        //alert("resend Clicked");
    };
    //resendCode(callback: CognitoCallback): void {
    OtpComponent.prototype.resendCodes = function () {
        var userData = {
            Username: this.globals.cognitoUserName,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["a" /* CognitoUser */](userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                //callback.cognitoCallback(err.message, null);
                alert(JSON.stringify(err));
            }
            else {
                // callback.cognitoCallback(null, result);
                alert(JSON.stringify(result));
            }
        });
    };
    OtpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-otp',
            template: __webpack_require__("../../../../../src/app/otp/otp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/otp/otp.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__services_cognito_service__["a" /* CognitoUtil */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_3__common_globals__["a" /* Globals */]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/cognito.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__ = __webpack_require__("../../../../amazon-cognito-identity-js/es/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CognitoUtil = /** @class */ (function () {
    function CognitoUtil() {
    }
    CognitoUtil_1 = CognitoUtil;
    CognitoUtil.prototype.getUserPool = function () {
        /* if (environment.cognito_idp_endpoint) {
              CognitoUtil._POOL_DATA.endpoint = environment.cognito_idp_endpoint;
          }*/
        return new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["c" /* CognitoUserPool */](CognitoUtil_1._POOL_DATA);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    // AWS Stores Credentials in many ways, and with TypeScript this means that
    // getting the base credentials we authenticated with from the AWS globals gets really murky,
    // having to get around both class extension and unions. Therefore, we're going to give
    // developers direct access to the raw, unadulterated CognitoIdentityCredentials
    // object at all times.
    CognitoUtil.prototype.setCognitoCreds = function (creds) {
        this.cognitoCreds = creds;
    };
    CognitoUtil.prototype.getCognitoCreds = function () {
        return this.cognitoCreds;
    };
    // This method takes in a raw jwtToken and uses the global AWS config options to build a
    // CognitoIdentityCredentials object and store it for us. It also returns the object to the caller
    // to avoid unnecessary calls to setCognitoCreds.
    /*
        buildCognitoCreds(idTokenJwt: string) {
            let url = 'cognito-idp.' + CognitoUtil._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil._USER_POOL_ID;
            if (environment.cognito_idp_endpoint) {
                url = environment.cognito_idp_endpoint + '/' + CognitoUtil._USER_POOL_ID;
            }
            let logins: CognitoIdentity.LoginsMap = {};
            logins[url] = idTokenJwt;
            let params = {
                IdentityPoolId: CognitoUtil._IDENTITY_POOL_ID, /* required */
    /*      Logins: logins
      };
      let serviceConfigs = <awsservice.ServiceConfigurationOptions>{};
      if (environment.cognito_identity_endpoint) {
          serviceConfigs.endpoint = environment.cognito_identity_endpoint;
      }
      let creds = new AWS.CognitoIdentityCredentials(params, serviceConfigs);
      this.setCognitoCreds(creds);
      return creds;
  }
*/
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return this.cognitoCreds.identityId;
    };
    CognitoUtil.prototype.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getAccessToken is null...returning");
        }
        if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        }
        else {
            callback.callbackWithParam(null);
        }
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    }
                    else {
                        console.log("CognitoUtil: Got the id token, but the session isn't valid");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getRefreshToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getRefreshToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.refresh = function () {
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
            }
            else {
                if (session.isValid()) {
                    console.log("CognitoUtil: refreshed successfully");
                }
                else {
                    console.log("CognitoUtil: refreshed but session is still not valid");
                }
            }
        });
    };
    // public static _REGION = environment.region;
    //public static _IDENTITY_POOL_ID = environment.identityPoolId;
    CognitoUtil._USER_POOL_ID = 'us-west-2_MQvfPxcbI';
    CognitoUtil._CLIENT_ID = '5ph489577cp4bntqns5lahghp5';
    CognitoUtil._POOL_DATA = {
        //   "UserPoolId": CognitoUtil._USER_POOL_ID,
        //  "ClientId": CognitoUtil._CLIENT_ID
        "UserPoolId": 'us-west-2_MQvfPxcbI',
        "ClientId": '5ph489577cp4bntqns5lahghp5'
    };
    CognitoUtil = CognitoUtil_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CognitoUtil);
    return CognitoUtil;
    var CognitoUtil_1;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p><a routerLink=\"/home\">Today's Date is : {{myDate  | amUtc | amDateFormat: 'YYYY-MM-DD HH:mm'}}</a></p>-->\n      <div class=\"container\">\n        <h1>Welcome</h1>\n        \n        <form #myForm=\"ngForm\" class=\"form\">\n          <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n          <input type=\"text\" placeholder=\"Mobile No.\" [(ngModel)]=\"mobilno\" name=\"mobilno\" required>\n          <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n          <button type=\"submit\" (click)=\"register()\" id=\"login-button\">Sign Up</button>\n\n          <div style=\"position: relative;margin-top: 20px;\"  (click)=\"switchToLoginScreen()\">Already Registered: Login Now</div>\n      \n        </form>\n      </div>\n    \n  \n      \n   \n       "

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__ = __webpack_require__("../../../../amazon-cognito-identity-js/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cognito_service__ = __webpack_require__("../../../../../src/app/services/cognito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_globals__ = __webpack_require__("../../../../../src/app/common/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var SignUpComponent = /** @class */ (function () {
    // constructor
    function SignUpComponent(cognitoUtil, router, globas) {
        this.cognitoUtil = cognitoUtil;
        this.router = router;
        this.globas = globas;
        // variables Declarations
        this.showSignUpScreen = true;
        this.username = 'Binod';
        this.mobilno = '8826536055';
        this.email = 'vmvivekmalik91@gmail.com';
        this.otp = '';
        this.usern = '';
        this.user = {};
    }
    // the first method tpo be called is ngOnInit() ** need to implemt in class 
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.switchToLoginScreen = function () {
        this.router.navigate(['/login']); // for Making The Routes Changes
    };
    //-------------------------------------------Aws config---------------------------------------
    SignUpComponent.prototype.register = function () {
        this.registers(this);
        //this.router.navigate(['/login']);   // for Making The Routes Changes
    };
    SignUpComponent.prototype.registers = function (callback) {
        this.showSignUpScreen = true;
        this.globas.defaultLoader = true;
        this.user = {
            "mobile": "+91" + this.mobilno,
            "name": this.username,
            "email": this.email
        };
        console.log("UserRegistrationService: user is " + this.mobilno);
        var attributeList = [];
        var dataEmail = {
            Name: 'email',
            Value: this.email
        };
        var dataPhoneNumber = {
            Name: 'phone_number',
            Value: "+91" + this.mobilno
        };
        var dataNickname = {
            Name: 'name',
            Value: this.username
        };
        attributeList.push(new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["b" /* CognitoUserAttribute */](dataEmail));
        attributeList.push(new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["b" /* CognitoUserAttribute */](dataNickname));
        attributeList.push(new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["b" /* CognitoUserAttribute */](dataPhoneNumber));
        this.usern = this.mobilno + "_12dd7fchs8f";
        this.globas.cognitoUserName = this.usern;
        this.globas.loginUserName = this.username;
        /* setTimeout(()=>{    //<<<---    using ()=> syntax
            this.showSignUpScreen = false;
        },5000);*/
        this.cognitoUtil.getUserPool().signUp(this.usern, "Binod@123", attributeList, null, function (err, result) {
            if (err) {
                // alert(err);
                callback.cognitoCallback(err.message, null);
            }
            else {
                console.log("UserRegistrationService: registered user is " + result);
                callback.cognitoCallback(null, result);
            }
        });
    };
    SignUpComponent.prototype.cognitoCallback = function (message, result) {
        var _this = this;
        if (message != null) {
            alert(message);
            console.log("result: " + message);
        }
        else {
            //move to the next step
            console.log("redirecting");
            setTimeout(function () {
                _this.router.navigate(['/otp']);
            }, 3000);
            // for Making The Routes Changes
            //  this.showSignUpScreen = false;
            // alert(result.user.username);
        }
    };
    SignUpComponent.prototype.confirmRegistration = function () {
        var userData = {
            Username: this.usern,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["a" /* CognitoUser */](userData);
        cognitoUser.confirmRegistration(this.otp, true, function (err, result) {
            if (err) {
                alert(JSON.stringify(err));
            }
            else {
                alert(JSON.stringify(result));
            }
        });
    };
    //resendCode(callback: CognitoCallback): void {
    SignUpComponent.prototype.resendCode = function () {
        var userData = {
            Username: this.usern,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new __WEBPACK_IMPORTED_MODULE_1_amazon_cognito_identity_js__["a" /* CognitoUser */](userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                //callback.cognitoCallback(err.message, null);
                alert(JSON.stringify(err));
            }
            else {
                // callback.cognitoCallback(null, result);
                alert(JSON.stringify(result));
            }
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__services_cognito_service__["a" /* CognitoUtil */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cognito_service__["a" /* CognitoUtil */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__common_globals__["a" /* Globals */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    userPoolId: 'us-west-2_MQvfPxcbI',
    clientId: '5ph489577cp4bntqns5lahghp5',
    cognito_idp_endpoint: '',
    cognito_identity_endpoint: '',
    sts_endpoint: '',
    dynamodb_endpoint: '',
    s3_endpoint: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


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
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
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
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
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
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
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
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
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
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map