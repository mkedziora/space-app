import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceShipService } from './space-ship.service';

@Injectable({
  providedIn: 'root',
})
export class DestructionGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
      if (hasSpaceShips) { return true; }
      alert('BRAK STATKÓW');
      this.router.navigateByUrl('/');
      return false;
  }
}
