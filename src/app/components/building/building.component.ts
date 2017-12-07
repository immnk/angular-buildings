import { Component, OnInit, Input } from '@angular/core';
import { IBuilding } from '../../models/building-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  @Input() building: IBuilding;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    // this.router.navigate(['/building', this.building.name]);
  }

}
