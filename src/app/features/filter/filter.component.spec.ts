import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedTestingModule } from '@shared/shared-testing.module';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

import { selectHighlights } from '../highlighter/store/highlighter.selectors';
import { HighlighterState } from '../highlighter/store/highlighter.state';

import { FilterTestingModule } from './filter-testing.module';
import { FilterComponent } from './filter.component';
import { SelectColorAction } from './store/filter.actions';
import { selectFilteredColors } from './store/filter.selectors';
import { FilterState } from './store/filter.state';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let store: MockStore<FilterState>;
  let filteredColors: MemoizedSelector<FilterState, ColorType[]>;
  let highlights: MemoizedSelector<HighlighterState, Highlight[]>;
  const initialState = {
    filter: {
      filteredColors: []
    },
    highlighter: {
      highlights
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [
        FilterTestingModule,
        SharedTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<FilterState>>(Store);
    filteredColors = store.overrideSelector(selectFilteredColors, []);
    highlights = store.overrideSelector(selectHighlights, []);
    fixture.detectChanges();
  });

  describe('#selectColor()', () => {
    it('should dispatch selected color', () => {
      const dispatch = spyOn(store, 'dispatch');
      const action = new SelectColorAction(ColorType.green);

      component.selectColor(ColorType.green);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
