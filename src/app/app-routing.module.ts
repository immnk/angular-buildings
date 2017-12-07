import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BuildingPageComponent } from './pages/building-page/building-page.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HaveDataGuard } from './guards/have-data-guard';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  {
    path: 'buy', component: BuyPageComponent,
    children: [
      { path: '', redirectTo: 'buildings', pathMatch: 'full' },
      { path: 'buildings', component: BuildingListComponent },
      { path: 'buildings/:name', component: BuildingPageComponent, canActivate: [ HaveDataGuard ] }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
