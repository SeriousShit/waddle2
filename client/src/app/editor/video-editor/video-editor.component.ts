import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Video} from "../../util/model";

@Component({
  selector: 'waddle-video-editor',
  templateUrl: 'video-editor.component.html',
  styleUrls: ['video-editor.component.css']
})
export class VideoEditorComponent implements OnInit {

  @Input('video') video: Video;
  @Output('videoChanged') videoChanged = new EventEmitter();

  url: string ="";

  constructor() { }

  ngOnInit() {
    if (this.video !== undefined) {
      this.url = this.video.url;

    }
  }

  videoChangedClicked(path: string){
    this.videoChanged.next(new Video(path));
  }
}
