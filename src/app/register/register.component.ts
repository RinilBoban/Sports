import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder){}

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]  
  })


}
