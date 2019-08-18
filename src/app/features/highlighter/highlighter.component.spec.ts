import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedTestingModule } from '@shared/shared-testing.module';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

import { HighlighterTestingModule } from './highlighter-testing.module';
import { HighlighterComponent } from './highlighter.component';
import { SelectHighlightAction } from './store/highlighter.actions';
import { selectHighlights } from './store/highlighter.selectors';
import { HighlighterState } from './store/highlighter.state';

describe('HighlighterComponent', () => {
  let component: HighlighterComponent;
  let fixture: ComponentFixture<HighlighterComponent>;
  let store: MockStore<HighlighterState>;
  let highlights: MemoizedSelector<HighlighterState, Highlight[]>;
  const initialState: HighlighterState = {
    highlights: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlighterComponent ],
      imports: [
        HighlighterTestingModule,
        SharedTestingModule
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlighterComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<HighlighterState>>(Store);
    highlights = store.overrideSelector(selectHighlights, []);
    fixture.detectChanges();
  });

  describe('#selectColor()', () => {
    it('shouldn\'t dispatch color if draft highlight doesn\'t exist', () => {
      const dispatch = spyOn(store, 'dispatch');
      component['draftHighlight'] = null;
      component.selectColor(ColorType.green);
      expect(dispatch).not.toHaveBeenCalled();
    });

    it('should dispatch color if draft highlight exist', () => {
      const dispatch = spyOn(store, 'dispatch');
      const draftHighlight: Highlight = {
        positionEnd: 1,
        positionStart: 0,
        text: 'test'
      };
      const expectedHighlight: Highlight = {
        ...draftHighlight,
        colorType: ColorType.green
      };
      const action = new SelectHighlightAction(expectedHighlight);

      component['draftHighlight'] = draftHighlight;
      component.selectColor(ColorType.green);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('#updateHighlight()', () => {
    it('should update #draftHighlight', () => {
      const highlight: Highlight = {
        positionEnd: 1,
        positionStart: 0,
        text: 'test',
        colorType: ColorType.green
      };

      component.updateHighlight(highlight);
      expect(component['draftHighlight']).toBe(highlight);
    });
  });
});
