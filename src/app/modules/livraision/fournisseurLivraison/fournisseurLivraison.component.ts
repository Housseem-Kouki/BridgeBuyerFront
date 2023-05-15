import { LivraisonService } from 'src/app/core/services/livraison.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from 'src/app/core/Models/Livraison';

@Component({
  selector: 'app-fournisseurLivraison',
  templateUrl: './fournisseurLivraison.component.html',
  styleUrls: ['./fournisseurLivraison.component.scss']
})
export class FournisseurLivraisonComponent implements OnInit{
  livraisons: Livraison[];
id:number;
  constructor(private livraisonService: LivraisonService) { }
  ngOnInit(): void {
    this.id= Number (localStorage.getItem("idUser"));
    this.getLivraisonsByFournisseur(this.id); 
    console.log(this.id)// Replace with the actual user ID
  }

  getLivraisonsByFournisseur(id: number): void {
    this.livraisonService.getLivraisonsByFournisseur(this.id)
      .subscribe(livraisons => this.livraisons = livraisons);
  }


}
