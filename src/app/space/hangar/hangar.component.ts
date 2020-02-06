import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShipService } from '../space-ship.service';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  shipsStream: Observable<SpaceShip[]>;
  selectedPilot: Pilot;
  constructor(private spaceShipService: SpaceShipService) { }

  @ViewChild(PilotRoomComponent) pilotsComponent: PilotRoomComponent;

  ngOnInit() {
  this.shipsStream = this.spaceShipService.hangarShips;
  }
  assignPilot(pilot: Pilot, ship: SpaceShip) {
    ship.pilot = pilot;
    this.pilotsComponent.pilotLeave();
  }
  deassignPilot(ship: SpaceShip) {
    this.pilotsComponent.pilotReturn(ship.pilot);
    ship.pilot = null;
  }

}
