import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShipType } from '../ship-type';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {
  spaceShipTypes: ShipType[] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];
  form: FormGroup;
  isProducing = false;
  shipCount = new Observable<number>();

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    this.form = new FormGroup( {
      shipType: new FormControl( 0, {validators: [Validators.required]} ),
      shipCount: new FormControl(1, {validators: [Validators.required, Validators.min(1), Validators.max(5)]})
    });
    this.shipCount = this.spaceShipService.hangarShips.pipe(
      map((ships) => ships.length)
    );
  }

  onSubmit(formvalue: OrderFormValue) {
    this.isProducing = true;
    console.log(formvalue);
   this.spaceShipService.produceShips(formvalue).subscribe({
    complete: () => this.isProducing = false});
  }

}
