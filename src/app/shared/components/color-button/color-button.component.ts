import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType } from '@shared/types/color-type';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorButtonComponent {
  @Input() label: string;
  @Input() color: ColorType = ColorType.red;
  @Input() isSelected = false;
  @Output() selectColor = new EventEmitter<ColorType>();

  constructor() {}

  select(): void {
    this.selectColor.emit(this.color);
  }
}
