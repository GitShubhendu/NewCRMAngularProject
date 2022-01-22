import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';  
import{ProfilesService} from './services/profiles.service';
import { CdkPortal, ComponentPortal, DomPortalHost, DomPortalOutlet, Portal } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, Injector, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { SettingLayerComponent } from '../app/setting-layer/setting-layer.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showPortal = false;
  title = 'angular-srver-bluprint';
  elements :string[]=['shubhendu','gourab'];
  element='';
  text='text';
  exampleJso={username:"shubhendu",email:"shubhendu95@gmail.com"};
  currentDate= new Date();
  contactId ='1';
  listName: string='';
  /**For opening in new component */
 // @ViewChild(CdkPortal) selectedPortal!: CdkPortal;
  selectedPortal!: Portal<any>;
  externalWindow!: Window;

  /**so far */
  constructor(private activeRoute: ActivatedRoute,private router: Router, private profileserv: ProfilesService,private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private _viewContainerRef: ViewContainerRef){
      this.activeRoute.params.subscribe((params)=>{
        const innerVal=params;
        //this.contactId=innerVal.contactId;
      });
    }
  ngOnInit(): void {
    this.profileserv.flagevent.subscribe(data=>{
      this.showPortal=data;
    });
     
  }
  show(){
    this.profileserv.flagevent.next(true);
  }

  addElement(){
    this.elements.push(this.element);
  }
  resetData(event: string){
    this.listName=event;
  }

  newwindow(){
    //this.externalWindow?.close();
    this.selectedPortal=new ComponentPortal(SettingLayerComponent);
      
    // STEP 4: create an external window
    //this.externalWindow!= window.open('', 'new', 'width=600,height=400,left=200,top=200');
    const win=window.open('', 'new', 'width=600,height=400,left=200,top=200');
    // STEP 5: create a PortalHost with the body of the new window document    
    const host = new DomPortalOutlet(
      win!.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
      );
    // STEP 6: Attach the portal
    if(!host.hasAttached())
    host.attach(this.selectedPortal);
  }
}
