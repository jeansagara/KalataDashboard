import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatsComponent } from './candidats/candidats.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElecteursComponent } from './electeurs/electeurs.component';
import { MenuComponent } from './menu/menu.component';
import { ProjetdeloisComponent } from './projetdelois/projetdelois.component';
import { VoteComponent } from './vote/vote.component';
import { ElectionComponent } from './election/election.component';
import { LocalitevoteComponent } from './localitevote/localitevote.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu', pathMatch: 'full'
  },
  
  { path: 'connexion', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'electeurs', component: ElecteursComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'projetdelois', component: ProjetdeloisComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'election', component: ElectionComponent },
  { path: 'localitevote', component: LocalitevoteComponent },





  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
