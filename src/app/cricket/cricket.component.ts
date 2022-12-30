import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {

  constructor(private fb:FormBuilder){}

  date:any;
  minDate = "2022-12-01";
  maxDate = "2022-12-05";

}
