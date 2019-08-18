import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Color } from '@shared/types/color';
import { ColorType } from '@shared/types/color-type';

import { ColorButtonStubComponent } from '../color-button/color-button.component.stub';

import { ColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColorPickerComponent,
        ColorButtonStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#select()', () => {
    it('should emit #selectColor with selected color', () => {
      const selectColorEmitSpy = spyOn(component.selectColor, 'emit');
      const selectedColor: Color = {
        colorType: ColorType.red,
        label: 'Red'
      };

      component.select(selectedColor);
      expect(selectColorEmitSpy).toHaveBeenCalledWith(ColorType.red);
    });
  });

  describe('#isSelected()', () => {
    it('should return true color exists in #selectedColors list', () => {
      component.selectedColors = [
        ColorType.red,
        ColorType.green,
      ];

      const resultGreen = component.isSelected({ colorType: ColorType.green, label: '' });
      const resultRed = component.isSelected({ colorType: ColorType.red, label: '' });
      const resultYellow = component.isSelected({ colorType: ColorType.yellow, label: '' });

      expect(resultGreen).toBeTruthy();
      expect(resultRed).toBeTruthy();
      expect(resultYellow).toBeFalsy();
    });
  });
});
