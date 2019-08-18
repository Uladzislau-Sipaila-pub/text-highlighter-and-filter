import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPickerComponent } from './highlight-picker.component';
import { SharedTestingModule } from '@shared/shared-testing.module';
import { ColorType } from '@shared/types/color-type';

fdescribe('HighlightPickerComponent', () => {
  let component: HighlightPickerComponent;
  let fixture: ComponentFixture<HighlightPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightPickerComponent ],
      imports: [ SharedTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#select()', () => {
    it('should emit #selectColor with current color value', () => {
      const selectColorEmitSpy = spyOn(component.selectColor, 'emit');
      component.select(ColorType.red);
      expect(selectColorEmitSpy).toHaveBeenCalledWith(ColorType.red);
    });
  });
});
