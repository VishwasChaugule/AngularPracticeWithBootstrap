import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputListComponent } from './Form/input-list/input-list.component';
import { AnchorAttributesComponent } from './Form/anchor-attributes/anchor-attributes.component';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InputListComponent,
    AnchorAttributesComponent,
    ReactiveFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
