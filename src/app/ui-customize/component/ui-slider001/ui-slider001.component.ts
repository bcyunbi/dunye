import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-ui-slider001',
  templateUrl: './ui-slider001.component.html',
  styleUrls: ['./ui-slider001.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiSlider001Component implements OnInit {
  public config: SwiperConfigInterface;
  constructor() { }

  ngOnInit() {
    this.config = {
      initialSlide: 0,
      direction: 'horizontal',
      keyboard: true,
      scrollbar: false,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      loop: true,
      simulateTouch: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      lazy: true,
      preloadImages: false,
      observer: true,
      observeSlideChildren: true,
      slidesPerView: 1
    };
  }
}
