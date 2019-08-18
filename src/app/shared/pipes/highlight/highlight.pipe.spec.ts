import { DomSanitizer } from '@angular/platform-browser';
import { HighlightPipe } from './highlight.pipe';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

fdescribe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    const mockedSanitizer: DomSanitizer = {
      bypassSecurityTrustHtml: (value: string) => value
    } as unknown as DomSanitizer;

    pipe = new HighlightPipe(mockedSanitizer);
  });

  describe('#transform()', () => {
    it('should return not modified value if highlight wasn\'t passed', () => {
      const text = 'Test';
      const expectedResult = 'Test';
      const result = pipe.transform(text, null);

      expect(result).toBe(expectedResult);
    });

    it('should return not modified value if highlight doesn\'t exist in string', () => {
      const text = 'Test';
      const highlight: Highlight = {
        text: 'abc',
        positionStart: 2,
        positionEnd: 3
      };

      const expectedResult = 'Test';

      const result = pipe.transform(text, highlight);

      expect(result).toBe(expectedResult);
    });

    it('should return highlighted value if highlight exists in string', () => {
      const text = 'Test abc passed';
      const highlight: Highlight = {
        text: 'abc',
        positionStart: 5,
        positionEnd: 8,
        colorType: ColorType.red
      };

      spyOn<any>(pipe, 'getHighlightedString')
        .and
        .returnValue('<highlighted abc>');

      const expectedResult = 'Test <highlighted abc> passed';
      const result = pipe.transform(text, highlight);

      expect(result).toBe(expectedResult);
    });
  });

  describe('#getHighlightedString()', () => {
    it('should return highlighted value', () => {
      const color = ColorType.red;
      const text = 'Test';
      const expectedResult = '<mark class="highlighted-red">Test</mark>';
      const result = pipe['getHighlightedString'](color, text);

      expect(result).toBe(expectedResult);
    });
  });
});
