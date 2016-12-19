import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./components/start/start.component";
import {PageComponent} from "./components/page/page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  }
  ,
  {
    path: 'page',
    component: PageComponent,
  },
  // {
  //   path: 'cards/:id',
  //   component: CardsComponent,
  // },
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
