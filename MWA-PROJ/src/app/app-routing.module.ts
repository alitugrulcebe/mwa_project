import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponyDetailComponent }  from './compony-detail/compony-detail.component';
import { ComponyListComponent } from "./compony-list/compony-list.component";
import { LivingDetailComponent } from './living-detail/living-detail.component';

const routes: Routes = [
  { path: 'componylist', component: ComponyListComponent},
  { path: 'compony/:id', component: ComponyDetailComponent },
  { path: 'livingdetail/:id', component: LivingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
