import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private router:Router){}

  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9]+')]]  
  })

  ngOnInit(): void{}

  login(){
    this.router.navigateByUrl('dashboard')
    var uname=this.loginForm.value.uname
    var psw=this.loginForm.value.psw
  }


}
