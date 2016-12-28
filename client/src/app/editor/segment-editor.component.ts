import {Component, OnInit, Input, Output, OnChanges} from '@angular/core';
import {PageSegment} from "../util/model";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'segmentEditor',
  templateUrl: 'segment-editor.component.html',
  styleUrls: ['segment-editor.component.css']
})
export class SegmentEditorComponent implements OnInit, OnChanges {

  @Input('pageSegment') pageSegment: PageSegment;
  @Output('segmentChanged') segmentChanged = new EventEmitter();

  isText:boolean = false;
  isVideo: boolean = false;
  isImage: boolean = false;
  isChart: boolean = false;

  text:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("ngOnChanges");
    console.log(this.pageSegment);

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
    console.log("this.isText" + this.isText);
    console.log("this.isVideo" + this.isVideo);
    console.log("this.isImage" + this.isImage);

  }


  textChange($event: string) {

    console.log($event);

    this.pageSegment = new PageSegment(this.pageSegment.id, $event, null, null, null);

    this.segmentChanged.next(this.pageSegment);
  }

  imageChanged($event: string) {

    console.log($event);

    this.pageSegment = new PageSegment(this.pageSegment.id, null, null, $event, null);
    this.segmentChanged.next(this.pageSegment);
  }
}
