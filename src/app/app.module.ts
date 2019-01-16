import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { CitySelectUIComponent } from './city-select/city-select-ui.component';
import { HomeComponent } from './home.component';
import { FormContainerComponent } from './form-container.component';
import { NameEditorUiComponent } from './name-editor/name-editor-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    CitySelectComponent,
    CitySelectUIComponent,
    HomeComponent,
    FormContainerComponent,
    NameEditorUiComponent
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
