import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType } from '@shared/types/color-type';

@Component({
  selector: 'app-color-button',
  template: '<div></div>'
})
export class ColorButtonStubComponent {
  @Input() label: string;
  @Input() color: ColorType = ColorType.red;
  @Input() isSelected = false;
  @Output() selectColor = new EventEmitter<ColorType>();
}
