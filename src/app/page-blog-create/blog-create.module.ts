import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppBlogCreateComponent } from "./components/blog-create/app-blog-create.component";
import { BlogCreateRoutingModule } from "./blog-create-routing.module";

@NgModule({
  declarations: [AppBlogCreateComponent],
  imports: [
    CommonModule,
    BlogCreateRoutingModule
  ],
  exports: [],
  providers: []
})

export class BlogCreateModule { }