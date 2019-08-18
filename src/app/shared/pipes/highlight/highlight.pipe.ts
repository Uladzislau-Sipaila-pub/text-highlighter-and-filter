import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string, highlight: Highlight): SafeHtml {
    if (!highlight) { return value; }

    const start = highlight.positionStart < highlight.positionEnd
      ? highlight.positionStart
      : highlight.positionEnd;

    const end = highlight.positionStart > highlight.positionEnd
      ? highlight.positionStart
      : highlight.positionEnd;

    const highlightedText = value.slice(start, end);
    const doesHighlightEquals = highlightedText === highlight.text;

    if (!doesHighlightEquals) {
      return value;
    }

    const span = this.getHighlightedString(highlight.colorType, highlightedText);
    const result = value.substr(0, start) + span + value.substr(end, value.length - 1);

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  private getHighlightedString(color: ColorType, value: string): string {
    return `<mark class="highlighted-${color}">${value}</mark>`;
  }
}
