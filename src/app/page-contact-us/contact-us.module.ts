import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactUsRoutingModule } from "./connect-with-us-routing.module";
import { AppContactUsComponent } from "./components/contact-us/app-contact-us.component";

@NgModule({
  declarations: [AppContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ],
  exports: [],
  providers: []
})

export class ContactUsModule { }