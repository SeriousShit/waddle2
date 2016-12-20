import {Injectable} from '@angular/core';
import {Subject, ReplaySubject} from "rxjs";
import {Content, Page} from "../util/model";
import {Http, Response} from "@angular/http";
import Dictionary from "../util/Dictionary";

@Injectable()
export class ContentService {

  contentSubject: Subject<Content> = new ReplaySubject<Content>();

  private pageCacheDict: Dictionary<string, Page> = new Dictionary<string, Page>();

  private apiContentUrl: string = 'api/content';
  private apiPagetUrl: string = 'api/page/';

  private content: Content;

  constructor(private _http: Http) {
    this.loadContent();
    this.contentSubject.subscribe(content => {
      this.cachePages();
    });
  }

  public loadContent() {
    this._http.get(this.apiContentUrl)
      .map((res: Response) => res.json())
      .subscribe(
        (content: Content) => {
          this.content = content;
          this.contentSubject.next(this.content);
        },
        error => {
          console.log(error);
        }
      );
  }

  public addPage(pageTitle: string) {

    let page = new Page(pageTitle);

    this._http.post(this.apiContentUrl, JSON.stringify(page))
      .map((res: Response) => res.json())
      .subscribe(
        (content: Content) => {
          this.content = content;
          this.contentSubject.next(this.content);
        }
      );
  }

  private cachePages(){
    if (this.content !== undefined){
      this.content.pageRefs.forEach(pageRef => {
        console.log(pageRef)
        this.addPageToCache(pageRef.id);
      });
    }
  }

  addPageToCache(pageRef: string) {
    if(!this.pageCacheDict.containsKey(pageRef)){
      this.fetchPage(pageRef)
        .subscribe(
          (page: Page) => {
            this.pageCacheDict.setValue(pageRef, page);
            //console.log(this.pageCacheDict);
          },
          error => {
            console.log(error);
            return error;
          }
        );
    }
  }

  public getPage(pageRef: string): Page {
    return this.pageCacheDict.getValue(pageRef);
  }

  public fetchPage(pageRef: string) {
    return this._http.get(this.apiPagetUrl + pageRef)
      .map((res: Response) => res.json());
  }
}
