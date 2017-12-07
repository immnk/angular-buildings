import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BuildingComponent } from './components/building/building.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BuildingsService } from './services/buildings.service';
import { BuildingDetailComponent } from './components/building-detail/building-detail.component';
import { BuildingPageComponent } from './pages/building-page/building-page.component';

import { HaveDataGuard } from './guards/have-data-guard';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BreadcrumbComponent,
    SearchbarComponent,
    BuildingComponent,
    BuildingListComponent,
    PageNotFoundComponent,
    BuildingDetailComponent,
    BuildingPageComponent,
    DashboardPageComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    BuildingsService,
    HaveDataGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
