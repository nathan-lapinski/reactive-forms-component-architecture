import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { CitySelectUIComponent } from './city-select/city-select-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    CitySelectComponent,
    CitySelectUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
