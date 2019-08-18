import { NgModule } from '@angular/core';

import { HighlightedTextStubComponent } from './highlighted-text/highlighted-text.component.stub';
import { HighlighterStubComponent } from './highlighter.component.stub';

@NgModule({
  declarations: [
    HighlightedTextStubComponent,
    HighlighterStubComponent
  ],
  imports: [],
  exports: [
    HighlightedTextStubComponent,
    HighlighterStubComponent
  ]
})
export class HighlighterTestingModule { }
