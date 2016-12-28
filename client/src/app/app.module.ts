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
import { StartComponent } from './components/start/start.component';
import {SegmentEditorModule} from "./editor/segment-editor.module";
import {PageSegmentModule} from "./page-segment/page-segment.module";
import { VideoEditorComponent } from './editor/video-editor/video-editor.component';
import { ImageEditorComponent } from './editor/image-editor/image-editor.component';
import { ChartEditorComponent } from './chart-editor/chart-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NewPageDialog,
    StartComponent,
    ChartEditorComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule.forRoot(),
    DragulaModule,
    SegmentEditorModule,
    PageSegmentModule
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
