import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConnectWithUsComponent } from './components/connect-with-us/app-connect-with-us.component';

const routes: Routes = [
  { path: '', component: AppConnectWithUsComponent, resolve: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectWithUsRoutingModule { }
