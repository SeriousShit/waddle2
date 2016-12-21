import {Component, OnInit, HostListener, Input} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {PageSegment, Page} from "../../util/model";
import {indexOfId} from "../../util/comon";
import {ActivatedRoute, Params} from "@angular/router";
import {ContentService} from "../../services/content.service";


@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})

export class PageComponent implements OnInit{


  public templates: Array<PageSegment> = [new PageSegment("text"), new PageSegment("Bild"), new PageSegment("Video")];
  public pageSegments: Array<PageSegment> = [];

  public selectedItem: number = -1;
  public activeTabIndex: number = 0;
  public editItem: PageSegment;

  public textFieldContent: string = "";

  private page: Page;
  pageRef: string;

  constructor(private contentService: ContentService,
              private dragulaService: DragulaService,
              private _activatedRoute: ActivatedRoute) {


    this.dragulaService.setOptions('bag', {

      // removeOnSpill: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
      //   // console.log(`accepts`);
      //   return target.classList.contains("pageContent");
      // },

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
    // dragulaService.drag.subscribe((value) => {
    //   console.log(`drag: ${value[0]}`);
    //   this.onDrag(value.slice(1));
    // });

  }

  ngOnInit(): any {
    //console.log("ngOnInit");

    this.selectedItem = -1;
    this._activatedRoute.params.forEach((params: Params) => {
      this.pageRef = params['id'];
      console.log(this.pageRef);
      this.contentService.activPageSubject.subscribe((page) => {
        if ( page !== undefined ) {
          this.page = page;
          this.pageSegments = page.pageSegments;


        } else {

        }
      });

      this.contentService.getPage(this.pageRef);


    });
  }


  segmentClicked($event) {
    this.activeTabIndex = 1;

    this.selectedItem = indexOfId(this.pageSegments, $event.id);

    this.editItem = this.pageSegments[indexOfId(this.pageSegments, $event.id)];
    this.textFieldContent = this.editItem.text;
  }

  textChange($event: string) {

    console.log($event);
    this.pageSegments[indexOfId(this.pageSegments, this.editItem.id)].text = $event;
  }

  savePage() {
    this.page.pageSegments = this.pageSegments;
    this.contentService.savePage(this.page);
  }


}



