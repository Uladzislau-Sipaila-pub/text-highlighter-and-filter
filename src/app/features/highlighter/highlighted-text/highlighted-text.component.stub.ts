import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Highlight } from '@shared/types/highlight';

@Component({
  selector: 'app-highlighted-text',
  template: '<div></div>'
})
export class HighlightedTextStubComponent {
  @Input() highlights: Highlight[] = [];
  @Output() highlightText = new EventEmitter<Highlight>();
}
