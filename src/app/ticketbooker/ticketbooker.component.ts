import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketbooker',
  templateUrl: './ticketbooker.component.html',
  styleUrls: ['./ticketbooker.component.css']
})
export class TicketbookerComponent {

  constructor(private fb:FormBuilder, private router:Router){}

  date:any;
  seats:any;
  result:any;
  minDate = "2023-01-02";
  maxDate = "2023-01-05";

  detail(){
    alert('Tickets booked Successfully')
    this.router.navigateByUrl('football')
    // alert(this.result)
  }

}
