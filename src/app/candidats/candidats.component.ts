import { Component } from '@angular/core';
import { CandidatsService } from '../Service/candidats.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent {
  Total: any;
  totals: any;

  /////////////PAGINATION/////////////////
responsive=true
p:number=1;
searhText: any
/////////////PAGINATION/////////////////
  


  constructor(private candidats: CandidatsService) { }

  ngOnInit() {
    this.candidats.listerCandidat().subscribe(data => {
      this.Total = data;
      this.totals = this.Total.length
    })

    // this.serv.getlistuser().subscribe(data =>{
    //   this.unutilisateur = data;
    //   console.log(data)
      
    // })


  }















}
