import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorType } from '@shared/types/color-type';
import { Store, select } from '@ngrx/store';
import { FilterState } from './store/filter.state';
import { SelectColorAction } from './store/filter.actions';
import { selectFilteredColors } from './store/filter.selectors';
import { selectHighlights } from '../highlighter/store/highlighter.selectors';
import { Highlight } from '@shared/types/highlight';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filteredColors$: Observable<ColorType[]>;
  highlights$: Observable<Highlight[]>;

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
