import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponyDetailComponent }  from './compony-detail/compony-detail.component';

const routes: Routes = [
  { path: 'compony/:id', component: ComponyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
