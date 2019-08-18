import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FilterTestingModule } from './features/filter/filter-testing.module';
import { HighlighterTestingModule } from './features/highlighter/highlighter-testing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FilterTestingModule,
        HighlighterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
