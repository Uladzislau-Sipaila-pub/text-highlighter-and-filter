import { Component, Input } from '@angular/core';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

@Component({
  selector: 'app-filtered-list',
  template: '<div></div>'
})
export class FilteredListStubComponent {
  @Input() filteredColors: ColorType[] = [];
  @Input() highlights: Highlight[] = [];
}
