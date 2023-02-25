import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/candidats';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': `application/json`})
};

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  constructor(private http: HttpClient) { }


  listerCandidat(): Observable<any>{
    return this.http.get(`http://localhost:8080/api/candidats/afficher`);
  }

  //METHODE PERMETTANT DE SUPPRIMER UN CANDIDAT
deletecandidat(idcandidat:number) {
  return this.http.delete(`http://localhost:8080/api/candidats/supprimer/${idcandidat}`)

}


  

















}
