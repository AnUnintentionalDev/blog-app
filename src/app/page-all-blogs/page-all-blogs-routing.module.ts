import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';

const routes: Routes = [
  { path: '', component: AllBlogsComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBlogsRoutingModule { }
