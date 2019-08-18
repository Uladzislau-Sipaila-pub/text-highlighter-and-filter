import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedTestingModule } from '@shared/shared-testing.module';

import { HighlightedTextComponent } from './highlighted-text.component';

describe('HighlightedTextComponent', () => {
  let component: HighlightedTextComponent;
  let fixture: ComponentFixture<HighlightedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedTextComponent ],
      imports: [
        FormsModule,
        SharedTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#highlight', () => {
    it('should emit highlighted value', () => {
      const text = 'Test text';
      const expectedResult = {
        positionStart: 0,
        positionEnd: text.length,
        text
      };
      const highlightTextSpy = spyOn(component.highlightText, 'emit');

      component.highlightingArea.nativeElement.value = text;
      component.highlightingArea.nativeElement.select();
      component.highlight();

      expect(highlightTextSpy).toHaveBeenCalledWith(expectedResult);
    });
  });
});
