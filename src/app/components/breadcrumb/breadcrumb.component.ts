import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  private breadcrumbs: any;

  constructor() {
    this.breadcrumbs = [{
      title: "Home",
      path: "/dashboard"
    }, {
      title: "Buy",
      path: "/buy"
    }, {
      title: "Existing Property",
      path: "/home"
    }]
  }

  ngOnInit() {
  }

}
