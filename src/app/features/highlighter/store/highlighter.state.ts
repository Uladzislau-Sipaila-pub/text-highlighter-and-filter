import { Highlight } from '@shared/types/highlight';

export interface HighlighterState {
  highlights: Highlight[];
}

export const initialHighlighterState = {
  highlights: []
} as HighlighterState;
