import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootballComponent } from './football/football.component';
import { CricketComponent } from './cricket/cricket.component';
import { RegisterComponent } from './register/register.component';
import { TennisComponent } from './tennis/tennis.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FootmbappeComponent } from './footmbappe/footmbappe.component';
import { FootmanipComponent } from './footmanip/footmanip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FootballComponent,
    CricketComponent,
    RegisterComponent,
    TennisComponent,
    VolleyballComponent,
    FootmbappeComponent,
    FootmanipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
