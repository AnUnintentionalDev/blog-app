import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlogViewComponent } from './components/blog-view/app-blog-view.component';

const routes: Routes = [
  { path: '', component: AppBlogViewComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogViewRoutingModule { }
