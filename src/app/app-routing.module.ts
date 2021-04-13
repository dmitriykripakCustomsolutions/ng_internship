import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SelectColorComponent } from './select-color/select-color.component';


const routes: Routes = [
  {path: 'first', component: FirstComponentComponent},
  {path: 'select-color', component: SelectColorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
