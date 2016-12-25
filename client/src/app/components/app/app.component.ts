import { Component } from '@angular/core';
import {ContentService} from "../../services/content.service";
import {Content, Page, PageRef} from "../../util/model";
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import {Router} from "@angular/router";
import {DragulaService} from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  content: Content = new Content();

  dialogRef: MdDialogRef<NewPageDialog>;

  constructor(private contentService: ContentService,
              public dialog: MdDialog,
              private dragulaService: DragulaService,
              private router: Router){
    this.contentService.contentSubject.subscribe(content => {
      this.content = content;
      this.title = this.content.name;
      console.log(this.content);
    });

    this.dragulaService.setOptions('pageList', {

      removeOnSpill: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        // console.log(`accepts`);
        return true;
      },

      copySortSource: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        // console.log(`accepts`);
        return !target.classList.contains("template");
      },

      copy: false,


    });
  }


  onAddPageDialog(){
    this.dialogRef = this.dialog.open(NewPageDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
      if (result !== undefined){
        this.addPage(result);
      }

    });
  }

  addPage(title: string){
    this.contentService.addPage(title);
  }

  onSelect(pageRef: PageRef){
    console.log(pageRef);
    this.router.navigate(['/page', pageRef.id]);
  }

  onGoStart(){
    this.router.navigate(['start']);
  }
}

@Component({
  selector: 'new-page-dialog',
  template: `
  <h2 md-dialog-title>Adding new page</h2>

  <div>
    <md-input style="width: 100%" placeholder="max 100 characters" maxlength="100" class="demo-full-width"
                value=""
                #input>
      <md-hint align="end">{{input.characterCount}} / 100</md-hint>
     </md-input>
  </div>
  
  <div style="margin-top: 20px">
    <button md-button color="primary" (click)="dialogRef.close(input.value)">crate Page</button>
    <button md-button color="warn" (click)="dialogRef.close()">cancel</button>
  </div>

  `
})
export class NewPageDialog {
  name = 'Jazzy jazz jazz';
  constructor(public dialogRef: MdDialogRef<NewPageDialog>) { }
}

class PageListContentItem{
  id:string;
  name:string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
