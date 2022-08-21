import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LicenceDashboardComponent } from './licence-dashboard/licence-dashboard.component';
import { LoginComponent } from './login/login.component';
import { PlatformDashboardComponent } from './platform-dashboard/platform-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contents', component: ContentComponent },
  { path: 'contents/:contentId', component: ContentComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'content', component: ContentDashboardComponent },
      { path: 'licence', component: LicenceDashboardComponent },
      { path: 'platform', component: PlatformDashboardComponent },
      { path: '', component: ContentDashboardComponent, pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
