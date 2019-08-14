import { Action } from '@ngrx/store';
import { ColorType } from '@shared/types/color-type';

export enum FilterActionTypes {
  SelectColor = '[filter] SelectColorAction',
  UnselectColor = '[filter] UnselectColorAction'
}

export class SelectColorAction implements Action {
  readonly type = FilterActionTypes.SelectColor;

  constructor(public color: ColorType) { }
}

export type FilterAction = SelectColorAction;
