import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConfigsService } from './url-configs.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(
    private http: HttpClient,

  ) { }
  
}
