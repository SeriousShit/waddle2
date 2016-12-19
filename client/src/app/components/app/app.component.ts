import { Component } from '@angular/core';
import {ContentService} from "../../services/content.service";
import {Content, Page} from "../../util/model";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass']
})

export class AppComponent {

  content: Content = new Content();
  page = new Page();

  constructor(private _contentService: ContentService){
    this._contentService.contentSubject.subscribe(content => {
      this.content = content;
      this.title = this.content.name;
      console.log(this.content);
    });

  }

  onSubmit() {
    console.log(this.page);

    this._contentService.addPage(this.page);
    this.page = new Page();
  }
}
