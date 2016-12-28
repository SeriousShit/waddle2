import {Component, OnInit, Input, OnChanges} from '@angular/core';

import * as marked from 'marked'

@Component({
  selector: 'app-text',
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.css']
})
export class TextComponent implements OnInit, OnChanges {

  @Input('text') text: string;

  html: string
  debounce: any
  init: boolean = false

  hasText:boolean = false

  constructor() { }

  ngOnInit() {

    if (this.text === undefined ){
      this.hasText = false;
    } else if (this.text.length == 0){
      this.hasText = false;
    } else {
      this.hasText = true;
    }
  }

  ngOnChanges() {

    console.log("ngOnChanges");
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

}
