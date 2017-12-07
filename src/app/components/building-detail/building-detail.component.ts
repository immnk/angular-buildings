import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IBuilding } from '../../models/building-model';
import { BuildingsService } from '../../services/buildings.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.scss']
})
export class BuildingDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private building: IBuilding;

  constructor(private route: ActivatedRoute, private buildingService: BuildingsService) { }

  ngOnInit() {
    // assign the subscription to a variable so we can unsubscribe to prevent memory leaks
    this.sub = this.route.paramMap
      .subscribe((params: Params) => {
        // console.log(params);
        let buildingName = params["params"]["name"];
        console.log(buildingName);
        let building: IBuilding = this.buildingService.getBuildingByName(buildingName);
        if (building)
          this.building = building;
      });

    // let param = this.route.snapshot.paramMap.get("name");
    // console.log(param);

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
