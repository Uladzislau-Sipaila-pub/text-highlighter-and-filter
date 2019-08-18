import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ColorType } from '@shared/types/color-type';

@Component({
  selector: 'app-highlight-picker',
  template: '<div></div>'
})
export class HighlightPickerStubComponent {
  @Input() highlightedColors: ColorType[] = [];
  @Output() selectColor = new EventEmitter<ColorType>();
}
