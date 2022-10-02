import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import { AnchorAttributesComponent } from './Form/anchor-attributes/anchor-attributes.component';
import { InputListComponent } from './Form/input-list/input-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'reactiveform', component: ReactiveFormComponent},
  {path:'anchor', component: AnchorAttributesComponent},
  {path: 'inputtypes', component: InputListComponent},
  { path: '',   redirectTo: '/reactiveform', pathMatch: 'full' },
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
