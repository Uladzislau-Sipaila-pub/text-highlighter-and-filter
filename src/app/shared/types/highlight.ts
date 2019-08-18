import { ColorType } from './color-type';

export interface Highlight {
  text: string;
  positionStart: number;
  positionEnd: number;
  colorType?: ColorType;
}
