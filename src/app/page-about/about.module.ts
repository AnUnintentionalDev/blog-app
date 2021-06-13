import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppAboutComponent } from "./components/about/app-about.component";
import { AboutRoutingModule } from "./about-routing.module";
import { AppWrapperModule } from "../common/app-wrapper/app-wrapper.module";

@NgModule({
  declarations: [AppAboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    AppWrapperModule
  ],
  exports: [],
  providers: []
})

export class AboutModule { }