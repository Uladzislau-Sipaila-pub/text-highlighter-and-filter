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
  private draftText = '';

  constructor(
    private store: Store<HighlighterState>
  ) {}

  ngOnInit(): void {
    this.highlights$ = this.store.pipe(select(selectHighlights));
  }

  selectColor(color: ColorType): void {
    if (this.draftText) {
      const highlight: Highlight = {
        text: this.draftText,
        colorType: color
      };

      this.store.dispatch(new SelectHighlightAction(highlight));
    }
  }

  highlightText(text: string): void {
    this.draftText = text;
  }
}
