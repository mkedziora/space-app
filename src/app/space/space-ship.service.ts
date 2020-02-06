import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { OrderFormValue } from './order-form-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';

@Injectable({
  providedIn: 'root',
})
export class SpaceShipService {

  static productionTime = 2000;
  produce: Observable<SpaceShip>;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  constructor() { }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.productionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((ship) => this.hangarShips.next([...this.hangarShips.getValue(), ship])),
    );
  }
  removeShips(index: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(index, 1);
    this.hangarShips.next(ships);
  }
}
