import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { CricketComponent } from './cricket/cricket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootmbappeComponent } from './footmbappe/footmbappe.component'
import { FootmanipComponent } from './footmanip/footmanip.component';
import { TicketbookerComponent } from './ticketbooker/ticketbooker.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'football',component:FootballComponent},
  {path:'cricket',component:CricketComponent},
  {path:'footmbappe',component:FootmbappeComponent},
  {path:'footmanip',component:FootmanipComponent},
  {path:'ticketbooker',component:TicketbookerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
