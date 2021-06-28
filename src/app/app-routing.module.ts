import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DataclientComponent} from "./dataclient/dataclient.component";
import {InputclientComponent} from "./inputclient/inputclient.component";

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dataclient',
    component: DataclientComponent
  },
  {
    path:'inputclient',
    component: InputclientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
