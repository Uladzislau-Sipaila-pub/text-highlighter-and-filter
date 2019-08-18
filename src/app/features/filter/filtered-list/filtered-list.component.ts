import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredListComponent implements OnChanges {
  @Input() filteredColors: ColorType[] = [];
  @Input() highlights: Highlight[] = [];

  list: Highlight[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filteredColors || changes.highlights) {
      const filteredColors = changes.filteredColors
        ? changes.filteredColors.currentValue
        : this.filteredColors;
      const highlights = changes.highlights
        ? changes.highlights.currentValue
        : this.highlights;

      this.updateList(filteredColors, highlights);
    }
  }

  private updateList(filteredColors: ColorType[], highlights: Highlight[]): void {
    this.list = highlights.filter(highlight => {
      return filteredColors.indexOf(highlight.colorType) > -1;
    });
  }
}
