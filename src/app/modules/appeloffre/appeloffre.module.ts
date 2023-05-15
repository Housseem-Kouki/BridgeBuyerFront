import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateappelComponent } from './createappel/createappel.component';
import { ListappelComponent } from './listappel/listappel.component';
import { DetailsappelComponent } from './detailsappel/detailsappel.component';
import { UpdateappelComponent } from './updateappel/updateappel.component';
import { CreatdevisComponent } from './creatdevis/creatdevis.component';
import { CreatoffreComponent } from './creatoffre/creatoffre.component';
import { UpdatedevisComponent } from './updatedevis/updatedevis.component';
import { UpdateoffreComponent } from './updateoffre/updateoffre.component';
import { DetailsoffreComponent } from './detailsoffre/detailsoffre.component';
import { DetailsdevisComponent } from './detailsdevis/detailsdevis.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { ListdevisComponent } from './listdevis/listdevis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
import { AppeloffreAvComponent } from './appeloffre-av/appeloffre-av.component';
import { DevisFournisseurComponent } from './devis-fournisseur/devis-fournisseur.component';
import { OffreComponent } from './offre/offre.component';
import { DemandeachatoperateurComponent } from './demandeachatoperateur/demandeachatoperateur.component';
import { ListappelOperateurComponent } from './listappel-operateur/listappel-operateur.component';



@NgModule({
  declarations: [
    CreateappelComponent,
    ListappelComponent,
    DetailsappelComponent,
    UpdateappelComponent,
    CreatdevisComponent,
    CreatoffreComponent,
    UpdatedevisComponent,
    UpdateoffreComponent,
    DetailsoffreComponent,
    DetailsdevisComponent,
    ListoffreComponent,
    ListdevisComponent,
    AppeloffreAvComponent,
    DevisFournisseurComponent,
    OffreComponent,
    DemandeachatoperateurComponent,
    ListappelOperateurComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppeloffreModule { }
