import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorType } from '@shared/types/color-type';

import { ColorButtonComponent } from './color-button.component';

describe('ColorButtonComponent', () => {
  let component: ColorButtonComponent;
  let fixture: ComponentFixture<ColorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#select()', () => {
    it('should emit #selectColor with current color value', () => {
      const selectColorEmitSpy = spyOn(component.selectColor, 'emit');
      component.color = ColorType.red;
      component.select();
      expect(selectColorEmitSpy).toHaveBeenCalledWith(ColorType.red);
    });
  });
});
