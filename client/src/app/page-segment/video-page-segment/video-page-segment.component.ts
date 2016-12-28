import {Component, OnInit, Input} from '@angular/core';
import {PageSegment, Video} from "../../util/model";

@Component({
  selector: 'waddle-video-page-segment',
  templateUrl: 'video-page-segment.component.html',
  styleUrls: ['video-page-segment.component.css']
})
export class VideoPageSegmentComponent implements OnInit {

  @Input('video') video: Video;

  hasVideo: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("VideoPageSegmentComponent");

    if (  this.video === undefined ||
          this.video === null) {

      this.hasVideo = false;

    } else if(this.video.url === undefined ||
              this.video.url === null ) {

      this.hasVideo = false;

    } else if(this.video.url.length == 0) {

      this.hasVideo = false;

    } else {
      this.hasVideo = true;
    }
  }

}
