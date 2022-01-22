import { Component, OnDestroy, OnInit } from '@angular/core';
import {ProfilesService} from "../services/profiles.service"
@Component({
  selector: 'app-setting-layer',
  templateUrl: './setting-layer.component.html',
  styleUrls: ['./setting-layer.component.css']
})
export class SettingLayerComponent implements OnInit ,OnDestroy{

  constructor(private profileservice:ProfilesService) { }
  ngOnDestroy(): void {
    this.profileservice.flagevent.next(false);
    throw new Error('Method not implemented.');
  }
  newlink(urllink:string){
    window.open(urllink,"_blank")
  }
  ngOnInit(): void {
  }

}
