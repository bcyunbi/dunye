import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiNav001Component } from './ui-component/ui-nav001/ui-nav001.component';
import { UiHeader001Component } from './ui-component/ui-header001/ui-header001.component';
import { UiFooter001Component } from './ui-component/ui-footer001/ui-footer001.component';

@NgModule({
  declarations: [
    AppComponent,
    UiNav001Component,
    UiHeader001Component,
    UiFooter001Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
