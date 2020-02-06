import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Pilot } from './pilot';
import { PilotService } from './pilot.service';

@Injectable({providedIn: 'root'})
export class PilotResolver implements Resolve<Pilot> {

  constructor(private pilotService: PilotService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pilot | Observable<Pilot> | Promise<Pilot> {
    let pilot = of(new Pilot());
    if (route.params.id === 'new') {
      return pilot;
    } else {
    pilot =  this.pilotService.getPilot(+route.params.id);
    return pilot; }

  }
}
