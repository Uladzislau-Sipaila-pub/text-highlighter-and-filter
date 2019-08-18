import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Highlight } from '@shared/types/highlight';

@Component({
  selector: 'app-highlighted-text',
  templateUrl: './highlighted-text.component.html',
  styleUrls: ['./highlighted-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightedTextComponent {
  @Input() highlights: Highlight[] = [];
  @Output() highlightText = new EventEmitter<Highlight>();

  @ViewChild('highlightingArea', { static: false }) highlightingArea: ElementRef;

  currentValue = '';

  constructor() {}

  unselect(): void {
    this.highlightText.emit(null);
  }

  highlight(): void {
    const selection = this.highlightingArea.nativeElement as HTMLFormElement;
    const value = selection.value;

    const positionStart = selection.selectionStart;
    const positionEnd = selection.selectionEnd;
    const selectedString = value.slice(positionStart, positionEnd);

    const highlight: Highlight = {
      positionEnd,
      positionStart,
      text: selectedString
    };

    this.highlightText.emit(highlight);
  }
}
