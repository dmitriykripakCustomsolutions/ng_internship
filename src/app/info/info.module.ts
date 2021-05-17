import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInfoComponent } from './main-info/main-info.component';
import { InfoRoutingModule } from './info-routing.module';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';



@NgModule({
  declarations: [MainInfoComponent, AdditionalInfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
