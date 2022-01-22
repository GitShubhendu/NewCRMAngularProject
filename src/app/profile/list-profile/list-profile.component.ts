import { ObserversModule } from '@angular/cdk/observers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ProfilesService} from '../../services/profiles.service';


@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  @Input()
  userList : string="";
  @Output()
  userListReset= new EventEmitter();

  profileList : any=[];
  name:string="";
  nameUsers ={};
  contact$:any;
  arr:any;
  data:any;
  newObsData:any;
  id=0;
  jsondata:any;
  showPortal = false;

  constructor(private profileService: ProfilesService) {  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data=>{
     this.profileList=data;
    });
    this.profileService.getJsondata().subscribe(dataj=>{
      console.log("name " +dataj.name);
     });
    
    this.arr=['ram','sam'];
    this.contact$=of(this.arr).subscribe(observer=>{
      this.data=observer;
    });
    console.log(this.data[0]); 
    new Observable(observer =>{
        setTimeout(() => {
          observer.next("Starting..........");
        }, 2000);
        setTimeout(() => {
          observer.next("In Progress..........");
        }, 4000);
        setTimeout(() => {
          observer.next("Pending..........");
        }, 6000);
        setTimeout(() => {
          observer.next("Completed..........");
        }, 8000);
     }).subscribe(dataObs=>{
       this.newObsData=dataObs;

     });

     console.log("Profile list:  "+this.profileList);
    
  }
  resteParent(){
    this.userListReset.emit("");
  }
  async getprofile(){
    this.id=1;
   await this.profileService.getProfile().subscribe(data=>{
      this.name=data[0].name;
      
     });
  }


}
