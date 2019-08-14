import { HighlighterState, initialHighlighterState } from './highlighter.state';
import { HighlighterActionTypes, HighlighterAction } from './highlighter.actions';

export function highlighterReducer(state: HighlighterState = initialHighlighterState, action: HighlighterAction): HighlighterState {
  switch (action.type) {
    case HighlighterActionTypes.SelectHighlight: {
      return selectHighlightReducer(state, action);
    }
    default:
      return state;
  }
}

function selectHighlightReducer(state: HighlighterState = initialHighlighterState, action: HighlighterAction): HighlighterState {
  const isSelected = state.highlights.indexOf(action.highlight) > -1;
  const highlights = !isSelected
    ? [...state.highlights, action.highlight]
    : state.highlights;

  return {
    highlights
  };
}
