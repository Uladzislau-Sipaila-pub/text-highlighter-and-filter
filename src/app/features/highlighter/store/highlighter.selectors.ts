
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HighlighterState } from './highlighter.state';

export const selectFeature = createFeatureSelector<HighlighterState>('highlighter');
export const selectHighlights = createSelector(selectFeature, (state: HighlighterState) => state.highlights);
