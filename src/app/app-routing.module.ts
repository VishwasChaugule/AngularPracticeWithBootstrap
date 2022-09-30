import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import { AnchorAttributesComponent } from './Form/anchor-attributes/anchor-attributes.component';
import { InputListComponent } from './Form/input-list/input-list.component';

const routes: Routes = [
  {path:'', component: ReactiveFormComponent},
  {path:'anchor', component: AnchorAttributesComponent},
  {path: 'inputtypes', component: InputListComponent}
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
