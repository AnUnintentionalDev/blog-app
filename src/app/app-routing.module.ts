import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppBlogCreateComponent } from './app-blog-create/app-blog-create.component';
import { AppBlogEditComponent } from './app-blog-edit/app-blog-edit.component';
import { AppBlogViewComponent } from './app-blog-view/app-blog-view.component';
import { AppConnectWithUsComponent } from './app-connect-with-us/app-connect-with-us.component';
import { AppContactUsComponent } from './app-contact-us/app-contact-us.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: AppHomeComponent
  },
  {
    path: 'about', component: AppAboutComponent
  },
  {
    path: 'blog/:blogId', component: AppBlogViewComponent
  },
  {
    path: 'create', component: AppBlogCreateComponent
  },
  {
    path: 'edit/:blogId', component: AppBlogEditComponent
  },
  {
    path: 'connect-with-us', component: AppConnectWithUsComponent
  },
  {
    path: 'contact-us', component: AppContactUsComponent
  },
  {
    path: '**', component: AppNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
