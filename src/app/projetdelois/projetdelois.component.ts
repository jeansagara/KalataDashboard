import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProjetdeloisService } from '../Service/projetdelois.service';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-projetdelois',
  templateUrl: './projetdelois.component.html',
  styleUrls: ['./projetdelois.component.css']
})

export class ProjetdeloisComponent {
  // ajout du candidats
  ajoutModel: any = {
    titre: null,
    description: null,
    datefin1: null,
    datedebut1: null,
    heuredebut: null,
    heurefin: null,
    nbredeselus: null,
  }
  // ajout du election file
  image: any;
  id_election: any
  //////////////////////////////////////////////////////////////////////

  affichertypevote: any;
  affichertypevotes: any;

  heuredebut: any;
  heurefin: any;

  projet: any

  // pour l'ajout d'un projet de loi
  ajouts: any;
  spec: any = 1;

  constructor(private projetdelois: ProjetdeloisService, private vote: VotesService) { }

  ngOnInit(): void {
    this.projetdelois.afficherprojetdelois().subscribe(data => {
      this.projet = data;
      console.log(data);

    })

    this.vote.afficherTypeElection().subscribe(data => {
      this.affichertypevote = data;
      this.affichertypevotes = this.affichertypevote.length
    })







  }


  //§::::::::::::::::::::::::Début Ajout imageprojet::::::::::::::::::::::::::
  chargeImagelection(event: any) {
    this.image = event.target["files"][0]
    alert(this.image);
  }
  //§::::::::::::::::::::::::Fin Ajout imagelection::::::::::::::::::::::::::

  ///////////////////////// debut Ajout du election attribu ////////////////////////
  AjouterProjet() {
    // console.log("datttttttttttttttt"+this.ajoutModel.this.file)
    // console.log(this.ajoutModel.nomelection)
    // console.log( this.ajoutModel.description)
    // console.log("datttttttttttttttt"+ this.ajoutModel.datefin1)
    // console.log("datttttttttttttttt"+this.ajoutModel.datedebut1)
    // console.log(this.ajoutModel.soustitre)
    // console.log(data)

    // alert(this.image)
    this.projetdelois.ajoutprojet(this.image, this.ajoutModel.titre,
      this.ajoutModel.description, this.ajoutModel.datedebut1,
      this.ajoutModel.datefin1,
      this.ajoutModel.heuredebut,
      this.ajoutModel.heurefin,
      this.ajoutModel.nbredeselus,
      this.spec).subscribe((data: any) => {
        this.ajouts = data
      })
    // Swal message de retour lors du clique de botton
    Swal.fire({

      heightAuto: false,
      icon: 'success',
      title: 'Ajouter avec succès',
      showConfirmButton: false,
      timer: 1500
    })
    location.reload();

  }

  ///////////////////////// fin Ajout du election attribu ////////////////////////




  // Methode permettant de supprimer un vote
  supprimer(idAdministration: any) {
    this.popUp(idAdministration);
  }

  popUp(idAdministration: any) {
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
          .deletevote(idAdministration)
          .subscribe((data) => {
            //location.reload();
            console.log('okkk');
          });

        Swal.fire({
          position: 'center',

          text: 'Projet supprimer avec success!!',
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

  reloadPage(): void {
    window.location.reload();
  }



























}
