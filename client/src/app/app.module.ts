import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import {ContentService} from "./services/content.service";
import {AppRoutingModule} from "./app-routing.modul";
import { StartComponent } from './components/start/start.component';
import { MaterialModule } from '@angular/material';
import { NgGridModule } from 'angular2-grid';


import 'hammerjs';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    NgGridModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
