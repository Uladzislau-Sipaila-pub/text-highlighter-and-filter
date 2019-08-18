import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Color } from '@shared/types/color';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';
import { Observable } from 'rxjs';

import { selectHighlights } from '../highlighter/store/highlighter.selectors';

import { SelectColorAction } from './store/filter.actions';
import { selectFilteredColors } from './store/filter.selectors';
import { FilterState } from './store/filter.state';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filteredColors$: Observable<ColorType[]>;
  highlights$: Observable<Highlight[]>;

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

  constructor(
    private store: Store<FilterState>
  ) {}

  ngOnInit(): void {
    this.filteredColors$ = this.store.pipe(select(selectFilteredColors));
    this.highlights$ = this.store.pipe(select(selectHighlights));
  }

  selectColor(color: ColorType): void {
    this.store.dispatch(new SelectColorAction(color));
  }
}
