import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http:HttpClient) { }

  getlistuser(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/utilisateur/list`);
  }


}
