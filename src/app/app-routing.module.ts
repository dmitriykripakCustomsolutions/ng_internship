import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  { path: 'select-color', component: SelectColorComponent, canActivate: [AuthGuardService] },
  {
    path: 'main-info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule),
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
