import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponyDetailComponent }  from './compony-detail/compony-detail.component';
import { ComponyListComponent } from "./compony-list/compony-list.component";

const routes: Routes = [
  { path: 'componylist', component: ComponyListComponent},
  { path: 'compony/:id', component: ComponyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
