import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContactUsComponent } from './components/contact-us/app-contact-us.component';

const routes: Routes = [
  { path: '', component: AppContactUsComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
