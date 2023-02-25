import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})



export class VoteComponent implements OnInit{
  ajoutertypeelec: any;
  ajoutertypelection: any;
  
  nom : any

  form :any ={
    nom : null
  }
  

  constructor(private vote: VotesService){}


ngOnInit(){
  this.vote.afficherTypeElection().subscribe(data =>{
    this.ajoutertypeelec =data;
    this.ajoutertypelection  = this.ajoutertypeelec;
  })

  
}

AjouterTypeVote(){
  this.vote.ajoutertypedevote(this.form.nom).subscribe(data=>{
    console.log(data);
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



// Methode permettant de supprimer un vote
supprimer(idvote: any) {
  this.popUp(idvote);
}

popUp(idvote: any) {
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
      this.vote
        .deletevote(idvote)
        .subscribe((data) => {
          //location.reload();
          console.log('okkk');
        });

      Swal.fire({
        position: 'center',

        text: 'Supprimer avec success!!',
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



