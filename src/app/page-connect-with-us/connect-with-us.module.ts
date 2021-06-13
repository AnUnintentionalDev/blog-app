import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConnectWithUsRoutingModule } from "./connect-with-us-routing.module";
import { AppConnectWithUsComponent } from "./components/connect-with-us/app-connect-with-us.component";

@NgModule({
  declarations: [AppConnectWithUsComponent],
  imports: [
    CommonModule,
    ConnectWithUsRoutingModule
  ],
  exports: [],
  providers: []
})

export class ConnectWithUsModule { }