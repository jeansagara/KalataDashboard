import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { UtilisateursService } from '../Service/utilisateurs.service';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-electeurs',
  templateUrl: './electeurs.component.html',
  styleUrls: ['./electeurs.component.css']
})
export class ElecteursComponent {
  file:any
  unutilisateur: any

  /////////////PAGINATION/////////////////
  responsive = true
  p: number = 1;
  searhText: any
  importfichier: any;
  excel: any;
  /////////////PAGINATION/////////////////


  constructor(private vote: VotesService, private route: Router, private serv: UtilisateursService, private storage: AuthService) {

  }

  ngOnInit(): void {
    this.serv.getlistuser().subscribe(data => {
      this.unutilisateur = data;
      console.log(data)
    })
  }

  chargeExcelelection(event: any){
    this.file = event.target["files"][0]
    console.log(this.file);
    // location.reload();

  }

  importElecteur(){
    this.vote.importerfichierexcel(this.file).subscribe(data =>{
      location.reload();
      console.log(data)
    })
  }
  
}
