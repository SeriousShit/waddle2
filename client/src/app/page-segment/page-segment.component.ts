import {Component, OnInit, Input, Output, OnChanges} from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";
import {PageSegment} from "../util/model";


@Component({
  selector: 'app-page-segment',
  templateUrl: 'page-segment.component.html',
  styleUrls: ['page-segment.component.css']
})
export class PageSegmentComponent implements OnInit{

  @Input('pageSegment') pageSegment: PageSegment;

  @Output('segmentClicked') segmentClicked = new EventEmitter();

  isText:boolean = false;
  isVideo: boolean = false;
  isImage: boolean = false;
  isChart: boolean = false;

  text = "";

  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
    if (this.pageSegment !== null && this.pageSegment !== undefined) {
      if (this.pageSegment.text !== null
          && this.pageSegment.text !== undefined){
        this.isText = true;
        this.isVideo = false;
        this.isImage = false;
        this.isChart = false;

        this.text = this.pageSegment.text;

      } else if (this.pageSegment.video !== null
          && this.pageSegment.video !== undefined) {
        this.isText = false;
        this.isVideo = true;
        this.isImage = false;
        this.isChart = false;

      }else if (this.pageSegment.image !== null
          && this.pageSegment.image !== undefined) {
        this.isText = false;
        this.isVideo = false;
        this.isImage = true;
        this.isChart = false;

      }else if (this.pageSegment.chart !== null
          && this.pageSegment.chart !== undefined) {
        this.isText = false;
        this.isVideo = false;
        this.isImage = false;
        this.isChart = true;
      }
    } else {
      this.isText = false;
      this.isVideo = false;
      this.isImage = false;
      this.isChart = false;

    }
  }

  clicked(){
    this.segmentClicked.next(this.pageSegment);
  }
}
