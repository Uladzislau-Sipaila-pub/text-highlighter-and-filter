import { ColorType } from '@shared/types/color-type';

export interface FilterState {
  filteredColors: ColorType[];
}

export const initialFilterState = {
  filteredColors: []
} as FilterState;
