import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProjetdeloisService {
  classementprojet: any;

  //METHODE PERMETANT D'AFFICHER LES PROJET DE LOIS
  constructor(private http:HttpClient) { }
  afficherprojetdelois(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/projetdelois/afficher`);
  }

  afficherTypeElectionParId(id : number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/projetdelois/afficher/${id}`);
  }

  // projet de lois
  creervoteprojet(idAdministration:Number,idutilisateur : Number, vote : Number,latitude:any,longitude:any): Observable<any> {
    console.log("iduser"+idutilisateur);
    return this.http.post(`http://localhost:8080/api/vote/voteprojets/${idAdministration}/${idutilisateur}/${vote}/${latitude}/${longitude}`,{})  
  }



    // Ajouter une projet debut
    ajoutprojet(file:any, titre: any, description: any, datefin1: any, datedebut1: any,  heuredebut: any, heurefin: any,nbredeselus:any, id_election: any) {

      console.log("sallllllllllllllllllllllllllllll" +datefin1);
      console.log("sallllllllllllllllllllllllllllll" + datedebut1);


      const data = new FormData()
      data.append("file", file)
      data.append("titre", titre)
      data.append("description", description)
       data.append("datedebut1",datedebut1)
      data.append("datefin1", datefin1)
      data.append("nbredeselus", nbredeselus)
      data.append("heuredebut",heuredebut)
      data.append("heurefin", heurefin)
      // data.append('data')
      // data.append("id_election", id_election)
      return this.http.post(`http://localhost:8080/api/projetdelois/ajouter/${id_election}`, data)
      
      
    }
    // fIN Ajouter un projet fin

      //METHODE PERMETTANT DE SUPPRIMER UN CANDIDAT
deleteprojet(idAdministration:number) {
  return this.http.delete(`http://localhost:8080/api/projetdelois/supprimer/${idAdministration}`)

}



}
