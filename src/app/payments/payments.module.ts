import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaymentsRoutingModule
  ],
  exports: [PaymentsComponent]
})
export class PaymentsModule { }
