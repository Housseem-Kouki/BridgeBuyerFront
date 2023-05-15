import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonRoutes } from './livraison.routing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetAllLivraisonComponent } from './getAllLivraison/getAllLivraison.component';
import { AcheteurLivraisonComponent } from './acheteurLivraison/acheteurLivraison.component';
import { FournisseurLivraisonComponent } from './fournisseurLivraison/fournisseurLivraison.component';
import { BonReceptionComponent } from './bonReception/bonReception/bonReception.component';
import { AcheteurBonReceptionComponent } from './bonReception/acheteurBonReception/acheteurBonReception.component';
import { BonRetourComponent } from './bonRetour/bonRetour/bonRetour.component';
import { FactureAvoirComponent } from './factureAvoir/factureAvoir.component';
import { AddLivraisonComponent } from './getAllLivraison/add-livraison/add-livraison.component';
import { CorbeilleLivraisonComponent } from './getAllLivraison/corbeilleLivraison/corbeilleLivraison.component';
import { CorbeilleBonReceptionComponent } from './bonReception/bonReception/corbeilleBonReception/corbeilleBonReception.component';
import { CorbeilleFactureAvoirComponent } from './factureAvoir/corbeilleFactureAvoir/corbeilleFactureAvoir.component';
import { CorbeilleBonRetourComponent } from './bonRetour/corbeilleBonRetour/corbeilleBonRetour.component';
import { AddBonRetourComponent } from './bonReception/bonReception/add-bonRetour/add-bonRetour.component';
import { AddFactureAvoirComponent } from './bonRetour/add-factureAvoir/add-factureAvoir.component';



@NgModule({
  declarations: [
    GetAllLivraisonComponent,
    AcheteurLivraisonComponent,
    FournisseurLivraisonComponent,
    BonReceptionComponent,
    AcheteurBonReceptionComponent,
    BonRetourComponent,
    FactureAvoirComponent,
    AddLivraisonComponent,
    AddBonRetourComponent,
    AddFactureAvoirComponent,
    CorbeilleLivraisonComponent,
    CorbeilleBonReceptionComponent,
    CorbeilleBonRetourComponent,
    CorbeilleFactureAvoirComponent
  ],
  imports: [
    LivraisonRoutes,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,

  ]
})
export class LivraisionModule { }
 