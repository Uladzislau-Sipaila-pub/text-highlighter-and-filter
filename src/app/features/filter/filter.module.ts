import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';

import { FilterComponent } from './filter.component';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import { filterReducer } from './store/filter.reducer';

@NgModule({
  declarations: [
    FilterComponent,
    FilteredListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forFeature('filter', filterReducer),
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
