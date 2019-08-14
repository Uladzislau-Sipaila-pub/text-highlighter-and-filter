import { FilterActionTypes, FilterAction } from './filter.actions';
import { FilterState, initialFilterState } from './filter.state';
import { ColorType } from '@shared/types/color-type';

export function filterReducer(state: FilterState = initialFilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case FilterActionTypes.SelectColor: {
      return selectColorReducer(state, action);
    }
    default:
      return state;
  }
}

function selectColorReducer(state: FilterState = initialFilterState, action: FilterAction): FilterState {
  const isSelected = state.filteredColors.indexOf(action.color) > -1;
  let filteredColors: ColorType[];

  if (isSelected) {
    filteredColors = state.filteredColors.filter(color => color !== action.color);
  } else {
    filteredColors = [...state.filteredColors, action.color];
  }

  return {
    filteredColors
  };
}
