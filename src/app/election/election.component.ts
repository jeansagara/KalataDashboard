import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ElectionsService } from '../Service/elections.service';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent {
///////////////////////////////////////////////////////////////////
  // ajout du candidats
  ajoutModel:any={
    nomelection:null,
    description: null,
    datefin1:null,
    datedebut1:null,

    heuredebut:null,
    heurefin:null,

    soustitre: null,
  }
  // ajout du election file
  file:any
  id_election: any
//////////////////////////////////////////////////////////////////////


  affichertypevote: any;
  affichertypevotes: any;

 
  ajouts: any;
  spec: any=1;

  soustitre: any;
  datefin1: any;
  datedebut1: any;

  heuredebut: any;
  heurefin: any;

  ajoutlection: any;
  ajoutlections: any;

  // afficher tous les elections
  Allelection: any;
  nbreElection: any;
// afficher tous les elections



  constructor(private election:ElectionsService,private vote:VotesService){}


  ngOnInit(){
    this.vote.afficherTypeElection().subscribe(data =>{
      this.affichertypevote = data;
      this.affichertypevotes = this.affichertypevote.length
    })

    // this.election.ajoutelection(this.ajoutModel.file,
    //   this.ajoutModel.nomelection,
    //   this.ajoutModel.description,
    //   this.ajoutModel.datefin1,
    //   this.ajoutModel.datedebut1,
    //   this.ajoutModel. id_election,
    //   this.ajoutModel.soustitre).subscribe(data =>{
    //   this.ajoutlection = data;
    //   this.ajoutlections = this.AjouterElection.length
    // }) 


    this.election.getAllElection().subscribe(data =>{
      this.Allelection = data
      console.log(this.Allelection)
    })
    
      // afficher le total d'election
  // this.election.getAllElection().subscribe(data =>{
  //   this.Allelection = data;
  //   this.nbreElection = data.length
  //   console.log(this.Allelection)

  // })
   }

   
//§::::::::::::::::::::::::Début Ajout imagelection::::::::::::::::::::::::::
chargeImagelection(event: any){
  this.file = event.target["files"][0]
  console.log(this.file);
}
 //§::::::::::::::::::::::::Fin Ajout imagelection::::::::::::::::::::::::::

///////////////////////// debut Ajout du election attribu ////////////////////////
AjouterElection(){
  console.log("datttttttttttttttt"+this.ajoutModel.file)
  // console.log(this.ajoutModel.nomelection)
  // console.log( this.ajoutModel.description)
  // console.log("datttttttttttttttt"+ this.ajoutModel.datefin1)
  // console.log("datttttttttttttttt"+this.ajoutModel.datedebut1)
  // console.log(this.ajoutModel.soustitre)
  // console.log(data)

  this.election.ajoutelection(this.file,this.ajoutModel.nomelection,
    this.ajoutModel.description,this.ajoutModel.datefin1,this.ajoutModel.datedebut1, this.ajoutModel.heuredebut,this.ajoutModel.heurefin, this.ajoutModel.soustitre,this.spec).subscribe((data: any) =>{
      this.ajouts=data
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

///////////////////////// fin Ajout du election attribu ////////////////////////




// Methode permettant de supprimer un candidat
supprimer(idelection: any) {
  this.popUp(idelection);
}

popUp(idelection: any) {
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
      this.election
        .deleteelection(idelection)
        .subscribe((data) => {
          //location.reload();
          console.log('okkk');
        });

      Swal.fire({
        position: 'center',

        text: 'Election supprimer avec success!!',
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
