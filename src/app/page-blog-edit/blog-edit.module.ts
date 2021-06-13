import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogEditRoutingModule } from "./blog-edit-routing.module";
import { AppBlogEditComponent } from "./components/blog-edit/app-blog-edit.component";

@NgModule({
  declarations: [AppBlogEditComponent],
  imports: [
    CommonModule,
    BlogEditRoutingModule
  ],
  exports: [],
  providers: []
})

export class BlogEditModule { }