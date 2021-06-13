import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogViewRoutingModule } from "./blog-edit-routing.module";
import { AppBlogViewComponent } from "./components/blog-view/app-blog-view.component";

@NgModule({
  declarations: [AppBlogViewComponent],
  imports: [
    CommonModule,
    BlogViewRoutingModule
  ],
  exports: [],
  providers: []
})

export class BlogViewModule { }