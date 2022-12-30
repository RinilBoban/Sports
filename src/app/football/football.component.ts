import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {

  constructor(private router:Router){}

  mbappe(){
    this.router.navigateByUrl('footmbappe')
  }
  manip(){
    this.router.navigateByUrl('footmanip')
  }
  ticketbooker(){
    this.router.navigateByUrl('ticketbooker')
  }
  logout(){
    this.router.navigateByUrl('')
  }


}
