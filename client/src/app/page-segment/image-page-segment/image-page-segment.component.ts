import {Component, OnInit, Input} from '@angular/core';
import {Image} from "../../util/model";

@Component({
  selector: 'waddle-image-page-segment',
  templateUrl: 'image-page-segment.component.html',
  styleUrls: ['image-page-segment.component.css']
})
export class ImagePageSegmentComponent implements OnInit {

  @Input('image') image: Image;


  hasImage: boolean: false;

  constructor() { }

  ngOnInit() {
    if (this.image === undefined ) {
      this.hasImage = false;
    } else if(this.image.caption === undefined  || this.image.url === undefined ) {
        this.hasImage = false;
    } else if(this.image.caption.length == 0 && this.image.url.length == 0) {
      this.hasImage = false;
    } else {
      this.hasImage = true;
    }
  }

}
