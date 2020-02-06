import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css'],
})
export class DestructionRoomComponent implements OnInit {

  constructor(private spaceShipService: SpaceShipService) { }

  spaceShips: Observable<SpaceShip[]>;
  shipIndexControl = new FormControl(null);

  ngOnInit() {
    this.spaceShips = this.spaceShipService.hangarShips;
  }

  orderDestruction(index: number) {
  this.spaceShipService.removeShips(index);
  this.shipIndexControl = null;
  }

}
