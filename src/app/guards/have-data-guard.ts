import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { BuildingsService } from '../services/buildings.service';

@Injectable()
export class HaveDataGuard implements CanActivate {

  constructor(private buildingService: BuildingsService, private router: Router) { }

  canActivate() {
    if (this.buildingService.getBuildings().length == 0) {
      this.router.navigate(["/home"]);
      return false;
    }
    else
      return true;
  }
}
