import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GarageInfoComponent} from './garages/garage-info/garage-info.component';
import {ListGaragesComponent} from './garages/list-garages/list-garages.component';

const routes: Routes = [
    { path: 'garage/:id', component: GarageInfoComponent},
    { path: '', component: ListGaragesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
