(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Rapi Cola</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div color=\"secondary\">\r\n    <ion-card color=\"light\" class=\"welcome-card\">\r\n      <img src=\" {{ storageUri + logo }}\">\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <ion-card-subtitle style=\"align-self: center\">Acelera tu tiempo de espera!</ion-card-subtitle>\r\n        <ion-card-title>Bienvenido a RapiCola</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-text-center\">\r\n        <p>Más rapido, menos cola!</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button color=\"tertiary\" margin expand=\"block\" color=\"tertiary\" (click)=\"login()\">Login</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"primary\" margin expand=\"block\" color=\"danger\" (click)=\"register()\">Registro</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");
/* harmony import */ var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/register/register.page */ "./src/app/pages/auth/register/register.page.ts");









const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]],
        entryComponents: [_auth_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _auth_register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let LandingPage = class LandingPage {
    constructor(modalController, menu, env, authService, navCtrl, storage) {
        this.modalController = modalController;
        this.menu = menu;
        this.env = env;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.storageUri = this.env.API_STORAGE;
        this.logo = "QXErGB4FZBu8aOMEu6z85bcAYkFDqYeqgjw61dlL.png";
        this.menu.enable(false);
    }
    ionViewWillEnter() {
        try {
            this.storage.get('ticket').then((val) => {
                this.authService.ticketLogged = val;
                this.storage.get('email').then((email) => {
                    this.storage.get('password').then((pass) => {
                        console.log(email);
                        console.log(pass);
                        this.loginCheck(email, pass);
                    });
                });
            });
        }
        catch (e) {
            console.log(e);
        }
        /*this.storage.get('ticket').then((ticket) => {
          this.authService.ticketLogged = ticket;
        });
        this.authService.postTicket(this.authService.ticketLogged).subscribe(
          data => {
            if (data['respuesta'] === 'false') {
              this.navCtrl.navigateRoot('/landing');
            } else if (data['respuesta'] === 'true') {
              console.log('Si esta logeado');
              this.navCtrl.navigateRoot('/dashboard');
            }
          },
          error => {
            console.log(error);
          }
        );*/
        /*this.authService.getToken().then(() => {
          if (this.authService.isLoggedIn) {
            this.navCtrl.navigateRoot('/dashboard');
          }
        });*/
    }
    ngOnInit() {
        // Or to get a key/value pair
    }
    loginCheck(email, pass) {
        try {
            console.log('En loginCheck' + ' ' + email + ' ' + pass);
            if (email == "" || pass == "") {
                //this.alertService.presentToast("Some Inputs are in blank");
                console.log('estan blancos');
            }
            else {
                console.log('antes');
                this.authService.login(email, pass).subscribe(data => {
                    if (data['respuesta'] == "true") {
                        this.authService.emailLogged = email;
                        console.log(this.authService.emailLogged);
                        this.authService.ticketLogged = data['ticket'];
                        console.log(this.authService.ticketLogged);
                        //this.alertService.presentToast("Logged In");
                        //this.dismissLogin();
                        this.storage.set('ticket', data['ticket']);
                        this.storage.set('email', email);
                        this.storage.set('password', pass);
                        console.log('despues');
                        this.navCtrl.navigateRoot('/dashboard');
                    }
                    else if (data['respuesta'] == "false") {
                        //this.alertService.presentToast("User doesn´t exit or Wrong Password");
                        console.log('no logeado');
                    }
                }, error => {
                    console.log(error);
                } /*,
                () => {
                  this.dismissLogin();
                  this.navCtrl.navigateRoot('/dashboard');
                }*/);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const registerModal = yield this.modalController.create({
                    component: _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                });
                return yield registerModal.present();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const loginModal = yield this.modalController.create({
                    component: _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
                });
                return yield loginModal.present();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map