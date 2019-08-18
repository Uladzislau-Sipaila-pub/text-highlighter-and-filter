import { Component, OnInit } from '@angular/core';

import { ColorType } from '@shared/types/color-type';
import { HighlighterState } from './store/highlighter.state';
import { Store, select } from '@ngrx/store';
import { Highlight } from '@shared/types/highlight';
import { SelectHighlightAction } from './store/highlighter.actions';
import { selectHighlights } from './store/highlighter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.scss']
})
export class HighlighterComponent implements OnInit {
  highlights$: Observable<Highlight[]>;

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
