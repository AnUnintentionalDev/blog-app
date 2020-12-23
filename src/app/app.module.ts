import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppBlogCreateComponent } from './app-blog-create/app-blog-create.component';
import { AppBlogViewComponent } from './app-blog-view/app-blog-view.component';
import { AppBlogEditComponent } from './app-blog-edit/app-blog-edit.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppAboutComponent,
    AppBlogCreateComponent,
    AppBlogViewComponent,
    AppBlogEditComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
