import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: 'intel', loadChildren: './intel/intel.module#IntelModule'},
  {path: '**', component: BlackHoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
