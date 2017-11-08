var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from 'ionic-angular';
var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 15,
            center: [120.388381, 30.3086194]
        });
        AMap.plugin(['AMap.ToolBar'], function () {
            map.addControl(new AMap.ToolBar());
        });
        var marker = new AMap.Marker({
            position: map.getCenter(),
            draggable: true,
            cursor: 'move'
        });
        marker.setMap(map);
        marker.setAnimation('AMAP_ANIMATION_BOUNCE');
    };
    return MapPage;
}());
__decorate([
    ViewChild('mapCanvas'),
    __metadata("design:type", ElementRef)
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Component({
        selector: 'page-map',template:/*ion-inline-start:"D:\国创\Ionic\ipet\src\pages\map\map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <button ion-button id="button_start" (click)="petposition()">YourPet</button>\n  <button ion-button id="button_end" (click)="ourposition()">You</button>\n  <button ion-button id="nav" (click)="navto()">nav</button>\n  <div style="height: 100%; width: 100%" #mapCanvas id="container"></div>\n</ion-content>\n'/*ion-inline-end:"D:\国创\Ionic\ipet\src\pages\map\map.html"*/
    }),
    __metadata("design:paramtypes", [ConferenceData, Platform])
], MapPage);
export { MapPage };
//# sourceMappingURL=map.js.map