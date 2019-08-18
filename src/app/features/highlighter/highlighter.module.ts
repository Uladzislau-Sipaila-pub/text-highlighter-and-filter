import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';

import { HighlightedTextComponent } from './highlighted-text/highlighted-text.component';
import { HighlighterComponent } from './highlighter.component';
import { highlighterReducer } from './store/highlighter.reducer';

@NgModule({
  declarations: [
    HighlighterComponent,
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
