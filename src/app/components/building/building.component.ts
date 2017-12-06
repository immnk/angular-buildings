import { Component, OnInit, Input } from '@angular/core';
import { IBuilding } from '../../models/building-model';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  @Input() building: IBuilding;

  constructor() { }

  ngOnInit() {
  }

}
