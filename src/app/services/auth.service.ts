import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ){ }
  login(authData:any) { 
    return this.http.post('https://dummyjson.com/auth/login',JSON.stringify)

  }
}
