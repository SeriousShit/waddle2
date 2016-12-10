import { Component } from '@angular/core';
import {ContentService} from "../../services/content.service";
import {Content} from "../../util/model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass']
})
export class AppComponent {
  title = 'app works!';

  content: Content = new Content();

  constructor(private _contentService: ContentService){
    this._contentService.contentSubject.subscribe(content => {
      this.content = content;
      this.title = this.content.name;
      console.log(this.content);
    });

  }
}
