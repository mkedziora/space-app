import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';


const routes: Routes = [
  {path: 'game', component: PlanetDetectorComponent},
  {path: 'endgame', component: CongratulationsComponent},
  {path: '', redirectTo: 'game', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetDetectorRoutingModule { }
