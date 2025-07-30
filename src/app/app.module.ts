import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './component/pipes/pipes.component';
import {RevertPipe} from "./pipe/RevertPipe";

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    RevertPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
