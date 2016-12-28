import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageSegmentComponent} from './page-segment.component';
import {TextComponent} from "./text/text.component";
import {VideoPageSegmentComponent} from "./video-page-segment/video-page-segment.component";
import {MaterialModule} from "@angular/material";
import {ChartPageSegmentComponent} from "./chart-page-segment/chart-page-segment.component";
import {ImagePageSegmentComponent} from "./image-page-segment/image-page-segment.component";
import {ChartsModule} from "ng2-charts";
import {VgCoreModule} from "videogular2/src/core/core";

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    VgCoreModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    PageSegmentComponent
  ],
  declarations: [
    PageSegmentComponent,
    TextComponent,
    VideoPageSegmentComponent,
    ImagePageSegmentComponent,
    ChartPageSegmentComponent
  ]
})
export class PageSegmentModule {}
