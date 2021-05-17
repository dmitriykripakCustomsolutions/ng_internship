import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInfoComponent } from '../info/main-info/main-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';



const routes: Routes = [
  { path: '', component: MainInfoComponent },
  { path: 'add-info', component: AdditionalInfoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
