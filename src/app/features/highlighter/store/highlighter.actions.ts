import { Action } from '@ngrx/store';
import { Highlight } from '@shared/types/highlight';

export enum HighlighterActionTypes {
  SelectHighlight = '[highlighter] SelectHighlightAction'
}

export class SelectHighlightAction implements Action {
  readonly type = HighlighterActionTypes.SelectHighlight;

  constructor(public highlight: Highlight) { }
}

export type HighlighterAction = SelectHighlightAction;
