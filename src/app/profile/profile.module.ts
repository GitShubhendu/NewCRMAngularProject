import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfileComponent } from './list-profile/list-profile.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ListProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ListProfileComponent]
})
export class ProfileModule { }
