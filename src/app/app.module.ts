import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FilterModule } from './features/filter/filter.module';
import { HighlighterModule } from './features/highlighter/highlighter.module';
import { appReducer } from './root-store/app.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    HighlighterModule,
    FilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
