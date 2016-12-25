import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent, NewPageDialog} from './components/app/app.component';
import {ContentService} from "./services/content.service";
import {AppRoutingModule} from "./app-routing.modul";
import { MaterialModule } from '@angular/material';

import 'hammerjs';
import {PageComponent} from './components/page/page.component';
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import { PageSegmentComponent } from './components/page-segment/page-segment.component';
import { MarkdownEditorComponent } from './components/markdown-editor/markdown-editor.component';
import { StartComponent } from './components/start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageSegmentComponent,
    MarkdownEditorComponent,
    NewPageDialog,
    StartComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    DragulaModule
  ],
  providers: [
    ContentService
  ],
  entryComponents: [
    NewPageDialog
],
  bootstrap: [AppComponent]
})
export class AppModule { }
