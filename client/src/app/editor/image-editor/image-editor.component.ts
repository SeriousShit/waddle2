import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Image} from "../../util/model";

@Component({
  selector: 'waddle-image-editor',
  templateUrl: 'image-editor.component.html',
  styleUrls: ['image-editor.component.css']
})
export class ImageEditorComponent implements OnInit {

  @Input('image') image: Image;
  @Output('imageChanged') imageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  imageChangedClicked(path: string, caption: string){
    this.imageChanged.next(new Image(path, caption));
  }
}
