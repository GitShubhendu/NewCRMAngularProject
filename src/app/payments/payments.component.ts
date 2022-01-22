import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilesService} from '../services/profiles.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  email:string='';
  password:string='';
  checkhelp =false;
  profile={};

  constructor( private profileservice:ProfilesService) { }

  ngOnInit(): void {
   this.profile=this.profileservice.getProfile();
  }
  setFormData(formset:NgForm){
    let userDetails={
      email:"shubhendupal@gmail.com",
      password:"shubhendu",
      checkhelp:false
    }
    formset.setValue(userDetails);
  }
  checkLogin(loginForm:NgForm){
    console.log(loginForm.value);
  }
  resetForm(resetform:NgForm){
    resetform.resetForm();
  }

}
