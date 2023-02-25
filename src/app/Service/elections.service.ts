import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = `http://localhost:8080/api/elections`;

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }
 

  listerElectionParId(id:any): Observable<any>{
    return this.http.get(`${AUTH_API}/afficher/${id}`);
  }

  ElectionParId(id:any): Observable<any>{
    return this.http.get(`${AUTH_API}/type-vote/${id}`);
  }

    // Ajouter une election debut
    ajoutelection(file:File, nomelection: any, description: any, datefin1: any, datedebut1: any, heuredebut: any, heurefin: any, soustitre:any, id_election: any) {

      console.log("sallllllllllllllllllllllllllllll" +datefin1);
      console.log("sallllllllllllllllllllllllllllll" + datedebut1);


      const data = new FormData()
      data.append("file", file)
      data.append("nomelection", nomelection)
      data.append("description", description)
      data.append("datefin1", datefin1)
      data.append("datedebut1",datedebut1)
      data.append("soustitre", soustitre)
      
      data.append("heuredebut",heuredebut)
      data.append("heurefin", heurefin)
      // data.append('data')
      // data.append("id_election", id_election)
      return this.http.post(`http://localhost:8080/api/elections/ajouter/${id_election}`, data)
      
    }
    // Ajouter un candidat fin



  // METHODE PERMETTANT D'AFFICHER l'election par type
  afficherelection(idtypevote: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/elections/afficher/${idtypevote}`);
  }

  // METHODE PERMETTANT D'AFFICHER tous les elections
  public getAllElection(): Observable<any> {
    return this.http.get('http://localhost:8080/api/elections/afficherAllElection');
  }

    //METHODE PERMETTANT DE SUPPRIMER UN CANDIDAT
deleteelection(idelection:number) {
  return this.http.delete(`http://localhost:8080/api/elections/supprimer/${idelection}`)

}













  



}
