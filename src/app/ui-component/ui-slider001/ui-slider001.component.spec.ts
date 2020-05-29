import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlider001Component } from './ui-slider001.component';

describe('UiSlider001Component', () => {
  let component: UiSlider001Component;
  let fixture: ComponentFixture<UiSlider001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSlider001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSlider001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
