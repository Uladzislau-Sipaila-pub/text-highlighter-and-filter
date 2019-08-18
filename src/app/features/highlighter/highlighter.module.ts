import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@shared/shared.module';

import { HighlighterComponent } from './highlighter.component';
import { HighlightPickerComponent } from './highlight-picker/highlight-picker.component';
import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { highlighterReducer } from './store/highlighter.reducer';

@NgModule({
  declarations: [
    HighlighterComponent,
    HighlightPickerComponent,
    HighlightedTextComponent
  ],
  imports: [
    FormsModule,
    StoreModule.forFeature('highlighter', highlighterReducer),
    CommonModule,
    SharedModule
  ],
  exports: [
    HighlighterComponent
  ]
})
export class HighlighterModule { }
