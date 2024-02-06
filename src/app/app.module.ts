import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudWithJsonComponent } from './crud-with-json/crud-with-json.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WithReactiveFormComponent } from './crud-with-json/with-reactive-form/with-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudWithJsonComponent,
    WithReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
