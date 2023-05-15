import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GestionCommandeComponent } from './Components/gestionTaxeCharge/gestion-commande.component';
import { CommandeComponent } from './Components/commande/commande.component';
import { FactureComponent } from './Components/facture/facture.component';
import { CommandeByUserComponent } from './Components/commande-by-user/commande-by-user.component';
import { CommandeByFournisseurComponent } from './Components/commande-by-fournisseur/commande-by-fournisseur.component';
import { FacturationComponent } from './facturation/facturation.component';

import { PaiementComponent } from './Components/paiement/paiement.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from "@angular/material/select";

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    GestionCommandeComponent,
    CommandeComponent,
    FactureComponent,
    CommandeByUserComponent,
    CommandeByFournisseurComponent,
    
    FacturationComponent,
    PaiementComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


  ],
  providers: []
})
export class CommandeModule { }
