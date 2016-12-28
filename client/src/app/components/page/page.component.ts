import {Component, OnInit} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {PageSegment, Page, Video, Chart, Image} from "../../util/model";
import {indexOfId} from "../../util/comon";
import {ActivatedRoute, Params} from "@angular/router";
import {ContentService} from "../../services/content.service";


@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})

export class PageComponent implements OnInit{


  public templates: Array<PageSegment> = this.newTemplates();
  public pageSegments: Array<PageSegment> = [];

  public selectedItem: number = -1;
  public activeTabIndex: number = 0;
  public editItem: PageSegment;

  private page: Page;
  pageRef: string;

  constructor(private contentService: ContentService,
              private dragulaService: DragulaService,
              private _activatedRoute: ActivatedRoute) {


    const bag: any = this.dragulaService.find('bag');
    if (bag !== undefined ) this.dragulaService.destroy('bag');

    this.dragulaService.setOptions('bag', {

      // removeOnSpill: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
      //   // console.log(`accepts`);
      //   return source.classList.contains("pageContent")
      //     && !target.classList.contains("pageContent");
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

      this.templates = this.newTemplates();
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
        if (  page !== undefined &&
              page !== null ) {
          this.page = page;
          this.pageSegments = page.pageSegments;
        } else {

        }
      });

      this.contentService.getPage(this.pageRef);
    });
  }

  newTemplates():PageSegment[]{
    let textTemplate = new PageSegment(null , "" , null , null, null);
    let videoTemplate = new PageSegment(null , null , new Video() , null, null);
    let imageTemplate = new PageSegment(null , null , null , new Image(null, null), null);
    let chartTemplate = new PageSegment(null , null , null , null, new Chart());

    return [textTemplate, videoTemplate, imageTemplate, chartTemplate];
  }

  segmentClicked($event) {

    console.log("clicked");
    console.log($event);

    this.activeTabIndex = 1;

    this.selectedItem = indexOfId(this.pageSegments, $event.id);

    this.editItem = this.pageSegments[indexOfId(this.pageSegments, $event.id)];
  }

  segmentChanged($event: PageSegment) {
    console.log($event);
    this.pageSegments[indexOfId(this.pageSegments, this.editItem.id)]
      = $event;
  }

  savePage() {
    this.page.pageSegments = this.pageSegments;
    this.contentService.savePage(this.page);
  }


}



