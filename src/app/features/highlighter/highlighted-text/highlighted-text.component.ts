import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Highlight } from '@shared/types/highlight';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-highlighted-text',
  templateUrl: './highlighted-text.component.html',
  styleUrls: ['./highlighted-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightedTextComponent implements OnInit, OnDestroy {
  @Input() highlights: Highlight[] = [];
  @Output() highlightText = new EventEmitter<string>();
  @ViewChild('highlightingArea', { static: false }) highlightingArea: ElementRef;

  private mouseupEvent = fromEvent(document, 'mouseup');
  private mouseupSubscription: Subscription;

  // disabled for mocked data
  // tslint:disable-next-line:max-line-length
  defaultValue = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium iusto, fugit maxime ratione ea culpa aspernatur, iure exercitationem facilis voluptate itaque nobis earum, animi minima sint! Ullam in debitis nesciunt!`;

  constructor() {}

  ngOnInit(): void {
    this.mouseupSubscription = this.mouseupEvent.subscribe(() => {
      this.highlight();
    });
  }

  ngOnDestroy() {
    if (this.mouseupSubscription) {
      this.mouseupSubscription.unsubscribe();
    }
  }

  highlight(): void {
    const selection = window.getSelection();
    const selectionContainsNode: boolean = selection.containsNode(this.highlightingArea.nativeElement, true);
    const selectionString = selectionContainsNode ? selection.toString() : '';
    this.highlightText.emit(selectionString || '');
  }
}
