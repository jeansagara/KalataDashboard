import { Component } from '@angular/core';
import { VotesService } from '../Service/votes.service';

@Component({
  selector: 'app-localitevote',
  templateUrl: './localitevote.component.html',
  styleUrls: ['./localitevote.component.css']
})
export class LocalitevoteComponent {

  //////////////////////////////Pagination////////////////////////
  responsive=true
  p:number=1;
  searhText: any
//////////////////////////////Pagination////////////////////////

  affichertoutlenombredevote : any;
 

  constructor(private vote:VotesService){}

  ngOnInit(){
    this.vote.affichertoutlenombredevote().subscribe(data =>{
      this.affichertoutlenombredevote = data;
      console.log(this.affichertoutlenombredevote)
    })











  }























}
