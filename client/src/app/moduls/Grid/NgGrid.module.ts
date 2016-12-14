import {NgGrid} from "./directives/NgGrid";
import { NgModule, ModuleWithProviders } from '@angular/core';
import {NgGridItem} from "./directives/NgGridItem";
import {NgGridPlaceholder} from "./components/NgGridPlaceholder";

export * from './directives/NgGrid';
export * from './directives/NgGridItem';
export * from './components/NgGridPlaceholder';
export * from './interfaces/INgGrid';
export * from './NgGrid.module';

@NgModule({
  declarations:     [ NgGrid, NgGridItem, NgGridPlaceholder ],
  entryComponents:  [ NgGridPlaceholder ],
  exports:          [ NgGrid, NgGridItem ]
})
export class NgGridModule {}
