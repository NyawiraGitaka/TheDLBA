import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform = new FormGroup({
    firstname: new FormControl('',[Validators.maxLength(15),Validators.minLength(1)]),
    middlename: new FormControl('',[Validators.minLength(1),Validators.maxLength(15)]),
    lastname: new FormControl('',[Validators.maxLength(15), Validators.minLength(1)]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required]),

  })


  constructor() { }

  ngOnInit(): void {
  }

}
