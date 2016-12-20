import {Component, OnInit, Input, Output} from '@angular/core';
import {PageSegment} from "../../util/model";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'app-page-segment',
  templateUrl: 'page-segment.component.html',
  styleUrls: ['page-segment.component.css']
})
export class PageSegmentComponent implements OnInit {

  @Input('pageSegment') pageSegment: PageSegment;
  @Output('segmentClicked') segmentClicked = new EventEmitter();

  name:string = "test";

  constructor() {}

  ngOnInit() {
    this.name = this.pageSegment.name;
    console.log(this.pageSegment);
  }

  clicked(){
    console.log("clicked");
    this.segmentClicked.next(this.pageSegment);
  }
}
