import {Injectable} from '@angular/core';
import {Subject, ReplaySubject} from "rxjs";
import {Content, Page} from "../util/model";
import {Http, Response} from "@angular/http";

@Injectable()
export class ContentService {

  contentSubject: Subject<Content> = new ReplaySubject<Content>();

  private apiBaseUrl: string = 'api/content';

  private content: Content;

  constructor(private _http: Http) {
    this.load();
  }

  public load() {
    this._http.get(this.apiBaseUrl)
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

  public addPage(page: Page) {
    console.log(page);
    this._http.post(this.apiBaseUrl,JSON.stringify(page))
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

  public saveContent(){

  }


}
