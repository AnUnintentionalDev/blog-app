import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent } from './components/about/app-about.component';

const routes: Routes = [
  { path: '', component: AppAboutComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
