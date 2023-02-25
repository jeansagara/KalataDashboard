import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/vote';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  ajoutelection: any;

  constructor(private http: HttpClient) { }

  // METHODE PERMETTANT D'AFFICHER DE TYPE VOTE (ELECTION OU PROJET)
  afficherTypeElection(): Observable<any> {
    return this.http.get("http://localhost:8080/typevote/afficher");
  }


  afficherTypeElectionType(idtypevote: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/elections/type-vote/${idtypevote}`);
  }

  // METHODE PERMETTANT D'AFFICHER le total de vote
  affichertoutlenombredevote(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/vote/afficher`);
  }

  // METHODE PERMETTANT A UN USER DE VOTER POUR UN CANDIDAT SELON SA POSITION, ID
  creervotecandidats(idutilisateur: Number, idelection: Number, id_candidat: Number, latitude: any, longitude: any): Observable<any> {
    //  let data = new FormData()
    console.log("iduser" + idutilisateur);
    return this.http.post(`http://localhost:8080/api/vote/creervote/${idutilisateur}/${idelection}/${id_candidat}/${latitude}/${longitude}`, {})
  }

  // Ajouter un candidat debut
  ajoutcandidats(nomcandidat: any, nomparti: any, icandidat: File, iparti: File, id_election: any) {
    const data = new FormData()
    data.append("nomcandidat", nomcandidat)
    data.append("nomparti", nomparti)
    data.append("icandidat", icandidat)
    data.append("iparti", iparti)
    data.append("id_election", id_election)
    return this.http.post(`http://localhost:8080/api/candidats/ajouter`, data)
  }
  // Ajouter un candidat fin


  // METHODE PERMETTANT D'AJOUTER UN TYPE D'ELECTION (ELCTION OU PROJET)
  ajoutertypedevote(nom:any): Observable<any> {
    const data = new FormData();
    data.append("nom", nom)
    return this.http.post(`http://localhost:8080/typevote/ajouter`,data)
  }


    //METHODE PERMETTANT DE SUPPRIMER UN TYPE DE VOTE
deletecandidat(id:number) {
  return this.http.delete(` http://localhost:8080/typevote/supprimer/${id}`)

}

    //METHODE PERMETTANT DE SUPPRIMER UN CANDIDAT
    deletevote(idvote:number) {
      return this.http.delete(`http://localhost:8080/api/elections/supprimer/${idvote}`)
    
    }






































}
