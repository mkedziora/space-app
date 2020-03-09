import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';


const routes: Routes = [
  {path: 'game', component: PlanetDetectorComponent},
  {path: '', redirectTo: 'game', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetDetectorRoutingModule { }
