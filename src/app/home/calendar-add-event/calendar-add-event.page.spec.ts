import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAddEventPage } from './calendar-add-event.page';

describe('CalendarAddEventPage', () => {
  let component: CalendarAddEventPage;
  let fixture: ComponentFixture<CalendarAddEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarAddEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarAddEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
