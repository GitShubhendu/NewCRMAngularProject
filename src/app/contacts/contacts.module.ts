import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditComponentComponent,
    DeleteComponentComponent,
    ListComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AddContactComponent]
})
export class ContactsModule { }
