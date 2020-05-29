import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNav001Component } from './ui-nav001.component';

describe('UiNav001Component', () => {
  let component: UiNav001Component;
  let fixture: ComponentFixture<UiNav001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNav001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNav001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
