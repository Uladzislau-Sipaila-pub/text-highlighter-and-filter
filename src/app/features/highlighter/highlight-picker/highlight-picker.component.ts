import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { ColorType } from '@shared/types/color-type';
import { Color } from '@shared/types/color';

@Component({
  selector: 'app-highlight-picker',
  templateUrl: './highlight-picker.component.html',
  styleUrls: ['./highlight-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightPickerComponent implements OnInit {
  @Input() highlightedColors: ColorType[] = [];
  @Output() selectColor = new EventEmitter<ColorType>();

  colors: Color[] = [{
    colorType: ColorType.red,
    label: 'Red highlighter'
  }, {
    colorType: ColorType.yellow,
    label: 'Yellow highlighter'
  }, {
    colorType: ColorType.green,
    label: 'Green highlighter'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  select(color: ColorType): void {
    this.selectColor.emit(color);
  }
}
