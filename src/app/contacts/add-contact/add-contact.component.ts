import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactId=0;
  constructor(private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe((params)=>{
      const innerVal=params;
      this.contactId=innerVal.contactId;
    });
  }

  ngOnInit(): void {
  }

}
