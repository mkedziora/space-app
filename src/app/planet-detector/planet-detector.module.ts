import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlanetDetectorGameComponent } from './planet-detector-game/planet-detector-game.component';
import { PlanetDetectorRoutingModule } from './planet-detector-routing.module';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

@NgModule({
  declarations: [PlanetDetectorComponent, PlanetDetectorGameComponent, CongratulationsComponent],
  imports: [
    CommonModule,
    PlanetDetectorRoutingModule,
  ],
})
export class PlanetDetectorModule { }
