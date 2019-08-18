import { NgModule } from '@angular/core';

import { FilterStubComponent } from './filter.component.stub';
import { FilteredListStubComponent } from './filtered-list/filtered-list.component.stub';

@NgModule({
  declarations: [
    FilteredListStubComponent,
    FilterStubComponent
  ],
  exports: [
    FilteredListStubComponent,
    FilterStubComponent
  ]
})
export class FilterTestingModule { }
