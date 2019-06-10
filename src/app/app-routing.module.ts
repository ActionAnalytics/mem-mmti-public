import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationsComponent } from 'app/authorizations/authorizations.component';
import { ComplianceOversightComponent } from 'app/compliance-oversight/compliance-oversight.component';
import { ContactComponent } from 'app/contact/contact.component';
import { HomeComponent } from 'app/home/home.component';
import { LegislationComponent } from 'app/legislation/legislation.component';
import { LifecycleComponent } from 'app/lifecycle/lifecycle.component';
import { ReclamationComponent } from 'app/reclamation/reclamation.component';
import { TailingsManagementComponent } from 'app/tailings-management/tailings-management.component';
import { TopicsOfInterestComponent } from 'app/topics-of-interest/topics-of-interest.component';
import { WaterQualityComponent } from 'app/water-quality/water-quality.component';
import { MainMapComponent } from 'app/map/main-map/main-map.component';
import { SearchComponent } from 'app/search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnforcementActionsComponent } from './enforcement-actions/enforcement-actions.component';

const routes: Routes = [
  {
    path: 'authorizations',
    component: AuthorizationsComponent
  },
  {
    path: 'compliance-oversight',
    component: ComplianceOversightComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'legislation',
    component: LegislationComponent
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },
  {
    path: 'reclamation',
    component: ReclamationComponent
  },
  {
    path: 'tailings-management',
    component: TailingsManagementComponent
  },
  {
    path: 'topics-of-interest',
    component: TopicsOfInterestComponent
  },
  {
    path: 'water-quality',
    component: WaterQualityComponent
  },
  {
    path: 'enforcement-actions',
    component: EnforcementActionsComponent
  },
  {
    path: 'map',
    component: MainMapComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
