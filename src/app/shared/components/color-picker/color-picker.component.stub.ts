import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '@shared/types/color';
import { ColorType } from '@shared/types/color-type';

@Component({
  selector: 'app-color-picker',
  template: '<div></div>'
})
export class ColorPickerStubComponent {
  @Input() colors: Color[] = [];
  @Input() selectedColors: ColorType[] = [];
  @Output() selectColor = new EventEmitter<Color>();
}
