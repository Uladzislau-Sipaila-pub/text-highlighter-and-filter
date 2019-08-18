import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Color } from '@shared/types/color';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';
import { Observable } from 'rxjs';

import { SelectHighlightAction } from './store/highlighter.actions';
import { selectHighlights } from './store/highlighter.selectors';
import { HighlighterState } from './store/highlighter.state';

@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.scss']
})
export class HighlighterComponent implements OnInit {
  highlights$: Observable<Highlight[]>;

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

  private draftHighlight: Highlight = null;

  constructor(
    private store: Store<HighlighterState>
  ) {}

  ngOnInit(): void {
    this.highlights$ = this.store.pipe(select(selectHighlights));
  }

  selectColor(colorType: ColorType): void {
    if (this.draftHighlight) {
      const highlight: Highlight = {
        ...this.draftHighlight,
        colorType
      };

      this.store.dispatch(new SelectHighlightAction(highlight));
    }
  }

  updateHighlight(highlight: Highlight): void {
    this.draftHighlight = highlight;
  }
}
