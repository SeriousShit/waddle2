import {Component, OnInit, HostListener, Input} from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent {


  constructor() {

  }


}


// The draggable component
@Component({
  selector: 'dragme',
  template: `
        <div draggable="true">
            {{name}}
        </div>
    `,
  styles: [`
        [draggable] {
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            -khtml-user-drag: element;
            -webkit-user-drag: element;
            background-color: #AAA; 
            border: 1px solid black; 
            padding: 24px;
            margin: 12px;
        }
    `]
})


export class DragMe {

  @Input()
  name: string = "";

  @HostListener('dragstart', ['$event'])
  onDrag(event: any) {
    event.dataTransfer.setData("name", this.name);
  }
}

// The drop area component
@Component({
  selector: 'drop',
  template: `
        <div class="drop">
            Drop over me!
            <ul>

                <li *ngFor="let i of items">
                
                  <div draggable="true">
                    {{i}}
                  </div>
                
                </li>
            </ul>
        </div>
    `,
  styles: [`
        .drop{
            border: 1px solid black;
            padding: 24px;
            
        }
        .drop.over{
            border: 2px dashed #000;
        }
        [draggable] {
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            -khtml-user-drag: element;
            -webkit-user-drag: element;
            background-color: #AAA; 
            border: 1px solid black; 
            padding: 24px;
            margin: 12px;
        }
    `]
})

export class DropOverMe {

  items: string[] = [];

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])

  onDrop(event: any) {
    event.preventDefault();

    var name = event.dataTransfer.getData("name");

    this.items.push(name);
  }
}
