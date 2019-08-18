import { NgModule } from '@angular/core';
import { HighlightPickerStubComponent } from './highlight-picker/highlight-picker.component.stub';
import { HighlightedTextStubComponent } from './highlighted-text/highlighted-text.component.stub';

@NgModule({
  declarations: [
    HighlightPickerStubComponent,
    HighlightedTextStubComponent
  ],
  imports: [],
  exports: [
    HighlightPickerStubComponent,
    HighlightedTextStubComponent
  ]
})
export class HighlighterTestingModule { }
