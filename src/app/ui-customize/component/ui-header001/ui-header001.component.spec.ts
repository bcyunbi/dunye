import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeader001Component } from './ui-header001.component';

describe('UiHeader001Component', () => {
  let component: UiHeader001Component;
  let fixture: ComponentFixture<UiHeader001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiHeader001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeader001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
