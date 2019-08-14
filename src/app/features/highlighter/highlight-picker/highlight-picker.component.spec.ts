import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPickerComponent } from './highlight-picker.component';

describe('HighlightPickerComponent', () => {
  let component: HighlightPickerComponent;
  let fixture: ComponentFixture<HighlightPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
