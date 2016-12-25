import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from "./components/page/page.component";
import {StartComponent} from "./components/start/start.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'page/:id',
    component: PageComponent,
  },
  // {
  //   path: 'page/:id',
  //   component: PageComponent,
  // },
  // {
  //   path: 'pdf/:id',
  //   component: PdfViewComponent,
  // },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
