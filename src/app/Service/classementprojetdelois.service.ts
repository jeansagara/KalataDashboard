import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ClassementprojetdeloisService {

  constructor(private http: HttpClient) { }
  classementprojet():Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/projetdelois/afficher/`);
  }
}
