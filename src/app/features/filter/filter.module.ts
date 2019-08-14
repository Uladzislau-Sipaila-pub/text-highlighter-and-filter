import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';

import { SharedModule } from '../../shared/shared.module';
import { FilterPickerComponent } from './filter-picker/filter-picker.component';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './store/filter.reducer';
import { FilteredListComponent } from './filtered-list/filtered-list.component';

@NgModule({
  declarations: [
    FilterComponent,
    FilterPickerComponent,
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
