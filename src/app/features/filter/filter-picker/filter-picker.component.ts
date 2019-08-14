import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ColorType } from '@shared/types/color-type';
import { Color } from '@shared/types/color';

@Component({
  selector: 'app-filter-picker',
  templateUrl: './filter-picker.component.html',
  styleUrls: ['./filter-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPickerComponent implements OnInit {
  @Input() filteredColors: ColorType[] = [];
  @Output() selectColor = new EventEmitter<ColorType>();

  colors: Color[] = [{
    colorType: ColorType.red,
    label: 'Red color filter'
  }, {
    colorType: ColorType.yellow,
    label: 'Yellow color filter'
  }, {
    colorType: ColorType.green,
    label: 'Green color filter'
  }];

  constructor() { }

  ngOnInit() {
  }

  select(color: ColorType): void {
    this.selectColor.emit(color);
  }
}
