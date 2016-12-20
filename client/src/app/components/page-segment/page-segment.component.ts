import {Component, OnInit, Input, Output, OnChanges} from '@angular/core';
import {PageSegment} from "../../util/model";
import {EventEmitter} from "@angular/common/src/facade/async";

import * as marked from 'marked'

@Component({
  selector: 'app-page-segment',
  templateUrl: 'page-segment.component.html',
  styleUrls: ['page-segment.component.css']
})
export class PageSegmentComponent implements OnChanges, OnInit{

  @Input('pageSegment') pageSegment: PageSegment;
  @Input('text') text: string;

  @Output('segmentClicked') segmentClicked = new EventEmitter();

  html: string
  debounce: any
  init: boolean = false

  name:string = "";

  constructor() {}

  ngOnInit() {
    this.name = this.pageSegment.name;
    console.log(this.pageSegment);
  }

  ngOnChanges() {
    if (this.init) {
      if (this.debounce) clearTimeout(this.debounce);
      this.debounce = setTimeout((() => this.render()), 100);
    } else {
      this.render();
      this.init = true;
    }
  }

  render() {
    this.html = (this.text) ? marked(this.text) : "";
    console.log(this.html);

  }


  clicked(){
    console.log("clicked");
    this.segmentClicked.next(this.pageSegment);
  }
}
