import { CdkPortal, ComponentPortal, DomPortalHost, Portal } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SettingLayerComponent } from '../setting-layer/setting-layer.component';
import {ProfilesService} from "../services/profiles.service"

@Component({
  selector: 'app-window',
  templateUrl:'./window.component.html'
})
export class WindowComponent implements OnInit, OnDestroy {
  
  // STEP 1: get a reference to the portal
  // @ViewChild(CdkPortal) portal!: CdkPortal;
  selectedPortal!: Portal<any>;

  // STEP 2: save a reference to the window so we can close it
  //private externalWindow = null;

  // STEP 3: Inject all the required dependencies for a PortalHost
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private _viewContainerRef: ViewContainerRef,
    private profileservice:ProfilesService) { }
  ngOnDestroy(): void {
    this.profileservice.flagevent.next(false)
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.selectedPortal=new ComponentPortal(SettingLayerComponent);
    // STEP 4: create an external window
    const externalWindow = window.open('', 'new', 'width=600,height=400,left=200,top=200');

    // STEP 5: create a PortalHost with the body of the new window document    
    const host = new DomPortalHost(
      externalWindow!.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
      );

    // STEP 6: Attach the portal
    host.attach(this.selectedPortal);
  }

}
