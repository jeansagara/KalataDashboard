import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { UtilisateursService } from '../Service/utilisateurs.service';

@Component({
  selector: 'app-electeurs',
  templateUrl: './electeurs.component.html',
  styleUrls: ['./electeurs.component.css']
})
export class ElecteursComponent {

unutilisateur:any

/////////////PAGINATION/////////////////
responsive=true
p:number=1;
searhText: any
/////////////PAGINATION/////////////////


  constructor(private route:Router, private serv:UtilisateursService, private storage:AuthService){

  }

  ngOnInit(): void{
    this.serv.getlistuser().subscribe(data =>{
      this.unutilisateur = data;
      console.log(data)
    })
    

}
}
