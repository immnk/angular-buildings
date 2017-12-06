import { Component, OnInit } from '@angular/core';
import { IBuilding } from '../../models/building-model';
import { BuildingsService } from '../../services/buildings.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent implements OnInit {

  private buildings$: Observable<IBuilding[]>;

  constructor(public buildingService: BuildingsService) {
    this.buildings$ = this.buildingService.getAllBuildings()
  }

  ngOnInit() {
  }

}
