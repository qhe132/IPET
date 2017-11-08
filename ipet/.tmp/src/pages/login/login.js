var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
var LoginPage = (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(TabsPage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-user',template:/*ion-inline-start:"D:\国创\Ionic\ipet\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>登录</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/Ipetlogo.png" alt="Ipet logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate class="list">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="black"  style="font-size:20px">用户名</ion-label>\n				<ion-input [(ngModel)]="login.username" class="input" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"placeholder = "Username"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				请输入用户名\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="black" style="font-size:20px">密码</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" placeholder = "Password"required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				请输入密码\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\国创\Ionic\ipet\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [NavController, UserData])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map