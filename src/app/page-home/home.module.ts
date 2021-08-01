import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AppHomeComponent } from "./components/home/app-home.component";
import { AppWrapperModule } from "../common/app-wrapper/app-wrapper.module";
import { AppMaterialModule } from "../app-material.module";
import { BlogPostTagPipeModule } from "../common/blog-post-tags-pipe/blog-post-tags-pipe.module";

@NgModule({
  declarations: [AppHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppWrapperModule,
    AppMaterialModule,
    BlogPostTagPipeModule
  ],
  exports: [],
  providers: []
})

export class HomeModule { }