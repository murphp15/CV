import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PassionsAndInterestsComponent} from "./hero-form.component";
import {FormsModule} from "@angular/forms";
import {SizerComponent} from "./sizer.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([ {
      path :'passions_and_interests' ,  component : PassionsAndInterestsComponent}])
  ],
  declarations: [ AppComponent , PassionsAndInterestsComponent , SizerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
