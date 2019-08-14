import { Pipe, PipeTransform } from '@angular/core';
import { Highlight } from '@shared/types/highlight';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  constructor(
    private sanitize: DomSanitizer
  ) {}

  transform(value: string, args: Highlight[]): SafeHtml {
    if (!args) { return value; }

    const highlightResult = args.reduce((result, highlight) => {
      const regExp = new RegExp(highlight.text, 'gi');

      return result.replace(regExp, `<span class="highlighted-${highlight.colorType}">${highlight.text}</span>`);
    }, value);

    return this.sanitize.bypassSecurityTrustHtml(highlightResult);
  }
}
