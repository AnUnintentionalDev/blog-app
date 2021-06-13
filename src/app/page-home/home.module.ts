import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AppHomeComponent } from "./components/home/app-home.component";
import { AppWrapperModule } from "../common/app-wrapper/app-wrapper.module";
import { AppMaterialModule } from "../app-material.module";

@NgModule({
  declarations: [AppHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppWrapperModule,
    AppMaterialModule
  ],
  exports: [],
  providers: []
})

export class HomeModule { }