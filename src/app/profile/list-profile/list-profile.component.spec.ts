import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProfilesService } from 'src/app/services/profiles.service';
import { ListProfileComponent } from './list-profile.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';


fdescribe('ListProfileComponent', () => {
  let component: ListProfileComponent;
  let fixture: ComponentFixture<ListProfileComponent>;
  let profileser:ProfilesService;
  let httpMock: HttpTestingController;
  interface users {
    name: string;
    email: string;
  }
  
  let checkData:any=[];
  // const ServiceMock = jasmine.createSpyObj('ProfilesService', ['getProfile']);  
  // ServiceMock.getProfile.and.returnValue(of([{"name":"shu","email":"shu"}]))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfileComponent ],
      imports: [HttpClientModule],
      //providers:[ { provide: ProfilesService, useValue: ServiceMock }]
      providers:[ProfilesService,HttpTestingController]
    })
    .compileComponents();
    profileser=TestBed.inject(ProfilesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
   
  });

  it('should create', () => {
    //spyOn(ServiceMock,"getProfile").and.callFake(()=>{return of({"name":"shu","email":"shu"})});
    expect(component).toBeTruthy();
  });
  it('checking data',async () => { 
    
    // profileser.getProfile().subscribe(data=>{
    //   component.profileList=data;
    // }); 
    // const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users?id=1');
    // httpMock.verify();
    await component.getprofile();
    fixture.detectChanges();
    fixture.whenStable().then();
    expect(component.id).toBe(1);
    expect(component.name).toBe("Leanne Graham");
  });
 
});
