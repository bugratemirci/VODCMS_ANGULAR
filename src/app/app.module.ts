import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { ContentFilterPipe } from './content/content-filter.pipe';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './ngrx/userSlice/user.reducer';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { LicenceDashboardComponent } from './licence-dashboard/licence-dashboard.component';
import { PlatformDashboardComponent } from './platform-dashboard/platform-dashboard.component';
import { NgPipesModule } from 'ngx-pipes';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ContentFilterPipe,
    LoginComponent,
    DashboardComponent,
    ContentDashboardComponent,
    LicenceDashboardComponent,
    PlatformDashboardComponent,
    ContentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        user: userReducer,

      },
      {
        runtimeChecks:
        {
          strictStateImmutability: false,
          strictActionImmutability: false,
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
