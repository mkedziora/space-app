import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetDetectorRoutingModule } from './planet-detector-routing.module';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';


@NgModule({
  declarations: [PlanetDetectorComponent],
  imports: [
    CommonModule,
    PlanetDetectorRoutingModule
  ]
})
export class PlanetDetectorModule { }
