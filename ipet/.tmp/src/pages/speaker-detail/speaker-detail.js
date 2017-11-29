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
import { NavController, NavParams } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    return SpeakerDetailPage;
}());
SpeakerDetailPage = __decorate([
    Component({
        selector: 'page-speaker-detail',template:/*ion-inline-start:"/Users/qianhuaien/Workspace/ipet_github/ipet/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n  <ion-list class = "pet-information" >\n    <ion-item>\n      <ion-label>宠物性别</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">MM</ion-option>\n        <ion-option value="m">GG</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n    <ion-label>宠物品种</ion-label>\n    <ion-select [(ngModel)]="breed">\n      <ion-option value="golden">金毛巡回猎犬</ion-option>\n      <ion-option value="huskie">哈士奇</ion-option>\n      <ion-option value="corgi">柯基</ion-option>\n      <ion-option value="borderllie">边境牧羊犬</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>宠物生日</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="BirthDay"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>到家时间</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="HomeDay"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>加入I pet</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="JoinDay"></ion-datetime>\n  </ion-item>\n    <ion-item>\n      <ion-label>宠物体重</ion-label>\n      <ion-input type="number" placeholder="kg"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>宠物主粮</ion-label>\n      <ion-select>\n        <ion-option>品牌1</ion-option>\n        <ion-option>品牌2</ion-option>\n        <ion-option>品牌3</ion-option>\n        <ion-option>品牌4</ion-option>\n        <ion-option>品牌5</ion-option>\n        <ion-option>品牌6</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button full class="savepet" type="submit">保存</button>\n    <button ion-button full color="danger" class="deletepet" type="submit">删除</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qianhuaien/Workspace/ipet_github/ipet/src/pages/speaker-detail/speaker-detail.html"*/
    }),
    __metadata("design:paramtypes", [ConferenceData, NavController, NavParams])
], SpeakerDetailPage);
export { SpeakerDetailPage };
//# sourceMappingURL=speaker-detail.js.map