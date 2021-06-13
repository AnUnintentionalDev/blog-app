import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNameEnum } from './config/page-name-enum';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./page-home/home.module').then(mod => mod.HomeModule),
    data: { pageValue: PageNameEnum.HOME }
  },
  {
    path: 'about', loadChildren: () => import('./page-about/about.module').then(mod => mod.AboutModule),
    data: { pageValue: PageNameEnum.ABOUT }
  },
  {
    path: 'blog/:blogId', loadChildren: () => import('./page-blog-view/blog-view.module').then(mod => mod.BlogViewModule),
    data: { pageValue: PageNameEnum.BLOG_VIEW }
  },
  {
    path: 'create', loadChildren: () => import('./page-blog-create/blog-create.module').then(mod => mod.BlogCreateModule),
    data: { pageValue: PageNameEnum.BLOG_CREATE }
  },
  {
    path: 'edit/:blogId', loadChildren: () => import('./page-blog-edit/blog-edit.module').then(mod => mod.BlogEditModule),
    data: { pageValue: PageNameEnum.BLOG_EDIT }
  },
  {
    path: 'all-blogs', loadChildren: () => import('./page-all-blogs/page-all-blogs.module').then(mod => mod.PageAllBlogsModule),
    data: { pageValue: PageNameEnum.ALL_BLOGS }
  },
  {
    path: 'connect-with-us', loadChildren: () => import('./page-connect-with-us/connect-with-us.module').then(mod => mod.ConnectWithUsModule),
    data: { pageValue: PageNameEnum.CONNECT_WITH_US }
  },
  {
    path: 'contact-us', loadChildren: () => import('./page-contact-us/contact-us.module').then(mod => mod.ContactUsModule),
    data: { pageValue: PageNameEnum.CONTACT_US }
  },
  {
    path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
