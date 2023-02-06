import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })

// loginForm = new FormGroup({
//   email : new FormControl('',[Validators.email, Validators.required]),
//   password: new FormControl('',[ Validators.required]),
// });
  constructor(
    private authService: AuthService
  ) {}

  
  onLogin(){
    console.log(this.loginform.value);
    this.authService.login(this.loginform.value)
    .subscribe ((response:any) =>{
      console.log(Response);
    })
  }

  ngOnInit(): void {
  }

}
