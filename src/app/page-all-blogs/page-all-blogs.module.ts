import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';
import { AllBlogsRoutingModule } from "./page-all-blogs-routing.module";

@NgModule({
  declarations: [AllBlogsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AllBlogsRoutingModule
  ],
  exports: [],
  providers: []
})

export class PageAllBlogsModule { }