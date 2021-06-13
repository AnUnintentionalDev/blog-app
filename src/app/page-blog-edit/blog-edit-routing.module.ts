import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlogEditComponent } from './components/blog-edit/app-blog-edit.component';

const routes: Routes = [
  { path: '', component: AppBlogEditComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogEditRoutingModule { }
