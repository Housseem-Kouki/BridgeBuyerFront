import { CorbeilleLivraisonComponent } from './corbeilleLivraison/corbeilleLivraison.component';
import { HttpClient } from '@angular/common/http';
import { Livraison } from './../../../core/Models/Livraison';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BonReception } from 'src/app/core/Models/BonReception';

@Component({
  selector: 'app-getAllLivraison',
  templateUrl: './getAllLivraison.component.html',
  styleUrls: ['./getAllLivraison.component.scss']
})
export class GetAllLivraisonComponent implements OnInit {
livraisons: Livraison[];
livraisonId :number;
livraisonIdForBonR :number;
newLivraisonModal: boolean = false
bonReception : BonReception = new BonReception()
keyword: string = '';

  constructor(private livraisonService: LivraisonService ,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.getLivraisons();
  }




 /* private getLivraisons():void{
        this.livraisonService.getAllLivraison().subscribe((data) => {
      this.livraisons = data;
      console.log(data);
    },
    (error)=>{
      console.log(error);

    }
    );

  }*/
  getLivraisons(): void {
    this.livraisonService.getAllLivraison()
      .subscribe(livraisons => {
        this.livraisons = [];
        this.livraisons = livraisons;
      });
}


  deleteLivraison(idLivraison: number){
    this.livraisonService.DeleteLivraison(idLivraison).subscribe( data => {
      //this.livraisons.push(data);
      location.reload();
      console.log(data);


    })
  }
//route
navigateCorbeilleLiv() {
  this.router.navigate(['/corbeilleLivraison']);
}

  validerBL(idLivraison: number) {
    // Call the livraisonService to validate the Livraison
    this.livraisonService.validerBL(idLivraison).subscribe((livraison) => {
      console.log('Livraison validée: ', livraison);
      // Do something with the validated Livraison
    });
  
    setTimeout(function(){
      window.location.reload();
   }, 4000)
  }

  sortLivraisons(): void {
    this.livraisonService.sortLivraisonsByQuantity()
      .subscribe(livraisons => this.livraisons = livraisons);
  }

  SearchMultiple(key:string): void
{
  if (key=='') {
    this.getLivraisons()
  }
  else if (key!=null)
  {
this.livraisons=[];
    this.livraisonService.SearchMultiple(key).subscribe(
      (data:Livraison[]) => {
        console.log("search",data);
        this.livraisons =data
      }
    );
  }
}
/*

  searchLivraisons(quantiteDelivre?: number, dateLivraison?: Date, etat?: string): void {
    this.livraisonService.searchLivraisons(quantiteDelivre, dateLivraison, etat)
      .subscribe(livraisons => this.livraisons = livraisons);
  }*/

//Ajout BR
//Ajout
addBonReception(idLivraison:number,bonReceptions:BonReception): void {
  this.livraisonService.addBonReception(idLivraison, bonReceptions)
    .subscribe(bonReception => {
      console.log(bonReception);
      // Add success notification
    });
}


//PDF
telechargerPDF(id:number) {
  this.livraisonService.generatePdf(id)
    .subscribe((response: Blob) => {
      const url = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Livraison.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
   
    setTimeout(function(){
      window.location.reload();
   }, 4000)
}


  // Variables pour stocker les données du formulaire
dateReception: Date;
quantiteRecevoir: number;
quantiteAccepte: number;
quantiteRefuse: number;
etat: string;
archive: boolean;

// Variable pour afficher ou masquer le modal
showModal = false;

// Fonction pour ouvrir le modal
openModal(idLivraison: number) {
  this.livraisonId = idLivraison;
  this.showModal = true;
}
/*openModal(){
  $('#exampleModal').modal('show');
}*/
// Fonction pour fermer le modal
closeModal() {
  this.showModal = false;
}

// Fonction pour enregistrer les données du formulaire
saveBonReception() {
  // Envoyer les données du formulaire au serveur ou les traiter ici
  // ...
  // Fermer le modal
  this.closeModal();
}

addNewLivraison(idLi:any){
  this.newLivraisonModal = !this.newLivraisonModal
  this.livraisonIdForBonR = idLi
  localStorage.setItem('idLivrai' , idLi)
  console.log(idLi)
}

closeNewLivraisonModal ($event :any) : void{
  this.newLivraisonModal = $event
}

}
