import {Component, OnInit, HostListener, Input} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {PageSegment} from "../../util/model";
import {indexOfId} from "../../util/comon";


@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})

export class PageComponent {


  public templates: Array<PageSegment> = [new PageSegment("text"), new PageSegment("Bild"), new PageSegment("Video")];
  public pageSegments: Array<PageSegment> = [new PageSegment("text")];

  public selectedIndex:number = 0;
  public editItem: PageSegment;

  public textFieldContent:string = "";

  constructor(private dragulaService: DragulaService) {

    // dragulaService.setOptions('bag', {
    //   // revertOnSpill: true;
    //   // removeOnSpill: true,
    //   copy: true
    // });

    this.dragulaService.setOptions('bag', {

      copySortSource: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        // console.log(`accepts`);
        return !target.classList.contains("template");
      },

      copy: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        // console.log(`accepts`);
        return !target.classList.contains("pageContent");
      },

      accepts: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        // console.log(`accepts`);
        return target.classList.contains("pageContent"); // elements can not be dropped within themselves
      },
      moves: (el: Element, container: Element, handle: Element): boolean => {
        // only move favorite items, not the icon element
        // console.log(`moves`);

        //return el.tagName.toLowerCase() === 'mvp-navigation-item';
        return true;
      },
    });

    // dragulaService.drag.subscribe((value) => {
    //   console.log(`drag: ${value[0]}`);
    //   this.onDrag(value.slice(1));
    // });
    dragulaService.drop.subscribe((value) => {
      // console.log(`drop: ${value[0]}`);
      // this.onDrop(value.slice(1));
      this.templates = [new PageSegment("text"), new PageSegment("Bild"), new PageSegment("Video")];
    });
    // dragulaService.over.subscribe((value) => {
    //   console.log(`over: ${value[0]}`);
    //   this.onOver(value.slice(1));
    // });
    // dragulaService.out.subscribe((value) => {
    //   console.log(`out: ${value[0]}`);
    //   this.onOut(value.slice(1));
    // });

  }

  segmentClicked($event){

    this.selectedIndex = 1;

    console.log("segmentClicked" +$event.id);
    console.log(this.templates);

    this.editItem = this.pageSegments[indexOfId(this.pageSegments, $event.id)];
    console.log(this.editItem);
  }

  // private hasClass(el: any, name: string) {
  //   return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  // }
  //
  // private addClass(el: any, name: string) {
  //   if (!this.hasClass(el, name) ) {
  //     el.className = el.className ? [el.className, name].join(' ') : name;
  //   }
  // }
  //
  // private removeClass(el: any, name: string) {
  //   console.log(el);
  //   console.log(this.hasClass(el, "pageContent"));
  //   if (this.hasClass(el, name)) {
  //     el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
  //   }
  // }
  //
  // private onDrag(args) {
  //   let [e, el] = args;
  //   this.removeClass(e, 'ex-moved');
  // }
  //
  // private onDrop(args) {
  //   let [e, el] = args;
  //   this.addClass(e, 'ex-moved');
  // }
  //
  // private onOver(args) {
  //   let [e, el, container] = args;
  //   this.addClass(el, 'ex-over');
  // }
  //
  // private onOut(args) {
  //   let [e, el, container] = args;
  //   this.removeClass(el, 'ex-over');
  // }


}



