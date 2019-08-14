import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() selectColor = new EventEmitter<Color>();

  constructor() {}

  select(color: Color): void {
    this.selectColor.emit(color);
  }

  isSelected(color: Color): boolean {
    return this.selectedColors.indexOf(color.colorType) > -1;
  }
}
