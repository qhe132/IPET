import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';

declare const AMap : any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  ionViewDidLoad() {
    let map = new AMap.Map('container',{
      resizeEnable: true,
      zoom : 15,
      center:[120.388381,30.3086194]
    }) ;
    AMap.plugin(['AMap.ToolBar'],function(){
      map.addControl(new AMap.ToolBar());
    });


    let marker = new AMap.Marker({
      position : map.getCenter(),
      draggable: true,
      cursor: 'move'
    })
    marker.setMap(map);
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');
  }
}
