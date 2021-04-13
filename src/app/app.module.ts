import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SharedModule } from '../app/shared/shared.module';
import { SelectColorComponent } from './select-color/select-color.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SelectColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
