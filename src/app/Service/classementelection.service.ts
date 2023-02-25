import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ClassementelectionService {
  
  constructor(private http: HttpClient) { }
  classementelection(): Observable<any>{
    return this.http.get(`http://localhost:8080/api/candidats/classement`);
  }

// METHODE PERMET D'AFFICHER LES CANDIDATS DANS LE CLASSEMENT
  afficherElectionandidat(): Observable<any> {
    return this.http.get("http://localhost:8080/api/candidats/afficher");
  }  

  





}
