import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: 'intel', loadChildren: () => import('./intel/intel.module').then(m => m.IntelModule)},
  {path: 'planetdetector', loadChildren: () => import('./planet-detector/planet-detector.module').then(m => m.PlanetDetectorModule)},
  {path: '**', component: BlackHoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
