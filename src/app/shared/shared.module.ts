import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorButtonComponent } from './components/color-button/color-button.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { HighlightPipe } from './pipes/highlight/highlight.pipe';

@NgModule({
  declarations: [
    ColorButtonComponent,
    ColorPickerComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorButtonComponent,
    ColorPickerComponent,
    HighlightPipe
  ]
})
export class SharedModule { }
