import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMap001Component } from './ui-map001.component';

describe('UiMap001Component', () => {
  let component: UiMap001Component;
  let fixture: ComponentFixture<UiMap001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiMap001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMap001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
