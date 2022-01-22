import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProfileModule } from './profile/profile.module';
import {ContactsModule} from './contacts/contacts.module';
import {PaymentsModule } from './payments/payments.module';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { SettingLayerComponent } from './setting-layer/setting-layer.component';
import { SettingLayerTryComponent } from './components/setting-layer-try/setting-layer-try.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { WindowComponent } from './window/window.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SettingLayerComponent,
    SettingLayerTryComponent,
    NewcomponentComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ProfileModule,
    ContactsModule,
    PaymentsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
