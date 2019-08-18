import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Highlight } from '@shared/types/highlight';

import { HighlighterComponent } from './highlighter.component';
import { HighlighterState } from './store/highlighter.state';
import { selectHighlights } from './store/highlighter.selectors';
import { HighlighterTestingModule } from './highlighter-testing.module';

fdescribe('HighlighterComponent', () => {
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
      imports: [ HighlighterTestingModule ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
