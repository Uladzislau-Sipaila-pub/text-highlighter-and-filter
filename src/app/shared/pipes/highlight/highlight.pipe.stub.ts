import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Highlight } from '@shared/types/highlight';

@Pipe({
  name: 'highlight'
})
export class HighlightStubPipe implements PipeTransform {
  constructor() { }

  transform(value: string, highlight: Highlight): SafeHtml {
    return value;
  }
}
