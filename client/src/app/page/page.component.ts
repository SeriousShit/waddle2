import {Component, OnInit} from '@angular/core';
// import {NgGrid, NgGridItem} from 'angular2-grid';
import {NgGridItemConfig, NgGridConfig, NgGridItemEvent} from "../moduls/Grid/NgGrid.module";


interface Box {
  id: number;
  config: NgGridItemConfig;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent {

  private boxes: Array<Box> = [];
  private rgb: string = '#efefef';
  private curNum: number = 2;

  private gridConfig: NgGridConfig = <NgGridConfig>{
    'margins': [5],
    'draggable': true,
    'resizable': true,
    'max_cols': 0,
    'max_rows': 0,
    'visible_cols': 1,
    'visible_rows': 1,
    'min_cols': 1,
    'min_rows': 1,
    'col_width': 1,
    'row_height': 1,
    'cascade': 'up',
    'min_width': 50,
    'min_height': 50,
    'fix_to_grid': true,
    'auto_style': true,
    'auto_resize': false,
    'maintain_ratio': true,
    'prefer_new': false,
    'zoom_on_drag': false,
    'limit_to_screen': true
  };
  private curItemCheck: number = 0;
  private itemPositions: Array<any> = [];

  constructor() {
    for (var i = 0; i < 4; i++) {
      const conf = this._generateDefaultItemConfig();
      conf.payload = 1 + i;
      this.boxes[i] = { id: i + 1, config: conf };
    }
  }

  get ratioDisabled(): boolean {
    return (this.gridConfig.max_rows > 0 && this.gridConfig.visible_cols > 0) ||
      (this.gridConfig.max_cols > 0 && this.gridConfig.visible_rows > 0) ||
      (this.gridConfig.visible_cols > 0 && this.gridConfig.visible_rows > 0);
  }

  get itemCheck(): number {
    return this.curItemCheck;
  }

  set itemCheck(v: number) {
    console.log(v);
    this.curItemCheck = v;
  }

  get curItem(): NgGridItemConfig {
    return this.boxes[this.curItemCheck] ? this.boxes[this.curItemCheck].config : {};
  }

  addBox(): void {
    const conf: NgGridItemConfig = this._generateDefaultItemConfig();
    conf.payload = this.curNum++;
    this.boxes.push({ id: conf.payload, config: conf });
  }

  removeBox(): void {
    if (this.boxes[this.curItemCheck]) {
      this.boxes.splice(this.curItemCheck, 1);
    }
  }

  updateItem(index: number, event: NgGridItemEvent): void {
    console.log("updateItem");
  }

  onDrag(index: number, event: NgGridItemEvent): void {
    console.log("onDrag");
  }

  onResize(index: number, event: NgGridItemEvent): void {
    console.log("onResize");
  }

  private _generateDefaultItemConfig(): NgGridItemConfig {
    return { 'dragHandle': '.handle' };
  }

  private _randomise(): void {
    for (var x in this.boxes) {
      this.boxes[x].config.col = Math.floor(Math.random() * 6) + 1;
      this.boxes[x].config.row = 1;
    }
  }
}
