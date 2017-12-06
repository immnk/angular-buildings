import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BuildingComponent } from './components/building/building.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BuildingsService } from './services/buildings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BreadcrumbComponent,
    SearchbarComponent,
    BuildingComponent,
    BuildingListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    BuildingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
