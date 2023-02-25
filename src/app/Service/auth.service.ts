import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(biometrieOrTelephone: string, password: string): Observable<any> {
    console.log(biometrieOrTelephone + password)
    return this.http.post(
      AUTH_API + 'signin',
      {
        biometrieOrTelephone,
        password,
      },
      httpOptions
    );
  }

  inscription(username: string,
    biometrie: string,
    datenaissance: any,
    telephone: string,
    sexe: string,
    email: string,
    password: string,): Observable<any> {

    let data = new FormData();
    data.append("username", username);
    data.append("biometrie", biometrie);
    data.append("telephone", telephone);
    data.append("sexe", sexe);
    data.append("datenaissance", datenaissance);
    data.append("email", email);
    data.append("password", password);
    return this.http.post(
      AUTH_API + 'signup', data
    );
  }

  logout(): Observable<any> {
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }
}

