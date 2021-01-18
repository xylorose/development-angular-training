import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpClient} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnotherComponent} from './another/another.component';
import {GoyoComponent} from './goyo/goyo.component';
import {InlineComponent} from './inline/inline.component';
import { ReusableComponent } from './reusable/reusable.component';
import { UpdateComponent } from './update/update.component';
import { ApiComponent } from './api/api.component';


@NgModule({
    declarations: [
      AppComponent,
      AnotherComponent,
      GoyoComponent,
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
      // HttpClient,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  