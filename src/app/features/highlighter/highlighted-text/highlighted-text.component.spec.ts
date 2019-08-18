import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HighlightedTextComponent } from './highlighted-text.component';
import { SharedTestingModule } from '@shared/shared-testing.module';
import { FormsModule } from '@angular/forms';

fdescribe('HighlightedTextComponent', () => {
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
