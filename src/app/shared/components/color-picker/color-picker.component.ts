import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '@shared/types/color';
import { ColorType } from '@shared/types/color-type';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent {
  @Input() colors: Color[] = [];
  @Input() selectedColors: ColorType[] = [];
  @Output() selectColor = new EventEmitter<ColorType>();

  constructor() {}

  select(color: Color): void {
    this.selectColor.emit(color.colorType);
  }

  isSelected(color: Color): boolean {
    return this.selectedColors.indexOf(color.colorType) > -1;
  }
}
