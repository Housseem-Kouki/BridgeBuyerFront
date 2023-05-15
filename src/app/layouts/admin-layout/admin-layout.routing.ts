import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { GestionuserComponent } from "src/app/modules/user/components/gestionuser/gestionuser.component";
import { AddDemandeComponent } from "src/app/components/demande-achat/add-demande/add-demande.component";
import { TestComponent } from "src/app/components/demande-achat/test/test.component";
import { DemandeAchatComponent } from "src/app/pages/demande-achat/demande-achat.component";
import { DemandeDetailsComponent } from "src/app/pages/demande-achat/demande-details/demande-details.component";
import { GestionCommandeComponent } from "src/app/modules/commande/Components/gestionTaxeCharge/gestion-commande.component";
import { CommandeComponent } from "src/app/modules/commande/Components/commande/commande.component";
import { CommandeByUserComponent } from "src/app/modules/commande/Components/commande-by-user/commande-by-user.component";
import { CommandeByFournisseurComponent } from "src/app/modules/commande/Components/commande-by-fournisseur/commande-by-fournisseur.component";
import { PaiementComponent } from "src/app/modules/commande/Components/paiement/paiement.component";
import { ListappelComponent } from "src/app/modules/appeloffre/listappel/listappel.component";
import { DemandeachatoperateurComponent } from "src/app/modules/appeloffre/demandeachatoperateur/demandeachatoperateur.component";
import { ListdevisComponent } from "src/app/modules/appeloffre/listdevis/listdevis.component";
import { DetailsdevisComponent } from "src/app/modules/appeloffre/detailsdevis/detailsdevis.component";
import { AppeloffreAvComponent } from "src/app/modules/appeloffre/appeloffre-av/appeloffre-av.component";
import { DetailsappelComponent } from "src/app/modules/appeloffre/detailsappel/detailsappel.component";
import { CreateappelComponent } from "src/app/modules/appeloffre/createappel/createappel.component";
import { ListappelOperateurComponent } from "src/app/modules/appeloffre/listappel-operateur/listappel-operateur.component";
import { CreatoffreComponent } from "src/app/modules/appeloffre/creatoffre/creatoffre.component";
import { GetAllLivraisonComponent } from "src/app/modules/livraision/getAllLivraison/getAllLivraison.component";
import { AcheteurLivraisonComponent } from "src/app/modules/livraision/acheteurLivraison/acheteurLivraison.component";
import { FournisseurLivraisonComponent } from "src/app/modules/livraision/fournisseurLivraison/fournisseurLivraison.component";
import { BonReceptionComponent } from "src/app/modules/livraision/bonReception/bonReception/bonReception.component";
import { BonRetourComponent } from "src/app/modules/livraision/bonRetour/bonRetour/bonRetour.component";
import { AcheteurBonReceptionComponent } from "src/app/modules/livraision/bonReception/acheteurBonReception/acheteurBonReception.component";
import { FactureAvoirComponent } from "src/app/modules/livraision/factureAvoir/factureAvoir.component";
import { CorbeilleLivraisonComponent } from "src/app/modules/livraision/getAllLivraison/corbeilleLivraison/corbeilleLivraison.component";
import { CorbeilleBonReceptionComponent } from "src/app/modules/livraision/bonReception/bonReception/corbeilleBonReception/corbeilleBonReception.component";
import { CorbeilleBonRetourComponent } from "src/app/modules/livraision/bonRetour/corbeilleBonRetour/corbeilleBonRetour.component";
import { CorbeilleFactureAvoirComponent } from "src/app/modules/livraision/factureAvoir/corbeilleFactureAvoir/corbeilleFactureAvoir.component";
import { ListoffreComponent } from "src/app/modules/appeloffre/listoffre/listoffre.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "gestionuser", component: GestionuserComponent },
  { path: "create-demande", component: AddDemandeComponent },
  { path: "test", component: TestComponent },
  { path: 'gestionuser',           component: GestionuserComponent },
  { path: 'gestionChargeEtTaxe',  component: GestionCommandeComponent },
  { path: 'commande',           component: CommandeComponent },
  { path: 'commandeByUser',           component: CommandeByUserComponent },
  { path: 'listOffre',           component: ListoffreComponent },
  { path: 'commandeByFournisseur',           component: CommandeByFournisseurComponent },
  { path: 'paiement',           component: PaiementComponent },
  { path: 'appelOffre',           component: ListappelComponent },
  { path: 'demandeAchatOperateur',           component: DemandeachatoperateurComponent},
  {path:'devisfournisseur/:id',      component:ListdevisComponent },
  {path:'listeoffre', component:ListoffreComponent},
  {path:'detaildevis', component:DetailsdevisComponent},
  {path:'calcul', component:AppeloffreAvComponent},
  {path:'getbyetat', component:DetailsappelComponent},
  {path:'ajouterAppel' , component:CreateappelComponent},
  {path:'appeloffreOperateur' , component:ListappelOperateurComponent},
  {path:'ajouteroffre' , component:CreatoffreComponent},


  
  {  path: 'allLivraison', component: GetAllLivraisonComponent },
  {  path: 'acheteurLivraison', component: AcheteurLivraisonComponent },
  {  path: 'fournisseurLivraison/:id', component: FournisseurLivraisonComponent },
  {  path: 'bonReception', component: BonReceptionComponent },
  {  path: 'acheteurbonReception', component: AcheteurBonReceptionComponent },
  {  path: 'bonRetour', component: BonRetourComponent },
  {  path: 'factureAvoir', component: FactureAvoirComponent },
  {  path: 'corbeilleLivraison', component: CorbeilleLivraisonComponent },
  {  path: 'corbeilleBonReception', component: CorbeilleBonReceptionComponent },
  {  path: 'corbeilleBonRetour', component: CorbeilleBonRetourComponent },
  {  path: 'corbeilleFactureAvoir', component: CorbeilleFactureAvoirComponent},
  {
    path: "create-demande",
    component: AddDemandeComponent,
  },
  {
    path: "demande-achat", component : DemandeAchatComponent
   
  },
  {
    path: "demande-achat/:id",
    component: DemandeDetailsComponent,
  },
];
