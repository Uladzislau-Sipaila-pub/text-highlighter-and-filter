
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FilterState } from './filter.state';

export const selectFeature = createFeatureSelector<FilterState>('filter');
export const selectFilteredColors = createSelector(selectFeature, (state: FilterState) => state.filteredColors);
