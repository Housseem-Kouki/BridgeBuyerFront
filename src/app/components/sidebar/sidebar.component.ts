import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/modules/user/services/user.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/demande-achat', title: 'Demande Achat',  icon:'ni-shop text-blue', class: '' },
    { path: '/demandeAchatOperateur', title: 'Validation Achat',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/gestionChargeEtTaxe', title: 'TaxeAndCharge',  icon:'ni-cart text-yellow', class: '' },
    { path: '/gestionuser', title: 'User',  icon: 'ni-single-02 text-primary', class: '' },
    { path: '/commande', title: 'CommandeByOperateur',  icon:'ni-cart text-yellow', class: '' },
    { path: '/appelOffre', title: 'appelOffre',  icon:'ni-single-02 text-yellow', class: '' },



    { path: '/login', title: 'Emplacement',  icon:'ni-pin-3 text-orange', class: '' },
  
   
   

    { path: '/devisfournisseur/:id', title: 'devisfournisseur',  icon:'ni-key-25 text-info', class: '' },
    { path: '/listeoffre', title: 'listeoffre',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/detaildevis', title: 'detaildevis',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/ajouterAppel', title: 'ajouterAppel',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/appeloffreOperateur', title: 'appeloffreOperateur',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/ajouteroffre', title: 'ajouteroffre',  icon:'ni-key-25 text-info', class: '' },

    // farah 
    { path: '/allLivraison', title: 'allLivraison',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/acheteurLivraison', title: 'acheteurLivraison',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/fournisseurLivraison', title: 'fournisseurLivraison',  icon:'ni-key-25 text-info', class: '' },
    { path: '/bonReception', title: 'bonReception',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/acheteurbonReception', title: 'acheteurbonReception',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/bonRetour', title: 'bonRetour',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/factureAvoir', title: 'factureAvoir',  icon:'ni-key-25 text-info', class: '' },
    { path: '/corbeilleLivraison', title: 'corbeilleLivraison',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/corbeilleBonReception', title: 'corbeilleBonReception',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/corbeilleBonRetour', title: 'corbeilleBonRetour',  icon:'ni-key-25 text-info', class: '' },
    { path: '/corbeilleFactureAvoir', title: 'corbeilleFactureAvoir',  icon:'ni-key-25 text-info', class: '' },

];

export const ROUTESACHETEUR: RouteInfo[] = [

  { path: '/demande-achat', title: 'Demande Achat',  icon:'ni-shop text-blue', class: '' },
  { path: '/commandeByUser', title: 'Mes Commmandes',  icon:'ni-cart text-yellow', class: '' },
  { path: '/maps', title: 'Appel Offre',  icon:'ni-notification-70 text-orange', class: '' },
  { path: '/listedemande', title: 'Livraision',  icon:'ni-delivery-fast text-red', class: '' },
  
];

export const ROUTESFOURNISSEUR: RouteInfo[] = [
  { path: '/dashboard', title: 'DashboardFournisseur',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/commandeByFournisseur', title: 'CommandeByFourniseur',  icon:'ni-cart text-yellow', class: '' },
  { path: '/listOffre', title: 'Offre',  icon:'ni-notification-70 text-orange', class: '' },
  { path: '/appelOffre', title: 'appelOffre',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Livraision',  icon:'ni-delivery-fast text-red', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUser !: User;
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router , private userService : UserService ) { }

  ngOnInit() {
    this.userService.getUserFromToken(localStorage.getItem('accessToken')).subscribe(
      data => {this.currentUser = data 
        if(this.currentUser.role.roleName == "admin" || this.currentUser.role.roleName == "operateur"){
          console.log(this.currentUser)
          this.menuItems = ROUTES.filter(menuItem => menuItem);
        }else if(this.currentUser.role.roleName == "acheteur"){
          this.menuItems = ROUTESACHETEUR.filter(menuItem => menuItem);
        }else if(this.currentUser.role.roleName == "fournisseur"){
          this.menuItems = ROUTESFOURNISSEUR.filter(menuItem => menuItem);
        }}
    );
    

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  routesDirection(){
  
  }
}
