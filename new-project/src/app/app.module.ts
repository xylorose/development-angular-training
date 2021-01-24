import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnotherComponent} from './another/another.component';
import {InlineComponent} from './inline/inline.component';
import { ReusableComponent } from './reusable/reusable.component';
import { UpdateComponent } from './update/update.component';
import { ApiComponent } from './api/api.component';


@NgModule({
    declarations: [
      AppComponent,
      AnotherComponent,
      InlineComponent,
      ReusableComponent,
      UpdateComponent,
      ApiComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  