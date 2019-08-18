import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorType } from '@shared/types/color-type';
import { Highlight } from '@shared/types/highlight';

import { FilteredListComponent } from './filtered-list.component';

describe('FilteredListComponent', () => {
  let component: FilteredListComponent;
  let fixture: ComponentFixture<FilteredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#updateList()', () => {
    it('should set new #list based on set of filters and highlights', () => {
      const filteredColors: ColorType[] = [ ColorType.red, ColorType.yellow ];
      const highlights: Highlight[] = [{
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.red,
        text: 'mocked text'
      }, {
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.green,
        text: 'mocked text'
      }, {
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.yellow,
        text: 'mocked text'
      }, {
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.red,
        text: 'mocked text'
      }];

      const expectedResult = [{
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.red,
        text: 'mocked text'
      }, {
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.yellow,
        text: 'mocked text'
      }, {
        positionStart: 0,
        positionEnd: 0,
        colorType: ColorType.red,
        text: 'mocked text'
      }];

      component['updateList'](filteredColors, highlights);
      expect(component.list).toEqual(expectedResult);
    });
  });
});
