import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiNav001Component } from './ui-component/ui-nav001/ui-nav001.component';
import { UiHeader001Component } from './ui-component/ui-header001/ui-header001.component';
import { UiFooter001Component } from './ui-component/ui-footer001/ui-footer001.component';
import { UiSlider001Component } from './ui-component/ui-slider001/ui-slider001.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { UiMap001Component } from './ui-component/ui-map001/ui-map001.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  slideVisibleClass: 'visible'
};
@NgModule({
  declarations: [
    AppComponent,
    UiNav001Component,
    UiHeader001Component,
    UiFooter001Component,
    UiSlider001Component,
    UiMap001Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
