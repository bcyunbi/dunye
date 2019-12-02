import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFooter001Component } from './ui-footer001.component';

describe('UiFooter001Component', () => {
  let component: UiFooter001Component;
  let fixture: ComponentFixture<UiFooter001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFooter001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFooter001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
