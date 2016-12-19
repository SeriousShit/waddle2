import {Component, OnInit, HostListener, Input} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";


@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})

export class PageComponent {


  public many: Array<string> = ['Text', 'Video', 'Image'];
  public many2: Array<string> = ['Text', 'Video', 'Image'];

  constructor(private dragulaService: DragulaService) {

    dragulaService.setOptions('bag', {
      // revertOnSpill: true;
      // removeOnSpill: true,
      // copy: true
    });

    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name) ) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    console.log(el);
    console.log(this.hasClass(el, "pageContent"));
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
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
