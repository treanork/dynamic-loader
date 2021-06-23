import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicLoaderModule } from 'src/dynamic-module-loader/directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
