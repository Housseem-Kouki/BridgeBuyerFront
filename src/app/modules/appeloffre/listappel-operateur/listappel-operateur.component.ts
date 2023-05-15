import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';
import { Offre } from 'src/app/core/Model/offre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-listappel-operateur',
  templateUrl: './listappel-operateur.component.html',
  styleUrls: ['./listappel-operateur.component.scss']
})
export class ListappelOperateurComponent implements OnInit {
  ListAppeloffre:Appeloffre[];
  devisFournisseur:DevisFournisseur;
  Listoffre:Offre;


  constructor(private appeloffreservice:AppeloffreService , private router:Router , private http:HttpClient) { }

  ngOnInit(): void {

    this.appeloffreservice.getAllAppelOffre().subscribe(
      data => {this.ListAppeloffre = data;console.log(data)},
      error => {  alert("error de recuperation liste appel d'offre")}
    );
  }



  devis(idAppeloffre:number){
    this.router.navigate(['/devisfournisseur/', idAppeloffre]);



 }


offre(idDevisFourniseur:number){

    this.router.navigate(['/ajouteroffre']);


}



}
