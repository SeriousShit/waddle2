import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SegmentEditorComponent} from './segment-editor.component';
import {MarkdownEditorComponent} from "./markdown-editor/markdown-editor.component";
import {FormsModule} from "@angular/forms";
import {ImageEditorComponent} from "./image-editor/image-editor.component";
import {VideoEditorComponent} from "./video-editor/video-editor.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  exports: [
    SegmentEditorComponent
  ],
  declarations: [
    SegmentEditorComponent,
    MarkdownEditorComponent,
    VideoEditorComponent,
    ImageEditorComponent,
  ]
})
export class SegmentEditorModule { }
