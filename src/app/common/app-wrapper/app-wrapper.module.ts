import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

const matModules = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [AppLayoutComponent, AppNavComponent, AppHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...matModules
  ],
  exports: [AppLayoutComponent, AppNavComponent, AppHeaderComponent, ...matModules],
  providers: []
})

export class AppWrapperModule { }