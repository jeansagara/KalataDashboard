import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CandidatsService } from '../Service/candidats.service';
import { ElectionsService } from '../Service/elections.service';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {



///////////////////////////////////////////////////////////////////
  // ajout du candidats
  ajoutModel:any={
    nomcandidat:null,
    nomparti: null,
    id_election:null,
  
  }
  // ajout du candidats
  iparti:any
  icandidat:any
  
//////////////////////////////Pagination////////////////////////
  responsive=true
  p:number=1;
  searhText: any
//////////////////////////////Pagination////////////////////////


///////////////////////////// SUPPRIMER /////////////////////////////////////////
idcandidat!:number
Candidats:any=[]
/////////////////////////////// SUPPRIMER ///////////////////////////////////////

  // methode d'affichage
  Total: any;
  totals: any;

 affichertypevote : any;
 affichertypevotes : any;

 affichertoutlenombredevote : any;
 affichertoutlenombredevotes : any;


 afficherelection:any;
 afficherelections:any;


 
  ajouts: any;
  spec: any;

// afficher tous les elections
  Allelection: any;
  nbreElection: any;
// afficher tous les elections


    // methode d'afficher
 constructor(private candidats:CandidatsService, private vote:VotesService, private election: ElectionsService){}

   // methode d'afficher
 ngOnInit(){
  this.candidats.listerCandidat().subscribe(data =>{
    this.Total = data;
    this.totals=this.Total.length
  })
  this.vote.afficherTypeElection().subscribe(data =>{
    this.affichertypevote = data;
    this.affichertypevotes = this.affichertypevote.length
  })

  this.vote.affichertoutlenombredevote().subscribe(data =>{
    this.affichertoutlenombredevote = data;
    this.affichertoutlenombredevotes = this.affichertoutlenombredevote.length
  })

  // afficher le total d'election
  this.election.getAllElection().subscribe(data =>{
    this.Allelection = data;
    this.nbreElection = data.length
    console.log(this.nbreElection)

  })

 }

 //§::::::::::::::::::::::::Ajout imagecandidat::::::::::::::::::::::::::
 chargeImagecandidat(event: any){
  this.icandidat = event.target["files"][0]
  console.log(this.icandidat);
}

//§::::::::::::::::::::::::Début Ajout imageparti::::::::::::::::::::::::::
chargeImageparti(event: any){
  this.iparti = event.target["files"][0]
  console.log(this.iparti);
}
 //§::::::::::::::::::::::::Fin Ajout imagecandidat::::::::::::::::::::::::::

///////////////////////// debut Ajout du candidat attribu ////////////////////////
AjouterCandidat(){
  this.vote.ajoutcandidats(this.ajoutModel.nomcandidat,this.ajoutModel.nomparti,
    this.icandidat,this.iparti,this.spec).subscribe(data =>{
      this.ajouts=data
      console.log(this.ajoutModel.nomcandidat)
      console.log(this.ajoutModel.nomparti)
      console.log( this.icandidat)
      console.log(this.iparti)
      console.log(this.ajoutModel.id_election)
      console.log(data)

    })
            // Swal message de retour lors du clique de botton
            Swal.fire({

              heightAuto: false,
              icon: 'success',
              title: 'Ajouter avec succès',
              showConfirmButton: false,
              timer: 1500
            })
}
  electionid(nomcandidat: any, nomparti: any, icandidat: any, iparti: any, electionid: any) {
    throw new Error('Method not implemented.');
  }
///////////////////////// fin Ajout du candidat attribu ////////////////////////


// Methode permettant de supprimer un candidat
supprimer(idcandidat: any) {
  this.popUp(idcandidat);
}

popUp(idcandidat: any) {
  Swal.fire({
    position: 'center',

    text: 'Voulez vous vraiment supprimer ?',
    icon: 'warning',
    heightAuto: false,
    showConfirmButton: true,
    confirmButtonText: 'Oui',
    confirmButtonColor: '#0857b5',
    showDenyButton: false,
    showCancelButton: true,
    cancelButtonText: 'Non',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      this.candidats
        .deletecandidat(idcandidat)
        .subscribe((data) => {
          //location.reload();
          console.log('okkk');
        });

      Swal.fire({
        position: 'center',

        text: 'Candidat supprimer avec success!!',
        icon: 'success',
        heightAuto: false,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        confirmButtonColor: '#0857b5',
        showDenyButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          this.reloadPage();
        }
      });
    }
  });
}



reloadPage(): void{
  window.location.reload();
}









































}

