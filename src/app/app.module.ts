import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { ElecteursComponent } from './electeurs/electeurs.component';
import { ProjetdeloisComponent } from './projetdelois/projetdelois.component';
import { VoteComponent } from './vote/vote.component';
import { HttpClientModule } from '@angular/common/http';
import { ElectionComponent } from './election/election.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocalitevoteComponent } from './localitevote/localitevote.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    DashboardComponent,
    HeaderComponent,
    PrincipalComponent,
    SidenavComponent,
    MenuComponent,
    FooterComponent,
    CandidatsComponent,
    ElecteursComponent,
    ProjetdeloisComponent,
    VoteComponent,
    ElectionComponent,
    LocalitevoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
