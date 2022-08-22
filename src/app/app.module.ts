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
import { NgPipesModule } from 'ngx-pipes';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { LicenceEditComponent } from './licence-edit/licence-edit.component';
import { DateFilterPipe } from './licence-edit/date-filter.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { contentReducer } from './ngrx/contentSlice/content.reducer';
import { licenceReducer } from './ngrx/licenceSlice/licence.reducer';


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
    ContentEditComponent,
    LicenceEditComponent,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    NgPipesModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    StoreModule.forRoot(
      {
        user: userReducer,
        content: contentReducer,
        licence: licenceReducer
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
