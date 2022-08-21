import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { ContentFilterPipe } from './content/content-filter.pipe';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './ngrx/userSlice/user.reducer';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ContentFilterPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
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
