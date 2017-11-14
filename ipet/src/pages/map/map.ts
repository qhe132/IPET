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
      rotateEnable: true,
      pitchEnable: true,
      pitch:60,
      rotation:-10,
      zoom : 15,
      viewMode:'3D',
      buildingAnimation:true,
      expandZoomRange:true,
      zooms:[3,15],
      center:[120.388381,30.3086194]
    }) ;
    let marker = new AMap.Marker({
      icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position:map.getCenter(),
    });

    marker.setMap(map);
    /*AMap.plugin(['AMap.ToolBar'],function(){
      map.addControl(new AMap.ToolBar());
    });*/
    AMap.plugin(['AMap.ControlBar'],function(){
      map.addControl(new AMap.ControlBar({
        showZoomBar:false,
        showControlButton:true,
        position:{
          right:'10px',
          top:'10px'
        }
      }));
    });
    /*marker.setMap(map);
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');*/
  }
  ourposition(){
    let map = new AMap.Map('container',{
      resizeEnable: true,
      rotateEnable: true,
      pitchEnable: true,
      pitch:60,
      rotation:-10,
      zoom : 15,
      viewMode:'3D',
      buildingAnimation:true,
      expandZoomRange:true,
      zooms:[3,15],
      center:[120.388381,30.3086194]
    }) ; 
    let marker = new AMap.Marker({
      icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position:map.getCenter(),
    });
    marker.setMap(map);
    AMap.plugin(['AMap.ControlBar'],function(){
      map.addControl(new AMap.ControlBar({
        showZoomBar:false,
        showControlButton:true,
        position:{
          right:'10px',
          top:'10px'
        }
      }));
    });
  }
  petposition(){
    let map = new AMap.Map('container',{
      resizeEnable: true,
      rotateEnable: true,
      pitchEnable: true,
      pitch:60,
      rotation:-10,
      zoom : 15,
      viewMode:'3D',
      buildingAnimation:true,
      expandZoomRange:true,
      zooms:[3,15],
      center:[120.388381,30.3386194]
    }) ; 
    let marker = new AMap.Marker({
      icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position:map.getCenter(),
    });
    marker.setMap(map);
    AMap.plugin(['AMap.ControlBar'],function(){
      map.addControl(new AMap.ControlBar({
        showZoomBar:false,
        showControlButton:true,
        position:{
          right:'10px',
          top:'10px'
        }
      }));
    }); 
  }
  navto(){
    let map = new AMap.Map('container',{
      resizeEnable: true,
      rotateEnable: true,
      pitchEnable: true,
      pitch:60,
      rotation:-10,
      zoom : 15,
      viewMode:'3D',
      buildingAnimation:true,
      expandZoomRange:true,
      zooms:[3,15],
      center:[120.388381,30.3086194]
    }) ;
    let marker = new AMap.Marker({
      icon:"http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position:map.getCenter(),
    });

    let walking = new AMap.Walking({
      map:map,
      panel:""
    });

    walking.search([120.388381,30.3086194],[120.388381,30.3386194]);
    marker.setMap(map);
    /*AMap.plugin(['AMap.ToolBar'],function(){
      map.addControl(new AMap.ToolBar());
    });*/
    AMap.plugin(['AMap.ControlBar'],function(){
      map.addControl(new AMap.ControlBar({
        showZoomBar:false,
        showControlButton:true,
        position:{
          right:'10px',
          top:'10px'
        }
      }));
    }) ;
  }
}
