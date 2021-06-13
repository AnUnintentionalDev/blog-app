import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlogCreateComponent } from './components/blog-create/app-blog-create.component';

const routes: Routes = [
  { path: '', component: AppBlogCreateComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCreateRoutingModule { }
