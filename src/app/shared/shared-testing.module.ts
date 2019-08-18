import { NgModule } from '@angular/core';

import { ColorButtonStubComponent } from './components/color-button/color-button.component.stub';
import { ColorPickerStubComponent } from './components/color-picker/color-picker.component.stub';
import { HighlightStubPipe } from './pipes/highlight/highlight.pipe.stub';

@NgModule({
  declarations: [
    ColorButtonStubComponent,
    ColorPickerStubComponent,
    HighlightStubPipe
  ],
  exports: [
    ColorButtonStubComponent,
    ColorPickerStubComponent,
    HighlightStubPipe
  ]
})
export class SharedTestingModule { }
