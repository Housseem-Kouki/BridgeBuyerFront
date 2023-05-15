import { Routes, RouterModule } from '@angular/router';
import { GetAllLivraisonComponent } from './getAllLivraison/getAllLivraison.component';
import { AcheteurLivraisonComponent } from './acheteurLivraison/acheteurLivraison.component';
import { FournisseurLivraisonComponent } from './fournisseurLivraison/fournisseurLivraison.component';
import { BonReceptionComponent } from './bonReception/bonReception/bonReception.component';
import { AcheteurBonReceptionComponent } from './bonReception/acheteurBonReception/acheteurBonReception.component';
import { BonRetourComponent } from './bonRetour/bonRetour/bonRetour.component';
import { FactureAvoirComponent } from './factureAvoir/factureAvoir.component';
import { CorbeilleLivraisonComponent } from './getAllLivraison/corbeilleLivraison/corbeilleLivraison.component';
import { CorbeilleBonReceptionComponent } from './bonReception/bonReception/corbeilleBonReception/corbeilleBonReception.component';
import { CorbeilleBonRetourComponent } from './bonRetour/corbeilleBonRetour/corbeilleBonRetour.component';
import { CorbeilleFactureAvoirComponent } from './factureAvoir/corbeilleFactureAvoir/corbeilleFactureAvoir.component';

const routes: Routes = [
  



];

export const LivraisonRoutes = RouterModule.forChild(routes);
